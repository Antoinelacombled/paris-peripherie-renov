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
                className={`relative flex flex-col md:flex-row md:items-center reveal mb-12 md:mb-16 p-4 rounded-lg transition-all duration-300 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Only */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-paris-navy to-paris-navy/80 text-white items-center justify-center z-10 shadow-lg shadow-paris-navy/20 group-hover:scale-110 transition-transform duration-300 step-number">
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? "md:pl-20" : "md:pr-20 md:text-right"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3 md:hidden">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-paris-navy to-paris-navy/80 text-white flex items-center justify-center shadow-lg step-number">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl text-paris-navy step-title">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="hidden md:block font-serif text-xl text-paris-navy mb-3 group-hover:text-paris-orange transition-colors duration-300 step-title">
                    {step.title}
                  </h3>
                  <p className="text-paris-grey leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Icon - Hidden on desktop since it's in the number circle */}
                <div className="md:hidden flex justify-center items-center py-4">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-paris-navy group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 step-icon">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center reveal">
            <div className="bg-gradient-to-r from-paris-navy to-paris-navy/90 rounded-2xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-4">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-paris-grey/90 mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et
                sans engagement.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-paris-orange hover:bg-paris-orange/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Démarrer mon projet</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

// faire une carte de saint mandé avec tous les chantiers fait dans saint mandé
