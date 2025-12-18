import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Expertise from "@/components/Expertise";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import ArtisanSignature from "@/components/ArtisanSignature";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";

const Index = () => {
  useEffect(() => {
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

  // FAQ Schema.org data
  const faqSchema = [
    {
      "@type": "Question",
      "name": "Quels types de travaux de rénovation réalisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous sommes une entreprise tous corps d'état, capable de gérer l'intégralité de votre projet de rénovation. De la plomberie à l'électricité, en passant par la menuiserie, la peinture, le carrelage et l'aménagement sur mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous uniquement à Paris ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intervenons principalement à Paris et dans toute l'Île-de-France (92, 93, 94, 95). Pour des projets d'envergure, nous pouvons également nous déplacer dans toute la France et en Suisse."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <SchemaOrg type="LocalBusiness" />
      <SchemaOrg type="FAQPage" data={faqSchema} />

      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Expertise />
      {/* <BeforeAfter /> */}
      <Testimonials />
      <Gallery />
      <Process />
      <ContactCTA />
      <FAQ />
      <ArtisanSignature />
      <Footer />
    </div>
  );
};

export default Index;
