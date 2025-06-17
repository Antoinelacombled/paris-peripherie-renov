import React, { useRef, useEffect } from "react";
import { Phone, Mail, Clock, ChevronRight } from "lucide-react";

const ContactCTA = () => {
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
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-paris-navy to-paris-navy/90 text-white"
    >
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="section-title text-white relative inline-block">
              Prêt à transformer votre espace?
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
            </h2>
            <p className="text-lg text-paris-grey mt-3 leading-relaxed">
              Obtenez une{" "}
              <span className="font-medium text-white relative">
                consultation gratuite
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-paris-orange/30"></span>
              </span>{" "}
              et sans engagement pour discuter de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 items-stretch rounded-sm overflow-hidden shadow-xl">
            <div className="reveal text-white p-10 bg-gradient-to-br from-gray-900 to-gray-900/80 backdrop-blur-sm border-r border-white/5">
              <h3 className="font-serif text-2xl mb-8 relative inline-block">
                Contactez-nous
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-paris-orange"></span>
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-paris-navy/50 border border-paris-orange/20 group-hover:border-paris-orange transition-colors duration-300">
                    <Phone className="w-6 h-6 text-paris-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Téléphone</p>
                    <a
                      href="tel:+33123456789"
                      className="text-paris-grey hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group/link"
                    >
                      06 05 70 83 76
                      <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-paris-navy/50 border border-paris-orange/20 group-hover:border-paris-orange transition-colors duration-300">
                    <Mail className="w-6 h-6 text-paris-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Email</p>
                    <a
                      href="mailto:contact@parisperipherie-renovation.fr"
                      className="text-paris-grey hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group/link"
                    >
                      contact@parisperipherie-renovation.fr
                      <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-paris-navy/50 border border-paris-orange/20 group-hover:border-paris-orange transition-colors duration-300">
                    <Clock className="w-6 h-6 text-paris-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">Horaires</p>
                    <p className="text-paris-grey">
                      Lun-Ven: 8h-18h <br />
                      Sam: Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 text-paris-navy reveal">
              <h3 className="font-serif text-2xl mb-8 relative inline-block">
                Demande de devis
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-paris-orange"></span>
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy focus:ring-1 focus:ring-paris-navy/20 transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy focus:ring-1 focus:ring-paris-navy/20 transition-all duration-300"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy focus:ring-1 focus:ring-paris-navy/20 transition-all duration-300"
                    placeholder="Votre email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium mb-2"
                  >
                    Type de projet
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy focus:ring-1 focus:ring-paris-navy/20 transition-all duration-300"
                  >
                    <option value="">Sélectionnez le type de projet</option>
                    <option value="apartment">Rénovation d'appartement</option>
                    <option value="house">Rénovation de maison</option>
                    <option value="commercial">Espace commercial</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-paris-grey/30 rounded-sm focus:outline-none focus:border-paris-navy focus:ring-1 focus:ring-paris-navy/20 transition-all duration-300"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-paris-navy hover:bg-paris-orange text-white font-medium rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Demander un devis gratuit
                  </button>
                  <p className="text-sm text-paris-grey mt-4 text-center">
                    Notre agenda se remplit rapidement — sécurisez votre projet
                    dès maintenant.
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
