"use client";

import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import ProjectHero from "@/components/portfolio/project-hero";
import ProjectIntro from "@/components/portfolio/project-intro";
import SectionBlock from "@/components/portfolio/section-block";
import FullWidthImage from "@/components/portfolio/full-width-image";
import TwoColumnMedia from "@/components/portfolio/two-column-media";

export default function OwlsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectHero
          role="DIGITAL PRODUCT DESIGNER"
          company="DJUNGLE STUDIO"
          length="3 MONTHS"
          image="/images/owls/owls-1.png"
          title="Owls"
          titleSize={110}
        />
        <ProjectIntro
          whatIDid={<>
            I worked on the product design of Owls Tonight from concept to MVP, contributing to the definition of the user experience, key flows and core interactions.
            <br /><br />
            My role included shaping the app's main features, designing the interface and collaborating with developers throughout an agile process with weekly releases and continuous iteration.
          </>}
          keyLearnings={[
            `Temporal constraints can become a powerful design driver.
Designing around time-bound interactions helped shape both features and user behavior.`,
            `Social experiences require clear boundaries as much as freedom.
Ephemerality and limited duration were crucial to maintaining authenticity and safety.`,
            `Iterating quickly with real users is essential for early-stage products.
Weekly releases and testing guided decisions more than initial assumptions.`
          ]}
        />
        <SectionBlock title="Overview.">
          <p>Owls Tonight is an MVP-phase mobile application available on both iOS and Android, designed as a time-based social platform built around nightlife experiences.</p>
          <br />
          <p>The app is structured around a dual nature:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>during the day, users explore upcoming events through a calendar experience</li>
            <li>at night, the app transforms into a temporary social network tied to real-life moments</li>
          </ul>
          <br />
          <p>The goal of the project was to explore how temporality and ephemerality could shape a more authentic and lightweight social experience, while testing the viability of such a model through a real MVP released to the market.</p>
        </SectionBlock>
        <SectionBlock title="Product concept: a social network that exists only at night.">
          <p>Owls Tonight was conceived around a simple but strong idea: a social network that only exists during the night. Users can share short 5-second videos called "shots", interact with friends, and engage with content that disappears at the end of the evening.</p>
          <br />
          <p>This temporal constraint was not just a technical feature, but a core design choice aimed at:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>encouraging spontaneity</li>
            <li>reducing performance anxiety</li>
            <li>avoiding long-term content accumulation</li>
            <li>reinforcing the connection between digital and physical experiences</li>
          </ul>
        </SectionBlock>
        <FullWidthImage
          src="/images/owls/owls-3.png"
          maxWidth="50%"
          alt="Owls product concept"
          width={1920}
          height={1080}
        />
        <SectionBlock title="User flow.">
          <p>The user flow below shows how users move from discovering events during the day to engaging in social interactions during the night.</p>
          <p>It highlights the transition between the two modes of the app and the core actions available in each phase.</p>
        </SectionBlock>
        <FullWidthImage
          src="/images/owls/owls-user-flow.png"
          alt="Owls user flow"
          width={1920}
          height={1080}
        />
        <SectionBlock title="Selected screens and interactions.">
          <p>These screens illustrate how the product concept translates into interface design across both daytime and nighttime experiences.</p>
          <br />
          <p>During the day, the interface supports event discovery and anticipation through a calendar-based experience and a countdown to the upcoming night, helping users understand what will happen and when.</p>
          <br />
          <p>At night, the UI shifts towards immediacy and social interaction, prioritizing quick content creation, lightweight navigation and fast access to friends and shared moments.</p>
        </SectionBlock>
        

<TwoColumnMedia
        left={{ src: "/images/owls/owls-1.png", alt: "Owls daytime screens", caption: `Daytime screens` }}
        right={{ src: "/images/owls/owls-2.png", alt: "Owls nighttime screens", caption: `Nighttime screens` }}
      />
      </main>
      <Footer />
    </>
  );
}
