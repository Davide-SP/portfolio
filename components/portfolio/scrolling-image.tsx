"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const fadeUp = {
  initial: { opacity: 0, y: 160 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

export default function ScrollingImage({ src, alt, width, height, caption, maxWidth, scrollHint }: ScrollingImageProps) {
  return (
    <motion.div className="px-8 md:px-24 pt-0 pb-8 md:pb-[70px]" {...fadeUp}>
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
    </motion.div>
  );
}
