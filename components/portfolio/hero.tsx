"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { ArrowDown } from "lucide-react";

const FONT_MONO = "var(--font-space-mono), 'Space Mono', monospace";
const FONT_TIKTOK = "'TikTok Sans', sans-serif";

const BASE_BODY_STYLE: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  visibility: "hidden",
  userSelect: "none",
  cursor: "grab",
  willChange: "transform",
};

const PILL_STYLE: React.CSSProperties = {
  ...BASE_BODY_STYLE,
  fontFamily: FONT_MONO,
  fontSize: 32,
  textTransform: "uppercase",
  color: "#000000",
  background: "#FAFAFA",
  border: "1px solid #8F8F8F",
  borderRadius: 999,
  padding: "20px 40px",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
};

const RECT_STYLE: React.CSSProperties = {
  ...BASE_BODY_STYLE,
  fontFamily: FONT_MONO,
  fontSize: 32,
  textTransform: "uppercase",
  color: "#000000",
  background: "#FAFAFA",
  border: "1px solid #8F8F8F",
  borderRadius: 15,
  padding: "20px 30px",
  whiteSpace: "nowrap",
};

const CIRCLE_STYLE: React.CSSProperties = {
  ...BASE_BODY_STYLE,
  width: 96,
  height: 96,
  borderRadius: 999,
  background: "#000000",
  padding: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const elDPD = useRef<HTMLDivElement>(null);
  const elPF = useRef<HTMLDivElement>(null);
  const elCiao = useRef<HTMLDivElement>(null);
  const elCC = useRef<HTMLDivElement>(null);
  const elPizza = useRef<HTMLDivElement>(null);
  const elCoder = useRef<HTMLDivElement>(null);
  const elArrow = useRef<HTMLDivElement>(null);
  const elAsterisk = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;

    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1 } });
    const { world } = engine;

    const wallT = 100;
    const wallOpts = { isStatic: true, friction: 0.5, restitution: 0.3 };
    Matter.World.add(world, [
      // floor
      Matter.Bodies.rectangle(W / 2, H - 20 + wallT / 2, W + wallT * 2, wallT, wallOpts),
      // left wall — rispetta margine 64px
      Matter.Bodies.rectangle(64 - wallT / 2, H / 2, wallT, H * 4, wallOpts),
      // right wall — rispetta margine 64px
      Matter.Bodies.rectangle(W - 64 + wallT / 2, H / 2, wallT, H * 4, wallOpts),
    ]);

    type BodyEntry = { body: Matter.Body; el: HTMLDivElement };
    const entries: BodyEntry[] = [];

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const makePill = (el: HTMLDivElement | null, startY: number) => {
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const x = rand(w / 2 + 80, W - w / 2 - 80);
      const body = Matter.Bodies.rectangle(x, startY, w, h, {
        chamfer: { radius: h / 2 - 1 },
        restitution: 0.3,
        friction: 0.4,
        frictionAir: 0.02,
        angle: rand(-0.3, 0.3),
      });
      Matter.World.add(world, body);
      entries.push({ body, el });
    };

    const makeRect = (el: HTMLDivElement | null, startY: number) => {
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const x = rand(w / 2 + 80, W - w / 2 - 80);
      const body = Matter.Bodies.rectangle(x, startY, w, h, {
        chamfer: { radius: 15 },
        restitution: 0.3,
        friction: 0.4,
        frictionAir: 0.02,
        angle: rand(-0.2, 0.2),
      });
      Matter.World.add(world, body);
      entries.push({ body, el });
    };

    const makeCircle = (el: HTMLDivElement | null, startY: number) => {
      if (!el) return;
      const r = 48;
      const x = rand(r + 80, W - r - 80);
      const body = Matter.Bodies.circle(x, startY, r, {
        restitution: 0.5,
        friction: 0.3,
        frictionAir: 0.01,
      });
      Matter.World.add(world, body);
      entries.push({ body, el });
    };

    makePill(elDPD.current, -80);
    makePill(elPF.current, -240);
    makeRect(elCiao.current, -380);
    makeRect(elCC.current, -160);
    makeCircle(elPizza.current, -320);
    makeCircle(elCoder.current, -120);
    makeCircle(elArrow.current, -420);
    makeCircle(elAsterisk.current, -60);

    const mouse = Matter.Mouse.create(container);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.World.add(world, mouseConstraint);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container.removeEventListener("wheel", (mouse as any).mousewheel);

    entries.forEach(({ el }) => {
      el.style.visibility = "visible";
    });

    let rafId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;
      Matter.Engine.update(engine, delta);

      entries.forEach(({ body, el }) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        el.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px) rotate(${angle}rad)`;
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  const scrollToDescription = () => {
    descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ width: "100%" }}>
      <style>{`
        @keyframes gradientShift {
  0%   { opacity: 1; }
  50%  { opacity: 0.7; }
  100% { opacity: 1; }
}
      `}</style>

      {/* Physics section */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: 520,
          overflow: "hidden",
        }}
      >
        <div ref={elDPD} style={PILL_STYLE}>
          DIGITAL PRODUCT DESIGNER
        </div>

        <div ref={elPF} style={PILL_STYLE}>
          <span
            style={{
              display: "inline-block",
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "#000000",
              marginRight: 10,
              flexShrink: 0,
            }}
          />
          PRODUCT FOCUSED
        </div>

        <div ref={elCiao} style={RECT_STYLE}>
          CIAO!
        </div>

        <div ref={elCC} style={RECT_STYLE}>
          CODE CURIOUS
        </div>

        <div ref={elPizza} style={CIRCLE_STYLE}>
          <span style={{ fontSize: 48, lineHeight: 1 }}>🍕</span>
        </div>

        <div ref={elCoder} style={CIRCLE_STYLE}>
          <span style={{ fontSize: 48, lineHeight: 1 }}>👨🏻‍💻</span>
        </div>

        <div ref={elArrow} style={CIRCLE_STYLE}>
          <ArrowDown color="#FFFFFF" size={48} />
        </div>

        <div ref={elAsterisk} style={CIRCLE_STYLE}>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 56,
              color: "#FFFFFF",
              lineHeight: 1,
            }}
          >
            *
          </span>
        </div>
      </div>

      {/* Name section */}
      <div style={{ width: "100%", overflow: "hidden", marginTop: 56 }}>
        <div
          style={{
            fontFamily: FONT_TIKTOK,
            fontSize: 160,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1,
            background: "linear-gradient(90deg, #434343, #000000)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 3s linear infinite",
          }}
        >
          DAVIDE SPATARO
        </div>
      </div>

      {/* Scroll button — centrato */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <button
          onClick={scrollToDescription}
          style={{
            fontFamily: FONT_TIKTOK,
            fontSize: 32,
            color: "#000000",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 0,
          }}
        >
          Scroll to see more
          <ArrowDown size={20} color="#000000" />
        </button>
      </div>

      {/* Description section */}
      <div
        ref={descriptionRef}
        style={{
          scrollMarginTop: 32,
          fontFamily: FONT_TIKTOK,
          fontSize: 40,
          color: "#000000",
          marginLeft: 64,
          marginBottom: 120,
          width: 500,
          marginTop: 120,
        }}
      >
        Digital Product Designer focused on crafting products with strong
        attention to detail.
      </div>
    </div>
  );
}
