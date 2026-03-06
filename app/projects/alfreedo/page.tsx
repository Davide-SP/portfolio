"use client";

import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import ProjectHero from "@/components/portfolio/project-hero";
import ProjectIntro from "@/components/portfolio/project-intro";
import SectionBlock from "@/components/portfolio/section-block";
import FullWidthImage from "@/components/portfolio/full-width-image";
import TwoColumnMedia from "@/components/portfolio/two-column-media";
import QuoteBlock from "@/components/portfolio/quote-block";
import ScrollingImage from "@/components/portfolio/scrolling-image";

export default function AlfreeedoPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectHero
          role="UX/UI & SERVICE DESIGNER"
          company="DJUNGLE STUDIO"
          length="3 MONTHS"
          image="/images/alfreedo/alfreedo-cover.png"
          title="Alfreedo"
          titleSize={110}
        />
        <ProjectIntro
          whatIDid={<>
            I worked across the entire design process, from early research and concept definition to UX flows, UI design and experiment setup.
            <br /><br />
            I was directly involved in user research, service concept, interface design, and in defining and analyzing the desirability tests.
          </>}
          keyLearnings={[
            `Service perception is shaped by interaction models, not only by features.
Even small changes in how users get in touch with a service can radically affect trust and engagement.`,
            `Tone of voice is a design tool, not just a branding choice.
The way a service speaks can either reduce or amplify perceived complexity and distance.`,
            `Testing assumptions early beats refining solutions in isolation.
Lightweight experiments provided clearer direction than improving unvalidated concepts.`
          ]}
        />
        <SectionBlock title="Overview.">
          <p>Alfreedo explores a virtual assistance service designed to simplify the delegation of bureaucratic procedures, giving users back valuable time in their daily lives. The core idea is straightforward: provide all the necessary information once, and no longer deal directly with the complexity of the Italian bureaucracy.</p>
          <br />
          <p>For the initial discovery phase, we focused on a specific niche that we believed could benefit the most from the service: expats. We aimed to answer a few key questions: Is this service truly attractive to users? How much are they willing to pay? Which services are most in demand and which ones can actually be delegated?</p>
          <br />
          <p>To quickly collect feedback and insights, we designed a series of lightweight experiments using simple tools to engage with users: landing pages, instant messaging services and social networks.</p>
          <br />
          <p>The information presented below is intentionally focused on the development of the main interface and on the desirability tests, which were the core drivers of the project.</p>
        </SectionBlock>
        <SectionBlock title="Research and users' pains.">
          <p>The market currently offers fragmented solutions, mostly composed of players focused on isolated vertical services such as taxes, incentives, insurance or legal practices.</p>
          <br />
          <p>Institutional websites also present several critical issues:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>Complex information architectures</li>
            <li>Difficulty in quickly finding clear instructions</li>
            <li>The need for external support to correctly interpret the information</li>
          </ul>
          <br />
          <p>Beyond these structural problems, research and qualitative interviews highlighted a deeper issue: users do not only struggle with complexity, but with the fear of misunderstanding procedures and wasting time or money.</p>
          <br />
          <p>Some significant insights from our research include:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>More than 1 in 3 people experience problems using Public Administration apps, websites or services <span style={{ fontSize: 14, fontStyle: "italic" }}>— Source: ISTAT 2022</span></li>
            <li>40% of employed people declare having moderate or severe difficulties in reconciling daily commitments with office hours <span style={{ fontSize: 14, fontStyle: "italic" }}>— Source: ISTAT 2014</span></li>
          </ul>
        </SectionBlock>
        <FullWidthImage
          src="/images/alfreedo/alfreedo-ricerca.png"
          alt="Research"
          maxWidth="50%"
          width={1920}
          height={1080}
        />
        <QuoteBlock
          quote='"So, can we design a paperwork delegation service where users only provide the necessary documents and then step away from the process without stress?"'
          subtext="Mmm... sounds good, let's start experimenting!"
        />
        <SectionBlock title="Branding.">
          <p>Branding was not conceived as a purely aesthetic exercise, but as a response to one of the main needs emerging from research: trust and accessibility.</p>
          <br />
          <p>Let's start with the name. Why Alfreedo? If you think of a loyal assistant, Alfred, Batman's iconic butler, naturally comes to mind. We added a playful reference to "Fettuccine Alfredo", symbol of the Italian spirit abroad, and linked both to a fundamental concept of the service: freedom from bureaucracy.</p>
          <br />
          <p>In order to communicate a fresh and simple service, we deliberately distanced the brand from the rigidity of traditional bureaucratic services, aiming for a friendlier and more approachable tone.</p>
          <br />
          <p>This translated visually into:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>A friendly logo emphasizing the word "free"</li>
            <li>A minimal yet engaging color palette</li>
            <li>Warm and accessible typography</li>
          </ul>
        </SectionBlock>
        <FullWidthImage
          src="/images/alfreedo/alfreedo-logo.png"
          alt="Alfreedo branding"
          width={1920}
          height={1080}
        />
        <TwoColumnMedia
          left={{
            src: "/images/alfreedo/alfreedo-color-palette.png",
            alt: "Alfreedo branding detail"
          }}
          right={{
            src: "/images/alfreedo/alfreedo-typography.png",
            alt: "Alfreedo branding detail"
          }}
        />
        <SectionBlock title="Experiment 1: Testing Value Proposition.">
          <p>How could we communicate our value proposition to reach potential users?</p>
          <p>As mentioned in the overview, we initially focused on foreign users, assuming that dealing with Italian bureaucracy would be even more challenging for them than for local users.</p>
          <br />
          <p>We opened Alfreedo's profiles on social networks, using light-hearted visuals and copy to create sponsored ads directing users to a landing page. The goal was to collect contacts and understand the type of problems users wanted help with through a form.</p>
          <br />
          <p>Results:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>€1000 in ads</li>
            <li>5000 page views</li>
            <li>1 contact</li>
          </ul>
          <br />
          <p>At this stage, desirability was not validated. However, rather than considering this a failure, we treated it as a signal: the problem was not necessarily the lack of interest in the service, but the way we were presenting and delivering it.</p>
        </SectionBlock>
        <TwoColumnMedia
          left={{
            src: "/images/alfreedo/alfreedo-MVP-1.png",
            alt: "Experiment 1 ads"
          }}
          right={{
            src: "/images/alfreedo/alfreedo-MVP-1.png",
            alt: "Experiment 1 ads"
          }}
        />
        <ScrollingImage
          src="/images/alfreedo/alfreedo-versione-1.png"
          alt="Alfreedo landing page"
          width={5760}
          height={16936}
          caption="Alfreedo landing page"
          scrollHint={true}
        />
        <SectionBlock title="Experiment 2: Iterating on tone and interaction.">
          <p>Based on the first experiment, we hypothesized that both tone of voice and perceived distance from the service were limiting user engagement.</p>
          <br />
          <p>We made two key changes.</p>
          <br />
          <p>First, we redesigned the page with a more competent and reliable tone, highlighting the potential of the service through realistic mockups rather than abstract promises.</p>
          <br />
          <p>Second, we changed the interaction model. We shifted from email-based contact, which felt slow and distant, to direct interaction through popular instant messaging apps. This allowed us to reduce friction and position Alfreedo as something closer to a real personal assistant rather than a traditional service platform.</p>
          <br />
          <p>Results:</p>
          <ul className="list-disc list-inside" style={{ lineHeight: "1.2em" }}>
            <li>€400 in ads</li>
            <li>66 leads</li>
            <li>2 transactions</li>
          </ul>
          <br />
          <p>Desirability was validated!</p>
        </SectionBlock>
        <ScrollingImage
          src="/images/alfreedo/alfreedo-versione-1.png"
          alt="Alfreedo first version"
          width={5760}
          height={16936}
          caption="Alfreedo first version"
          scrollHint={true}
        />
        <ScrollingImage
          src="/images/alfreedo/alfreedo-versione-1.png"
          alt="Alfreedo second version"
          width={5760}
          height={21488}
          caption="Alfreedo second version"
          scrollHint={true}
        />
        <SectionBlock title='"Thanks Alfreedo".'>
          <p>Throughout the different stages of Alfreedo's development, we were able to validate its desirability through concrete feedback, which continuously informed the evolution of the service.</p>
          <br />
          <p>At the same time, we worked on refining internal procedures, such as defining which data to request, how to interact with users and how to coordinate with stakeholders, in order to make the service operationally sustainable.</p>
          <br />
          <p>Following these iterations, we decided to open the service to Italian users as well, allowing us to compare behaviors and gain a more complete view of the service potential.</p>
          <br />
          <p>For me, Alfreedo was not only about designing an interface, but about learning how to design and validate a service through hypotheses, experiments and real user interaction.</p>
        </SectionBlock>
        <FullWidthImage
          src="/images/alfreedo/alfreedo-thanks.png"
          alt="Alfreedo final screens"
          width={1920}
          height={1080}
        />
      </main>
      <Footer />
    </>
  );
}
