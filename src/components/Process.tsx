import React, { useRef, useEffect } from "react";
import { Phone, FileText, Clipboard, Home, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("active");
              }, i * 200);
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      if (!step) return;

      // Animation des éléments internes
      const number = step.querySelector(".step-number");
      const title = step.querySelector(".step-title");

      if (number && title) {
        gsap.to([number, title], {
          scrollTrigger: {
            trigger: step,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          color: "#FF6B35", // paris-orange
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const steps = [
    {
      title: "Consultation",
      description:
        "Discutons de votre projet. Nous définissons vos besoins et vos objectifs pour votre rénovation.",
      icon: Phone,
    },
    {
      title: "Visite technique",
      description:
        "Nous examinons votre espace pour évaluer les travaux nécessaires et identifier les contraintes techniques.",
      icon: Clipboard,
    },
    {
      title: "Devis détaillé",
      description:
        "Nous vous fournissons un devis transparent et détaillé, avec toutes les étapes du projet clairement définies.",
      icon: FileText,
    },
    {
      title: "Réalisation",
      description:
        "Notre équipe d'artisans exécute votre projet avec précision et dans le respect des délais convenus.",
      icon: Home,
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-paris-light"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto mb-20 reveal">
          <h2 className="section-title relative inline-block">
            Notre processus
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
          </h2>
          <p className="text-paris-grey text-lg mt-3 leading-relaxed">
            Un processus clair et efficace pour transformer votre projet en
            réalité, de la{" "}
            <span className="font-medium text-paris-navy relative">
              première conversation
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-paris-orange/30"></span>
            </span>{" "}
            à la livraison finale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-paris-navy/40 via-paris-navy/20 to-paris-navy/40 transform -translate-x-1/2"></div>

            {/* Steps */}
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={`relative flex flex-col md:flex-row md:items-center reveal mb-16 md:mb-24 p-6 rounded-lg transition-all duration-300 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-paris-navy text-white items-center justify-center font-bold text-xl z-10 shadow-lg shadow-paris-navy/20 group-hover:scale-110 transition-transform duration-300 step-number">
                  {index + 1}
                </div>

                {/* Content */}
                <div
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-12 h-12 rounded-full bg-paris-navy text-white flex items-center justify-center font-bold shadow-lg step-number">
                      {index + 1}
                    </div>
                    <h3 className="font-serif text-2xl text-paris-navy step-title">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="hidden md:block font-serif text-2xl text-paris-navy mb-4 group-hover:text-paris-orange transition-colors duration-300 step-title">
                    {step.title}
                  </h3>
                  <p className="text-paris-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="md:w-2/12 flex justify-center items-center py-6 md:py-0">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-paris-navy group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 step-icon">
                    <step.icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <button className="inline-flex items-center gap-2 text-paris-navy font-medium hover:text-paris-orange transition-colors group">
              <span>Démarrer votre projet</span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
