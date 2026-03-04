"use client";

import Image from "next/image";

interface MediaItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface TwoColumnMediaProps {
  left: MediaItem;
  right: MediaItem;
}

const captionStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "italic",
  color: "#000000",
  lineHeight: "1.2em",
  marginTop: "8px",
};

function isVideo(src: string): boolean {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

function MediaElement({ src, alt }: { src: string; alt?: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        loop
        autoPlay
        muted
        playsInline
        style={{ width: "100%", borderRadius: "8px", display: "block" }}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={1920}
      height={1080}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        display: "block",
      }}
    />
  );
}

function MediaColumn({ item }: { item: MediaItem }) {
  return (
    <div>
      <MediaElement src={item.src} alt={item.alt} />
      {item.caption && <p style={captionStyle}>{item.caption}</p>}
    </div>
  );
}

export default function TwoColumnMedia({ left, right }: TwoColumnMediaProps) {
  return (
    <div style={{ paddingTop: "0", paddingLeft: "96px", paddingRight: "96px", paddingBottom: "64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <MediaColumn item={left} />
        <MediaColumn item={right} />
      </div>
    </div>
  );
}
