import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";
import InstrumentToggle from "../components/InstrumentToggle";
import ChordDiagram from "../components/ChordDiagram";

export default function SongPage() {
  const { id } = useParams();
  const { getSongById } = useApp();

  const song = getSongById(id);
  const [instrument, setInstrument] = useState("guitar");

  if (!song) return <div>Song not found</div>;

  return (
    <div>

      {/* Song Header */}
      <div className="mb-6">

        <h1 className="text-3xl font-display font-bold">
          {song.title}
        </h1>

        <p className="text-worship-text-muted">
          {song.artist}
        </p>

        <div className="flex gap-2 mt-3">
          {song.key && <span className="tag">Key: {song.key}</span>}
          {song.tempo && <span className="tag">{song.tempo} BPM</span>}
          {song.capo && <span className="tag">Capo {song.capo}</span>}
        </div>

      </div>

      {/* Instrument Toggle */}
      <InstrumentToggle
        instrument={instrument}
        setInstrument={setInstrument}
      />

      {/* Chord Diagrams */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">
          Chords
        </h2>

        {song.chords?.map((chord) => (
          <ChordDiagram
            key={chord}
            chord={chord}
            instrument={instrument}
          />
        ))}
      </div>

      {/* Lyrics */}
      <div className="card p-4 whitespace-pre-line leading-7">
        {song.lyrics}
      </div>

    </div>
  );
}
