import React, { useState, useMemo } from "react";
import { transposeChord, KEYS } from "../data/songs";
import ChordDiagram from "./ChordDiagram";

const SECTION_COLORS = {
  verse: "text-sky-400",
  chorus: "text-worship-accent",
  bridge: "text-violet-400",
  intro: "text-emerald-400",
  outro: "text-red-400",
  pre_chorus: "text-orange-400",
};

function ChordedLine({ lyrics, chords, transposeSemitones, showChords, simplify }) {
  if (!showChords || !chords || chords.length === 0) {
    return <p className="leading-relaxed text-worship-text py-1">{lyrics}</p>;
  }

  // Build chord positions relative to lyrics
  const sortedChords = [...chords].sort((a, b) => a.pos - b.pos);

  return (
    <div className="mb-3">
      {/* Chord row */}
      <div className="relative h-6 select-none">
        {sortedChords.map((c, i) => {
          const chord = transposeChord(c.chord, transposeSemitones);
          const simplified = simplify ? simplifyChord(chord) : chord;
          const charWidth = 8.5;
          const left = c.pos * charWidth;
          return (
            <span key={i}
              className="chord-inline absolute top-0 whitespace-nowrap"
              style={{ left: `${left}px` }}>
              {simplified}
            </span>
          );
        })}
      </div>
      {/* Lyrics row */}
      <p className="leading-relaxed text-worship-text font-body">{lyrics}</p>
    </div>
  );
}

