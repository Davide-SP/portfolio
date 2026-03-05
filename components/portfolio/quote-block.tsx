"use client";

interface QuoteBlockProps {
  quote: string;
  subtext?: string;
}

export default function QuoteBlock({ quote, subtext }: QuoteBlockProps) {
  return (
    <div style={{ paddingTop: "0", paddingLeft: "96px", paddingRight: "96px", paddingBottom: "0" }}>
      <p
        style={{
          fontFamily: "'TikTok Sans', sans-serif",
          fontSize: "26px",
          fontWeight: 400,
          color: "#000000",
          letterSpacing: "-0.03em",
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
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
