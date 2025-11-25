import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Le Journal de la Rénovation | Conseils & Inspirations | Paris Périphérie"
                description="Retrouvez nos conseils d'experts, guides de rénovation et inspirations déco pour vos projets d'appartement et maison à Paris et en Île-de-France."
                keywords="blog rénovation, conseils travaux, rénovation haussmannien, tendances déco 2025, aides rénovation paris"
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-paris-navy text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/nas_pic_8.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-paris-navy/90 to-paris-navy"></div>

                <div className="container mx-auto container-padding relative z-10 text-center">
                    <p className="text-paris-orange uppercase tracking-wider text-sm mb-4 font-medium">Inspirations & Conseils</p>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">
                        Le Journal de la <span className="text-paris-orange italic">Rénovation</span>
                    </h1>
                    <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
                        L'expertise de nos artisans et architectes pour vous guider dans vos projets.
                    </p>
                </div>
            </section>

            {/* Articles List */}
            <section className="py-20 bg-paris-light">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {blogPosts.map((article) => (
                            <Link to={`/blog/${article.slug}`} key={article.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-paris-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-paris-grey/60 mb-4 font-medium uppercase tracking-wide">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-serif text-paris-navy mb-4 group-hover:text-paris-orange transition-colors duration-300 leading-tight">
                                        {article.title}
                                    </h2>

                                    <p className="text-paris-grey/80 font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-paris-navy font-medium">
                                            <User className="w-4 h-4 text-paris-orange" />
                                            {article.author}
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-paris-orange font-medium text-sm group-hover:gap-3 transition-all duration-300">
                                            Lire l'article
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
