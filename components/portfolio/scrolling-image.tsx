"use client";

import Image from "next/image";

interface ScrollingImageProps {
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

export default function ScrollingImage({ src, alt, width, height, caption, maxWidth }: ScrollingImageProps) {
  return (
    <>
      <style>{`
        .scrolling-frame .scrolling-image {
          transform: translateY(0);
          transition: transform 4s ease-in-out;
        }
        .scrolling-frame:hover .scrolling-image {
          transform: translateY(calc(-100% + 600px));
        }
      `}</style>
      <div style={{ paddingLeft: "96px", paddingRight: "96px", paddingTop: "0", paddingBottom: "70px" }}>
        <div style={{ width: maxWidth ?? "100%", margin: "0 auto" }}>
          <div
            className="scrolling-frame"
            style={{
              border: "8px solid #000000",
              borderRadius: "8px",
              overflow: "hidden",
              height: "600px",
            }}
          >
            <Image
              className="scrolling-image"
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
          {caption && <p style={captionStyle}>{caption}</p>}
        </div>
      </div>
    </>
  );
}
