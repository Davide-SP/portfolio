"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const ampm = hours >= 12 ? "PM" : "AM"
      hours = hours % 12 || 12
      setTime(`${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer
      className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0"
      style={{
        width: "100%",
        padding: "64px",
        fontFamily: "'TikTok Sans', sans-serif",
      }}
    >
      <div
        className="md:pl-8"
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
      >
        <span style={{ fontSize: "20px", color: "#000000" }}>LET&apos;S GET IN TOUCH</span>
        <ArrowRight size={20} color="#000000" className="rotate-90 md:rotate-0" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "6px" }}>
        {[
          { label: "spataro.davide@gmail.com", href: "mailto:spataro.davide@gmail.com" },
          { label: "LinkedIn", href: "https://linkedin.com/in/davidespataro" },
          { label: "GitHub", href: "https://github.com/davidespataro" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            style={{
              fontSize: "inherit",
              fontFamily: "'TikTok Sans', sans-serif",
              color: "#000000",
              backgroundColor: "#FFFFFF",
              border: "1px solid #8F8F8F",
              borderRadius: "12px",
              padding: "8px 16px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.backgroundColor = "#000000"
              el.style.color = "#FFFFFF"
              el.style.borderColor = "transparent"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.backgroundColor = "#FFFFFF"
              el.style.color = "#000000"
              el.style.borderColor = "#8F8F8F"
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <div
        className="md:pr-8"
        style={{
          fontSize: "16px",
          color: "#8F8F8F",
          fontFamily: "'TikTok Sans', sans-serif",
        }}
      >
        {time}
      </div>
    </footer>
  )
}
