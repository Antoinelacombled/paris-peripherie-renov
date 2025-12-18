import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  span?: string; // For masonry layout control
}

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const images: GalleryImage[] = [
    { src: "/nas_pic_2.jpeg", alt: "Espace professionnel", category: "Espace professionnel", span: "row-span-2" },
    { src: "/nas_pic_1.jpeg", alt: "Salle de Bain", category: "Salle de bain" },
    { src: "/nas_pic_3.jpeg", alt: "Agence immobilière", category: "Agence immobilière" },
    { src: "/nas_pic_6.jpeg", alt: "Salle de bain", category: "Salle de bain", span: "col-span-2" },
    { src: "/nas_pic_7.jpeg", alt: "Meubles sur mesure", category: "salon" },
    { src: "/nas_pic_8.jpeg", alt: "Cuisine sur mesure", category: "Cuisine sur mesure", span: "row-span-2" },
    { src: "/nas_pic_4.jpeg", alt: "Agence immobilière", category: "Agence immobilière" },
    { src: "/nas_pic_11.jpeg", alt: "Salle à manger", category: "Salle à manger" },
    { src: "/nas_pic_12.jpeg", alt: "Chambre", category: "Chambre", span: "col-span-2" },
    { src: "/nas_pic_13.jpeg", alt: "Salon", category: "Salon" },
    { src: "/nas_pic_5.jpeg", alt: "Espace professionnel", category: "Espace professionnel" },
    { src: "/nas_pic_16.jpg", alt: "Salon", category: "Salon", span: "row-span-2" },
    { src: "/nas_pic_9.jpg", alt: "Meubles sur mesure", category: "Meubles sur mesure" },
    { src: "/nas_pic_17.jpeg", alt: "Chambre", category: "Chambre" },
  ];

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter(img => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const categories = ["all", ...Array.from(new Set(images.map(img => img.category)))];

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("active");
              }, i * 100);
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
  }, [visibleImages]); // Re-run observer when visible images change

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto mb-16 reveal">
          <h2 className="section-title">
            Nos <span className="premium-highlight">Réalisations</span>
          </h2>
          <p className="text-paris-grey text-lg leading-relaxed font-light">
            Une collection d'espaces transformés, où chaque détail raconte une histoire de
            <span className="text-paris-navy font-medium"> passion</span> et d'
            <span className="text-paris-navy font-medium">exigence</span>.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {visibleImages.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className={cn(
                "reveal group relative rounded-xl overflow-hidden cursor-pointer",
                img.span || ""
              )}
              style={{ transitionDelay: `${(idx % 6) * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-paris-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-paris-orange text-xs uppercase tracking-wider font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {img.category}
                </span>
                <h3 className="text-white text-xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {img.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center reveal">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-white border border-paris-navy/20 text-paris-navy rounded-full hover:bg-paris-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <span className="font-medium tracking-wide text-sm uppercase">Voir plus de réalisations</span>
              <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
