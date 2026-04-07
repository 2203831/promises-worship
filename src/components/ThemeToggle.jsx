import React, { useEffect, useState } from "react";

export default function ThemeToggle() {

  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.body.classList.add("light");
      setLight(true);
    }
  }, []);

  function toggleTheme() {
    const isLight = document.body.classList.toggle("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    setLight(isLight);
  }

  return (
    <button
      onClick={toggleTheme}
      className="btn-icon"
      title="Toggle theme"
    >
      {light ? "🌙" : "☀️"}
    </button>
  );
}
