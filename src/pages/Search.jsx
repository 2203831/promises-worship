import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import SongCard from "../components/SongCard";

const FILTERS = {
  language: ["all", "english", "filipino"],
  difficulty: ["all", "beginner", "intermediate", "advanced"],
  key: ["all", "C", "D", "E", "F", "G", "A", "B"],
};

export default function Search() {
  const { songs } = useApp();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ language: "all", difficulty: "all", key: "all" });

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    return songs.filter(song => {
      const matchesQuery = !q ||
        song.title.toLowerCase().includes(q) ||
        song.artist.toLowerCase().includes(q) ||
        song.tags.some(t => t.toLowerCase().includes(q)) ||
        song.sections.some(s => s.lines.some(l => l.lyrics.toLowerCase().includes(q)));
      const matchesLang = filters.language === "all" || song.language === filters.language;
      const matchesDiff = filters.difficulty === "all" || song.difficulty === filters.difficulty;
      const matchesKey = filters.key === "all" || song.key === filters.key;
      return matchesQuery && matchesLang && matchesDiff && matchesKey;
    });
  }, [songs, query, filters]);

  const setFilter = (key, val) => setFilters(prev => ({ ...prev, [key]: val }));

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto animate-fade-in">
      {/* Search input */}
      <div className="relative mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-worship-muted absolute left-4 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          autoFocus
          className="input pl-11 pr-11"
          placeholder="Search songs, artists, lyrics…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-worship-muted hover:text-worship-text transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="space-y-3 mb-6">
        {Object.entries(FILTERS).map(([key, values]) => (
          <div key={key}>
            <p className="text-worship-muted text-xs uppercase tracking-widest mb-2 capitalize">{key}</p>
            <div className="flex gap-2 flex-wrap">
              {values.map(val => (
                <button
                  key={val}
                  onClick={() => setFilter(key, val)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 capitalize
                    ${filters[key] === val
                      ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent"
                      : "border-worship-border text-worship-muted hover:border-worship-text-muted"
                    }`}
                >
                  {val === "filipino" ? "🇵🇭 Filipino" : val === "english" ? "🌍 English" : val}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-worship-muted text-sm">
          {results.length} {results.length === 1 ? "song" : "songs"} found
        </p>
      </div>

      {results.length > 0 ? (
        <div className="space-y-2">
          {results.map(song => <SongCard key={song.id} song={song} />)}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🎵</div>
          <p className="text-worship-text font-medium">No songs found</p>
          <p className="text-worship-muted text-sm mt-1">Try a different search or filter</p>
        </div>
      )}
    </div>
  );
}
