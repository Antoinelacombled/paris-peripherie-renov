interface SchemaOrgProps {
    type: 'LocalBusiness' | 'FAQPage' | 'Organization';
    data?: any;
}

const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
    let schemaData;

    switch (type) {
        case 'LocalBusiness':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "GeneralContractor",
                "name": "Paris Périphérie Rénovation",
                "image": "/logo.png",
                "telephone": "+33605708376",
                "email": "pprenov75@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "addressCountry": "FR"
                },
                "areaServed": [
                    {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": "48.8566",
                            "longitude": "2.3522"
                        },
                        "geoRadius": "50000"
                    }
                ],
                "priceRange": "€€€",
                "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "28"
                },
                "sameAs": [
                    "https://www.facebook.com/parisperipherierenovation",
                    "https://www.instagram.com/parisperipherierenovation"
                ],
                ...data
            };
            break;

        case 'FAQPage':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": data || []
            };
            break;

        case 'Organization':
            schemaData = {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Paris Périphérie Rénovation",
                "url": "https://parisperipherie-renovation.fr",
                "logo": "/logo.png",
                ...data
            };
            break;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default SchemaOrg;
