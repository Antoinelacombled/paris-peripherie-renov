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

const Paris = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Rénovation à Paris (75) | Paris Périphérie Rénovation"
                description="Expert en rénovation à Paris. Entreprise tous corps d'état pour appartements et immeubles parisiens : cuisine, salle de bain, parquet, moulures. Devis gratuit."
                keywords="rénovation paris, artisan paris 75, rénovation appartement paris, rénovation haussmannien paris, entreprise rénovation paris"
            />
            <SchemaOrg
                type="LocalBusiness"
                data={{
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Paris",
                        "postalCode": "75000",
                        "addressRegion": "Île-de-France",
                        "addressCountry": "FR"
                    }
                }}
            />

            <Navbar />

            {/* Hero Section personnalisé Paris */}
            <section className="relative bg-paris-navy text-white py-32 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/nas_pic_12.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-paris-navy/90 to-paris-navy"></div>

                <div className="container mx-auto container-padding relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-paris-orange uppercase tracking-wider text-sm mb-4 font-medium">Paris • Île-de-France (75)</p>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6">
                            Rénovation à <span className="text-paris-orange italic">Paris</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
                            Spécialistes de la rénovation parisienne. Immeubles haussmanniens, appartements de caractère,
                            rénovation complète ou partielle. Du Marais au 16ème arrondissement.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
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

export default Paris;
