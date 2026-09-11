"use client";

// components/LiveMetrics.tsx
//
// "Hotel Saturno — Live Metrics" widget: 3 count-up KPIs (Ocupación / ADR /
// RevPAR), a Market Penetration Index comparison bar that fills, and a
// Jan-Jun trend chart (this year vs. last year) that draws itself in.
// Everything animates once, the first time the widget scrolls into view,
// via a single IntersectionObserver — no external chart library.
//
// Usage:
//   import LiveMetrics from "@/components/LiveMetrics";
//   <LiveMetrics />
//
// All data below is illustrative. Swap for props once there's a real data
// source (API/CMS) — the shapes (Kpi[], the two year series, the MPI number)
// are already isolated as constants so that's a small change.

import { useEffect, useRef, useState } from "react";
import styles from "./LiveMetrics.module.css";

type Kpi = {
  key: string;
  label: string;
  to: number;
  prefix?: string;
  suffix?: string;
  delta: string;
  vsValue: string;
  vsLabel: string;
};

const KPIS: Kpi[] = [
  {
    key: "occupancy",
    label: "Ocupación",
    to: 94,
    suffix: "%",
    delta: "↑ +33.4 pts",
    vsValue: "58.9%",
    vsLabel: "competidores",
  },
  {
    key: "adr",
    label: "ADR",
    to: 196,
    prefix: "USD ",
    delta: "↑ +USD 61.40",
    vsValue: "USD 134.60",
    vsLabel: "competidores",
  },
  {
    key: "revpar",
    label: "RevPAR",
    to: 184,
    prefix: "USD ",
    delta: "↑ +USD 105.90",
    vsValue: "USD 78.10",
    vsLabel: "competidores",
  },
];

// Market Penetration Index — 100 = paridad con el promedio del mercado.
const MPI_INDEX = 142;
const MPI_SCALE_MAX = 200;

const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];
const CURRENT_YEAR = [78, 82, 85, 89, 92, 94];
const PREVIOUS_YEAR = [61, 63, 66, 68, 71, 74];

function formatValue(v: number, prefix = "", suffix = "") {
  return `${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`;
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return value;
}

function KpiCard({ kpi, active }: { kpi: Kpi; active: boolean }) {
  const value = useCountUp(kpi.to, active);
  return (
    <div className={styles.kpiCard}>
      <div className={styles.kpiLabel}>{kpi.label}</div>
      <div className={styles.kpiValue}>
        {formatValue(value, kpi.prefix, kpi.suffix)}
      </div>
      <div className={styles.kpiDelta}>{kpi.delta}</div>
      <div className={styles.kpiVs}>
        vs <b>{kpi.vsValue}</b> {kpi.vsLabel}
      </div>
    </div>
  );
}

function ComparisonBar({ active }: { active: boolean }) {
  const pct = Math.min(100, (MPI_INDEX / MPI_SCALE_MAX) * 100);
  const basePct = (100 / MPI_SCALE_MAX) * 100;

  return (
    <div className={styles.comparison}>
      <div className={styles.comparisonHeader}>
        <span className={styles.comparisonLabel}>Market Penetration Index</span>
        <span className={styles.comparisonValue}>{MPI_INDEX} MPI</span>
      </div>
      <div className={styles.barTrack}>
        <div className={styles.barBaseline} style={{ left: `${basePct}%` }} />
        <div
          className={styles.barFill}
          style={{ width: active ? `${pct}%` : "0%" }}
        />
      </div>
      <div className={styles.comparisonFoot}>
        <span>0</span>
        <span>100 mercado</span>
        <span>{MPI_SCALE_MAX}</span>
      </div>
    </div>
  );
}

function TrendChart({ active }: { active: boolean }) {
  const currentRef = useRef<SVGPolylineElement>(null);
  const previousRef = useRef<SVGPolylineElement>(null);

  const width = 300;
  const height = 120;
  const max = 100;
  const min = 50;
  const stepX = width / (MONTHS.length - 1);

  const toPoints = (series: number[]) =>
    series
      .map((v, i) => {
        const x = i * stepX;
        const y = height - ((v - min) / (max - min)) * height;
        return `${x},${y}`;
      })
      .join(" ");

  useEffect(() => {
    if (!active) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    [previousRef, currentRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      if (reduced) {
        el.style.strokeDasharray = "none";
        el.style.strokeDashoffset = "0";
        return;
      }
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      // force reflow so the transition below actually animates
      el.getBoundingClientRect();
      el.style.transition = `stroke-dashoffset 1100ms ease-out ${i * 150}ms`;
      el.style.strokeDashoffset = "0";
    });
  }, [active]);

  return (
    <div className={styles.chart}>
      <div className={styles.chartHeader}>
        <span className={styles.chartTitle}>Tendencia de ocupación</span>
        <div className={styles.chartLegend}>
          <span className={styles.legendCurrent}>● Este año</span>
          <span className={styles.legendPrevious}>● Año anterior</span>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={styles.chartSvg}
        preserveAspectRatio="none"
      >
        <polyline
          ref={previousRef}
          points={toPoints(PREVIOUS_YEAR)}
          className={styles.linePrevious}
          fill="none"
        />
        <polyline
          ref={currentRef}
          points={toPoints(CURRENT_YEAR)}
          className={styles.lineCurrent}
          fill="none"
        />
      </svg>
      <div className={styles.chartLabels}>
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export default function LiveMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.widget}>
      <div className={styles.widgetHeader}>
        <span className={styles.liveDot} aria-hidden="true" />
        <span className={styles.widgetTitle}>Hotel Saturno — Live Metrics</span>
      </div>

      <div className={styles.kpiRow}>
        {KPIS.map((kpi) => (
          <KpiCard key={kpi.key} kpi={kpi} active={active} />
        ))}
      </div>

      <ComparisonBar active={active} />
      <TrendChart active={active} />
    </div>
  );
}
