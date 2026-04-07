import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import SongCard from "../components/SongCard";

export default function Home() {
  const { songs, recentlyPlayed, favorites, getSongById } = useApp();
  const [tab, setTab] = useState("featured");

  const featured = songs.filter((s) => s.featured);
  const trending = songs.filter((s) => s.trending);
  const filipino = songs.filter((s) => s.filipinoSpotlight);
  const recent = recentlyPlayed
    .slice(0, 5)
    .map((id) => getSongById(id))
    .filter(Boolean);

  const favSongs = songs.filter((s) => favorites.includes(s.id));

  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "trending", label: "Trending" },
    { id: "filipino", label: "🇵🇭 OPM" },
  ];

  const tabSongs = {
    featured,
    trending,
    filipino,
  };

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold">
          Worship with confidence ✝️
        </h1>

        <p className="text-worship-text-muted mt-2">
          Chords, lyrics, and tools for Christian musicians.
        </p>
      </div>

      {/* Search */}
      <Link to="/search" className="block mb-6">
        <div className="input">
          🔍 Search songs, artists, lyrics...
        </div>
      </Link>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl border text-sm
              ${
                tab === t.id
                  ? "bg-worship-accent text-worship-bg border-worship-accent"
                  : "border-worship-border text-worship-text-muted"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Songs */}
      <div className="space-y-3 mb-6">
        {tabSongs[tab].map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      {/* Recently Played */}
      {recent.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-3">Recently Played</h2>

          <div className="space-y-2">
            {recent.map((song) => (
              <SongCard key={song.id} song={song} compact />
            ))}
          </div>
        </div>
      )}

      {/* Favorites */}
      {favSongs.length > 0 && (
        <div>
          <h2 className="font-semibold mb-3">Your Favorites ❤️</h2>

          <div className="space-y-2">
            {favSongs.map((song) => (
              <SongCard key={song.id} song={song} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
