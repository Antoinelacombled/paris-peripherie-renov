import React, { useEffect, useRef } from "react";
import { Home, Building, Store, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Expertise = () => {
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

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="section-padding bg-paris-light relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-paris-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-paris-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="section-title">
            Notre <span className="premium-highlight">Expertise</span>
          </h2>
          <p className="text-paris-grey text-lg leading-relaxed font-light">
            Spécialistes de la rénovation complète, nous transformons chaque espace avec une
            <span className="text-paris-navy font-medium"> précision chirurgicale</span> et un
            <span className="text-paris-navy font-medium"> goût affirmé</span> pour l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Apartments - Large Card */}
          <div className="reveal md:col-span-2 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0">
              <img
                src="/apt_1.jpeg"
                alt="Rénovation d'appartement"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paris-navy/90 via-paris-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end mb-4">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                  <Home className="text-white w-8 h-8" />
                </div>
                <ArrowUpRight className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0" />
              </div>

              <h3 className="font-serif text-3xl text-white mb-2">Appartements</h3>
              <p className="text-white/80 font-light line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                Rénovation complète, optimisation d'espace et modernisation technique pour des intérieurs d'exception.
              </p>
            </div>
          </div>

          {/* Houses - Tall Card */}
          <div className="reveal md:row-span-2 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 delay-100">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=3270&auto=format&fit=crop"
                alt="Rénovation de maison"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paris-navy/90 via-paris-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end mb-4">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                  <Building className="text-white w-8 h-8" />
                </div>
                <ArrowUpRight className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0" />
              </div>

              <h3 className="font-serif text-3xl text-white mb-2">Maisons</h3>
              <p className="text-white/80 font-light">
                Extension, réaménagement et rénovation énergétique. Nous redonnons vie à votre patrimoine avec respect et modernité.
              </p>
            </div>
          </div>

          {/* Commercial - Standard Card */}
          <div className="reveal md:col-span-2 group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 delay-200">
            <div className="absolute inset-0">
              <img
                src="/espace.jpeg"
                alt="Espaces Commerciaux"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paris-navy/90 via-paris-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end mb-4">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                  <Store className="text-white w-8 h-8" />
                </div>
                <ArrowUpRight className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0" />
              </div>

              <h3 className="font-serif text-3xl text-white mb-2">Espaces Pro</h3>
              <p className="text-white/80 font-light">
                Bureaux, boutiques, restaurants. Des espaces pensés pour votre image et votre productivité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
