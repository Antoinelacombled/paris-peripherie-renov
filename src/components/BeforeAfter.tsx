import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("active");
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
        <div className="text-center max-w-4xl mx-auto mb-20 reveal">
          <h2 className="section-title relative inline-block">
            Avant / Après
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-paris-orange"></span>
          </h2>
          <p className="text-paris-grey text-lg mt-8 leading-relaxed">
            Découvrez la{" "}
            <span className="font-medium text-paris-navy relative">
              transformation radicale
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-paris-orange/30"></span>
            </span>{" "}
            de nos projets grâce à notre expertise en rénovation. Faites glisser
            pour comparer.
          </p>
        </div>

        <div className="max-w-5xl mx-auto reveal">
          <div
            ref={containerRef}
            className="relative w-full h-[600px] overflow-hidden rounded-sm shadow-xl group"
            onMouseDown={handleMouseDown}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
                alt="Après rénovation"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Before Image (Foreground) */}
            <div
              className="absolute inset-0 h-full"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                width: "100%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop"
                alt="Avant rénovation"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Labels */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-sm font-medium text-paris-navy shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                Avant
              </div>
            </div>

            {/* After Label */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-sm font-medium text-paris-navy shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              Après
            </div>

            {/* Slider Control */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <div className="flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4 text-paris-navy" />
                  <ChevronRight className="w-4 h-4 text-paris-navy" />
                </div>
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

          <div className="mt-8 text-center">
            <p className="text-paris-grey text-sm">
              Faites glisser pour découvrir la transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
