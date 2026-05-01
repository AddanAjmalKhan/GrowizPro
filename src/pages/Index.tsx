import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { BuiltFor } from "@/components/site/BuiltFor";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Results } from "@/components/site/Results";
import { Verticals } from "@/components/site/Verticals";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";


function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <BuiltFor />
        <Services />
        <Process />
        <WhyUs />
        <Results />
        <Verticals />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


export default function PageWithTitle() {
  useEffect(() => { document.title = "GrowizPro — Execution Service Partner for B2B GTM"; }, []);
  return <Index />;
}
