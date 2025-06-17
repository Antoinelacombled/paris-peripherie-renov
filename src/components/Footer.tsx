import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-paris-navy to-paris-navy/95 text-white pt-24 pb-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-4 relative inline-block">
                Paris Périphérie Rénovation
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-paris-orange"></span>
              </h3>
              <p className="text-paris-grey/90 leading-relaxed">
                Experts en rénovation de qualité pour des espaces durables et
                élégants à Paris et sa périphérie.
              </p>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-full bg-paris-navy/50 border border-paris-orange/20 group-hover:border-paris-orange transition-colors duration-300">
                <MapPin className="text-paris-orange w-5 h-5" />
              </div>
              <span className="text-paris-grey/90 group-hover:text-white transition-colors duration-300">
                Paris & Île-de-France (92, 93, 94, 95)
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-paris-orange"></span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-paris-navy/50 border border-paris-orange/20 group-hover:border-paris-orange transition-colors duration-300">
                  <Phone className="text-paris-orange w-5 h-5" />
                </div>
                <a
                  href="tel:+33123456789"
                  className="text-paris-grey/90 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group/link"
                >
                  01.23.45.67.89
                  <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-paris-navy/50 border border-paris-orange/20 group-hover:border-paris-orange transition-colors duration-300">
                  <Mail className="text-paris-orange w-5 h-5" />
                </div>
                <a
                  href="mailto:contact@parisperipherie-renovation.fr"
                  className="text-paris-grey/90 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group/link"
                >
                  contact@parisperipherie-renovation.fr
                  <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl relative inline-block">
              Expertises
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-paris-orange"></span>
            </h3>
            <ul className="space-y-4 text-paris-grey/90">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Rénovation d'appartements</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Rénovation de maisons</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Espaces commerciaux</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Rénovation énergétique</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl relative inline-block">
              Zones d'intervention
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-paris-orange"></span>
            </h3>
            <ul className="space-y-4 text-paris-grey/90">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Paris (75)</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Hauts-de-Seine (92)</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Seine-Saint-Denis (93)</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Val-de-Marne (94)</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Val-d'Oise (95)</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-paris-grey/80 text-sm">
              © {new Date().getFullYear()} Paris Périphérie Rénovation. Tous
              droits réservés.
            </p>
            <div className="flex gap-8 text-sm">
              <a
                href="#"
                className="text-paris-grey/80 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
              >
                <span>Mentions légales</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="text-paris-grey/80 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
              >
                <span>Politique de confidentialité</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
