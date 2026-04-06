import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import SongViewer from "../components/SongViewer";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { useMetronome } from "../hooks/useMetronome";

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const HeartIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const INSTRUMENT_ICONS = { guitar: "🎸", piano: "🎹", ukulele: "🪕", bass: "🎸", violin: "🎻" };
const INSTRUMENTS = ["guitar", "piano", "ukulele", "bass", "violin"];

export default function SongPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getSongById, favorites, toggleFavorite, addToRecent, instrument, setInstrument,
    metronomeActive, setMetronomeActive, metronomeTempo, setMetronomeTempo } = useApp();

  const song = getSongById(id);
  const isFav = favorites.includes(id);
  const [worshipMode, setWorshipMode] = useState(false);
  const [showMetronome, setShowMetronome] = useState(false);
  const [showAddToSetlist, setShowAddToSetlist] = useState(false);
  const { setlists, addSongToSetlist } = useApp();

  const { isScrolling, toggle: toggleScroll } = useAutoScroll(1.5);
  useMetronome(metronomeTempo, metronomeActive);

  useEffect(() => {
    if (song) addToRecent(song.id);
  }, [song, addToRecent]);

  useEffect(() => {
    if (worshipMode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [worshipMode]);

  if (!song) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-5xl mb-4">🎵</div>
        <h2 className="font-display text-xl text-worship-text font-semibold mb-2">Song not found</h2>
        <button onClick={() => navigate(-1)} className="btn-ghost mt-4">Go back</button>
      </div>
    );
  }

  if (worshipMode) {
    return (
      <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
        {/* Worship mode header */}
        <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <h1 className="font-display text-white text-xl font-semibold">{song.title}</h1>
            <p className="text-white/50 text-sm">{song.artist}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={toggleScroll}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                ${isScrolling ? "bg-worship-accent text-black" : "bg-white/10 text-white"}`}>
              {isScrolling ? "Stop" : "Auto-scroll"}
            </button>
            <button
              onClick={() => setWorshipMode(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-white/10 text-white">
              Exit
            </button>
          </div>
        </div>
        <SongViewer song={song} worshipMode />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Song header */}
      <div className={`relative bg-gradient-to-b ${song.coverGradient} to-worship-bg pt-16 pb-6 px-4`}>
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <BackIcon />
        </button>

        {/* Favorite */}
        <button
          onClick={() => toggleFavorite(song.id)}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all
            ${isFav ? "text-worship-accent" : "text-white hover:text-worship-accent"}`}
        >
          <HeartIcon filled={isFav} />
        </button>

        <div className="mt-4">
          <h1 className="font-display font-bold text-white text-2xl leading-tight">{song.title}</h1>
          <p className="text-white/70 text-base mt-1">{song.artist}</p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="tag-accent">{song.key}</span>
            <span className="tag bg-black/20 border-white/10 text-white/70">{song.tempo} BPM</span>
            <span className="tag bg-black/20 border-white/10 text-white/70">{song.timeSignature}</span>
            <span className="tag bg-black/20 border-white/10 text-white/70 capitalize">{song.difficulty}</span>
            <span className="tag bg-black/20 border-white/10 text-white/70">
              {song.language === "filipino" ? "🇵🇭 Filipino" : "🌍 English"}
            </span>
          </div>
        </div>
      </div>

      {/* Action toolbar */}
      <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto border-b border-worship-border/50">
        {/* Instrument selector */}
        {INSTRUMENTS.map(inst => (
          <button
            key={inst}
            onClick={() => setInstrument(inst)}
            title={inst}
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs border transition-all duration-200
              ${instrument === inst
                ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent"
                : "border-worship-border text-worship-muted hover:text-worship-text"
              }`}
          >
            {INSTRUMENT_ICONS[inst]} {inst}
          </button>
        ))}
      </div>

      {/* Secondary actions */}
      <div className="px-4 py-3 flex items-center gap-2 border-b border-worship-border/50 overflow-x-auto">
        {/* Worship mode */}
        <button
          onClick={() => setWorshipMode(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-worship-border text-worship-muted hover:text-worship-accent hover:border-worship-accent transition-all">
          🙌 Worship Mode
        </button>

        {/* Auto-scroll */}
        <button
          onClick={toggleScroll}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-all
            ${isScrolling ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent" : "border-worship-border text-worship-muted hover:text-worship-accent hover:border-worship-accent"}`}>
          ↕ {isScrolling ? "Stop Scroll" : "Auto-scroll"}
        </button>

        {/* Metronome */}
        <button
          onClick={() => setShowMetronome(v => !v)}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-all
            ${showMetronome ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent" : "border-worship-border text-worship-muted hover:text-worship-accent hover:border-worship-accent"}`}>
          🥁 Metronome
        </button>

        {/* Add to setlist */}
        <button
          onClick={() => setShowAddToSetlist(v => !v)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-worship-border text-worship-muted hover:text-worship-accent hover:border-worship-accent transition-all">
          + Setlist
        </button>
      </div>

      {/* Metronome panel */}
      {showMetronome && (
        <div className="mx-4 mt-4 p-4 card animate-slide-up">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-worship-text font-semibold text-sm">Metronome</h3>
            <button
              onClick={() => setMetronomeActive(v => !v)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all
                ${metronomeActive ? "bg-worship-accent text-worship-bg" : "btn-ghost"}`}>
              {metronomeActive ? "⏹ Stop" : "▶ Start"}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-worship-muted text-xs w-8">Slow</span>
            <input
              type="range" min="40" max="200" value={metronomeTempo}
              onChange={e => setMetronomeTempo(Number(e.target.value))}
              className="flex-1 accent-worship-accent"
            />
            <span className="text-worship-muted text-xs w-8 text-right">Fast</span>
            <span className="font-mono text-worship-accent font-semibold text-sm w-16 text-right">{metronomeTempo} BPM</span>
          </div>
          {metronomeActive && (
            <div className="flex gap-1 mt-3 justify-center">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-3 h-3 rounded-full bg-worship-accent animate-pulse-soft"
                  style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add to setlist panel */}
      {showAddToSetlist && (
        <div className="mx-4 mt-4 p-4 card animate-slide-up">
          <h3 className="text-worship-text font-semibold text-sm mb-3">Add to Setlist</h3>
          {setlists.length === 0 ? (
            <p className="text-worship-muted text-sm">No setlists yet. Create one in the Setlists tab.</p>
          ) : (
            <div className="space-y-2">
              {setlists.map(sl => (
                <button key={sl.id}
                  onClick={() => { addSongToSetlist(sl.id, song.id, song.key); setShowAddToSetlist(false); }}
                  className="w-full text-left px-3 py-2 rounded-lg bg-worship-surface hover:bg-worship-border/30 text-worship-text text-sm transition-colors">
                  {sl.name}
                  <span className="text-worship-muted ml-2 text-xs">{sl.songs.length} songs</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Instrument note */}
      {song.instruments?.[instrument] && (
        <div className="mx-4 mt-4 px-4 py-3 rounded-xl bg-worship-accent-soft border border-worship-accent/20">
          <p className="text-worship-accent text-xs font-medium capitalize">{INSTRUMENT_ICONS[instrument]} {instrument} notes</p>
          <p className="text-worship-text text-sm mt-1">{song.instruments[instrument].notes || `Chords: ${song.instruments[instrument].chords?.join(", ")}`}</p>
        </div>
      )}

      {/* Song viewer */}
      <div className="px-4">
        <SongViewer song={song} />
      </div>

      {/* Tags */}
      <div className="px-4 mt-8 mb-4 flex flex-wrap gap-2">
        {song.tags.map(tag => (
          <span key={tag} className="tag capitalize">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
