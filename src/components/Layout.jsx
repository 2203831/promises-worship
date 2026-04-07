import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-worship-bg text-worship-text flex flex-col">
      
      {/* Top Navigation */}
      <TopBar />

      {/* Main Content */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 pt-20 pb-24 animate-fade-in">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  );
}
