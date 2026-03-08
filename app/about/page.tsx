"use client";

import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import PageTitle from "@/components/portfolio/page-title";
import AboutHero from "@/components/portfolio/about-hero";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageTitle line1="DAVIDE" line2="SPATARO" />
        <AboutHero
          src="/images/about/davide-spataro.jpeg"
          alt="Davide Spataro"
          imageWidth="400px"
          textWidth="450px"
        >
          <p>Hi, I'm Davide, a Digital Product Designer from Italy 🤌</p>
          <br />
          <p>My passion for design started as a kid building endless Lego sets. During my design studies, Don Norman's The Design of Everyday Things sparked my interest in UX and helped me understand how design can shape everyday experiences.</p>
          <br />
          <p>After my Master's degree, I began working in startups, where I learned to balance speed with quality. These experiences also sparked my interest in implementation, leading me to expand my skills in web programming and creative coding.</p>
          <br />
          <p>A few fun facts:</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2em", lineHeight: "1.2em" }}>
            <li>I love design. Except for job titles, there's a new one every month</li>
            <li>I'm always reading something new, good for my work and my bookshelf</li>
            <li>Precision and curiosity guide everything I do</li>
            <li>I practice Calisthenics, just to make up for dinners with friends</li>
            <li>In order not to lose too much IQ during training, I'm learning to play chess</li>
            <li>Always up to date on memes, probably the only reason I'm still on social media</li>
          </ul>
        </AboutHero>
      </main>
      <Footer />
    </>
  );
}
