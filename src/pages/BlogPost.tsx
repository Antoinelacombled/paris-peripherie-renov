import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import SEO from "@/components/SEO";
import SchemaOrg from "@/components/SchemaOrg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";
import { cn } from "@/lib/utils";

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    if (!post) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={`${post.title} | Blog Paris Périphérie Rénovation`}
                description={post.excerpt}
                ogImage={post.image}
                keywords="blog rénovation, conseils travaux, rénovation paris"
            />

            {/* Schema.org Article Data */}
            {/* Schema.org Article Data */}
            <SchemaOrg
                type="Article"
                data={{
                    "headline": post.title,
                    "image": [
                        post.image.startsWith('http') ? post.image : `https://parisperipherie-renovation.fr${post.image}`
                    ],
                    "datePublished": "2024-10-15T08:00:00+08:00", // Placeholder
                    "dateModified": "2024-10-15T09:20:00+08:00", // Placeholder
                    "author": [{
                        "@type": "Person",
                        "name": post.author,
                        "url": "https://parisperipherie-renovation.fr"
                    }],
                    "description": post.excerpt
                }}
            />

            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-paris-orange z-[60] transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
            />

            <Navbar />

            <article>
                {/* Premium Hero Section */}
                <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-paris-navy/40 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-paris-navy via-transparent to-transparent z-20"></div>

                    {/* Parallax Image Effect could go here, for now static */}
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 z-30 flex flex-col justify-end pb-24 md:pb-32">
                        <div className="container mx-auto container-padding">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm uppercase tracking-wider font-medium backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full w-fit"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Retour au journal
                            </Link>

                            <div className="max-w-4xl space-y-6 animate-fade-in-up">
                                <div className="flex items-center gap-4 text-white/90 text-sm font-medium tracking-wide uppercase">
                                    <span className="bg-paris-orange px-3 py-1 text-white text-xs font-bold rounded-sm">Article</span>
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg">
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto container-padding relative z-10 -mt-1 md:-mt-12">
                    <div className="bg-white rounded-t-3xl shadow-2xl p-6 md:p-16 lg:p-20 max-w-5xl mx-auto mt-16">

                        {/* Author & Share Header */}
                        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-12 mb-12 gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-paris-light flex items-center justify-center text-2xl font-serif text-paris-navy border-2 border-paris-orange/20">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm text-paris-grey/60 uppercase tracking-wider font-medium mb-1">Écrit par</p>
                                    <p className="text-lg font-serif text-paris-navy">{post.author}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-paris-grey hover:bg-paris-navy hover:text-white hover:border-paris-navy transition-all duration-300">
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-paris-grey hover:bg-paris-navy hover:text-white hover:border-paris-navy transition-all duration-300">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-paris-grey hover:bg-paris-navy hover:text-white hover:border-paris-navy transition-all duration-300">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-paris-grey hover:bg-paris-navy hover:text-white hover:border-paris-navy transition-all duration-300">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg md:prose-xl mx-auto
                            prose-headings:font-serif prose-headings:text-paris-navy
                            prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-10 prose-h2:relative prose-h2:inline-block
                            prose-p:text-paris-grey prose-p:font-light prose-p:leading-loose prose-p:mb-8
                            prose-a:text-paris-orange prose-a:no-underline hover:prose-a:underline
                            prose-blockquote:border-l-4 prose-blockquote:border-paris-orange prose-blockquote:pl-8 prose-blockquote:my-12 prose-blockquote:italic prose-blockquote:text-paris-navy/80 prose-blockquote:bg-paris-light/30 prose-blockquote:py-8 prose-blockquote:pr-8 prose-blockquote:rounded-r-lg
                            prose-strong:font-medium prose-strong:text-paris-navy
                            prose-li:text-paris-grey prose-li:font-light prose-li:mb-2
                            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-16
                            first-letter:float-left first-letter:text-7xl first-letter:font-serif first-letter:text-paris-orange first-letter:mr-4 first-letter:mt-[-10px]
                        ">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-20 p-12 bg-paris-navy rounded-2xl text-center text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-paris-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-paris-orange/20 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif mb-4">Un projet de rénovation en tête ?</h3>
                                <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light">
                                    Nos experts sont là pour vous accompagner. Discutons de votre projet et transformons vos idées en réalité.
                                </p>
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-paris-orange text-white rounded-full hover:bg-white hover:text-paris-navy transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                                >
                                    Demander un devis gratuit
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
