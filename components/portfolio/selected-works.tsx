"use client";

import { motion } from "framer-motion";

const WORKS = [
  { title: "Learnn", typology: "UX/UI Design", src: "/images/home/learnn-cover.png", href: "/projects/learnn" },
  { title: "Smart Energy Management", typology: "UX/UI Design", src: "/images/home/planet-cover.png", href: "/projects/planet-smart-city" },
  { title: "Alfreedo", typology: "Service & UX/UI Design", src: "/images/home/alfreedo-cover.png", href: "/projects/alfreedo" },
  { title: "Flying Tiger Copenaghen", typology: "UI Design", src: "/images/home/flying-tiger-copenaghen-cover.png", href: "/projects/flying-tiger-copenaghen" },
  { title: "Owls", typology: "UI Design", src: "/images/home/owls-cover.png", href: "/projects/owls" },
  { title: "Creative Coding", typology: "Interaction Design", src: "/images/home/creative-coding-cover.png", href: "/projects/creative-coding" },
];

const textStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  letterSpacing: "-0.02em",
};

interface SelectedWorksProps {
  showTitle?: boolean;
}

export default function SelectedWorks({ showTitle = true }: SelectedWorksProps) {
  return (
    <section className="px-8 md:px-16" style={{ paddingTop: 128}}>
      {/* Header */}
      {showTitle && (
        <h2
          style={{
            ...textStyle,
            fontSize: "clamp(44px, 5vw, 50px)",
            fontWeight: 400,
            color: "#000000",
            margin: 0,
            marginBottom: 64,
          }}
        >
          Selected Works
        </h2>
      )}

      {/* Grid */}
      <motion.div
        style={{ marginBottom: 96 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0, 0.56, 0.26, 0.97] }}
      >
        {WORKS.map(({ title, typology, src, href }, i) => (
          <a
            key={i}
            href={href}
            style={{ textDecoration: "none", display: "block" }}
          >
            {/* Image container — overflow hidden keeps the frame fixed */}
            <div
              style={{overflow: "hidden", borderRadius: 8 }}
              className="group w-full aspect-[16/9]"
            >
              <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        
      />
             
            </div>

            {/* Title */}
            <p
              style={{
                ...textStyle,
                fontSize: 22,
                fontWeight: 500,
                color: "#000000",
                margin: 0,
                marginTop: 20
              }}
            >
              {title}
            </p>

            {/* Typology */}
            <p
              style={{
                ...textStyle,
                fontSize: 22,
                fontWeight: 400,
                color: "#8f8f8f",
                margin: 0,
                marginTop: 0
              }}
            >
              {typology}
            </p>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
