"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) {
        setHovered(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) {
        setHovered(false);
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const size = pressed ? 16 : hovered ? 48 : 26;

  return (
    <div
      className="fixed rounded-full pointer-events-none"
      style={{
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        background: "white",
        mixBlendMode: "difference",
        zIndex: 9999,
        transition: "width 0.15s ease-in-out, height 0.15s ease-in-out",
      }}
    />
  );
}
