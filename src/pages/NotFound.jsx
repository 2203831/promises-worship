import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center animate-fade-in">
      <div className="text-6xl mb-4">🎵</div>
      <h1 className="font-display font-bold text-worship-text text-3xl mb-2">Page not found</h1>
      <p className="text-worship-muted text-base mb-8">This page doesn't exist or was moved.</p>
      <Link to="/" className="btn-primary px-8">Go Home</Link>
    </div>
  );
}
