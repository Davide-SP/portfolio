"use client";

import { useState } from "react";
import Image from "next/image";

const SKILLS = [
  { title: "UX/UI DESIGN", src: "/images/home/flying-tiger-copenaghen-cover.png" },
  { title: "CREATIVE CODING", src: "/images/about/creative.jpg" },
  { title: "PROTOTYPING", src: "/images/about/prototype.png" },
  { title: "UX RESEARCH", src: "/images/about/research.png" },
  { title: "GRAPHIC DESIGN", src: "/images/about/graphic.png" },
];

export default function WhatICanDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ paddingTop: 56, paddingLeft: 80, paddingRight: 80, paddingBottom: 80 }}>
      <p
        style={{
          fontSize: 32,
          fontFamily: "'TikTok Sans', sans-serif",
          fontWeight: 500,
          color: "#000000",
          letterSpacing: "-0.03em",
          margin: 0,
          marginBottom: 80,
        }}
      >
        What I can do.
      </p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {SKILLS.map(({ title, src }, i) => {
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && !isHovered;
          const rotation = i % 2 === 0 ? "-5deg" : "5deg";

          return (
            <div
              key={title}
              style={{ position: "relative", textAlign: "center", zIndex: hoveredIndex === i ? 10 : 1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover rectangle — behind the title */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `translateX(-50%) translateY(-50%) rotate(${rotation}) scale(${isHovered ? 1 : 0.95})`,
                  width: 438,
                  height: 525,
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.15s ease, transform 0.15s ease",
                  pointerEvents: "none",
                  zIndex: 1,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Title — above the rectangle */}
              <p
                style={{
                  position: "relative",
                  zIndex: 2,
                  lineHeight: 1.2,
                  fontSize: 90,
                  fontFamily: "'TikTok Sans', sans-serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "-0.08em",
                  color: isDimmed ? "#c0c0c0 " : "#000000",
                  margin: 0,
                  transition: "color 0.2s ease",
                  cursor: "default",
                }}
              >
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}