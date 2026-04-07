import React from "react";
import { Link } from "react-router-dom";

export default function SongCard({ song, compact = false }) {
  if (!song) return null;

  return (
    <Link
      to={`/song/${song.id}`}
      className={`card-hover block p-4 transition-all`}
    >
      <div className="flex justify-between items-center">

        <div>
          <h3 className="font-semibold text-worship-text">
            {song.title}
          </h3>

          <p className="text-sm text-worship-text-muted">
            {song.artist}
          </p>

          {!compact && (
            <div className="flex gap-2 mt-2">
              {song.key && <span className="tag">Key: {song.key}</span>}
              {song.tempo && <span className="tag">{song.tempo} BPM</span>}
              {song.language && <span className="tag">{song.language}</span>}
            </div>
          )}
        </div>

        <div className="text-worship-accent text-xl">
          →
        </div>

      </div>
    </Link>
  );
}
