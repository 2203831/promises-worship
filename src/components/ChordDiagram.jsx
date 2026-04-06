import React from "react";
import { CHORD_DIAGRAMS } from "../data/songs";

const NUM_FRETS = 5;
const NUM_STRINGS = 6;
const STRING_SPACING = 20;
const FRET_HEIGHT = 20;
const PADDING = { top: 28, left: 24, right: 12, bottom: 12 };

export default function ChordDiagram({ chord, instrument = "guitar" }) {
  const diagrams = CHORD_DIAGRAMS[instrument] || CHORD_DIAGRAMS.guitar;
  const data = diagrams[chord];

  if (!data) {
    return (
      <div className="flex flex-col items-center">
        <div className="w-24 h-28 card flex items-center justify-center">
          <span className="text-worship-muted text-xs text-center px-2">No diagram for {chord}</span>
        </div>
        <span className="text-worship-accent font-mono text-sm font-semibold mt-1">{chord}</span>
      </div>
    );
  }

  const { frets, fingers, barre } = data;
  const minFret = Math.min(...frets.filter(f => f > 0));
  const showFretNumber = minFret > 3;
  const offsetFret = showFretNumber ? minFret - 1 : 0;

  const svgW = PADDING.left + (NUM_STRINGS - 1) * STRING_SPACING + PADDING.right;
  const svgH = PADDING.top + NUM_FRETS * FRET_HEIGHT + PADDING.bottom;

  const getX = (string) => PADDING.left + string * STRING_SPACING;
  const getY = (fret) => PADDING.top + (fret - offsetFret - 0.5) * FRET_HEIGHT;

  return (
    <div className="flex flex-col items-center">
      <svg width={svgW} height={svgH} className="overflow-visible">
        {/* Nut or fret number */}
        {!showFretNumber ? (
          <rect x={PADDING.left} y={PADDING.top - 4} width={(NUM_STRINGS - 1) * STRING_SPACING} height={4}
            className="fill-worship-text" rx="2" />
        ) : (
          <text x={PADDING.left - 8} y={PADDING.top + FRET_HEIGHT * 0.5}
            className="fill-worship-muted" fontSize="10" textAnchor="end" dominantBaseline="middle">
            {minFret}fr
          </text>
        )}

        {/* Fret lines */}
        {Array.from({ length: NUM_FRETS + 1 }).map((_, i) => (
          <line key={i}
            x1={PADDING.left} y1={PADDING.top + i * FRET_HEIGHT}
            x2={PADDING.left + (NUM_STRINGS - 1) * STRING_SPACING} y2={PADDING.top + i * FRET_HEIGHT}
            stroke="rgba(100,100,130,0.4)" strokeWidth="1" />
        ))}

        {/* Strings */}
        {Array.from({ length: NUM_STRINGS }).map((_, i) => (
          <line key={i}
            x1={getX(i)} y1={PADDING.top}
            x2={getX(i)} y2={PADDING.top + NUM_FRETS * FRET_HEIGHT}
            stroke="rgba(100,100,130,0.5)" strokeWidth="1.2" />
        ))}

        {/* Barre */}
        {barre && !showFretNumber && (
          <rect
            x={getX(barre.from)}
            y={getY(barre.fret) - 8}
            width={getX(barre.to) - getX(barre.from)}
            height={16}
            rx="8"
            className="fill-worship-accent"
            opacity="0.9"
          />
        )}

        {/* Fret markers */}
        {frets.map((fret, i) => {
          const x = getX(i);
          if (fret === -1) {
            return (
              <g key={i}>
                <line x1={x - 5} y1={PADDING.top - 16} x2={x + 5} y2={PADDING.top - 6} stroke="rgba(150,80,80,0.8)" strokeWidth="1.5" />
                <line x1={x + 5} y1={PADDING.top - 16} x2={x - 5} y2={PADDING.top - 6} stroke="rgba(150,80,80,0.8)" strokeWidth="1.5" />
              </g>
            );
          }
          if (fret === 0) {
            return <circle key={i} cx={x} cy={PADDING.top - 11} r={5} className="fill-none stroke-worship-accent" strokeWidth="1.5" />;
          }
          const y = getY(fret);
          if (barre && fret === barre.fret && i >= barre.from && i <= barre.to) return null;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={8} className="fill-worship-accent" />
              {fingers[i] > 0 && (
                <text x={x} y={y} textAnchor="middle" dominantBaseline="middle"
                  fontSize="9" className="fill-worship-bg font-mono font-bold">
                  {fingers[i]}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <span className="text-worship-accent font-mono text-sm font-semibold mt-0.5">{chord}</span>
    </div>
  );
}
