import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
}

const SEO = ({
    title = "Paris Périphérie Rénovation | Rénovation de Prestige à Paris",
    description = "Expert en rénovation haut de gamme à Paris et Île-de-France. Transformez votre espace avec notre savoir-faire artisanal et notre engagement pour l'excellence. Devis gratuit.",
    keywords = "rénovation paris, artisan rénovation, rénovation appartement paris, rénovation maison ile de france, renovation cuisine paris, renovation salle de bain",
    ogImage = "/nas_pic_2.jpeg",
    canonicalUrl,
}: SEOProps) => {
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://parisperipherie-renovation.fr');
    const siteUrl = 'https://parisperipherie-renovation.fr';
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="Paris Périphérie Rénovation" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullOgImage} />
            <meta name="twitter:creator" content="@ParisRenovation" />
        </Helmet>
    );
};

export default SEO;
