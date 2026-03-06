"use client";

import Image from "next/image";

interface ScrollingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  maxWidth?: string;
  scrollHint?: boolean;
}

const captionStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "italic",
  color: "#000000",
  marginTop: "8px",
};

export default function ScrollingImage({ src, alt, width, height, caption, maxWidth, scrollHint }: ScrollingImageProps) {
  return (
    <div style={{ paddingLeft: "96px", paddingRight: "96px", paddingTop: "0", paddingBottom: "70px" }}>
      <div style={{ width: maxWidth ?? "100%", margin: "0 auto" }}>
        <div
          style={{
            border: "8px solid #000000",
            borderRadius: "8px",
            overflowY: "auto",
            height: "600px",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
        {(caption || scrollHint) && (
          <p style={captionStyle}>
            {caption}
            {scrollHint && (
              <span style={{ fontStyle: "normal", fontWeight: 600, marginLeft: caption ? "12px" : undefined }}>
                ↓ Scroll to explore
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
