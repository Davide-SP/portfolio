"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const fadeUp = {
  initial: { opacity: 0, y: 160 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

export default function TwoColumnMedia({ left, right }: TwoColumnMediaProps) {
  return (
    <motion.div className="px-8 md:px-24 pt-0 pb-8 md:pb-16" {...fadeUp}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
        <MediaColumn item={left} />
        <MediaColumn item={right} />
      </div>
    </motion.div>
  );
}
