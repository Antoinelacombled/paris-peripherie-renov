import React, { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  name: string;
  location: string;
  stars: number;
  text: string;
  delay: number;
}

const Testimonial = ({ name, location, stars, text, delay }: TestimonialProps) => {
  return (
    <div
      className="reveal bg-white p-8 md:p-10 border border-paris-grey/10 hover:border-paris-orange/30 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 rounded-2xl flex flex-col h-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative flex-1 flex flex-col">
        <Quote className="absolute -top-6 -left-4 w-12 h-12 text-paris-orange/10 transform -rotate-12 group-hover:text-paris-orange/20 transition-colors duration-500" />

        <div className="flex mb-6 space-x-1">
          {Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4 transition-all duration-300",
                i < stars
                  ? "fill-paris-orange text-paris-orange"
                  : "text-paris-grey/30"
              )}
            />
          ))}
        </div>

        <p className="font-serif text-xl md:text-2xl text-paris-navy mb-8 leading-relaxed italic opacity-90 flex-1">
          "{text}"
        </p>

        <div className="flex items-center gap-4 border-t border-paris-grey/10 pt-6 mt-auto">
          <div className="w-10 h-10 rounded-full bg-paris-navy/5 flex items-center justify-center text-paris-navy font-serif font-bold text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-paris-navy font-medium tracking-wide text-sm uppercase">
              {name}
            </p>
            <p className="text-paris-grey text-xs mt-0.5 font-light tracking-wider">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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

  const testimonials: TestimonialProps[] = [
    {
      name: "HB Nettoyage et débarras",
      location: "Partenaire professionnel",
      stars: 5,
      text: "Nous avons eu le plaisir de collaborer avec Paris Périphérie Rénovation et nous sommes extrêmement satisfaits de leur prestation. Leur équipe a fait preuve d'un professionnalisme exemplaire.",
      delay: 0,
    },
    {
      name: "Anne-Astrid Chachignon",
      location: "Cliente depuis 10 ans",
      stars: 5,
      text: "Je recommande l'entreprise familiale Paris Périphérie Rénovation pour son sérieux, son engagement et son souci de bien faire. C'est un plaisir de collaborer ensemble depuis bientôt 10 ans.",
      delay: 200,
    },
    {
      name: "Gwen Samson",
      location: "Architecte d'intérieur",
      stars: 5,
      text: "Entreprise avec laquelle je travaille depuis de nombreuses années pour plus de 50 rénovations réalisées ensemble. Un partenaire sérieux et de confiance.",
      delay: 400,
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-paris-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <div className="max-w-2xl">
            <h2 className="section-title mb-6">
              L'Excellence <br />
              <span className="premium-highlight">Reconnue</span>
            </h2>
            <p className="text-paris-grey text-lg font-light leading-relaxed max-w-lg">
              La satisfaction de nos clients est notre plus belle carte de visite.
              Découvrez les retours de ceux qui nous ont fait confiance.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8 md:mt-0 bg-white px-6 py-3 rounded-full shadow-sm border border-paris-grey/10">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-paris-orange text-paris-orange" />
              ))}
            </div>
            <div className="h-4 w-[1px] bg-paris-grey/30"></div>
            <span className="font-medium text-paris-navy">5.0 sur Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
