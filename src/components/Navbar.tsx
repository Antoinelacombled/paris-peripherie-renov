import { cn } from "@/lib/utils";
import gsap from "gsap";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animation des éléments de navigation
    tl.fromTo(
      navItemsRef.current?.children,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.6"
    );

    // Animation du numéro de téléphone
    tl.fromTo(
      phoneRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    const handleScroll = () => {
      if (window.scrollY > 20) {
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-full py-3 max-w-6xl"
            : "bg-transparent py-2"
        )}
      >
        <a ref={logoRef} href="#" className="flex items-center group">
          <h1
            className={cn(
              "font-sans text-xl md:text-2xl tracking-tight transition-colors duration-300",
              isScrolled ? "text-paris-navy" : "text-white"
            )}
          >
            <span className="font-bold">Paris</span> {" "}
            <span className="font-light">Périphérie</span>{" "}
            <span className="font-light">Rénovation</span>

          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul
            ref={navItemsRef}
            className={cn(
              "flex gap-8 text-sm font-medium tracking-wide uppercase transition-colors duration-300",
              isScrolled ? "text-paris-navy/80" : "text-white/90"
            )}
          >
            {[
              { name: "Pourquoi nous", href: "/#pourquoi-nous" },
              { name: "Expertise", href: "/#expertise" },
              { name: "Réalisations", href: "/#réalisations" },
              { name: "Blog", href: "/blog" }
            ].map((item, index) => (
              <li key={index}>
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    to={item.href}
                    className="hover:text-paris-orange transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paris-orange transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-paris-orange transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paris-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            ref={phoneRef}
            href="tel:+33605708376"
            className={cn(
              "flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 border",
              isScrolled
                ? "border-paris-navy/10 text-paris-navy hover:bg-paris-navy hover:text-white"
                : "border-white/20 text-white hover:bg-white/10 hover:text-paris-navy"
            )}
          >
            <Phone size={16} />
            <span className="text-sm font-semibold tracking-wide">
              06 05 70 83 76
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden z-50 p-2 rounded-full transition-colors",
            mobileMenuOpen
              ? "text-white bg-white/10"
              : isScrolled
                ? "text-paris-navy hover:bg-paris-navy/5"
                : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-paris-navy/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <ul className="flex flex-col gap-8 text-center">
            {[
              { name: "Pourquoi nous", href: "/#pourquoi-nous" },
              { name: "Expertise", href: "/#expertise" },
              { name: "Réalisations", href: "/#réalisations" },
              { name: "Blog", href: "/blog" }
            ].map((item, index) => (
              <li key={index} className="overflow-hidden">
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    to={item.href}
                    className={cn(
                      "block text-3xl font-light text-white hover:text-paris-orange transition-colors transform translate-y-10 opacity-0",
                      mobileMenuOpen && "animate-fade-in-up"
                    )}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "block text-3xl font-light text-white hover:text-paris-orange transition-colors transform translate-y-10 opacity-0",
                      mobileMenuOpen && "animate-fade-in-up"
                    )}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li className="mt-8">
              <a
                href="tel:+33605708376"
                className="inline-flex items-center gap-3 text-paris-orange text-xl font-medium border border-paris-orange/30 px-8 py-3 rounded-full hover:bg-paris-orange/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={20} />
                <span>06 05 70 83 76</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
