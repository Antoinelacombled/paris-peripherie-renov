import React, { useRef, useEffect } from "react";
import { Star, Quote, ChevronRight } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  stars: number;
  text: string;
}

const Testimonial = ({ name, location, stars, text }: TestimonialProps) => {
  return (
    <div className="bg-white p-10 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 reveal">
      <div className="relative">
        <Quote className="absolute -top-4 -left-2 w-8 h-8 text-paris-orange/20 transform -rotate-12" />
        <div className="flex mb-6">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 transition-colors duration-300 ${
                  i < stars
                    ? "fill-paris-accent text-paris-accent group-hover:fill-paris-orange group-hover:text-paris-orange"
                    : "text-paris-grey"
                }`}
              />
            ))}
        </div>
        <p className="italic text-paris-grey mb-8 leading-relaxed text-lg">
          "{text}"
        </p>
        <div className="font-medium border-t border-paris-grey/10 pt-6">
          <p className="text-paris-navy text-lg group-hover:text-paris-orange transition-colors duration-300">
            {name}
          </p>
          <p className="text-paris-grey text-sm mt-1">{location}</p>
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
      name: "Sophie Martin",
      location: "Paris 16ème",
      stars: 5,
      text: "Un travail d'une qualité exceptionnelle. Ma cuisine est désormais l'espace dont j'ai toujours rêvé. Leur équipe a été d'un professionnalisme irréprochable tout au long du projet.",
    },
    {
      name: "Pierre Durand",
      location: "Neuilly-sur-Seine",
      stars: 5,
      text: "Nous avons confié la rénovation complète de notre appartement à Paris Périphérie Rénovation et nous sommes ravis du résultat. Un travail de grande qualité, dans les délais et le budget annoncés.",
    },
    {
      name: "Marie Lefort",
      location: "Boulogne-Billancourt",
      stars: 5,
      text: "Un grand merci à toute l'équipe pour la transformation de notre maison. Le résultat dépasse nos attentes. Chaque détail a été soigneusement pensé et exécuté.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-paris-light">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto mb-20 reveal">
          <h2 className="section-title relative inline-block">
            Ce que nos clients disent
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
          </h2>
          <div className="flex justify-center items-center gap-3 mb-6 mt-8">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-7 h-7 fill-paris-accent text-paris-accent"
                  />
                ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-2xl text-paris-navy">5.0</span>
              <span className="text-paris-grey">sur Google</span>
            </div>
          </div>
          <p className="text-paris-grey text-lg leading-relaxed">
            L'excellence est notre standard. Voici ce que nos clients pensent de
            notre travail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <a
            href="https://g.page/r/Paris-Peripherie-Renovation/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-paris-navy font-medium hover:text-paris-orange transition-colors group"
          >
            <span>Voir toutes nos avis sur Google</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
