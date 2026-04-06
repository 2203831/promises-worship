import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function SetlistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setlists, getSongById, removeSongFromSetlist, updateSetlistSongNote, reorderSetlistSongs } = useApp();
  const setlist = setlists.find(sl => sl.id === id);
  const [dragIndex, setDragIndex] = useState(null);
  const [editingNote, setEditingNote] = useState(null);

  if (!setlist) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <p className="text-worship-text font-medium">Setlist not found</p>
        <button onClick={() => navigate("/setlists")} className="btn-ghost mt-4 text-sm">Back to Setlists</button>
      </div>
    );
  }

  const handleDragStart = (i) => setDragIndex(i);
  const handleDragOver = (e, i) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === i) return;
    const songs = [...setlist.songs];
    const [moved] = songs.splice(dragIndex, 1);
    songs.splice(i, 0, moved);
    reorderSetlistSongs(id, songs);
    setDragIndex(i);
  };

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate("/setlists")} className="btn-icon flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div>
          <h1 className="font-display font-bold text-xl text-worship-text">{setlist.name}</h1>
          <p className="text-worship-muted text-sm">{setlist.date} · {setlist.songs.length} songs</p>
        </div>
      </div>

      {setlist.songs.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🎵</div>
          <p className="text-worship-text font-medium">No songs yet</p>
          <p className="text-worship-muted text-sm mt-1">Open any song and tap "+ Setlist" to add it here</p>
          <Link to="/search" className="btn-primary inline-block mt-4 text-sm">Browse Songs</Link>
        </div>
      ) : (
        <div className="space-y-2">
          {setlist.songs.map((item, i) => {
            const song = getSongById(item.songId);
            if (!song) return null;
            return (
              <div
                key={i}
                draggable
                onDragStart={() => handleDragStart(i)}
                onDragOver={e => handleDragOver(e, i)}
                onDragEnd={() => setDragIndex(null)}
                className="card p-4 cursor-grab active:cursor-grabbing active:opacity-70 transition-opacity"
              >
                <div className="flex items-start gap-3">
                  {/* Drag handle */}
                  <div className="text-worship-border mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                      <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                    </svg>
                  </div>

                  {/* Number */}
                  <span className="text-worship-muted text-sm font-mono w-5 flex-shrink-0 mt-0.5">{i + 1}</span>

                  {/* Song info */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/song/${song.id}`} className="text-worship-text font-semibold text-sm hover:text-worship-accent transition-colors">
                      {song.title}
                    </Link>
                    <p className="text-worship-muted text-xs mt-0.5">{song.artist}</p>

                    {/* Note */}
                    {editingNote === i ? (
                      <input
                        autoFocus
                        className="input text-xs py-1.5 mt-2"
                        defaultValue={item.notes}
                        placeholder="Add note for this song…"
                        onBlur={e => { updateSetlistSongNote(id, i, e.target.value); setEditingNote(null); }}
                        onKeyDown={e => { if (e.key === "Enter") e.target.blur(); }}
                      />
                    ) : (
                      <button
                        onClick={() => setEditingNote(i)}
                        className="text-xs text-worship-muted hover:text-worship-text mt-1.5 block text-left transition-colors"
                      >
                        {item.notes || "＋ Add note"}
                      </button>
                    )}
                  </div>

                  {/* Key + remove */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="tag-accent text-xs">{item.key}</span>
                    <button
                      onClick={() => removeSongFromSetlist(id, i)}
                      className="text-worship-border hover:text-red-400 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Key flow summary */}
      {setlist.songs.length > 1 && (
        <div className="mt-6 p-4 card">
          <h3 className="text-worship-muted text-xs uppercase tracking-widest mb-3">Key Flow</h3>
          <div className="flex items-center gap-2 flex-wrap">
            {setlist.songs.map((item, i) => (
              <React.Fragment key={i}>
                <span className="font-mono text-worship-accent font-semibold text-sm">{item.key}</span>
                {i < setlist.songs.length - 1 && <span className="text-worship-border">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
