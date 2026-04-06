import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const PAGE_TITLES = {
  "/": "Promises Worship",
  "/search": "Search",
  "/library": "My Library",
  "/setlists": "Setlists",
  "/profile": "Profile",
};

export default function TopBar() {
  const { theme, setTheme } = useApp();
  const location = useLocation();

  const isSongPage = location.pathname.startsWith("/song/");
  if (isSongPage) return null;

  const title = PAGE_TITLES[location.pathname] || "Promises Worship";
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-4
      bg-worship-bg/90 dark:bg-worship-bg/90 backdrop-blur-xl border-b border-worship-border/50
      light:bg-white/90 light:border-gray-200/50">
      {isHome ? (
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-worship-accent to-worship-highlight 
            flex items-center justify-center shadow-lg shadow-worship-accent/30">
            <span className="text-worship-bg font-display font-bold text-sm">P</span>
          </div>
          <div>
            <span className="font-display font-semibold text-worship-text text-base leading-none block">Promises</span>
            <span className="text-worship-accent text-xs font-body tracking-widest uppercase">Worship</span>
          </div>
        </Link>
      ) : (
        <h1 className="font-display font-semibold text-worship-text text-lg">{title}</h1>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="btn-icon"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
