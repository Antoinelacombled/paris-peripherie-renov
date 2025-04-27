
import React, { useEffect, useRef } from 'react';
import { Home, Building, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
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
    <section id="expertise" ref={sectionRef} className="section-padding bg-paris-light">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Notre Expertise</h2>
          <p className="text-paris-grey text-lg">
            Spécialistes de la rénovation complète dans Paris et sa périphérie, nous transformons les espaces avec précision et raffinement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Apartments */}
          <div className="reveal bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop" 
                alt="Rénovation d'appartement à Paris" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-paris-navy bg-opacity-40 flex items-center justify-center">
                <Home className="text-white w-12 h-12" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl mb-4 text-paris-navy">Appartements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Optimisation d'espace dans des appartements hausmanniens</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Rénovation complète avec conservation du caractère</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Modernisation des installations techniques</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Houses */}
          <div className="reveal bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493809842264-78d144b428f6?q=80&w=2070&auto=format&fit=crop" 
                alt="Rénovation de maison en périphérie parisienne" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-paris-navy bg-opacity-40 flex items-center justify-center">
                <Building className="text-white w-12 h-12" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl mb-4 text-paris-navy">Maisons</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Extension et réaménagement d'espaces de vie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Rénovation énergétique performante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Création d'aménagements extérieurs harmonieux</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Commercial */}
          <div className="reveal bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=2070&auto=format&fit=crop" 
                alt="Rénovation d'espace commercial parisien" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-paris-navy bg-opacity-40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl mb-4 text-paris-navy">Espaces Commerciaux</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Transformation de boutiques et d'espaces professionnels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Aménagement fonctionnel et esthétique</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-paris-accent mt-0.5 w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Mise en conformité technique et accessibilité</span>
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
