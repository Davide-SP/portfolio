"use client";

interface PageTitleProps {
  line1: string;
  line2: string;
  fontSize?: number;
}

export default function PageTitle({ line1, line2, fontSize = 174 }: PageTitleProps) {
  return (
    <div style={{ padding: "96px" }}>
      <p
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
      >
        {line1}
      </p>
      <p
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
      >
        {line2}
      </p>
    </div>
  );
}
