import { MetadataRoute } from "next";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {

    const routes = ['', 'kategori', 'projects', 'author'].map((route) => ({
        url: `https://elektrodukasi.id'/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

        return [...routes]
}