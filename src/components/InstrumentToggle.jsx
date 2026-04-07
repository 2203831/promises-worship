import React from "react";

export default function InstrumentToggle({ instrument, setInstrument }) {

  const instruments = [
    { id: "guitar", label: "🎸 Guitar" },
    { id: "piano", label: "🎹 Piano" },
    { id: "ukulele", label: "🪕 Ukulele" },
    { id: "bass", label: "🎸 Bass" },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {instruments.map((inst) => (
        <button
          key={inst.id}
          onClick={() => setInstrument(inst.id)}
          className={`p-2 rounded-xl border text-sm
            ${
              instrument === inst.id
                ? "bg-worship-accent text-worship-bg border-worship-accent"
                : "border-worship-border text-worship-text-muted"
            }`}
        >
          {inst.label}
        </button>
      ))}
    </div>
  );
}
