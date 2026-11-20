"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "drag" | "view">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics (Dennis Snellenberg signature)
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse/trackpad, not touch)
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") as "pointer" | "drag" | "view";
        setCursorType(type || "pointer");
        return;
      }

      const interactive = target.closest("a, button, [role='button'], input, textarea");
      if (interactive) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Pip */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#ff5900] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-sm"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorType === "default" ? 1 : 0,
        }}
      />

      {/* Morphing Interactive Badge / Halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-mono text-[10px] font-bold tracking-widest uppercase select-none transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width:
            cursorType === "drag"
              ? 92
              : cursorType === "view"
              ? 80
              : cursorType === "pointer"
              ? 48
              : 32,
          height:
            cursorType === "drag"
              ? 34
              : cursorType === "view"
              ? 80
              : cursorType === "pointer"
              ? 48
              : 32,
          borderRadius: cursorType === "view" ? "50%" : cursorType === "drag" ? "9999px" : "50%",
          backgroundColor:
            cursorType === "drag"
              ? "rgba(255, 89, 0, 0.95)"
              : cursorType === "view"
              ? "rgba(2, 95, 110, 0.95)"
              : cursorType === "pointer"
              ? "rgba(255, 89, 0, 0.15)"
              : "transparent",
          borderColor:
            cursorType === "default"
              ? "rgba(100, 116, 139, 0.4)"
              : cursorType === "pointer"
              ? "rgba(255, 89, 0, 0.5)"
              : "transparent",
          borderWidth: cursorType === "default" || cursorType === "pointer" ? "1.5px" : "0px",
          color: "#ffffff",
          boxShadow:
            cursorType === "drag" || cursorType === "view"
              ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
              : "none",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        {cursorType === "drag" && (
          <span className="flex items-center gap-1.5 drop-shadow-sm select-none">
            <span>←</span>
            <span>DRAG</span>
            <span>→</span>
          </span>
        )}
        {cursorType === "view" && (
          <span className="flex flex-col items-center leading-tight drop-shadow-sm select-none text-[11px]">
            <span>VIEW</span>
            <span>↗</span>
          </span>
        )}
      </motion.div>
    </>
  );
}
