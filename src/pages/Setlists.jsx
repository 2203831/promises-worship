import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Setlists() {
  const { setlists, createSetlist } = useApp();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");

  const handleCreate = () => {
    if (!newName.trim()) return;
    createSetlist(newName.trim());
    setNewName("");
    setShowCreate(false);
  };

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-bold text-2xl text-worship-text">Setlists</h1>
        <button onClick={() => setShowCreate(v => !v)} className="btn-primary text-sm px-4 py-2">
          + New
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <div className="card p-4 mb-5 animate-slide-up">
          <h3 className="text-worship-text font-semibold text-sm mb-3">Create Setlist</h3>
          <input
            autoFocus
            className="input mb-3"
            placeholder="e.g. Sunday Morning Service"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleCreate()}
          />
          <div className="flex gap-2">
            <button onClick={handleCreate} className="btn-primary text-sm flex-1">Create</button>
            <button onClick={() => setShowCreate(false)} className="btn-ghost text-sm flex-1">Cancel</button>
          </div>
        </div>
      )}

      {/* Setlist list */}
      {setlists.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">📋</div>
          <p className="text-worship-text font-medium">No setlists yet</p>
          <p className="text-worship-muted text-sm mt-1">Create one to plan your worship service</p>
        </div>
      ) : (
        <div className="space-y-3">
          {setlists.map(sl => (
            <Link key={sl.id} to={`/setlists/${sl.id}`} className="card-hover block p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-worship-text font-semibold text-base">{sl.name}</h3>
                  <p className="text-worship-muted text-sm mt-0.5">{sl.date}</p>
                </div>
                <span className="tag">{sl.songs.length} songs</span>
              </div>
              {sl.songs.length > 0 && (
                <div className="mt-3 flex gap-1.5 flex-wrap">
                  {sl.songs.slice(0, 4).map((s, i) => (
                    <span key={i} className="tag text-xs">{s.key}</span>
                  ))}
                  {sl.songs.length > 4 && (
                    <span className="tag text-xs">+{sl.songs.length - 4} more</span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
