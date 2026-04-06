import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import SongCard from "../components/SongCard";

//edited//

export default function Home() {
  const { songs, recentlyPlayed, getSongById, favorites } = useApp();
  const [activeTab, setActiveTab] = useState("featured");

  const featured = songs.filter(s => s.featured);
  const trending = songs.filter(s => s.trending);
  const filipino = songs.filter(s => s.filipinoSpotlight);
  const recent = recentlyPlayed.slice(0, 5).map(id => getSongById(id)).filter(Boolean);
  const favSongs = songs.filter(s => favorites.includes(s.id));

  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "trending", label: "Trending" },
    { id: "filipino", label: "🇵🇭 OPM" },
  ];

  const tabSongs = { featured, trending, filipino };

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto animate-fade-in">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-worship-text leading-tight mb-1">
          Worship with<br />
          <span className="text-worship-accent italic">confidence.</span>
        </h1>
        <p className="text-worship-muted text-sm mt-2">
          Chords, lyrics & tools for worship musicians.
        </p>
      </div>

      {/* Quick search bar */}
      <Link to="/search" className="flex items-center gap-3 input mb-8 cursor-pointer hover:border-worship-accent transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-worship-muted flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span className="text-worship-muted text-sm">Search songs, artists, lyrics…</span>
      </Link>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-worship-surface rounded-xl mb-4 border border-worship-border">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200
              ${activeTab === tab.id
                ? "bg-worship-accent text-worship-bg shadow-sm"
                : "text-worship-muted hover:text-worship-text"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="space-y-2 mb-8">
        {tabSongs[activeTab].map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      {/* Recently Played */}
      {recent.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-worship-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <h2 className="font-display font-semibold text-worship-text text-lg">Recently Played</h2>
          </div>
          <div className="card divide-y divide-worship-border/50">
            {recent.map(song => (
              <SongCard key={song.id} song={song} compact />
            ))}
          </div>
        </section>
      )}

      {/* Favorites */}
      {favSongs.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-worship-accent" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <h2 className="font-display font-semibold text-worship-text text-lg">Your Favorites</h2>
          </div>
          <div className="card divide-y divide-worship-border/50">
            {favSongs.map(song => (
              <SongCard key={song.id} song={song} compact />
            ))}
          </div>
        </section>
      )}

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          { label: "Songs", value: songs.length, icon: "🎵" },
          { label: "OPM", value: songs.filter(s => s.language === "filipino").length, icon: "🇵🇭" },
          { label: "Free", value: "100%", icon: "✝️" },
        ].map(stat => (
          <div key={stat.label} className="card p-3 text-center">
            <div className="text-xl mb-1">{stat.icon}</div>
            <div className="font-display font-bold text-worship-accent text-lg">{stat.value}</div>
            <div className="text-worship-muted text-xs">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
