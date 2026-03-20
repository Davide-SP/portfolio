"use client";

import { motion } from "framer-motion";

interface PageTitleProps {
  line1: string;
  line2: string;
  fontSize?: number;
  mobileFontSize?: number;
}

const fadeUp = {
  initial: { y: 175 },
  animate: { y: 0 },
  transition: { duration: 1.2, ease: [0.42, 0.21, 0, 1] as [number, number, number, number] }
}

const sharedStyle = (size: number): React.CSSProperties => ({
  fontFamily: "'TikTok Sans', sans-serif",
  fontWeight: 600,
  color: "#000000",
  letterSpacing: "-0.09em",
  fontSize: `${size}px`,
  margin: 0,
  lineHeight: 1,
});

export default function PageTitle({ line1, line2, fontSize = 174, mobileFontSize = 72 }: PageTitleProps) {
  return (
    <div className="pt-16 md:pt-24 px-8 md:px-24 pb-16 md:pb-20">
      <div style={{ overflow: "hidden" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center" }}>
          <span className="md:hidden" style={sharedStyle(mobileFontSize)}>{line1}</span>
          <span className="hidden md:block" style={sharedStyle(fontSize)}>{line1}</span>
        </motion.div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          {...fadeUp}
          style={{ textAlign: "center" }}
          transition={{ duration: 1.2, ease: [0.42, 0.21, 0, 1], delay: 0.1 }}
        >
          <span className="md:hidden" style={sharedStyle(mobileFontSize)}>{line2}</span>
          <span className="hidden md:block" style={sharedStyle(fontSize)}>{line2}</span>
        </motion.div>
      </div>
    </div>
  );
}
