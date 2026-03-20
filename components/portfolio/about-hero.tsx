"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutHeroProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  imageWidth?: string;
  textWidth?: string;
}

export default function AboutHero({ src, alt, children, imageWidth = "100%", textWidth = "100%" }: AboutHeroProps) {
  return (
    <motion.div
      className="p-8 md:p-24"
      initial={{ opacity: 0, y: 160 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: [0, 0.56, 0.26, 0.97] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8" style={{ alignItems: "center" }}>
        {/* Left column: image */}
        <div className="order-1" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto", borderRadius: 8, maxWidth: imageWidth }}
          />
        </div>

        {/* Right column: text */}
        <div className="order-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "'TikTok Sans', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "#000000",
              letterSpacing: "-0.04em",
              lineHeight: "1.2em",
              textAlign: "justify",
              maxWidth: textWidth,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
