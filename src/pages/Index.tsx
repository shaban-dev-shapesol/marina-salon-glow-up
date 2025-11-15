import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Cafe } from "@/components/Cafe";
import { InstagramSection } from "@/components/InstagramSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChristmasPromoPopup } from "@/components/ChristmasPromoPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <ChristmasPromoPopup />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Gallery />
        <Cafe />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
