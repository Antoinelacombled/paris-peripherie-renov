import { ChevronRight, Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-paris-navy text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-paris-orange/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-paris-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-serif text-3xl mb-6 text-white">
                Paris Périphérie <br />
                <span className="text-paris-orange italic">Rénovation</span>
              </h3>
              <p className="text-paris-grey/80 leading-relaxed max-w-sm font-light">
                L'excellence artisanale au service de vos projets.
                Nous transformons vos espaces de vie avec passion,
                précision et un souci du détail inégalé.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-paris-orange hover:text-white transition-all duration-300 group">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-paris-orange hover:text-white transition-all duration-300 group">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-paris-orange hover:text-white transition-all duration-300 group">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-medium tracking-wide uppercase text-white/90">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-paris-orange w-5 h-5 mt-1 shrink-0" />
                <span className="text-paris-grey/80 group-hover:text-white transition-colors duration-300 font-light">
                  Paris & Île-de-France <br />
                  (92, 93, 94, 95)
                </span>
              </div>

              <div className="flex items-start gap-4 group">
                <Phone className="text-paris-orange w-5 h-5 mt-1 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+33605708376" className="text-paris-grey/80 hover:text-white transition-colors duration-300 font-light">06 05 70 83 76</a>
                  <a href="tel:+33666346639" className="text-paris-grey/80 hover:text-white transition-colors duration-300 font-light">06 66 34 66 39</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Mail className="text-paris-orange w-5 h-5 mt-1 shrink-0" />
                <a href="mailto:pprenov75@gmail.com" className="text-paris-grey/80 hover:text-white transition-colors duration-300 font-light">
                  pprenov75@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-medium tracking-wide uppercase text-white/90">Expertises</h4>
            <ul className="space-y-4">
              {['Rénovation d\'appartements', 'Rénovation de maisons', 'Espaces commerciaux', 'Rénovation énergétique'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-paris-grey/80 hover:text-paris-orange transition-colors duration-300 flex items-center gap-2 group font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-paris-orange/50 group-hover:bg-paris-orange transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/blog" className="text-paris-grey/80 hover:text-paris-orange transition-colors duration-300 flex items-center gap-2 group font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-paris-orange/50 group-hover:bg-paris-orange transition-colors"></span>
                  Le Journal (Blog)
                </a>
              </li>
            </ul>
          </div>

          {/* Areas Column */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-lg font-medium tracking-wide uppercase text-white/90">Zones</h4>
            <ul className="space-y-4">
              <li>
                <a href="/renovation-paris" className="text-paris-grey/80 font-light hover:text-paris-orange transition-colors">
                  Paris (75)
                </a>
              </li>
              <li>
                <a href="/renovation-hauts-de-seine" className="text-paris-grey/80 font-light hover:text-paris-orange transition-colors">
                  Hauts-de-Seine (92)
                </a>
              </li>
              <li>
                <a href="/renovation-saint-mande" className="text-paris-grey/80 font-light hover:text-paris-orange transition-colors">
                  Saint-Mandé (94)
                </a>
              </li>
              <li>
                <a href="/renovation-vincennes" className="text-paris-grey/80 font-light hover:text-paris-orange transition-colors">
                  Vincennes (94)
                </a>
              </li>
              <li>
                <span className="text-paris-grey/80 font-light cursor-default hover:text-white transition-colors">
                  Val-de-Marne (94)
                </span>
              </li>
              <li>
                <a href="/renovation-suisse" className="text-paris-grey/80 font-light hover:text-paris-orange transition-colors">
                  Suisse 🇨🇭
                </a>
              </li>
              <li>
                <span className="text-paris-grey/80 font-light cursor-default hover:text-white transition-colors">
                  Val-d'Oise (95)
                </span>
              </li>
              <li>
                <span className="text-paris-grey/80 font-light cursor-default hover:text-white transition-colors">
                  France entière
                </span>
              </li>
              <li>
                <span className="text-paris-grey/80 font-light cursor-default hover:text-white transition-colors">
                  Suisse
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-paris-grey/60 text-sm font-light">
            © {new Date().getFullYear()} Paris Périphérie Rénovation. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-paris-grey/60 hover:text-white transition-colors duration-300 font-light">Mentions légales</a>
            <a href="#" className="text-paris-grey/60 hover:text-white transition-colors duration-300 font-light">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
