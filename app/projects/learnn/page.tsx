"use client";

import ProjectHero from "@/components/portfolio/project-hero";
import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import ProjectIntro from "@/components/portfolio/project-intro";
import SectionBlock from "@/components/portfolio/section-block";
import FullWidthImage from "@/components/portfolio/full-width-image";
import TwoColumnMedia from "@/components/portfolio/two-column-media";


export default function LearnnPage() {
  return (
    <>
      <Header />
      <main>
      <ProjectHero
        role="DIGITAL PRODUCT DESIGNER"
        company="LEARNN"
        length="3 MONTHS"
        image="/images/learnn/learnn-project-cover.png"
        title="Learnn"
        titleSize={110}
      />
       <ProjectIntro
  whatIDid={
    <>
      I analyzed user flows across mobile web and app, identified critical usability issues and designed targeted UX/UI improvements in collaboration with the product and development teams.
      <br />
      My work focused on simplifying navigation, resolving interaction frictions, and enhancing the learning experience through both tactical fixes and more strategic feature design.
    </>
  }
  keyLearnings={[
    `Improving user experience often starts from removing friction, not adding features.
  Many impactful changes came from simplifying flows and resolving small but persistent issues.`,
  
    `Consistency across platforms is as important as single-interface quality.
  A good mobile experience requires rethinking patterns, not just adapting desktop ones.`,
  
    `Small UI interventions can strongly influence perceived product quality.
  Fixing layout conflicts and interaction details significantly improved users' trust in the platform.`
  ]}
/>
      <SectionBlock title="Overview.">
        <p>Learnn is an Italian platform offering online training aimed at helping individuals and companies grow in the digital sector. It provides more than 220 courses developed in collaboration with experts and teams from leading companies. The platform is used by a community of over 100,000 professionals and more than 300 companies, and is available on desktop, mobile web and iOS and Android apps.</p>
        <br />
          <p>At the time of this project, the main goal was to improve the usability and consistency of the mobile experience, which showed several friction points compared to desktop.</p>
          <br />
          <p>My contribution focused on identifying critical usability issues across platforms and proposing concrete design solutions to enhance clarity, accessibility and overall learning flow.</p>
<br />

<p>Shown below are selected fixes and improvements regarding:</p>
<ul className="list-disc list-inside">
  <li>Mobile navigation</li>
  <li>Header and layout issues</li>
  <li>Video player experience</li>
  <li>Early-stage gamification</li>
  <li>Learnn Expert section</li>
</ul>
      </SectionBlock>
      <FullWidthImage
        src="/images/learnn/learnn-flow.png"
        alt="Learnn project image"
        width={1920}
        height={1080}
        caption="Every journey starts with a map (or User flow!)"
      />

<SectionBlock title="Redesigning the mobile navigation.">
        <p>The mobile menu presented several usability issues that directly affected users’ ability to orient themselves and move across the platform.</p>
        <br />
          <p>Main problems included:</p>
<ul className="list-disc list-inside">
  <li>A desktop-like sidebar configuration not optimized for mobile usage</li>
  <li>Transparency and scrolling issues that allowed users to interact with content behind the menu, creating severe usability conflicts</li>
</ul>
<br />
          <p>Beyond fixing technical bugs, the navigation was restructured to better fit mobile behavior: only primary items are now visible at first level, while secondary items are placed inside expandable dropdowns.</p>
          <br />
          <p>This resulted in a cleaner, more predictable navigation experience.</p>
      </SectionBlock>
      <TwoColumnMedia
        left={{ src: "/images/learnn/menu-learnn-prima.mp4", alt: "Left image", caption: `Before: navigation issues on mobile webapp` }}
        right={{ src: "/images/learnn/menu-learnn-dopo.mp4", alt: "Right image", caption: `After: redesigned navigation` }}
      />
      </main>
     
      <Footer />
    </>
  );
}
