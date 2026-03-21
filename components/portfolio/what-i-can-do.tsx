"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="pt-14 px-8 md:px-20 pb-8 md:pb-20">
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

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-2">
        {SKILLS.map(({ title, src }) => (
          <div key={title} className="flex items-center gap-4">
            <Image
              src={src}
              alt={title}
              width={48}
              height={48}
              style={{ borderRadius: 4, objectFit: "cover", flexShrink: 0, width: 48, height: 48 }}
            />
            <p
              style={{
                fontSize: 32,
                fontFamily: "'TikTok Sans', sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                letterSpacing: "-0.08em",
                color: "#000000",
                margin: 0,
              }}
            >
              {title}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col">
        {SKILLS.map(({ title, src }, i) => {
          const isHovered = hoveredIndex === i;
          const isDimmed = hoveredIndex !== null && !isHovered;
          const rotation = i % 2 === 0 ? "-5deg" : "5deg";

          return (
            <motion.div
              key={title}
              className="hidden md:block"
              style={{ position: "relative", textAlign: "center", zIndex: hoveredIndex === i ? 10 : 1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0, 0.56, 0.26, 0.97] }}
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
