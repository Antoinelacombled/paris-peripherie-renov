
import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images: GalleryImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
      alt: 'Salon après rénovation',
      category: 'salon',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752791-3f6937a8d55b?q=80&w=2070&auto=format&fit=crop',
      alt: 'Cuisine moderne rénovée',
      category: 'cuisine',
    },
    {
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
      alt: 'Salle de bain design',
      category: 'salle-de-bain',
    },
    {
      src: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=1974&auto=format&fit=crop',
      alt: 'Chambre rénovée',
      category: 'chambre',
    },
    {
      src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop',
      alt: 'Détail de cuisine',
      category: 'cuisine',
    },
    {
      src: 'https://images.unsplash.com/photo-1595514535415-dae8970854b0?q=80&w=1974&auto=format&fit=crop',
      alt: 'Salon avec cheminée',
      category: 'salon',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];

  const categoryLabels: Record<string, string> = {
    'all': 'Tous',
    'salon': 'Salons',
    'cuisine': 'Cuisines',
    'salle-de-bain': 'Salles de bain',
    'chambre': 'Chambres',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
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
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Nos réalisations</h2>
          <p className="text-paris-grey text-lg">
            Explorez notre portfolio de rénovations pour vous inspirer de la qualité de notre travail et des possibilités pour votre projet.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4 reveal">
          {categories.map(category => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-paris-navy text-white"
                  : "bg-paris-light text-paris-navy hover:bg-paris-navy/10"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="reveal overflow-hidden rounded-sm shadow-lg group relative aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-paris-navy bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
