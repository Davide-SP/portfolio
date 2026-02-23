"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Selected Works", href: "/works" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white"
      style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 64, height: 64 }}
    >
      {/* Left: two-line text block */}
      <div
        style={{
          fontFamily: "'TikTok Sans', sans-serif",
          fontSize: 20,
          fontWeight: 400,
          color: "#000000",
          lineHeight: "1.3",
        }}
      >
        <div>DIGITAL PRODUCT DESIGNER</div>
        <div>BASED IN DENMARK</div>
      </div>

      {/* Right: nav links + hamburger */}
      <div className="flex items-center gap-6">
        {/* Nav links — visible only when open */}
        {open && (
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'TikTok Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#000000",
                  textDecoration:
                    currentPath === href ? "underline" : "none",
                  textUnderlineOffset: 3,
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {/* Hamburger / X button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ width: 20, height: 18, position: "relative", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          {/* Three lines that animate to X */}
          <span
            style={{
              display: "block",
              position: "absolute",
              left: 0,
              width: 20,
              height: 2,
              background: "#000000",
              borderRadius: 1,
              transition: "transform 0.3s ease, top 0.3s ease, opacity 0.3s ease",
              top: open ? 8 : 0,
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          />
          <span
            style={{
              display: "block",
              position: "absolute",
              left: 0,
              width: 20,
              height: 2,
              background: "#000000",
              borderRadius: 1,
              transition: "opacity 0.3s ease",
              top: 8,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              position: "absolute",
              left: 0,
              width: 20,
              height: 2,
              background: "#000000",
              borderRadius: 1,
              transition: "transform 0.3s ease, top 0.3s ease, opacity 0.3s ease",
              top: open ? 8 : 16,
              transform: open ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>
    </header>
  );
}
