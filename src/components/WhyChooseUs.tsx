
import React, { useEffect, useRef } from 'react';
import { Shield, CheckCircle, Clock } from 'lucide-react';
import { cn } from "@/lib/utils";

const WhyChooseUs = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Pourquoi nous choisir</h2>
          <p className="text-paris-grey text-lg">
            Notre philosophie est simple mais puissante: <span className="font-medium text-paris-navy">rénover une fois, rénover bien</span>. 
            Nous croyons profondément que chaque projet mérite une attention méticuleuse et un engagement sans faille.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col items-center text-center reveal">
            <div className="p-4 rounded-full bg-paris-light mb-6">
              <Shield className="w-10 h-10 text-paris-navy" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-paris-navy">Artisanat d'excellence</h3>
            <p className="text-paris-grey">
              Notre équipe d'artisans expérimentés apporte une précision et une attention aux détails inégalées à chaque projet, garantissant des finitions impeccables.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col items-center text-center reveal">
            <div className="p-4 rounded-full bg-paris-light mb-6">
              <CheckCircle className="w-10 h-10 text-paris-navy" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-paris-navy">Tranquillité d'esprit</h3>
            <p className="text-paris-grey">
              De la conception à l'achèvement, nous gérons votre projet avec transparence et professionnalisme, vous offrant une expérience sans stress.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col items-center text-center reveal">
            <div className="p-4 rounded-full bg-paris-light mb-6">
              <Clock className="w-10 h-10 text-paris-navy" />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-paris-navy">Engagement durable</h3>
            <p className="text-paris-grey">
              Nous ne prenons pas de raccourcis. Notre engagement envers la qualité garantit que votre rénovation résistera à l'épreuve du temps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
