import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation de la vidéo de fond
    if (videoRef.current) {
      videoRef.current.play();
      tl.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      );
    }

    // Animation du titre
    tl.fromTo(
      contentRef.current?.querySelector("h1"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=1"
    );

    // Animation de la description
    tl.fromTo(
      contentRef.current?.querySelector("p"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Animation des boutons
    tl.fromTo(
      buttonsRef.current?.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video_nass.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-paris-navy/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-paris-navy via-transparent to-paris-navy/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <h1 className="font-sans font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight">
              L'art de la <br />
              <span className="font-serif italic text-paris-orange">rénovation</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Transformez votre espace de vie ou votre espace professionnel avec une précision artisanale et une élégance intemporelle.

            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a href="#contact" className="group relative px-8 py-4 bg-white text-paris-navy rounded-full font-medium tracking-wide overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Devis gratuit
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-paris-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Devis gratuit
                  <ArrowRight size={18} className="translate-x-1" />
                </span>
              </a>

              <a
                href="#projects"
                className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-medium tracking-wide"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <span className="text-xs uppercase tracking-[0.2em] font-light">Découvrir</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
