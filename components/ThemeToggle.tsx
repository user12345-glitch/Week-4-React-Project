"use client";

import { useRef } from "react";

export default function ThemeToggle() {
  const btnRef = useRef<HTMLButtonElement>(null);

  // This runs in the browser only — safe to access DOM
  if (typeof window !== "undefined") {
    // On first load, read saved preference OR system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved : prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initial);
  }

  function handleClick() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // Update button label for accessibility
    if (btnRef.current) {
      btnRef.current.setAttribute(
        "aria-label",
        next === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
      btnRef.current.textContent =
        next === "dark" ? "Light Mode" : "Dark Mode";
    }
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      aria-label="Switch to dark mode"
      style={{ cursor: "pointer" }}
    >
      Dark Mode
    </button>
  );
}
