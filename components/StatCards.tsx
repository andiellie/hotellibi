"use client";

// components/StatCards.tsx
//
// The animated "moving numbers" metric component (Ocupación / ADR / RevPAR),
// built with HotelliBI's real design-system tokens pulled from Figma:
// Hanken Grotesk for the big numbers, Inter for labels, accent-red #B30205,
// navy-deepest #000510 background, 8px corner radius ("Value Pillar Card").
//
// Usage:
//   import StatCards from "@/components/StatCards";
//   <StatCards />
//
// Each card counts up from 0 to its target value once, when it scrolls into
// view (IntersectionObserver) — so it doesn't burn CPU animating offscreen,
// and it replays if the user scrolls away and back.

import { useEffect, useRef, useState } from "react";
import styles from "./StatCards.module.css";

type Stat = {
  key: string;
  label: string;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  vsValue: string;
  vsLabel: string;
};

const STATS: Stat[] = [
  {
    key: "occupancy",
    label: "Ocupación",
    to: 94,
    suffix: "%",
    decimals: 0,
    delta: "↑ +33.4 pts",
    vsValue: "58.9%",
    vsLabel: "competitors",
  },
  {
    key: "adr",
    label: "ADR",
    to: 196,
    prefix: "USD ",
    decimals: 0,
    delta: "↑ +USD 61.40",
    vsValue: "USD 134.60",
    vsLabel: "competitors",
  },
  {
    key: "revpar",
    label: "RevPAR",
    to: 184,
    prefix: "USD ",
    decimals: 0,
    delta: "↑ +USD 105.90",
    vsValue: "USD 78.10",
    vsLabel: "competitors",
  },
];

function formatValue(v: number, decimals: number, prefix = "", suffix = "") {
  const formatted =
    decimals > 0
      ? v.toFixed(decimals)
      : Math.round(v).toLocaleString("en-US");
  return `${prefix}${formatted}${suffix}`;
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

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const value = useCountUp(stat.to, inView);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.label}>{stat.label}</div>
      <div className={styles.value}>
        {formatValue(value, stat.decimals ?? 0, stat.prefix, stat.suffix)}
      </div>
      <div className={styles.delta}>{stat.delta}</div>
      <div className={styles.vs}>
        vs <b>{stat.vsValue}</b> {stat.vsLabel}
      </div>
    </div>
  );
}

export default function StatCards() {
  return (
    <div className={styles.row}>
      {STATS.map((stat) => (
        <StatCard key={stat.key} stat={stat} />
      ))}
    </div>
  );
}
