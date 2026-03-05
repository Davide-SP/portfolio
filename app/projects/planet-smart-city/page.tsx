"use client";

import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import ProjectHero from "@/components/portfolio/project-hero";
import ProjectIntro from "@/components/portfolio/project-intro";
import SectionBlock from "@/components/portfolio/section-block";
import FullWidthImage from "@/components/portfolio/full-width-image";

export default function PlanetSmartCityPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectHero
          role="DIGITAL PRODUCT DESIGNER"
          company="PLANET SMART CITY"
          length="3 MONTHS"
          image="/images/planet/planet-cover.png"
          title="Smart Energy Management"
          titleSize={90}
        />
        <ProjectIntro
          whatIDid={<>
            I worked on the UX/UI design of the mobile experience of the Energy Management platform, contributing to user flows and interaction design for residents, while collaborating with the team working on the web dashboard.
            <br /><br />
            My contribution included shaping how complex energy data is presented and explored by different user profiles, from residents to facility managers, in collaboration with engineers and domain experts.
          </>}
          keyLearnings={[
            `Designing for data-heavy products requires prioritization more than simplification.
Making information usable often means deciding what not to show.`,
            `Clarity and hierarchy are more impactful than visual richness.
In complex dashboards, structure guides understanding more than decoration.`,
            `Sustainability becomes actionable only when made tangible through interfaces.
Turning abstract environmental data into meaningful insights is a core UX challenge.`
          ]}
        />
        <SectionBlock title="Overview.">
          <p >Planet Smart City partnered with EOT – Energy of Things to develop a cloud-based Energy Management platform aimed at helping smart neighbourhoods monitor, analyze and optimize energy consumption.</p>
          <p >The platform supports different user profiles, from residents to condominium administrators and facility managers, combining real-time data, predictive analytics and sustainability insights into a single system.</p>
          <p>My role focused on designing how these complex data streams could be translated into usable and meaningful experiences across web and mobile.</p>
        </SectionBlock>
        <SectionBlock title="Context & challenges.">
          <p>The project involved designing for a multi-stakeholder ecosystem, where users with very different needs had to interact with the same data infrastructure.</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
            <li>Supporting real-time monitoring while keeping interfaces readable</li>
            <li>Enabling both high-level overviews and detailed breakdowns</li>
            <li>Balancing economic insights with environmental impact indicators</li>
            <li>Making energy data understandable also for non-technical users</li>
          </ul>
          <p>This required a careful balance between analytical depth and everyday usability.</p>
        </SectionBlock>
        <FullWidthImage
          src="/images/planet/planet-sensori.webp"
          alt="Context and challenges"
          width={1920}
        height={1080}
        maxWidth="50%"
        caption=""
        />
        <SectionBlock title="Designing for complex data.">
          <p >A core focus of the project was defining how energy data could be structured, visualized and navigated across different levels of granularity.</p>
          <p >Rather than displaying raw metrics, the goal was to guide users through progressive layers of information: from high-level summaries to detailed consumption patterns and carbon footprint analysis.</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
            <li>Grouping related KPIs into meaningful clusters</li>
            <li>Highlighting trends and anomalies instead of isolated values</li>
            <li>Supporting comparisons across time, buildings and user groups</li>
          </ul>
        </SectionBlock>
        <FullWidthImage
          src="/images/planet/planet-energy-management-desktop.png"
          alt="Designing for complex data"
          width={1920}
        height={1080}
        maxWidth="80%"
        caption="Energy management desktop"
        />
        <SectionBlock title="UX & interaction principles.">
          <p>To support usability across such a complex system, a few core principles guided the design:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em"}}>
            <li>Progressive disclosure to avoid cognitive overload</li>
            <li>Consistent interaction patterns between web and mobile</li>
            <li>Visual hierarchy to prioritize what requires attention</li>
            <li>Actionable insights over passive reporting</li>
            <li>Accessibility and readability for non-expert users</li>
          </ul>
          <br />
          <p>These principles ensured that the platform remained approachable despite its technical nature.</p>
        </SectionBlock>
        <FullWidthImage
          src="/images/planet/planet-energy-management-mobile.png"
          alt="UX and interaction principles"
          width={1920}
        height={1080}
        maxWidth="70%"
        caption="Energy management mobile"
        />
        <SectionBlock title="Outcome.">
          <p>The platform is currently used in more than 80 residential districts worldwide, enabling proactive energy management and average consumption reductions of up to 15% within the first year.</p>
          <p>Administrators gain access to real-time alerts and exportable ESG KPIs, while residents can better understand their impact and adopt more sustainable behaviours.</p>
        </SectionBlock>
      </main>
      <Footer />
    </>
  );
}
