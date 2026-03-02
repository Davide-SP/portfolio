"use client";

import ProjectHero from "@/components/portfolio/project-hero";
import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";


export default function LearnnPage() {
  return (
    <>
      <Header />
      <main>
      <ProjectHero
        role="DIGITAL PRODUCT DESIGNER"
        company="LEARNN"
        length="3 MONTHS"
        image="/images/learnn-cover.png"
      />
      </main>
      
      <Footer />
    </>
  );
}
