
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('active');
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Avant / Après</h2>
          <p className="text-paris-grey text-lg">
            Découvrez la transformation radicale de nos projets grâce à notre expertise en rénovation. 
            Faites glisser pour comparer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div 
            ref={containerRef}
            className="relative w-full h-[500px] overflow-hidden rounded-sm shadow-lg"
            onMouseDown={handleMouseDown}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop" 
                alt="Après rénovation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Before Image (Foreground) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop" 
                alt="Avant rénovation" 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              
              {/* Labels */}
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded font-medium">Avant</div>
            </div>
            
            {/* After Label */}
            <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded font-medium">Après</div>
            
            {/* Slider Control */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <div className="w-1 h-6 bg-paris-navy"></div>
              </div>
            </div>
            
            {/* Range Input (invisible but helps with mobile) */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative h-[300px] overflow-hidden rounded-sm shadow-lg reveal">
              <img 
                src="https://images.unsplash.com/photo-1613685703202-86c7dc519bbb?q=80&w=1974&auto=format&fit=crop" 
                alt="Avant rénovation cuisine" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded font-medium">Avant</div>
            </div>
            
            <div className="relative h-[300px] overflow-hidden rounded-sm shadow-lg reveal">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop" 
                alt="Après rénovation cuisine" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded font-medium">Après</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
