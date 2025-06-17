import React, { useEffect, useRef } from "react";
import { Shield, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const WhyChooseUs = () => {
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
        <div className="text-center max-w-4xl mx-auto mb-20 reveal">
          <h2 className="section-title relative inline-block">
            Pourquoi nous choisir
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
          </h2>
          <p className="text-paris-grey text-lg mt-3 leading-relaxed">
            Notre philosophie est simple mais puissante :{" "}
            <span className="font-medium text-paris-navy relative">
              rénover une fois, rénover bien
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-paris-orange/30"></span>
            </span>
            . Nous croyons profondément que chaque projet mérite une attention
            méticuleuse et un engagement sans faille.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-white p-10 rounded-sm shadow-lg flex flex-col items-center text-center reveal group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-5 rounded-full bg-paris-light mb-8 group-hover:bg-paris-orange/10 transition-colors duration-300">
              <Shield className="w-12 h-12 text-paris-navy group-hover:text-paris-orange transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-2xl mb-6 text-paris-navy group-hover:text-paris-orange transition-colors duration-300">
              Artisanat d'excellence
            </h3>
            <p className="text-paris-grey leading-relaxed">
              Notre équipe d'artisans expérimentés apporte une précision et une
              attention aux détails inégalées à chaque projet, garantissant des
              finitions impeccables.
            </p>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-lg flex flex-col items-center text-center reveal group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-5 rounded-full bg-paris-light mb-8 group-hover:bg-paris-orange/10 transition-colors duration-300">
              <CheckCircle className="w-12 h-12 text-paris-navy group-hover:text-paris-orange transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-2xl mb-6 text-paris-navy group-hover:text-paris-orange transition-colors duration-300">
              Tranquillité d'esprit
            </h3>
            <p className="text-paris-grey leading-relaxed">
              De la conception à l'achèvement, nous gérons votre projet avec
              transparence et professionnalisme, vous offrant une expérience
              sans stress.
            </p>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-lg flex flex-col items-center text-center reveal group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-5 rounded-full bg-paris-light mb-8 group-hover:bg-paris-orange/10 transition-colors duration-300">
              <Clock className="w-12 h-12 text-paris-navy group-hover:text-paris-orange transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-2xl mb-6 text-paris-navy group-hover:text-paris-orange transition-colors duration-300">
              Engagement durable
            </h3>
            <p className="text-paris-grey leading-relaxed">
              Nous ne prenons pas de raccourcis. Notre engagement envers la
              qualité garantit que votre rénovation résistera à l'épreuve du
              temps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
