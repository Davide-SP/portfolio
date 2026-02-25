import Header from "@/components/portfolio/header";
import Hero from "@/components/portfolio/hero";
import SelectedWorks from "@/components/portfolio/selected-works";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWorks />
      </main>
      <Footer />
    </>
  );
}
