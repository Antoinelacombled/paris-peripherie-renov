import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const images: GalleryImage[] = [
    {
      src: "/gallery1.jpeg",
      alt: "Salon après rénovation",
      category: "salon",
    },
    {
      src: "/gallery2.jpeg",
      alt: "Cuisine moderne rénovée",
      category: "cuisine",
    },
    {
      src: "/gallery3.jpeg",
      alt: "Salle de bain design",
      category: "salle-de-bain",
    },
    {
      src: "/gallery4.jpeg",
      alt: "Chambre rénovée",
      category: "chambre",
    },
    {
      src: "/gallery5.jpg",
      alt: "Détail de cuisine",
      category: "cuisine",
    },
    {
      src: "/gallery6.jpg",
      alt: "Salon avec cheminée",
      category: "salon",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const categories = [
    "all",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const categoryLabels: Record<string, string> = {
    all: "Tous",
    salon: "Salons",
    cuisine: "Cuisines",
    "salle-de-bain": "Salles de bain",
    chambre: "Chambres",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("active");
              }, i * 150);
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
  }, [activeCategory]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto mb-20 reveal">
          <h2 className="section-title relative inline-block">
            Nos réalisations
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
          </h2>
          <p className="text-paris-grey text-lg mt-3 leading-relaxed">
            Explorez notre portfolio de rénovations pour vous inspirer de la{" "}
            <span className="font-medium text-paris-navy relative">
              qualité de notre travail
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-paris-orange/30"></span>
            </span>{" "}
            et des possibilités pour votre projet.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-16 gap-3 md:gap-4 reveal">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-6 py-3 rounded-sm font-medium transition-all duration-300 text-sm uppercase tracking-wider",
                activeCategory === category
                  ? "bg-paris-navy text-white shadow-lg shadow-paris-navy/20"
                  : "bg-paris-light text-paris-navy hover:bg-paris-navy/10 hover:shadow-md"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="reveal overflow-hidden rounded-sm shadow-lg group relative aspect-[4/3] hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paris-navy/80 via-paris-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium text-lg mb-2">
                    {image.alt}
                  </p>
                  <div className="flex items-center text-white/80 text-sm">
                    <span>Voir le projet</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <button className="inline-flex items-center gap-2 text-paris-navy font-medium hover:text-paris-orange transition-colors group">
            <span>Voir tous nos projets</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
