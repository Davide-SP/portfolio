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
  title: string;
  titleSize: number;
}

export default function ProjectHero({
  role,
  company,
  length,
  image,
  title,
  titleSize,
}: ProjectHeroProps) {
  return (
    <div style={{ width: "100%", paddingLeft: 64, paddingRight: 64, paddingTop: 32, marginBottom: 72 }}>
      {/* Metadata row */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{display: "flex", gap: 8}}>
          <div style={LABEL_STYLE}>ROLE: </div>
          <div style={VALUE_STYLE}>{role}</div>
        </div>
        <div style={{display: "flex", gap: 8}}>
          <div style={LABEL_STYLE}>COMPANY:</div>
          <div style={VALUE_STYLE}>{company}</div>
        </div>
        <div style={{display: "flex", gap: 8}}>
          <div style={LABEL_STYLE}>PROJECT LENGTH:</div>
          <div style={VALUE_STYLE}>{length}</div>
        </div>
      </div>

      </div>

      {/* Title + Hero image grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 70,
          marginTop: 24,
          alignItems: "center"
        }}
      >
        {/* Hero image */}
        <div style={{ width: "100%" }}>
  <Image
    src={image}
    alt={company}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: "100%", maxWidth: "90%", height: "auto", justifySelf: "center" }}
    priority
  />
</div>

        {/* Title */}
        <div
          style={{
            fontFamily: FONT_TIKTOK,
            fontSize: titleSize,
            fontWeight: 600,
            color: "#000000",
            letterSpacing: "-0.06em",
          }}
        >
          {title}
        </div>
  
      </div>
        


    </div>
  );
}
