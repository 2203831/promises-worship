import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-worship-surface border-b border-worship-border">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-xl">✝️</div>
          <div className="font-display text-lg font-semibold">
            Promises Worship
          </div>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
