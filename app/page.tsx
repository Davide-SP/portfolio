import Header from "@/components/portfolio/header";
import SelectedWorks from "@/components/portfolio/selected-works";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SelectedWorks />
      </main>
      <Footer />
    </>
  );
}
