export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    author: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "renover-appartement-haussmannien-guide",
        title: "Rénover un appartement Haussmannien : Le guide complet",
        excerpt: "Moulures, parquet point de Hongrie, cheminées... Découvrez les étapes clés pour rénover un appartement haussmannien tout en préservant son charme d'antan.",
        content: `
            <p class="lead">L'appartement haussmannien est l'emblème de l'élégance parisienne. Avec ses hauts plafonds, ses moulures, ses cheminées en marbre et son parquet point de Hongrie, il incarne un art de vivre unique. Mais rénover ce type de bien demande une expertise particulière pour moderniser le confort sans dénaturer l'âme des lieux.</p>

            <blockquote>
                "La rénovation d'un haussmannien est un équilibre subtil entre respect du patrimoine et exigences du confort moderne. C'est un dialogue entre les époques."
            </blockquote>

            <h2>1. Préserver l'existant : un devoir de mémoire</h2>
            <p>La première règle d'or lors de la rénovation d'un haussmannien est le respect de l'existant. Avant de tout casser, faites un inventaire précis des éléments patrimoniaux :</p>
            <ul>
                <li><strong>Les moulures et corniches :</strong> Souvent abîmées par le temps ou les couches de peinture successives, elles peuvent être restaurées par des staffeurs ornemanistes.</li>
                <li><strong>Le parquet :</strong> Le point de Hongrie ou les bâtons rompus sont des trésors. Un ponçage et une vitrification peuvent leur redonner leur éclat d'origine. S'il manque des lames, il est possible d'en retrouver de similaires.</li>
                <li><strong>Les cheminées :</strong> Même si elles ne sont plus utilisées pour le chauffage, elles restent l'élément central du salon.</li>
            </ul>

            <h2>2. Repenser les volumes pour la vie moderne</h2>
            <p>Les plans d'origine des appartements haussmanniens ne correspondent plus toujours à nos modes de vie actuels. La cuisine était souvent reléguée au fond d'un couloir, loin des pièces de réception. Aujourd'hui, on cherche à ouvrir les espaces.</p>
            <p>Ouvrir la cuisine sur le salon est une demande fréquente. Cela nécessite souvent l'intervention d'un ingénieur structure si le mur est porteur. C'est une opération délicate mais qui transforme radicalement la luminosité et la convivialité de l'appartement.</p>

            <h2>3. L'isolation : le défi technique</h2>
            <p>Le confort thermique et acoustique n'était pas la priorité du Baron Haussmann. Les fenêtres d'origine, souvent de simples vitrages, doivent être remplacées par des modèles en bois double vitrage qui respectent l'esthétique de la façade (souvent imposé par la copropriété ou les Bâtiments de France).</p>
            <p>Pour l'isolation phonique, notamment au sol, des solutions existent pour limiter les bruits d'impact sans trop surélever le niveau du sol.</p>

            <h2>4. La touche contemporaine</h2>
            <p>Rénover un haussmannien, ce n'est pas vivre dans un musée. Le contraste entre l'ancien et le contemporain fonctionne à merveille. Une cuisine ultra-moderne aux lignes épurées, des verrières type atelier pour cloisonner sans fermer, ou des salles de bains design s'intègrent parfaitement dans ce cadre classique.</p>

            <p>Chez Paris Périphérie Rénovation, nous avons l'habitude de ces chantiers complexes qui demandent doigté et savoir-faire. N'hésitez pas à nous contacter pour discuter de votre projet.</p>
        `,
        image: "/nas_pic_12.jpeg",
        date: "15 Octobre 2024",
        author: "Antoine L.",
        readTime: "8 min"
    },
    {
        id: 2,
        slug: "tendances-cuisine-2025",
        title: "Tendances Cuisine 2025 : Matériaux et Couleurs",
        excerpt: "Marbre, bois brut, couleurs terreuses... Tour d'horizon des tendances qui feront les plus belles cuisines de l'année à venir.",
        content: `
            <p class="lead">La cuisine n'est plus seulement une pièce fonctionnelle, c'est le cœur de la maison. En 2025, les tendances s'orientent vers un retour à la nature, des matériaux authentiques et des couleurs chaleureuses. Fini le tout blanc clinique, place à la personnalité et à la matière.</p>

            <h2>1. Les matériaux naturels à l'honneur</h2>
            <p>Le bois reste incontournable, mais on le préfère désormais dans des teintes plus foncées (noyer, chêne fumé) ou très texturées. Il apporte de la chaleur et contraste magnifiquement avec des plans de travail en pierre.</p>
            <p>Le marbre, toujours présent, se fait plus audacieux avec des veinages marqués (Calacatta Viola, marbre vert). Le travertin et le terrazzo continuent également leur ascension, apportant une touche méditerranéenne et artisanale.</p>

            <h2>2. La palette de couleurs 2025</h2>
            <p>Les couleurs terreuses dominent : terracotta, ocre, beige sable, vert olive. Ces teintes apaisantes créent une atmosphère douce et enveloppante.</p>
            <p>Pour ceux qui osent, le bleu nuit ou le vert forêt restent des valeurs sûres pour donner de la profondeur et de l'élégance, surtout associés à des poignées en laiton brossé.</p>

            <h2>3. L'îlot central : plus convivial que jamais</h2>
            <p>L'îlot ne sert plus juste à cuisiner. Il s'arrondit, s'adoucit avec des courbes organiques. Il devient table à manger, bureau d'appoint, bar de réception. On joue sur les doubles hauteurs et les mélanges de matériaux pour délimiter les zones.</p>

            <h2>4. La technologie invisible</h2>
            <p>L'électroménager se cache. Les hottes sont intégrées dans les plaques de cuisson, les frigos disparaissent derrière des façades assorties aux placards. L'objectif est d'avoir une cuisine qui ressemble à un meuble de salon, parfaitement intégrée à la pièce de vie.</p>
        `,
        image: "/nas_pic_2.jpeg",
        date: "02 Novembre 2024",
        author: "Sophie M.",
        readTime: "5 min"
    },
    {
        id: 3,
        slug: "aides-renovation-energetique-paris",
        title: "Rénovation énergétique à Paris : Les aides disponibles",
        excerpt: "MaPrimeRénov', CEE, Éco-PTZ... Tout comprendre sur les aides financières pour améliorer la performance énergétique de votre logement parisien.",
        content: `
            <p class="lead">Améliorer la performance énergétique de son logement est devenu une priorité, tant pour le confort que pour la valorisation du bien et les économies d'énergie. À Paris, plusieurs dispositifs existent pour vous aider à financer ces travaux.</p>

            <h2>1. MaPrimeRénov' : le pilier principal</h2>
            <p>Accessible à tous les propriétaires, quels que soient leurs revenus (le montant varie selon les ressources), MaPrimeRénov' finance une partie des travaux d'isolation, de chauffage, de ventilation ou d'audit énergétique.</p>
            <p>Depuis 2024, le dispositif "MaPrimeRénov' Parcours Accompagné" encourage les rénovations globales avec des forfaits très avantageux pour les sauts de classes énergétiques.</p>

            <h2>2. Les Certificats d'Économies d'Énergie (CEE)</h2>
            <p>Les fournisseurs d'énergie (EDF, Engie, Total...) financent des travaux d'économie d'énergie via les primes CEE. Elles sont cumulables avec MaPrimeRénov'. C'est souvent une aide "Coup de Pouce" pour le remplacement d'une chaudière ou l'isolation.</p>

            <h2>3. L'Éco-Prêt à Taux Zéro (Éco-PTZ)</h2>
            <p>Pour financer le reste à charge, vous pouvez emprunter jusqu'à 50 000 € sans intérêts. C'est un levier indispensable pour lancer des travaux d'ampleur sans toucher à son épargne.</p>

            <h2>4. Les aides locales de la Ville de Paris</h2>
            <p>La Ville de Paris propose le dispositif "Éco-Rénovons Paris" qui offre un accompagnement gratuit et des aides financières complémentaires pour les copropriétés souhaitant engager une rénovation globale (isolation par l'extérieur, toiture, changement de fenêtres...).</p>

            <h2>5. La TVA à taux réduit</h2>
            <p>Pour les travaux de rénovation énergétique, la TVA passe à 5,5% au lieu de 10% ou 20%. Cela s'applique directement sur la facture de l'entreprise réalisant les travaux.</p>

            <p>Attention, pour bénéficier de ces aides, il est impératif de faire appel à des artisans certifiés RGE (Reconnu Garant de l'Environnement), comme Paris Périphérie Rénovation.</p>
        `,
        image: "/nas_pic_6.jpeg",
        date: "20 Novembre 2024",
        author: "Marc D.",
        readTime: "6 min"
    }
];
