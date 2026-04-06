import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import SongCard from "../components/SongCard";

const TABS = ["All Songs", "Favorites", "Recent", "OPM 🇵🇭"];

export default function Library() {
  const { songs, favorites, recentlyPlayed, getSongById } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  const tabSongs = [
    songs,
    songs.filter(s => favorites.includes(s.id)),
    recentlyPlayed.slice(0, 20).map(id => getSongById(id)).filter(Boolean),
    songs.filter(s => s.language === "filipino"),
  ];

  const current = tabSongs[activeTab];

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto animate-fade-in">
      <h1 className="font-display font-bold text-2xl text-worship-text mb-5">My Library</h1>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-5 scrollbar-none">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`whitespace-nowrap text-sm px-4 py-2 rounded-xl border transition-all duration-200 flex-shrink-0
              ${activeTab === i
                ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent font-medium"
                : "border-worship-border text-worship-muted hover:text-worship-text"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-worship-muted text-sm mb-4">{current.length} songs</p>

      {/* Songs */}
      {current.length > 0 ? (
        <div className="space-y-2">
          {current.map(song => <SongCard key={song.id} song={song} />)}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">
            {activeTab === 1 ? "❤️" : activeTab === 2 ? "🕐" : "🎵"}
          </div>
          <p className="text-worship-text font-medium">
            {activeTab === 1 ? "No favorites yet" : activeTab === 2 ? "No songs played yet" : "No songs"}
          </p>
          <p className="text-worship-muted text-sm mt-1">
            {activeTab === 1 ? "Tap the heart on any song to save it" : "Open a song to get started"}
          </p>
        </div>
      )}
    </div>
  );
}
