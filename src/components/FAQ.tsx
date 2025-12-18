import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "Quels types de travaux de rénovation réalisez-vous ?",
            answer: "Nous sommes une entreprise tous corps d'état, capable de gérer l'intégralité de votre projet de rénovation. De la plomberie à l'électricité, en passant par la menuiserie, la peinture, le carrelage et l'aménagement sur mesure, nous coordonnons tous les métiers nécessaires pour transformer votre espace."
        },
        {
            question: "Intervenez-vous uniquement à Paris ?",
            answer: "Nous intervenons principalement à Paris et dans toute l'Île-de-France (92, 93, 94, 95). Cependant, pour des projets d'envergure, nous pouvons également nous déplacer dans toute la France et en Suisse. N'hésitez pas à nous contacter pour discuter de votre projet, quelle que soit sa localisation."
        },
        {
            question: "Quel est le délai moyen pour une rénovation complète ?",
            answer: "Le délai dépend de l'ampleur du projet. Pour un appartement de 80m², comptez généralement entre 8 et 12 semaines. Nous établissons un planning précis dès le début du chantier et nous nous engageons à le respecter. Chaque projet bénéficie d'un suivi personnalisé pour garantir le respect des délais."
        },
        {
            question: "Proposez-vous un devis gratuit ?",
            answer: "Absolument. Nous offrons une consultation gratuite et sans engagement. Nos experts se déplacent pour évaluer votre projet, comprendre vos besoins et vous fournir un devis détaillé. Cette première rencontre nous permet également de vous conseiller sur les meilleures solutions techniques et esthétiques."
        },
        {
            question: "Êtes-vous assurés et certifiés ?",
            answer: "Oui, nous disposons de toutes les assurances professionnelles obligatoires, notamment la garantie décennale et l'assurance responsabilité civile. Nos artisans sont qualifiés et bénéficient de formations régulières pour rester à la pointe des techniques et des normes en vigueur."
        },
        {
            question: "Comment se déroule le suivi de chantier ?",
            answer: "Vous bénéficiez d'un interlocuteur dédié tout au long du projet. Nous organisons des points d'étape réguliers pour vous tenir informé de l'avancement. Vous avez également accès à un suivi photo et pouvez nous joindre à tout moment pour toute question ou ajustement."
        },
        {
            question: "Réalisez-vous des aménagements sur mesure ?",
            answer: "C'est notre spécialité. Nous créons des meubles et aménagements entièrement sur mesure : cuisines équipées, dressings, bibliothèques, bureaux intégrés... Chaque réalisation est conçue en fonction de vos besoins, de votre espace et de votre style. Notre atelier nous permet de fabriquer des pièces uniques de haute qualité."
        },
        {
            question: "Quelles garanties offrez-vous sur vos travaux ?",
            answer: "Tous nos travaux sont couverts par la garantie décennale pour les éléments structurels, la garantie biennale pour les équipements, et la garantie de parfait achèvement d'un an. Au-delà des obligations légales, nous privilégions la qualité et la durabilité : notre réputation repose sur la satisfaction client et la pérennité de nos réalisations."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (sectionRef.current) {
                        sectionRef.current.querySelectorAll(".reveal").forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add("active");
                            }, i * 100);
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
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="section-padding bg-paris-light">
            <div className="container mx-auto container-padding">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 reveal">
                        <h2 className="section-title mb-6">
                            Questions <span className="premium-highlight">Fréquentes</span>
                        </h2>
                        <p className="text-paris-grey text-lg font-light leading-relaxed">
                            Tout ce que vous devez savoir sur nos services de rénovation.
                            Une question spécifique ? <a href="#contact" className="text-paris-orange hover:underline">Contactez-nous</a>.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="reveal bg-white rounded-2xl border border-paris-grey/10 overflow-hidden transition-all duration-300 hover:border-paris-orange/30 hover:shadow-lg"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                >
                                    <h3 className="text-lg md:text-xl font-medium text-paris-navy pr-8 group-hover:text-paris-orange transition-colors duration-300">
                                        {faq.question}
                                    </h3>
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-paris-light flex items-center justify-center group-hover:bg-paris-orange transition-all duration-300">
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5 text-paris-navy group-hover:text-white transition-colors duration-300" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-paris-navy group-hover:text-white transition-colors duration-300" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-500 ease-in-out",
                                        openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="px-8 pb-6 pt-2">
                                        <p className="text-paris-grey leading-relaxed font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center reveal">
                        <p className="text-paris-grey mb-6 font-light">
                            Vous ne trouvez pas la réponse à votre question ?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-paris-navy text-white rounded-full hover:bg-paris-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium tracking-wide text-sm uppercase"
                        >
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
