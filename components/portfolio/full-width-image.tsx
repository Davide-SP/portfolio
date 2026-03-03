"use client";

import Image from "next/image";

interface FullWidthImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  maxWidth?: string;
}

const captionStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "italic",
  color: "#000000",
  marginTop: "8px",
};

export default function FullWidthImage({ src, alt, width, height, caption, maxWidth }: FullWidthImageProps) {
  return (
    <div style={{ paddingLeft: "96px", paddingRight: "96px", paddingTop: "0", paddingBottom: "70px" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: maxWidth ?? "100%",
          height: "auto",
          borderRadius: "8px",
          display: "block",
          margin: "0 auto",
          objectFit: "cover",
        }}
      />
      {caption && (
        <p style={captionStyle}>{caption}</p>
      )}
    </div>
  );
}
