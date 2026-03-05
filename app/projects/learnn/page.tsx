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
<ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
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
<ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
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

      <SectionBlock title="Resolving header overflow issues.">
        <p>The mobile header generated frequent layout conflicts that negatively affected both readability and interaction.</p>
        <br />
          <p>The main causes were:</p>
<ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
  <li>The connected users widget overlapping with section titles</li>
  <li>The search bar opening to the right and pushing content out of view</li>
</ul>
<br />
          <p>The solution focused on reducing visual noise and restoring layout stability:</p>
          <br />
          <ul className="list-disc list-inside">
  <li>The widget was hidden in critical contexts</li>
  <li>The search bar was redesigned to open by covering the title, keeping the layout consistent and the user focused on the search task</li>
</ul>
<br />
<p>A small intervention with a high impact on perceived quality and usability.</p>
      </SectionBlock>

      <TwoColumnMedia
        left={{ src: "/images/learnn/learnn-overflow-prima.png", alt: "Left image", caption: `Before: header overflow and layout conflicts` }}
        right={{ src: "/images/learnn/learnn-overflow-dopo.png", alt: "Right image", caption: `After: restored layout stability` }}
      />

<SectionBlock title="Enhancing the video player experience.">
        <p>In an e-learning platform, the video player is the core of the user experience.
While the desktop version showed no major issues, the mobile experience was not aligned with users’ expectations shaped by modern streaming platforms.
</p>
        <br />
          <p>By analyzing patterns from leading services such as Netflix, YouTube, Domestika and MasterClass, and adapting them to Learnn’s learning context, we introduced several improvements:</p>
<ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
  <li>Relocating key controls directly onto the video surface for faster access</li>
  <li>Highlighting frequently used features such as transcripts and notes</li>
  <li>Reducing the prominence of less critical actions, like error reporting</li>
</ul>
<br />
          <p>Rather than replicating existing patterns, the goal was to create a player optimized for learning, not just for watching.</p>
      </SectionBlock>
      
      <TwoColumnMedia
        left={{ src: "/images/learnn/learnn-player-prima.png", alt: "Left image", caption: `Before: video player not optimized for mobile learning` }}
        right={{ src: "/images/learnn/learnn-player-dopo.png", alt: "Right image", caption: `After: controls redesigned for faster access and focus` }}
      />

<SectionBlock title="Learnn Expert: Structuring knowledge and interface.">
        <p>Learnn Expert is the section dedicated to showcasing instructors and their content, acting as a bridge between users and the educational value of the platform.</p>
        <br />
<p>My contribution focused on defining the basic information architecture and designing the UI for both:</p>
        <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
  <li>The main Expert hub</li>
  <li>Individual expert profile pages</li>
</ul>
<br />
          <p>The goal was to make content exploration intuitive and to clearly communicate each expert’s value and specialization.</p>
          <br />
          <p>From an information architecture perspective, the work involved:</p>
<ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
  <li>Structuring content hierarchies between experts, courses and categories</li>
  <li>Defining navigation patterns to move smoothly between educational topics and individual profiles</li>
  <li>Reducing cognitive load by grouping related information and prioritizing key elements</li>
</ul>
<br />
          <p>On the UI side, the focus was on:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
  <li>Creating a consistent visual language aligned with the rest of the platform</li>
  <li>Ensuring readability and visual hierarchy</li>
  <li>Supporting both content discovery and personal branding of each expert</li>
</ul>
<br />
<p>This section plays a key role in reinforcing Learnn’s credibility and in helping users choose what and who to learn from.</p>
      </SectionBlock>

      <TwoColumnMedia
        left={{ src: "/images/learnn/learnn-expert-1.png", alt: "Left image", caption: `` }}
        right={{ src: "/images/learnn/learnn-expert-2.png", alt: "Right image", caption: `` }}
      />

<SectionBlock title="Exploring gamification for long-term engagement.">
        <p>Beyond usability fixes, we explored how to increase long-term engagement through lightweight gamification.

At that stage, Learnn’s infrastructure was being upgraded to support richer behavioral data.
In parallel, we designed an MVP based on the available data to start validating engagement mechanisms early.</p>
        <br />
<p>The concept consists of a simple widget showing:</p>
        <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
  <li>User streaks</li>
  <li>Time remaining to maintain them</li>
  <li>A direct CTA to continue learning</li>
</ul>
<br />
          <p>For users who had not yet started a course, the widget redirects to the course catalog to encourage first engagement.
This approach allowed us to test motivational dynamics with minimal technical overhead.</p>
      </SectionBlock>

      <FullWidthImage
        src="/images/learnn/learnn-gamification.png"
        alt="Learnn project image"
        width={1920}
        height={1080}
        caption="Gamification widgets"
        maxWidth="70%"
      />

      </main>
     
      <Footer />
    </>
  );
}
