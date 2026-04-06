import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <TopBar />
      <main className="flex-1 pb-24 pt-16 overflow-x-hidden">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
