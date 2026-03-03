"use client";

import ProjectHero from "@/components/portfolio/project-hero";
import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import ProjectIntro from "@/components/portfolio/project-intro";


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
      </main>
     
      <Footer />
    </>
  );
}
