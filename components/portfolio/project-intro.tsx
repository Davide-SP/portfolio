"use client";

import { motion } from "framer-motion";

interface ProjectIntroProps {
  whatIDid: React.ReactNode;
  keyLearnings: string[];
}

function boldFirstWord(text: string): React.ReactNode {
  const periodIndex = text.indexOf(".");
  if (periodIndex === -1) return <strong>{text}</strong>;
  const rest = text.slice(periodIndex + 1).trimStart();
  return (
    <>
      <strong>{text.slice(0, periodIndex + 1)}</strong>
      {rest && (
        <>
          <br />
          {rest}
        </>
      )}
    </>
  );
}

const titleStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "30px",
  fontWeight: 500,
  color: "#FFFFFF",
  letterSpacing: "-0.03em",
};

const textStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#FFFFFF",
  letterSpacing: "0",
  lineHeight: "1.2em",
};

const fadeUpTitle = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

const fadeUpText = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: [0, 0.56, 0.26, 0.97] as [number, number, number, number] }
}

export default function ProjectIntro({ whatIDid, keyLearnings }: ProjectIntroProps) {
  return (
    <div style={{ padding: "64px 56px"}}>
      <div style={{ backgroundColor: "#000000", padding: "40px", borderRadius: 8  }}>
        <div className="flex flex-col" style={{ gap: "70px" }}>
          <motion.h2 className="text-left" style={titleStyle} {...fadeUpTitle}>
            What I did.
          </motion.h2>

          <motion.div className="ml-auto" style={{ width: "50%" }} {...fadeUpText}>
            <p style={textStyle}>
              {whatIDid}
            </p>
          </motion.div>

          <motion.h2 className="text-left" style={titleStyle} {...fadeUpTitle}>
            Key learnings.
          </motion.h2>

          <motion.div className="ml-auto" style={{ width: "50%" }} {...fadeUpText}>
            <div style={textStyle}>
              {keyLearnings.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "12px", marginBottom: "1em" }}>
                  <span style={{ flexShrink: 0 }}>•</span>
                  <span>{boldFirstWord(item)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
