import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Expertise from "@/components/Expertise";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import ArtisanSignature from "@/components/ArtisanSignature";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title =
      "Paris Périphérie Rénovation | Rénovation de prestige à Paris";

    // Reveal animations on scroll
    const handleRevealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal:not(.active)");
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 100) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleRevealOnScroll);
    handleRevealOnScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleRevealOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Expertise />
      {/* <BeforeAfter /> */}
      <Testimonials />
      <Gallery />
      <Process />
      <ContactCTA />
      <ArtisanSignature />
      <Footer />
    </div>
  );
};

export default Index;
