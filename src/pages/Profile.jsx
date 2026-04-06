import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const FONT_SIZES = ["sm", "md", "lg", "xl"];
const FONT_LABELS = { sm: "Small", md: "Default", lg: "Large", xl: "X-Large" };

export default function Profile() {
  const { user, login, logout, theme, setTheme, fontSize, setFontSize,
    highContrast, setHighContrast, instrument, setInstrument,
    favorites, recentlyPlayed, songs } = useApp();

  const [showLogin, setShowLogin] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleLogin = () => {
    if (!form.name.trim()) return;
    login({ name: form.name, email: form.email, avatar: form.name[0].toUpperCase() });
    setShowLogin(false);
  };

  const stats = [
    { label: "Songs Played", value: recentlyPlayed.length },
    { label: "Favorites", value: favorites.length },
    { label: "Available Songs", value: songs.length },
  ];

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto animate-fade-in">
      {/* User section */}
      <div className="card p-5 mb-6 text-center">
        {user ? (
          <>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-worship-accent to-worship-highlight 
              flex items-center justify-center mx-auto mb-3 shadow-lg shadow-worship-accent/30">
              <span className="font-display font-bold text-worship-bg text-2xl">{user.avatar}</span>
            </div>
            <h2 className="font-display font-bold text-worship-text text-xl">{user.name}</h2>
            {user.email && <p className="text-worship-muted text-sm mt-0.5">{user.email}</p>}
            <button onClick={logout} className="btn-ghost text-sm mt-4 px-6">Sign Out</button>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-worship-surface border-2 border-dashed border-worship-border 
              flex items-center justify-center mx-auto mb-3">
              <span className="text-worship-muted text-2xl">👤</span>
            </div>
            <h2 className="font-display font-semibold text-worship-text text-lg">Guest</h2>
            <p className="text-worship-muted text-sm mt-1">Sign in to sync your favorites</p>
            {!showLogin ? (
              <button onClick={() => setShowLogin(true)} className="btn-primary text-sm mt-4 px-6">Sign In</button>
            ) : (
              <div className="mt-4 space-y-2 text-left">
                <input className="input" placeholder="Your name" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                <input className="input" placeholder="Email (optional)" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                <div className="flex gap-2">
                  <button onClick={handleLogin} className="btn-primary flex-1 text-sm">Continue</button>
                  <button onClick={() => setShowLogin(false)} className="btn-ghost flex-1 text-sm">Cancel</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map(s => (
          <div key={s.label} className="card p-3 text-center">
            <div className="font-display font-bold text-worship-accent text-xl">{s.value}</div>
            <div className="text-worship-muted text-xs mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className="space-y-4">
        <h2 className="font-display font-semibold text-worship-text text-lg">Settings</h2>

        {/* Theme */}
        <div className="card p-4">
          <h3 className="text-worship-text font-medium text-sm mb-3">Theme</h3>
          <div className="flex gap-2">
            {["dark", "light"].map(t => (
              <button key={t} onClick={() => setTheme(t)}
                className={`flex-1 py-2 rounded-xl text-sm border transition-all capitalize
                  ${theme === t ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent" : "border-worship-border text-worship-muted"}`}>
                {t === "dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
            ))}
          </div>
        </div>

        {/* Font size */}
        <div className="card p-4">
          <h3 className="text-worship-text font-medium text-sm mb-3">Text Size</h3>
          <div className="flex gap-2">
            {FONT_SIZES.map(size => (
              <button key={size} onClick={() => setFontSize(size)}
                className={`flex-1 py-2 rounded-xl text-sm border transition-all
                  ${fontSize === size ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent" : "border-worship-border text-worship-muted"}`}>
                {FONT_LABELS[size]}
              </button>
            ))}
          </div>
        </div>

        {/* High contrast */}
        <div className="card p-4 flex items-center justify-between">
          <div>
            <h3 className="text-worship-text font-medium text-sm">High Contrast</h3>
            <p className="text-worship-muted text-xs mt-0.5">Improved readability</p>
          </div>
          <button
            onClick={() => setHighContrast(v => !v)}
            className={`w-12 h-6 rounded-full transition-all duration-300 relative
              ${highContrast ? "bg-worship-accent" : "bg-worship-surface border border-worship-border"}`}>
            <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300
              ${highContrast ? "left-6" : "left-0.5"}`} />
          </button>
        </div>

        {/* Default instrument */}
        <div className="card p-4">
          <h3 className="text-worship-text font-medium text-sm mb-3">Default Instrument</h3>
          <div className="flex gap-2 flex-wrap">
            {[
              { id: "guitar", label: "🎸 Guitar" },
              { id: "piano", label: "🎹 Piano" },
              { id: "ukulele", label: "🪕 Ukulele" },
              { id: "bass", label: "🎸 Bass" },
              { id: "violin", label: "🎻 Violin" },
            ].map(inst => (
              <button key={inst.id} onClick={() => setInstrument(inst.id)}
                className={`px-3 py-1.5 rounded-lg text-xs border transition-all
                  ${instrument === inst.id ? "bg-worship-accent-soft border-worship-accent/40 text-worship-accent" : "border-worship-border text-worship-muted"}`}>
                {inst.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* App info */}
      <div className="mt-8 text-center">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-worship-accent to-worship-highlight 
          flex items-center justify-center mx-auto mb-2 shadow-lg shadow-worship-accent/30">
          <span className="text-worship-bg font-display font-bold">P</span>
        </div>
        <p className="font-display font-semibold text-worship-text">Promises Worship</p>
        <p className="text-worship-muted text-xs mt-1">Free for the worship community · v1.0.0</p>
        <p className="text-worship-muted text-xs mt-0.5">Built with ❤️ for the Church</p>
      </div>
    </div>
  );
}
