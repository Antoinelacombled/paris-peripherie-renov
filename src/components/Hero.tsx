import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation de la vidéo de fond
    if (videoRef.current) {
      videoRef.current.play();
      tl.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.inOut" }
      );
    }

    // Animation du slogan
    tl.fromTo(
      sloganRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Animation du titre
    tl.fromTo(
      contentRef.current?.querySelector("h1"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Animation de la description
    tl.fromTo(
      contentRef.current?.querySelector("p"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Animation des boutons
    tl.fromTo(
      buttonsRef.current?.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    );

    // Animation du mot rotatif
    const words = [
      "maison",
      "appartement",
      "villa",
      "commerce",
      "extérieur",
      "bureau",
    ];
    let currentIndex = 0;

    const animateWord = () => {
      gsap.to(rotatingWordRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (rotatingWordRef.current) {
            rotatingWordRef.current.textContent = words[currentIndex];
            currentIndex = (currentIndex + 1) % words.length;

            gsap.to(rotatingWordRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
      });
    };

    // Démarrer l'animation après un délai
    setTimeout(() => {
      animateWord();
      setInterval(animateWord, 2000);
    }, 2000);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video_nass.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-paris-navy bg-opacity-50"></div>
      </div>

      <div className="container relative z-10 mx-auto container-padding text-white">
        <div className="max-w-3xl">
          {/* Slogan */}
          {/* <div ref={sloganRef} className="mb-8">
            <p className="font-cursive text-2xl sm:text-3xl md:text-4xl text-paris-orange italic mb-2">
              "Une chose vaut la peine d'être faite, que si elle est bien
              faite."
            </p>
          </div> */}

          {/* Content */}
          <div ref={contentRef}>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Besoin de rénover <br />
              votre{" "}
              <span
                ref={rotatingWordRef}
                className="inline-block text-paris-orange"
              >
                maison
              </span>{" "}
              ?
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Transformez votre bien immobilier avec l'excellence artisanale
              d'une entreprise qui valorise la précision, la qualité et
              l'engagement.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Consultation gratuite
              </a>
              <a
                href="#projects"
                className="btn-secondary border-white text-white hover:bg-white hover:text-paris-navy"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
