import emailjs from "@emailjs/browser";
import { ChevronRight, Clock, Mail, Phone, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { EMAILJS_CONFIG } from "../config/emailjs";
import { cn } from "@/lib/utils";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("active");
              }, i * 200);
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.text === "OK") {
        setFormStatus({
          message:
            "Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.",
          type: "success",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setFormStatus({
        message:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-paris-navy text-white relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-paris-orange/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <div className="reveal space-y-12">
            <div>
              <h2 className="section-title text-white mb-6">
                Parlons de votre <br />
                <span className="text-paris-orange">Projet d'Exception</span>
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
                Chaque rénovation commence par une conversation. Discutons de vos envies et transformons-les en réalité.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-full bg-paris-orange/10 text-paris-orange group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif mb-2">Téléphone</h3>
                  <div className="space-y-1">
                    <a href="tel:+33605708376" className="block text-white/80 hover:text-paris-orange transition-colors">06 05 70 83 76</a>
                    <a href="tel:+33666346639" className="block text-white/80 hover:text-paris-orange transition-colors">06 66 34 66 39</a>
                  </div>
                </div>
              </div>

              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-full bg-paris-orange/10 text-paris-orange group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif mb-2">Email</h3>
                  <a href="mailto:pprenov75@gmail.com" className="text-white/80 hover:text-paris-orange transition-colors">
                    pprenov75@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-full bg-paris-orange/10 text-paris-orange group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif mb-2">Horaires</h3>
                  <p className="text-white/80">Lun-Ven: 8h-18h</p>
                  <p className="text-white/80">Sam: Sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="reveal lg:pt-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
              <h3 className="font-serif text-3xl text-paris-navy mb-8">Demander un devis</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-paris-navy/80 uppercase tracking-wider">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-b border-paris-grey/30 bg-transparent focus:border-paris-orange focus:outline-none transition-colors duration-300 text-paris-navy placeholder:text-paris-grey/40"
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-paris-navy/80 uppercase tracking-wider">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 border-b border-paris-grey/30 bg-transparent focus:border-paris-orange focus:outline-none transition-colors duration-300 text-paris-navy placeholder:text-paris-grey/40"
                      placeholder="Votre numéro"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-paris-navy/80 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-b border-paris-grey/30 bg-transparent focus:border-paris-orange focus:outline-none transition-colors duration-300 text-paris-navy placeholder:text-paris-grey/40"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium text-paris-navy/80 uppercase tracking-wider">Projet</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-b border-paris-grey/30 bg-transparent focus:border-paris-orange focus:outline-none transition-colors duration-300 text-paris-navy"
                    required
                  >
                    <option value="">Type de projet</option>
                    <option value="apartment">Rénovation d'appartement</option>
                    <option value="house">Rénovation de maison</option>
                    <option value="commercial">Espace commercial</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-paris-navy/80 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-0 py-3 border-b border-paris-grey/30 bg-transparent focus:border-paris-orange focus:outline-none transition-colors duration-300 text-paris-navy placeholder:text-paris-grey/40 resize-none"
                    placeholder="Décrivez votre projet..."
                    required
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div className={cn(
                    "p-4 rounded-lg text-sm",
                    formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  )}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-paris-navy text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-paris-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
