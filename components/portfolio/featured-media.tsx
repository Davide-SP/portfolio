"use client";

import Image from "next/image";

interface FeaturedMediaProps {
  type: "iframe" | "video" | "image";
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  fallbackHref?: string;
}

export default function FeaturedMedia({ type, src, alt, title, caption, fallbackHref }: FeaturedMediaProps) {
  return (
    <div
      style={{
        paddingTop: 0,
        paddingLeft: 96,
        paddingRight: 96,
        paddingBottom: 64,
      }}
    >
      {title && (
        <h2
          style={{
            fontFamily: "'TikTok Sans', sans-serif",
            fontSize: 30,
            fontWeight: 400,
            color: "#000000",
            letterSpacing: "-0.03em",
            marginBottom: 32,
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          width: "100%",
          height: 700,
          overflow: "hidden",
          borderRadius: 8,
          position: "relative",
        }}
      >
        {type === "iframe" && (
          <iframe
            src={src}
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        )}
        {type === "video" && (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        {type === "image" && (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      {caption && (
        <p
          style={{
            fontFamily: "'TikTok Sans', sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "#000000",
            letterSpacing: "-0.02em",
            marginTop: 20,
            marginBottom: 0,
          }}
        >
          {caption}
        </p>
      )}

      {fallbackHref && (
        <p style={{ fontFamily: "'TikTok Sans', sans-serif", fontSize: 15, fontWeight: 400, letterSpacing: "-0.02em", marginTop: 8, marginBottom: 0, color: "#000000" }}>
          Can&apos;t see the sketch? <a href={fallbackHref} style={{ color: "#0099FF", textDecoration: "underline" }}>Click here</a>
        </p>
      )}
    </div>
  );
}
