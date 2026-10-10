"use client";

// components/BenefitsHover/BenefitsHover.tsx
//
// Six large words in vertical strips that open into cards: hover on desktop,
// tap on mobile, Tab + arrow keys on keyboard. Each collapsed strip shows a
// "+" affordance and a small illustrative delta; the open strip expands into
// a red-to-orange card with an eyebrow, a verb headline + subheadline,
// a description, a big illustrative stat, and a "Hoy" vs "Con HotelliBI"
// bar comparison.
//
// This component paints no background of its own — wrap it in a container
// with the site's dark surface class. It expects two CSS custom properties
// on an ancestor (see lib/fonts.ts + app/layout.tsx):
//   --font-benefits-display  (Bricolage Grotesque — the big word + stat labels)
//   --font-inter             (Inter — reused from the project's existing
//                              font loader; the component's own CSS falls
//                              back to --font-body first in case a consumer
//                              wires up a differently-named variable)
//
// Numbers below are illustrative and reuse the same sample figures already
// shown elsewhere on the landing page (StatCards / LiveMetrics) so the site
// stays internally consistent — replace BENEFITS or pass the `items` prop
// once real metrics are available.

import { useRef, useState } from "react";
import styles from "./BenefitsHover.module.css";

export type Benefit = {
  key: string;
  word: string;
  subheadline: string;
  eyebrow: string;
  description: string;
  delta: string;
  deltaCaption: string;
  today: string;
  withHotelliBI: string;
};

const BENEFITS: Benefit[] = [
  {
    key: "visibilidad",
    word: "Incrementa",
    subheadline: "la claridad entre áreas",
    eyebrow: "Visibilidad",
    description:
      "Un solo dashboard conectado a tu PMS, en vez de datos dispersos que cada área interpreta distinto.",
    delta: "+0.8",
    deltaCaption: "Índice de claridad, ilustrativo",
    today: "Datos dispersos",
    withHotelliBI: "Un dashboard",
  },
  {
    key: "ocupacion",
    word: "Aumenta",
    subheadline: "tu ocupación frente al mercado",
    eyebrow: "Ocupación",
    description:
      "Mirá la ocupación del día, la semana y el mes sin abrir una sola planilla.",
    delta: "+33 pts",
    deltaCaption: "Ocupación, ilustrativo",
    today: "58.9%",
    withHotelliBI: "94%",
  },
  {
    key: "adr",
    word: "Sube",
    subheadline: "tu tarifa frente al comp set",
    eyebrow: "ADR",
    description:
      "Compará tu ADR contra el comp set local todos los días, no una vez al mes.",
    delta: "+USD 61",
    deltaCaption: "ADR, ilustrativo",
    today: "USD 134.60",
    withHotelliBI: "USD 196",
  },
  {
    key: "revpar",
    word: "Detectá",
    subheadline: "caídas de tarifa a tiempo",
    eyebrow: "RevPAR",
    description:
      "Alertas proactivas cuando tu ocupación o tarifa se despega de tu comp set, para actuar antes de perder revenue.",
    delta: "+USD 105",
    deltaCaption: "RevPAR, ilustrativo",
    today: "USD 79",
    withHotelliBI: "USD 184",
  },
  {
    key: "tiempo",
    word: "Reducí",
    subheadline: "el tiempo armando reportes",
    eyebrow: "Tiempo",
    description:
      "Los reportes semanales llegan solos a tu correo, listos para comparar.",
    delta: "-5 hs",
    deltaCaption: "Tiempo semanal, ilustrativo",
    today: "6 hs/semana",
    withHotelliBI: "1 hs/semana",
  },
  {
    key: "equipo",
    word: "Compará",
    subheadline: "con el mismo panel que tu equipo",
    eyebrow: "Equipo",
    description:
      "Recepción, gerencia y el dueño del hotel hablan el mismo idioma.",
    delta: "1 panel",
    deltaCaption: "Fuentes de datos, ilustrativo",
    today: "4+ planillas",
    withHotelliBI: "1 panel",
  },
];

type BenefitsHoverProps = {
  items?: Benefit[];
};

function barWidth(label: string) {
  // Illustrative bar length: numeric reads pull a magnitude out of the string;
  // non-numeric labels ("1 panel", "Un dashboard") fall back to short/full.
  const match = label.match(/[\d.]+/);
  if (!match) return label.toLowerCase().startsWith("datos") || label.includes("4+") ? 30 : 100;
  return Math.min(100, Math.max(15, parseFloat(match[0])));
}

export default function BenefitsHover({ items = BENEFITS }: BenefitsHoverProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = hoveredIndex ?? focusedIndex;

  const focusIndex = (index: number) => {
    const clamped = (index + items.length) % items.length;
    buttonRefs.current[clamped]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusIndex(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusIndex(index - 1);
    }
  };

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        const active = activeIndex === index;
        const todayPct = barWidth(item.today);
        const withPct = Math.max(todayPct, barWidth(item.withHotelliBI));
        return (
          <button
            key={item.key}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            type="button"
            aria-expanded={active}
            data-active={active || undefined}
            className={styles.strip}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex((current) => (current === index ? null : current))}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex((current) => (current === index ? null : current))}
            onClick={() => setFocusedIndex((current) => (current === index ? null : index))}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span className={styles.plusIcon} aria-hidden="true">
              +
            </span>

            <span className={styles.word} aria-hidden={active}>
              {item.word}
            </span>

            <span className={styles.teaser} aria-hidden={active}>
              {item.delta}
            </span>

            <span className={styles.card}>
              <span className={styles.eyebrow}>{item.eyebrow}</span>
              <span className={styles.headline}>{item.word}</span>
              <span className={styles.subheadline}>{item.subheadline}</span>
              <span className={styles.description}>{item.description}</span>

              <span className={styles.cardFoot}>
                <span className={styles.bigStat}>
                  <span className={styles.bigStatValue}>{item.delta}</span>
                  <span className={styles.bigStatCaption}>{item.deltaCaption}</span>
                </span>

                <span className={styles.compare}>
                  <span className={styles.compareRow}>
                    <span className={styles.compareLabel}>Hoy</span>
                    <span className={styles.barTrack}>
                      <span
                        className={styles.barFillMuted}
                        style={{ width: `${todayPct}%` }}
                      />
                    </span>
                    <span className={styles.compareValue}>{item.today}</span>
                  </span>
                  <span className={styles.compareRow}>
                    <span className={styles.compareLabel}>Con HotelliBI</span>
                    <span className={styles.barTrack}>
                      <span className={styles.barFill} style={{ width: `${withPct}%` }} />
                    </span>
                    <span className={styles.compareValue}>{item.withHotelliBI}</span>
                  </span>
                </span>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
