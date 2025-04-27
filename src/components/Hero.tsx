
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const sloganRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sloganRef.current) {
      setTimeout(() => {
        sloganRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 500);
    }

    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 800);
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-paris-navy bg-opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto container-padding text-white">
        <div className="max-w-3xl">
          {/* Slogan */}
          <div 
            ref={sloganRef}
            className="opacity-0 -translate-y-8 transition-all duration-1000 ease-out transform mb-8"
          >
            <p className="font-cursive text-2xl sm:text-3xl md:text-4xl text-paris-orange italic mb-2">
              "Une chose vaut la peine d'être faite, que si elle est bien faite."
            </p>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out transform"
          >
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Rénovation de prestige <br />pour votre espace parisien
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Transformez votre bien immobilier avec l'excellence artisanale 
              d'une entreprise qui valorise la précision, la qualité et l'engagement.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Consultation gratuite
              </a>
              <a href="#projects" className="btn-secondary border-white text-white hover:bg-white hover:text-paris-navy">
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
