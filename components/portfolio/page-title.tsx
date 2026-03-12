"use client";

import { motion } from "framer-motion";

interface PageTitleProps {
  line1: string;
  line2: string;
  fontSize?: number;
}

const fadeUp = {
  initial: { y: 175 },
  animate: { y: 0 },
  transition: { duration: 1.2, ease: [0.42, 0.21, 0, 1] as [number, number, number, number] }
}

export default function PageTitle({ line1, line2, fontSize = 174 }: PageTitleProps) {
  return (
    <div style={{ padding: "96px" }}>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          style={{
            textAlign: "center",
            fontFamily: "'TikTok Sans', sans-serif",
            fontWeight: 600,
            color: "#000000",
            letterSpacing: "-0.09em",
            fontSize: `${fontSize}px`,
            margin: 0,
            lineHeight: 1,
          }}
          {...fadeUp}
        >
          {line1}
        </motion.div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          style={{
            textAlign: "center",
            fontFamily: "'TikTok Sans', sans-serif",
            fontWeight: 600,
            color: "#000000",
            letterSpacing: "-0.09em",
            fontSize: `${fontSize}px`,
            margin: 0,
            lineHeight: 1,
          }}
          {...fadeUp}
          transition={{ duration: 1.2, ease: [0.42, 0.21, 0, 1], delay: 0.1 }}
        >
          {line2}
        </motion.div>
      </div>
    </div>
  );
}
