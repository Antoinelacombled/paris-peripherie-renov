import React, { useEffect, useRef } from "react";
import { Home, Building, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="section-padding bg-paris-light"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto mb-20 reveal">
          <h2 className="section-title relative inline-block">
            Notre Expertise
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
          </h2>
          <p className="text-paris-grey text-lg mt-3 leading-relaxed">
            Spécialistes de la rénovation complète dans Paris et sa périphérie,
            nous transformons les espaces avec{" "}
            <span className="font-medium text-paris-navy relative">
              précision et raffinement
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-paris-orange/30"></span>
            </span>
            .
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Apartments */}
          <div className="reveal bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/apt_1.jpeg"
                alt="Rénovation d'appartement à Paris"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-paris-navy/60 to-paris-navy/80 flex items-center justify-center">
                <Home className="text-white w-14 h-14 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-6 text-paris-navy group-hover:text-paris-orange transition-colors duration-300">
                Appartements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Optimisation d'espace
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Rénovation complète
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Modernisation des installations techniques
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Houses */}
          <div className="reveal bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Rénovation de maison en périphérie parisienne"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-paris-navy/60 to-paris-navy/80 flex items-center justify-center">
                <Building className="text-white w-14 h-14 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-6 text-paris-navy group-hover:text-paris-orange transition-colors duration-300">
                Maisons
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Extension et réaménagement
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Rénovation énergétique
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Création d'aménagements harmonieux
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Commercial */}
          <div className="reveal bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/espace.jpeg"
                alt="Rénovation d'espace commercial parisien"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-paris-navy/60 to-paris-navy/80 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white transform group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                </svg>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-6 text-paris-navy group-hover:text-paris-orange transition-colors duration-300">
                Espaces Commerciaux
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Transformation d'espaces
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Aménagement fonctionnel
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-3 flex-shrink-0 group-hover/item:text-paris-orange transition-colors duration-300" />
                  <span className="text-paris-grey group-hover/item:text-paris-navy transition-colors duration-300">
                    Mise en conformité et accessibilité
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
