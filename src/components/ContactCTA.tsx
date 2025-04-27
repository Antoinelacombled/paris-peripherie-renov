
import React, { useRef, useEffect } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactCTA = () => {
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
    <section id="contact" ref={sectionRef} className="section-padding bg-paris-navy text-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="section-title text-white">Prêt à transformer votre espace?</h2>
            <p className="text-lg text-paris-grey">
              Obtenez une consultation gratuite et sans engagement pour discuter de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h3 className="font-serif text-2xl mb-6">Contactez-nous</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-paris-navy border border-paris-grey/30">
                    <Phone className="w-6 h-6 text-paris-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Téléphone</p>
                    <a href="tel:+33123456789" className="text-paris-grey hover:text-white transition-colors">
                      01.23.45.67.89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-paris-navy border border-paris-grey/30">
                    <Mail className="w-6 h-6 text-paris-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <a href="mailto:contact@parisperipherie-renovation.fr" className="text-paris-grey hover:text-white transition-colors">
                      contact@parisperipherie-renovation.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-paris-navy border border-paris-grey/30">
                    <Clock className="w-6 h-6 text-paris-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Horaires</p>
                    <p className="text-paris-grey">
                      Lun-Ven: 8h-18h <br />
                      Sam: Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg text-paris-navy reveal">
              <h3 className="font-serif text-2xl mb-6">Demande de devis</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy"
                    placeholder="Votre email"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-1">
                    Type de projet
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-2 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy"
                  >
                    <option value="">Sélectionnez le type de projet</option>
                    <option value="apartment">Rénovation d'appartement</option>
                    <option value="house">Rénovation de maison</option>
                    <option value="commercial">Espace commercial</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-primary bg-paris-navy hover:bg-paris-accent transition-colors"
                  >
                    Demander un devis gratuit
                  </button>
                  <p className="text-sm text-paris-grey mt-2 text-center">
                    Notre agenda se remplit rapidement — sécurisez votre projet dès maintenant.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
