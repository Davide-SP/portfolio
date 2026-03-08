"use client";

import Header from "@/components/portfolio/header";
import PageTitle from "@/components/portfolio/page-title";
import SelectedWorks from "@/components/portfolio/selected-works";
import Footer from "@/components/portfolio/footer";

export default function SelectedWorksPage() {
  return (
    <>
      <Header />
      <PageTitle line1="SELECTED" line2="WORKS" />
      <SelectedWorks showTitle={false} />
      <Footer />
    </>
  );
}
