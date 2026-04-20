import { Helmet } from 'react-helmet-async'

export default function SEO({
    title = 'Averant Team - Jasa Pembuatan Website Surabaya',
    description = 'Jasa pembuatan website profesional di Surabaya. Harga terjangkau, hasil berkualitas. Konsultasi gratis!',
    image = '/logo.png',
    url = 'https://averantteam.com',
    noindex = false
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Averant Team",
        "description": description,
        "image": image,
        "priceRange": "$$",
        "areaServed": {
            "@type": "City",
            "name": "Surabaya"
        },
        "serviceType": "Jasa Pembuatan Website",
        "sameAs": [
            "https://www.instagram.com/averanteam.official/"
        ]
    }

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Averant Team" />
            
            {url && url !== 'https://averantteam.com' && (
                <link rel="canonical" href={url} />
            )}
            
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    )
}