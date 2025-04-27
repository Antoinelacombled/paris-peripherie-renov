
import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  stars: number;
  text: string;
}

const Testimonial = ({ name, location, stars, text }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-lg reveal">
      <div className="flex mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < stars ? 'fill-paris-accent text-paris-accent' : 'text-paris-grey'}`}
            />
          ))}
      </div>
      <p className="italic text-paris-grey mb-6">"{text}"</p>
      <div className="font-medium">
        <p className="text-paris-navy">{name}</p>
        <p className="text-paris-grey text-sm">{location}</p>
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

  const testimonials: TestimonialProps[] = [
    {
      name: 'Sophie Martin',
      location: 'Paris 16ème',
      stars: 5,
      text: 'Un travail d'une qualité exceptionnelle. Ma cuisine est désormais l'espace dont j'ai toujours rêvé. Leur équipe a été d'un professionnalisme irréprochable tout au long du projet.'
    },
    {
      name: 'Pierre Durand',
      location: 'Neuilly-sur-Seine',
      stars: 5,
      text: 'Nous avons confié la rénovation complète de notre appartement à Paris Périphérie Rénovation et nous sommes ravis du résultat. Un travail de grande qualité, dans les délais et le budget annoncés.'
    },
    {
      name: 'Marie Lefort',
      location: 'Boulogne-Billancourt',
      stars: 5,
      text: 'Un grand merci à toute l'équipe pour la transformation de notre maison. Le résultat dépasse nos attentes. Chaque détail a été soigneusement pensé et exécuté.'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-paris-light">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Ce que nos clients disent</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-paris-accent text-paris-accent" />
                ))}
            </div>
            <span className="font-medium text-lg">5.0</span>
            <span className="text-paris-grey">sur Google</span>
          </div>
          <p className="text-paris-grey text-lg">
            L'excellence est notre standard. Voici ce que nos clients pensent de notre travail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a 
            href="https://g.page/r/Paris-Peripherie-Renovation/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-paris-navy font-medium hover:text-paris-accent transition-colors"
          >
            <span>Voir toutes nos avis sur Google</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
