"use client";

import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import ProjectHero from "@/components/portfolio/project-hero";
import ProjectIntro from "@/components/portfolio/project-intro";
import SectionBlock from "@/components/portfolio/section-block";
import FullWidthImage from "@/components/portfolio/full-width-image";
import TwoColumnMedia from "@/components/portfolio/two-column-media";

export default function FlyingTigerPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectHero
          role="VISUAL / UI DESIGNER"
          company="DJUNGLE STUDIO"
          length="/"
          image="/images/tiger/tiger-cover.png"
          title="Flying Tiger Copenaghen"
          titleSize={90}
        />
        <ProjectIntro
          whatIDid={<>
            I worked on the UI design of the Italian Flying Tiger Copenhagen loyalty app, focusing on creating engaging interfaces within the constraints of an existing Design System.
            <br /><br />
            My contribution included designing visual components for gamified features such as missions, rewards, notifications and leaderboards, in close collaboration with developers to ensure visual consistency and feasibility.
          </>}
          keyLearnings={[
            `Designing within a Design System requires both creativity and discipline.
Working with constraints helped me focus on consistency without sacrificing visual character.`,
            `Gamification is as much about clarity as it is about playfulness.
Visual engagement only works when rules, progress and rewards are immediately understandable.`,
            `UI quality strongly shapes how a product is perceived, even in small features.
Micro-interactions and visual polish played a major role in how users experienced the app.`
          ]}
        />
        <SectionBlock title="Overview.">
          <p>I contributed to the development of the Italian Flying Tiger Copenhagen loyalty app, working on the design of several user interface components within an established Design System.</p>
          <br />
          <p>The goal of the project was to enhance user engagement through playful and gamified interactions, while maintaining full consistency with the brand's visual identity and technical constraints.</p>
          <br />
          <p>My work focused primarily on:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
            <li>Missions and rewards UI</li>
            <li>User progression and levels</li>
            <li>Leaderboard and sharing features</li>
            <li>In-app notifications and surveys</li>
          </ul>
          <br />
          <p>This project deepened my approach to designing within established design systems and collaborating closely with development teams to ensure visual consistency at scale.</p>
        </SectionBlock>
        <FullWidthImage
          src="/images/tiger/tiger-1.png"
          alt="Flying Tiger app screens"
          maxWidth="50%"
          caption="Users leaderboard and Share code page"
          width={1920}
          height={1080}
        />

<SectionBlock title="Outcome.">
          <p>The app reached 190k downloads and +40% purchase frequency across 60+ Italian stores, supported by the gamification features and engagement mechanics designed during this project.</p>
          
        </SectionBlock>
        <FullWidthImage
          src="/images/tiger/tiger-2.png"
          alt="Flying Tiger app screens"
          maxWidth="50%"
          caption="Missions list and Product survey"
          width={1920}
          height={1080}
        />
        
      </main>
      <Footer />
    </>
  );
}
