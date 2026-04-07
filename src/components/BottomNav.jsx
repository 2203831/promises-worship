import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {

  const linkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center text-xs gap-1 flex-1 py-2
     ${isActive ? "text-worship-accent" : "text-worship-text-muted"}`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-worship-surface border-t border-worship-border">
      <div className="max-w-2xl mx-auto flex">

        <NavLink to="/" className={linkClass}>
          <span>🏠</span>
          Home
        </NavLink>

        <NavLink to="/search" className={linkClass}>
          <span>🔍</span>
          Search
        </NavLink>

        <NavLink to="/library" className={linkClass}>
          <span>🎵</span>
          Library
        </NavLink>

        <NavLink to="/setlists" className={linkClass}>
          <span>📖</span>
          Setlists
        </NavLink>

        <NavLink to="/profile" className={linkClass}>
          <span>👤</span>
          Profile
        </NavLink>

      </div>
    </nav>
  );
}
