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
    <div className="pt-8 md:pt-12 px-8 md:px-24 pb-8 md:pb-16">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
