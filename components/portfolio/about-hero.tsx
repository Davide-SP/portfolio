"use client";

import Image from "next/image";

interface AboutHeroProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  imageWidth?: string;
  textWidth?: string;
}

export default function AboutHero({ src, alt, children, imageWidth = "100%", textWidth = "100%" }: AboutHeroProps) {
  return (
    <div style={{ padding: "96px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "center" }}>
        {/* Left column: image */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto", borderRadius: 8, maxWidth: imageWidth }}
          />
        </div>

        {/* Right column: text */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "'TikTok Sans', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#000000",
              letterSpacing: "-0.04em",
              lineHeight: "1.2em",
              textAlign: "justify",
              maxWidth: textWidth,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
