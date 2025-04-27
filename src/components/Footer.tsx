
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-paris-navy text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-xl mb-6">Paris Périphérie Rénovation</h3>
            <p className="text-paris-grey mb-6">
              Experts en rénovation de qualité pour des espaces durables et élégants à Paris et sa périphérie.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="text-paris-orange w-5 h-5" />
              <span className="text-paris-grey">Paris & Île-de-France (92, 93, 94, 95)</span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="text-paris-orange w-5 h-5" />
                <a href="tel:+33123456789" className="text-paris-grey hover:text-white transition-colors">
                  01.23.45.67.89
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-paris-orange w-5 h-5" />
                <a href="mailto:contact@parisperipherie-renovation.fr" className="text-paris-grey hover:text-white transition-colors">
                  contact@parisperipherie-renovation.fr
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Expertises</h3>
            <ul className="space-y-3 text-paris-grey">
              <li>
                <a href="#" className="hover:text-white transition-colors">Rénovation d'appartements</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Rénovation de maisons</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Espaces commerciaux</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Rénovation énergétique</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-6">Zones d'intervention</h3>
            <ul className="space-y-3 text-paris-grey">
              <li>
                <a href="#" className="hover:text-white transition-colors">Paris (75)</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Hauts-de-Seine (92)</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Seine-Saint-Denis (93)</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Val-de-Marne (94)</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Val-d'Oise (95)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-paris-grey/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-paris-grey text-sm">
              © {new Date().getFullYear()} Paris Périphérie Rénovation. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-paris-grey">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
