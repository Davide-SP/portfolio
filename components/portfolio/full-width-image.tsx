"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const fadeUp = {
  initial: { opacity: 0, y: 160 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

export default function FullWidthImage({ src, alt, width, height, caption, maxWidth }: FullWidthImageProps) {
  return (
    <motion.div className="px-8 md:px-24 pt-0 pb-8 md:pb-[70px]" {...fadeUp}>
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
    </motion.div>
  );
}
