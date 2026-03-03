"use client";

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
}

const titleStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  fontSize: "30px",
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

export default function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <div style={{ paddingTop: "32px", paddingBottom: "64px", paddingLeft: "96px", paddingRight: "96px" }}>
      <div className="flex flex-col" style={{ gap: "70px" }}>
        <h2 className="text-left" style={titleStyle}>
          {title}
        </h2>

        <div className="ml-auto" style={{ width: "50%", ...textStyle }}>
          {children}
        </div>
      </div>
    </div>
  );
}
