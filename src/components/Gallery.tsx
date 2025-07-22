import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images: GalleryImage[] = [
    {
      src: "/nas_pic_2.jpeg",
      alt: "Espace professionnel",
      category: "Espace professionnel",
    },
    {
      src: "/nas_pic_1.jpeg",
      alt: "Salle de Bain",
      category: "Salle de bain",
    },
    {
      src: "/nas_pic_3.jpeg",
      alt: "Agence immobilière",
      category: "Agence immobilière",
    },

    {
      src: "/nas_pic_6.jpeg",
      alt: "Salle de bain",
      category: "Salle de bain",
    },
    {
      src: "/nas_pic_7.jpeg",
      alt: "Meubles sur mesure",
      category: "salon",
    },
    {
      src: "/nas_pic_8.jpeg",
      alt: "Cuisine sur mesure",
      category: "Cuisine sur mesure",
    },
    {
      src: "/nas_pic_4.jpeg",
      alt: "Agence immobilière",
      category: "Agence immobilière",
    },
    {
      src: "/nas_pic_11.jpeg",
      alt: "Salle à manger",
      category: "Salle à manger",
    },
    {
      src: "/nas_pic_12.jpeg",
      alt: "Chambre",
      category: "Chambre",
    },
    {
      src: "/nas_pic_13.jpeg",
      alt: "Salon",
      category: "Salon",
    },
    {
      src: "/nas_pic_5.jpeg",
      alt: "Espace professionnel",
      category: "Espace professionnel",
    },
    {
      src: "/nas_pic_16.jpg",
      alt: "Salon",
      category: "Salon",
    },
    {
      src: "/nas_pic_9.jpg",
      alt: "Meubles sur mesure",
      category: "Meubles sur mesure",
    },
    {
      src: "/nas_pic_17.jpeg",
      alt: "Chambre",
      category: "Chambre",
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

  // const categoryLabels: Record<string, string> = {
  //   all: "Tous",
  //   salon: "Salons",
  //   cuisine: "Cuisines",
  //   "salle-de-bain": "Salles de bain",
  //   chambre: "Chambres",
  // };

  // Animation de fondu lors du changement d'image
  const goToImage = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(idx);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    goToImage(
      (currentIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const handleNext = () => {
    goToImage((currentIndex + 1) % filteredImages.length);
  };

  // (Optionnel) Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, filteredImages.length]);

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
        {/* <div className="flex flex-wrap justify-center mb-16 gap-3 md:gap-4 reveal">
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
        </div> */}

        {/* Carrousel */}
        <div className="relative max-w-2xl mx-auto">
          <div
            className={`relative aspect-[4/3] rounded-sm shadow-lg overflow-hidden transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            key={filteredImages[currentIndex]?.src}
          >
            <img
              src={filteredImages[currentIndex]?.src}
              alt={filteredImages[currentIndex]?.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-paris-navy/80 via-paris-navy/20 to-transparent flex items-end pointer-events-none">
              <div className="p-6 w-full">
                <p className="text-white font-medium text-lg mb-2">
                  {filteredImages[currentIndex]?.alt}
                </p>
                {/* <div className="flex items-center text-white/80 text-sm">
                  <span>Voir le projet</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div> */}
              </div>
            </div>
            {/* Boutons navigation */}
            <button
              aria-label="Image précédente"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-paris-orange/80 text-paris-navy hover:text-white rounded-full p-2 shadow transition-colors"
              style={{ pointerEvents: "auto" }}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              aria-label="Image suivante"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-paris-orange/80 text-paris-navy hover:text-white rounded-full p-2 shadow transition-colors"
              style={{ pointerEvents: "auto" }}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            {/* Points de navigation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {filteredImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-paris-orange scale-125"
                      : "bg-paris-navy/40"
                  }`}
                  onClick={() => goToImage(idx)}
                  aria-label={`Aller à l'image ${idx + 1}`}
                  style={{ pointerEvents: "auto" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
