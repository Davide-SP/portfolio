"use client";

import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import PageTitle from "@/components/portfolio/page-title";
import SectionBlock from "@/components/portfolio/section-block";
import MediaGrid from "@/components/portfolio/media-grid";
import FeaturedMedia from "@/components/portfolio/featured-media";

export default function CreativeCodingPage() {
  return (
    <>
      <Header />
      <main>
        <PageTitle line1="CREATIVE" line2="CODING" />
        <SectionBlock title="Overview.">
          <p>I discovered my passion for creative coding while learning Arduino, p5.js and exploring the fundamentals of JavaScript as a self-learner. Through experimentation and playful projects, I developed a strong interest in interactive visuals and generative art.</p>
          <br />
          <p>Alongside this, I also have a basic understanding of HTML and CSS, which allows me to build web experiences that combine both creativity and structure.</p>
          <br />
          <p><span style={{ fontWeight: 600 }} >Disclaimer: </span>Some Interaction sketches may not load due to high memory use, but each can be viewed on a dedicated page via the link below its description!</p>
        </SectionBlock>
        <MediaGrid
          title="Interaction."
          items={[
            {
              type: "iframe",
              src: "https://davide-sp.github.io/p5-sketches/switch/",
              caption: "A playful interactive button. The square changes color when hovered and toggles the background palette each time you click it.",
              fallbackHref: "https://davide-sp.github.io/p5-sketches/switch/"
            },
            {
              type: "iframe",
              src: "https://davide-sp.github.io/p5-sketches/random-painter/",
              caption: "An interactive painter where colors vary subtly around a chosen theme, creating soft brush strokes.",
              fallbackHref: "https://davide-sp.github.io/p5-sketches/random-painter/"
            },
            {
              type: "iframe",
              src: "https://davide-sp.github.io/p5-sketches/bubble-storm/",
              caption: "A playful bubble system where each click spawns a new moving bubble that bounces off the edges.",
              fallbackHref: "https://davide-sp.github.io/p5-sketches/bubble-storm/"
            },
            {
              type: "iframe",
              src: "https://davide-sp.github.io/p5-sketches/overlapping/",
              caption: "A group of bubbles that move randomly and change color when they overlap.",
              fallbackHref: "https://davide-sp.github.io/p5-sketches/overlapping/"
            },
            {
              type: "iframe",
              src: "https://davide-sp.github.io/p5-sketches/walker-mouse/",
              caption: "A simple walker that follows the mouse direction half of the time and moves randomly the other half.",
              fallbackHref: "https://davide-sp.github.io/p5-sketches/walker-mouse/"
            },
            {
              type: "iframe",
              src: "https://davide-sp.github.io/p5-sketches/grow-rotation/",
              caption: "A rotating rectangle that changes its rotation direction when reaching the canvas edges.",
              fallbackHref: "https://davide-sp.github.io/p5-sketches/grow-rotation/"
            },
          ]}
        />
<div className="hidden md:block">
<FeaturedMedia 
      type= "iframe"
      src="https://davide-sp.github.io/p5-sketches/good-morning/"
      caption= "A wave distortion experiment, type any text and watch it ripple through a sine-based tile displacement."
      fallbackHref= "https://davide-sp.github.io/p5-sketches/good-morning/"
/>
</div>


        <MediaGrid
          title="Animation gallery."
          items={[
            { type: "video", src: "/images/coding/0123.mp4" },
            { type: "video", src: "/images/coding/aaaa.mp4" },
            { type: "video", src: "/images/coding/ooo.mp4" },
            { type: "video", src: "/images/coding/grow.mp4" },
            { type: "video", src: "/images/coding/ritmo.mp4" },
            { type: "video", src: "/images/coding/loop-squares.mp4" },
          ]}
        />

<SectionBlock title="Exploring Arduino.">
  <p>As part of my creative coding exploration, I built a simple system to control an RGB LED via Arduino and Serial Monitor. Users can input values from 0 to 255 for each color channel, experimenting with color combinations in real time.</p>
    <br />
    <p>The project introduced me to serial communication and PWM, two core concepts in embedded programming, and reinforced my interest in the connection between physical hardware and software interaction.</p>
</SectionBlock>

<FeaturedMedia 
      type= "video"
      src="/images/coding/arduino-led.mp4"
      
/>
      </main>
      <Footer />
    </>
  );
}
