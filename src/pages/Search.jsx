import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import SongCard from "../components/SongCard";

export default function Search() {
  const { songs } = useApp();
  const [query, setQuery] = useState("");

  const results = songs.filter((song) =>
    `${song.title} ${song.artist}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div>

      <h1 className="text-2xl font-display font-semibold mb-4">
        Search Songs
      </h1>

      <input
        type="text"
        placeholder="Search worship songs..."
        className="input mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-3">
        {results.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      {query && results.length === 0 && (
        <p className="text-worship-text-muted mt-4">
          No songs found.
        </p>
      )}

    </div>
  );
}