function simplifyChord(chord) {
  // Strip extensions (7, maj7, sus, add, etc.) for beginner mode
  return chord.replace(/(maj7|7|sus[24]?|add\d+|\/[A-G][#b]?)/g, "");
}

export default function SongViewer({ song, worshipMode = false }) {
  const [transposeSemitones, setTransposeSemitones] = useState(0);
  const [showChords, setShowChords] = useState(true);
  const [simplifyChords, setSimplifyChords] = useState(false);
  const [showDiagrams, setShowDiagrams] = useState(false);
  const [capo, setCapo] = useState(song.capo || 0);

  const currentKey = useMemo(() => {
    const keyIndex = KEYS.indexOf(song.key);
    if (keyIndex === -1) return song.key;
    return KEYS[((keyIndex + transposeSemitones) % 12 + 12) % 12];
  }, [song.key, transposeSemitones]);

  const uniqueChords = useMemo(() => {
    const seen = new Set();
    const chords = [];
    song.sections.forEach(section => {
      section.lines.forEach(line => {
        (line.chords || []).forEach(c => {
          const transposed = transposeChord(c.chord, transposeSemitones);
          const key = simplifyChords ? simplifyChord(transposed) : transposed;
          if (!seen.has(key)) { seen.add(key); chords.push(key); }
        });
      });
    });
    return chords;
  }, [song.sections, transposeSemitones, simplifyChords]);

  const handleTranspose = (delta) => {
    setTransposeSemitones(prev => ((prev + delta) % 12 + 12) % 12);
  };

  const baseClass = worshipMode
    ? "text-white"
    : "text-worship-text";

  return (
    <div className={`${baseClass} ${worshipMode ? "px-6 py-8" : ""}`}>
      {/* Transpose & Controls */}
      {!worshipMode && (
        <div className="sticky top-16 z-30 -mx-4 px-4 py-3 bg-worship-bg/95 light:bg-white/95 backdrop-blur-xl border-b border-worship-border/50">
          <div className="flex flex-wrap items-center gap-2">
            {/* Key display + transpose */}
            <div className="flex items-center gap-1.5 bg-worship-surface border border-worship-border rounded-xl px-3 py-2">
              <span className="text-worship-muted text-xs">Key</span>
              <button onClick={() => handleTranspose(-1)} className="w-6 h-6 flex items-center justify-center text-worship-text-muted hover:text-worship-text transition-colors text-lg leading-none">−</button>
              <span className="font-mono font-semibold text-worship-accent w-6 text-center text-base">{currentKey}</span>
              <button onClick={() => handleTranspose(1)} className="w-6 h-6 flex items-center justify-center text-worship-text-muted hover:text-worship-text transition-colors text-lg leading-none">+</button>
            </div>

            {/* Capo */}
            <div className="flex items-center gap-1.5 bg-worship-surface border border-worship-border rounded-xl px-3 py-2">
              <span className="text-worship-muted text-xs">Capo</span>
              <button onClick={() => setCapo(c => Math.max(0, c - 1))} className="w-6 h-6 flex items-center justify-center text-worship-text-muted hover:text-worship-text transition-colors text-lg leading-none">−</button>
              <span className="font-mono font-semibold text-worship-text w-4 text-center text-sm">{capo}</span>
              <button onClick={() => setCapo(c => Math.min(12, c + 1))} className="w-6 h-6 flex items-center justify-center text-worship-text-muted hover:text-worship-text transition-colors text-lg leading-none">+</button>
            </div>

            {/* Toggles */}
            <button
              onClick={() => setShowChords(v => !v)}
              className={`text-xs px-3 py-2 rounded-xl border transition-all duration-200
                ${showChords ? "bg-worship-accent-soft border-worship-accent/30 text-worship-accent" : "border-worship-border text-worship-muted"}`}>
              Chords
            </button>
            <button
              onClick={() => setSimplifyChords(v => !v)}
              className={`text-xs px-3 py-2 rounded-xl border transition-all duration-200
                ${simplifyChords ? "bg-worship-accent-soft border-worship-accent/30 text-worship-accent" : "border-worship-border text-worship-muted"}`}>
              Simplified
            </button>
            <button
              onClick={() => setShowDiagrams(v => !v)}
              className={`text-xs px-3 py-2 rounded-xl border transition-all duration-200
                ${showDiagrams ? "bg-worship-accent-soft border-worship-accent/30 text-worship-accent" : "border-worship-border text-worship-muted"}`}>
              Diagrams
            </button>
          </div>
        </div>
      )}

      {/* Chord diagrams row */}
      {showDiagrams && !worshipMode && (
        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-6 pb-2 min-w-max">
            {uniqueChords.map(chord => (
              <ChordDiagram key={chord} chord={chord} />
            ))}
          </div>
        </div>
      )}

      {/* Song sections */}
      <div className={`mt-6 space-y-8 ${worshipMode ? "text-2xl" : "text-base"}`}>
        {song.sections.map((section, si) => (
          <div key={si} className="animate-fade-in">
            <div className={`section-label mb-3 ${worshipMode ? "text-base" : ""} ${SECTION_COLORS[section.type] || "text-worship-accent"}`}>
              {section.label}
            </div>
            <div className={`${worshipMode ? "leading-loose" : ""} overflow-x-auto`}>
              {section.lines.map((line, li) => (
                <ChordedLine
                  key={li}
                  lyrics={line.lyrics}
                  chords={line.chords}
                  transposeSemitones={transposeSemitones}
                  showChords={showChords && !worshipMode}
                  simplify={simplifyChords}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Strumming pattern */}
      {!worshipMode && song.instruments?.guitar?.strumming && (
        <div className="mt-10 p-4 card">
          <h4 className="text-worship-muted text-xs uppercase tracking-widest mb-3">Strumming Pattern</h4>
          <div className="flex items-center gap-1.5 flex-wrap">
            {song.instruments.guitar.strumming.split(" ").map((beat, i) => (
              <div key={i} className="flex gap-0.5">
                {beat.split("").map((stroke, j) => (
                  <span key={j} className={`font-mono font-bold text-lg ${stroke === "D" ? "text-worship-accent" : stroke === "U" ? "text-sky-400" : "text-worship-muted"}`}>
                    {stroke}
                  </span>
                ))}
                {i < song.instruments.guitar.strumming.split(" ").length - 1 && (
                  <span className="text-worship-border mx-1">|</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-worship-muted text-xs mt-2">
            <span className="text-worship-accent font-mono">D</span> = Down &nbsp;
            <span className="text-sky-400 font-mono">U</span> = Up
          </p>
        </div>
      )}
    </div>
  );
}
