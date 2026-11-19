"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function applyTheme(mode: "light" | "dark") {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", mode);
    setTheme(mode);
  }

  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <div className="p-1 rounded-full bg-[var(--surface-stone)]/80 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl flex items-center gap-1">
        <button
          onClick={() => applyTheme("light")}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all text-xs ${
            theme === "light"
              ? "bg-white text-[#192021] shadow-sm"
              : "text-[var(--slate-muted)] hover:text-[var(--charcoal)]"
          }`}
          title="Light theme"
          aria-label="Light theme"
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => applyTheme("dark")}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all text-xs ${
            theme === "dark"
              ? "bg-[#025f6e] text-white shadow-sm"
              : "text-[var(--slate-muted)] hover:text-[var(--charcoal)]"
          }`}
          title="Dark theme"
          aria-label="Dark theme"
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
