"use client";

import { motion } from "framer-motion";

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
}

const titleStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontWeight: 500,
  color: "#000000",
  letterSpacing: "-0.03em",
};

const textStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#000000",
  letterSpacing: "0",
  lineHeight: "1.2em",
};

const fadeUpTitle = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

const fadeUpText = {
  initial: { opacity: 0, y: 140 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

export default function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <div className="px-8 md:px-24 pt-8 md:pt-8 pb-16 md:pb-16">
      <div className="flex flex-col" style={{ gap: "70px" }}>
        <motion.h2 className="text-left text-[26px] md:text-[30px]" style={titleStyle} {...fadeUpTitle}>
          {title}
        </motion.h2>

        <motion.div className="ml-auto w-4/5 md:w-1/2" style={{ ...textStyle }} {...fadeUpText}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
