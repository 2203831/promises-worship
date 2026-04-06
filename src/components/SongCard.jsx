import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const HeartIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const DIFFICULTY_COLORS = {
  beginner: "text-emerald-400 bg-emerald-400/10",
  intermediate: "text-amber-400 bg-amber-400/10",
  advanced: "text-red-400 bg-red-400/10",
};

export default function SongCard({ song, compact = false, showFavorite = true }) {
  const { favorites, toggleFavorite } = useApp();
  const isFav = favorites.includes(song.id);

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-worship-surface/50 light:hover:bg-gray-50 transition-colors cursor-pointer group">
        <Link to={`/song/${song.id}`} className="flex items-center gap-3 flex-1 min-w-0">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${song.coverGradient} flex-shrink-0 flex items-center justify-center`}>
            <span className="text-white/80 text-xs font-display">{song.key}</span>
          </div>
          <div className="min-w-0">
            <p className="text-worship-text font-medium text-sm truncate">{song.title}</p>
            <p className="text-worship-muted text-xs truncate">{song.artist}</p>
          </div>
        </Link>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-worship-muted text-xs font-mono">{song.key}</span>
          {showFavorite && (
            <button
              onClick={(e) => { e.preventDefault(); toggleFavorite(song.id); }}
              className={`transition-colors ${isFav ? "text-worship-accent" : "text-worship-border hover:text-worship-muted"}`}
            >
              <HeartIcon filled={isFav} />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link to={`/song/${song.id}`} className="card-hover block p-4 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${song.coverGradient} flex-shrink-0 
          flex items-center justify-center shadow-lg`}>
          <span className="text-white/90 font-display font-semibold text-lg">{song.key}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-worship-text font-semibold text-base leading-snug truncate">{song.title}</h3>
              <p className="text-worship-muted text-sm mt-0.5">{song.artist}</p>
            </div>
            {showFavorite && (
              <button
                onClick={(e) => { e.preventDefault(); toggleFavorite(song.id); }}
                className={`flex-shrink-0 mt-0.5 transition-all duration-200 
                  ${isFav ? "text-worship-accent scale-110" : "text-worship-border hover:text-worship-muted"}`}
              >
                <HeartIcon filled={isFav} />
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${DIFFICULTY_COLORS[song.difficulty]}`}>
              {song.difficulty}
            </span>
            <span className="tag">{song.language === "filipino" ? "🇵🇭 Filipino" : "🌍 English"}</span>
            <span className="text-worship-muted text-xs">{song.tempo} BPM</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
