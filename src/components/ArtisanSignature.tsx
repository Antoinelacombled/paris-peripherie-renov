import React, { useEffect, useRef } from "react";

const ArtisanSignature = () => {
  const signatureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (signatureRef.current) {
            signatureRef.current.classList.add("active");
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (signatureRef.current) {
      observer.observe(signatureRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-paris-navy/5 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div
            ref={signatureRef}
            className="relative opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="text-center mb-12">
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-paris-navy italic leading-relaxed">
                "Une chose vaut la peine d'être faite
                <br />
                que si elle est bien faite"
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mt-6">
                <p className="font-serif text-xl text-paris-navy/80">
                  Nassim Inourar
                </p>
                <p className="text-sm text-paris-navy/60 mt-1">Artisan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSignature;
