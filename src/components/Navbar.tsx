import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation du logo
    tl.fromTo(
      logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animation des éléments de navigation
    tl.fromTo(
      navItemsRef.current?.children,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );

    // Animation du numéro de téléphone
    tl.fromTo(
      phoneRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto container-padding flex justify-between items-center">
        <a ref={logoRef} href="#" className="flex items-center">
          <h1
            className={cn(
              "font-serif text-2xl transition-colors duration-300",
              isScrolled ? "text-paris-navy" : "text-white"
            )}
          >
            <span className="font-bold">Paris</span> Périphérie Rénovation
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul
            ref={navItemsRef}
            className={cn(
              "flex gap-6 font-medium transition-colors duration-300",
              isScrolled ? "text-paris-navy" : "text-white"
            )}
          >
            <li>
              <a
                href="#why-us"
                className="hover:text-paris-accent transition-colors"
              >
                Pourquoi nous
              </a>
            </li>
            <li>
              <a
                href="#expertise"
                className="hover:text-paris-accent transition-colors"
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-paris-accent transition-colors"
              >
                Réalisations
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="hover:text-paris-accent transition-colors"
              >
                Processus
              </a>
            </li>
          </ul>
          <a
            ref={phoneRef}
            href="tel:+33123456789"
            className={cn(
              "flex items-center gap-2 smooth-transition font-medium",
              isScrolled ? "text-paris-accent" : "text-white"
            )}
          >
            <Phone size={18} />
            <span>01.23.45.67.89</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden z-50 relative",
            mobileMenuOpen
              ? "text-white"
              : isScrolled
              ? "text-paris-navy"
              : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-full transition-transform duration-300",
                mobileMenuOpen
                  ? "rotate-45 translate-y-2 bg-white"
                  : "bg-current"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-full transition-opacity duration-300",
                mobileMenuOpen ? "opacity-0" : "opacity-100 bg-current"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-full transition-transform duration-300",
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-white"
                  : "bg-current"
              )}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 bottom-0 bg-paris-navy w-[80%] max-w-sm transition-transform duration-300 transform z-40 py-20 px-8",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-5 text-white text-lg">
            <li>
              <a
                href="#why-us"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pourquoi nous
              </a>
            </li>
            <li>
              <a
                href="#expertise"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Réalisations
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Processus
              </a>
            </li>
            <li className="mt-4">
              <a
                href="tel:+33123456789"
                className="flex items-center gap-2 text-paris-accent font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={18} />
                <span>01.23.45.67.89</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
