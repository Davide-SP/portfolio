"use client";

import { motion } from "framer-motion";

interface QuoteBlockProps {
  quote: string;
  subtext?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

export default function QuoteBlock({ quote, subtext }: QuoteBlockProps) {
  return (
    <motion.div style={{ paddingTop: "0", paddingLeft: "96px", paddingRight: "96px", paddingBottom: "0" }} {...fadeUp}>
      <p
        style={{
          paddingLeft: 136,
          paddingRight: 136,
          fontFamily: "'TikTok Sans', sans-serif",
          fontSize: "26px",
          fontWeight: 600,
          color: "#000000",
          letterSpacing: "-0.03em",
          textAlign: "center",
          fontStyle: "italic"
        }}
      >
        {quote}
      </p>
      {subtext && (
        <p
          style={{
            fontFamily: "'TikTok Sans', sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
            letterSpacing: "0",
            marginTop: "20px",
            textAlign: "center"
          }}
        >
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
