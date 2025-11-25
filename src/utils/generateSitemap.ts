// Simple sitemap generator for static routes
// This creates a sitemap.xml in the public folder

export const generateSitemap = () => {
    const baseUrl = 'https://parisperipherie-renovation.fr';
    const currentDate = new Date().toISOString().split('T')[0];

    const routes = [
        { path: '/', priority: '1.0', changefreq: 'weekly' },
        { path: '/renovation-saint-mande', priority: '0.8', changefreq: 'monthly' },
        { path: '/renovation-vincennes', priority: '0.8', changefreq: 'monthly' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map(
                (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
            )
            .join('\n')}
</urlset>`;

    return sitemap;
};

// Manual export for development build
if (typeof window === 'undefined') {
    const sitemap = generateSitemap();
    console.log('Generated Sitemap:');
    console.log(sitemap);
}
