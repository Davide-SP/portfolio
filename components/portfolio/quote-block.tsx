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
    <motion.div className="px-8 md:px-24 py-8 md:py-0" {...fadeUp}>
      <p
        className="px-0 md:px-[136px] text-[20px] md:text-[26px]"
        style={{
          fontFamily: "'TikTok Sans', sans-serif",
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
