"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Selected Works", href: "/selected-works" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <>
      <motion.header
        className={`flex items-center justify-between bg-white z-50 px-4 md:px-8 ${open ? "fixed top-0 left-0 right-0" : "relative"} md:fixed md:top-0 md:left-0 md:right-0`}
        style={{ paddingTop: 32 }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.42, 0.21, 0, 1]
        }}
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

        {/* Right: nav links (desktop) + hamburger */}
        <div className="flex items-center gap-6">
          {/* Nav links — desktop only, visible when open */}
          {open && (
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
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
            style={{ width: 24, height: 24, position: "relative", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div style={{ position: "relative", width: 24, height: 24 }}>
              <img
                src="/images/menu-icon/menu-icon-close.svg"
                style={{ position: "absolute", opacity: open ? 0 : 1, transition: "opacity 0.3s ease" }}
              />
              <img
                src="/images/menu-icon/menu-icon-open.svg"
                style={{ position: "absolute", opacity: open ? 1 : 0, transition: "opacity 0.3s ease" }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-[96px]" />

      {/* Mobile curtain menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed left-0 right-0 bottom-0 bg-white z-40"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            style={{ top: 0, height: "100vh", transformOrigin: "top" }}
          >
            <nav
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
              }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0, 0.56, 0.26, 0.97], delay: 0.3 + i * 0.08 }}
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
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
