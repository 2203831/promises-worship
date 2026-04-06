import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { SONGS, SAMPLE_SETLIST } from "../data/songs";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("pw-theme") || "dark");
  const [fontSize, setFontSize] = useState(() => localStorage.getItem("pw-fontsize") || "md");
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem("pw-contrast") === "true");
  const [instrument, setInstrument] = useState(() => localStorage.getItem("pw-instrument") || "guitar");
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("pw-favorites") || "[]"); } catch { return []; }
  });
  const [recentlyPlayed, setRecentlyPlayed] = useState(() => {
    try { return JSON.parse(localStorage.getItem("pw-recent") || "[]"); } catch { return []; }
  });
  const [setlists, setSetlists] = useState(() => {
    try { return JSON.parse(localStorage.getItem("pw-setlists") || JSON.stringify([SAMPLE_SETLIST])); } catch { return [SAMPLE_SETLIST]; }
  });
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("pw-user") || "null"); } catch { return null; }
  });
  const [metronomeActive, setMetronomeActive] = useState(false);
  const [metronomeTempo, setMetronomeTempo] = useState(80);

  // Apply theme classes to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.classList.toggle("high-contrast", highContrast);
    root.classList.remove("font-sm", "font-md", "font-lg", "font-xl");
    root.classList.add(`font-${fontSize}`);
    localStorage.setItem("pw-theme", theme);
    localStorage.setItem("pw-fontsize", fontSize);
    localStorage.setItem("pw-contrast", highContrast);
  }, [theme, fontSize, highContrast]);

  useEffect(() => { localStorage.setItem("pw-favorites", JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem("pw-recent", JSON.stringify(recentlyPlayed)); }, [recentlyPlayed]);
  useEffect(() => { localStorage.setItem("pw-setlists", JSON.stringify(setlists)); }, [setlists]);
  useEffect(() => { if (user) localStorage.setItem("pw-user", JSON.stringify(user)); else localStorage.removeItem("pw-user"); }, [user]);

  const toggleFavorite = useCallback((songId) => {
    setFavorites(prev => prev.includes(songId) ? prev.filter(id => id !== songId) : [...prev, songId]);
  }, []);

  const addToRecent = useCallback((songId) => {
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(id => id !== songId);
      return [songId, ...filtered].slice(0, 20);
    });
  }, []);

  const createSetlist = useCallback((name) => {
    const newSetlist = { id: `sl${Date.now()}`, name, date: new Date().toISOString().split("T")[0], songs: [] };
    setSetlists(prev => [...prev, newSetlist]);
    return newSetlist.id;
  }, []);

  const addSongToSetlist = useCallback((setlistId, songId, key) => {
    setSetlists(prev => prev.map(sl =>
      sl.id === setlistId
        ? { ...sl, songs: [...sl.songs, { songId, key, notes: "" }] }
        : sl
    ));
  }, []);

  const removeSongFromSetlist = useCallback((setlistId, index) => {
    setSetlists(prev => prev.map(sl =>
      sl.id === setlistId
        ? { ...sl, songs: sl.songs.filter((_, i) => i !== index) }
        : sl
    ));
  }, []);

  const updateSetlistSongNote = useCallback((setlistId, index, notes) => {
    setSetlists(prev => prev.map(sl =>
      sl.id === setlistId
        ? { ...sl, songs: sl.songs.map((s, i) => i === index ? { ...s, notes } : s) }
        : sl
    ));
  }, []);

  const reorderSetlistSongs = useCallback((setlistId, songs) => {
    setSetlists(prev => prev.map(sl => sl.id === setlistId ? { ...sl, songs } : sl));
  }, []);

  const getSongById = useCallback((id) => SONGS.find(s => s.id === id), []);

  const login = useCallback((userData) => setUser(userData), []);
  const logout = useCallback(() => setUser(null), []);

  const value = {
    theme, setTheme,
    fontSize, setFontSize,
    highContrast, setHighContrast,
    instrument, setInstrument,
    favorites, toggleFavorite,
    recentlyPlayed, addToRecent,
    setlists, createSetlist, addSongToSetlist, removeSongFromSetlist,
    updateSetlistSongNote, reorderSetlistSongs,
    songs: SONGS,
    getSongById,
    user, login, logout,
    metronomeActive, setMetronomeActive,
    metronomeTempo, setMetronomeTempo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
