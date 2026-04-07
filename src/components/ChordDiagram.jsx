import React from "react";

export default function ChordDiagram({ chord, instrument }) {

  if (!chord) return null;

  return (
    <div className="card p-4 mb-3">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-worship-accent">
          {chord}
        </h3>

        <span className="text-sm text-worship-text-muted">
          {instrument}
        </span>
      </div>

      {instrument === "guitar" && (
        <div className="text-sm text-worship-text-muted">
          Guitar diagram for {chord}
        </div>
      )}

      {instrument === "piano" && (
        <div className="text-sm text-worship-text-muted">
          Piano keys for {chord}
        </div>
      )}

      {instrument === "ukulele" && (
        <div className="text-sm text-worship-text-muted">
          Ukulele diagram for {chord}
        </div>
      )}

      {instrument === "bass" && (
        <div className="text-sm text-worship-text-muted">
          Bass notes for {chord}
        </div>
      )}

    </div>
  );
}
