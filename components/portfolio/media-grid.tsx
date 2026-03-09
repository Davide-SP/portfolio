"use client";

import Image from "next/image";

interface MediaItem {
  type: "iframe" | "video" | "image";
  src: string;
  alt?: string;
  caption?: string;
  fallbackHref?: string;
}

interface MediaGridProps {
  items: MediaItem[];
  title?: string;
}

export default function MediaGrid({ items, title }: MediaGridProps) {
  return (
    <div
      style={{
        paddingTop: 48,
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
            fontWeight: 500,
            color: "#000000",
            letterSpacing: "-0.03em",
            lineHeight: "1.2em",
            marginBottom: 70,
          }}
        >
          {title}
        </h2>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
        }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <div
              style={{
                aspectRatio: "1 / 1",
                overflow: "hidden",
                position: "relative",
                borderRadius: 8,
              }}
            >
              {item.type === "iframe" && (
                <iframe
                  src={item.src}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              )}
              {item.type === "video" && (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              {item.type === "image" && (
                <Image
                  src={item.src}
                  alt={item.alt ?? ""}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>

            {item.caption && (
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
                {item.caption}
              </p>
            )}

            {item.fallbackHref && (
              <p
                style={{
                  fontFamily: "'TikTok Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#000000",
                  letterSpacing: "-0.02em",
                  marginTop: item.caption ? 8 : 20,
                  marginBottom: 0,
                }}
              >
                Can&apos;t see the sketch?{" "}
                <a
                  href={item.fallbackHref}
                  style={{ color: "#0099FF", textDecoration: "underline" }}
                >
                  Click here
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
