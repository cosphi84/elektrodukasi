import { MetadataRoute } from "next";

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api/admin'],
        },
        sitemap: 'https://elektrodukasi.id/sitemap.xml',
        host: 'https://elektrodukasi.id'
    }
}