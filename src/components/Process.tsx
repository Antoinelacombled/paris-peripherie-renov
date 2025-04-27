
import React, { useRef, useEffect } from 'react';
import { Phone, FileText, Clipboard, Home } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      title: 'Consultation',
      description: 'Discutons de votre projet. Nous définissons vos besoins et vos objectifs pour votre rénovation.',
      icon: Phone
    },
    {
      title: 'Visite technique',
      description: 'Nous examinons votre espace pour évaluer les travaux nécessaires et identifier les contraintes techniques.',
      icon: Clipboard
    },
    {
      title: 'Devis détaillé',
      description: 'Nous vous fournissons un devis transparent et détaillé, avec toutes les étapes du projet clairement définies.',
      icon: FileText
    },
    {
      title: 'Réalisation',
      description: 'Notre équipe d'artisans exécute votre projet avec précision et dans le respect des délais convenus.',
      icon: Home
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="section-padding bg-paris-light">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Notre processus</h2>
          <p className="text-paris-grey text-lg">
            Un processus clair et efficace pour transformer votre projet en réalité, de la première conversation à la livraison finale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-paris-navy/20 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row md:items-center reveal mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-paris-navy text-white items-center justify-center font-bold text-xl z-10">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 rounded-full bg-paris-navy text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-serif text-2xl text-paris-navy">{step.title}</h3>
                  </div>
                  <h3 className="hidden md:block font-serif text-2xl text-paris-navy mb-4">{step.title}</h3>
                  <p className="text-paris-grey">{step.description}</p>
                </div>
                
                {/* Icon */}
                <div className="md:w-2/12 flex justify-center items-center py-6 md:py-0">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-paris-navy">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Empty Space for Alignment */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
