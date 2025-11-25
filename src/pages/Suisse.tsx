import { useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Expertise from "@/components/Expertise";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import ArtisanSignature from "@/components/ArtisanSignature";
import Footer from "@/components/Footer";

const Suisse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Rénovation en Suisse | Paris Périphérie Rénovation"
                description="Expert en rénovation en Suisse. Genève, Lausanne, Zurich : nous intervenons pour vos projets de rénovation haut de gamme. Devis gratuit."
                keywords="rénovation suisse, artisan suisse, rénovation genève, rénovation lausanne, rénovation zurich, entreprise rénovation suisse"
            />
            <SchemaOrg
                type="LocalBusiness"
                data={{
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Suisse",
                        "addressCountry": "CH"
                    }
                }}
            />

            <Navbar />

            {/* Hero Section personnalisé Suisse avec image 3D */}
            <section className="relative bg-paris-navy text-white overflow-hidden min-h-screen flex items-start pt-20">
                <div className="absolute inset-0 bg-[url('/nas_pic_10.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-paris-navy/90 to-paris-navy"></div>

                <div className="container mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-32">
                        {/* Image 3D à gauche */}
                        <div className="relative -ml-32 md:-ml-48 order-2 md:order-1">
                            <img
                                src="/suisse_3D.png"
                                alt="Vue 3D Suisse - Rénovation haut de gamme"
                                className="w-full scale-150 opacity-40 origin-left -translate-x-[45%]"
                            />
                        </div>

                        {/* Texte à droite */}
                        <div className="max-w-xl order-1 md:order-2 px-8 md:px-0">
                            <p className="text-paris-orange uppercase tracking-wider text-sm mb-4 font-medium">Suisse • International</p>
                            <h1 className="text-4xl md:text-6xl font-serif mb-6">
                                Rénovation en <span className="text-paris-orange italic">Suisse</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
                                Nous intervenons en Suisse pour vos projets de rénovation d'envergure.
                                Genève, Lausanne, Zurich : expertise française, qualité suisse.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-paris-orange text-white rounded-full hover:bg-paris-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium tracking-wide uppercase text-sm"
                                >
                                    Devis Gratuit
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="tel:+33605708376"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white hover:text-paris-navy transition-all duration-300 font-medium tracking-wide uppercase text-sm"
                                >
                                    <Phone className="w-5 h-5" />
                                    06 05 70 83 76
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Composants réutilisés de la page d'accueil */}
            <WhyChooseUs />
            <Expertise />
            <Testimonials />
            <Gallery />
            <Process />
            <ContactCTA />
            <FAQ />
            <ArtisanSignature />
            <Footer />
        </div>
    );
};

export default Suisse;
