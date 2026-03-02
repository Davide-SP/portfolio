"use client";

import Image from "next/image";

const FONT_TIKTOK = "'TikTok Sans', sans-serif";

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: FONT_TIKTOK,
  fontSize: 16,
  fontWeight: 400,
  color: "#8f8f8f",
  letterSpacing: "-0.02em",
};

const VALUE_STYLE: React.CSSProperties = {
  fontFamily: FONT_TIKTOK,
  fontSize: 16,
  fontWeight: 400,
  color: "#000000",
  letterSpacing: "-0.02em",
};

interface ProjectHeroProps {
  role: string;
  company: string;
  length: string;
  image: string;
}

export default function ProjectHero({
  role,
  company,
  length,
  image,
}: ProjectHeroProps) {
  return (
    <div style={{ width: "100%", paddingLeft: 64, paddingRight: 64, paddingTop: 32 }}>
      {/* Metadata row */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{display: "flex", gap: 8}}>
          <div style={LABEL_STYLE}>ROLE: </div>
          <div style={VALUE_STYLE}>{role}</div>
        </div>
        <div style={{display: "flex", gap: 8}}>
          <div style={LABEL_STYLE}>CLIENT:</div>
          <div style={VALUE_STYLE}>{company}</div>
        </div>
        <div style={{display: "flex", gap: 8}}>
          <div style={LABEL_STYLE}>PROJECT LENGTH:</div>
          <div style={VALUE_STYLE}>{length}</div>
        </div>
      </div>

      </div>
      

      {/* Hero image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 8,
          marginTop: 48,
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={company}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}
