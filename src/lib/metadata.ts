import { Metadata } from "next";

interface mergeMetadataProps {
    title?: string
    description?: string | null
    keywords?: string | null
    url?: string
}

const SITE_NAME = "Elektrodukasi.id"
const BASE_URL = "https://elektrodukasi.id"
const DEFAULT_TITLE = "Belajar Elektronika, Perbaikan, Mikrokontroller dan Pemrograman - Elektrodukasi.id"
const DEFAULT_DESCRIPTION = "Blog edukasi Teknik Elektronika bahas Teori & Komponen Elektronika Dasar, Mikrokontroler, Linux, dan pemrograman Web (PHP, Python, dan NextJS)."
const DEFAULT_KEYWORDS = "elektronika, komponen dasar, mikrokontroler, pemrograman, PHP, Python, NextJS, linux, edukasi, belajar, elektronika, risam"
const OG_IMAGE_URL = `${BASE_URL}/img/og-image.jpg`


export const elektrodukasiMetadata : Metadata = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    creator: "Risam, S.T",
    robots: {
        index: true,
        follow: true,
        googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
        },
    },
    alternates: {
        canonical: BASE_URL,
        types: {
        "application/rss+xml": `${BASE_URL}/feed.xml`,
        },
    },
    openGraph: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        type: "website",
        url: BASE_URL,
        siteName: SITE_NAME,
        locale: "id-ID",
        images: [
        {
            url: OG_IMAGE_URL,
            width: 1200,
            height: 630,
        },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [OG_IMAGE_URL],
        creator: "@risamst",
    },
    icons: {
        icon: "/favicon.ico",
    },
}

export function mergeMetadata({
    title,
    description,
    keywords,
    url
}: mergeMetadataProps){
    const fullTitle = title ? `${title} - ${SITE_NAME}` : elektrodukasiMetadata.title!
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL

  const safeDescription = description ?? elektrodukasiMetadata.description
  const safeKeywords = keywords ?? elektrodukasiMetadata.keywords

  return {
    ...elektrodukasiMetadata,
    title: fullTitle,
    description: description || elektrodukasiMetadata.description,
    keywords: safeKeywords,
    alternates: {
      ...elektrodukasiMetadata.alternates,
      canonical: fullUrl,
    },
    openGraph: {
      ...elektrodukasiMetadata.openGraph,
      title: fullTitle,
      description: safeDescription || undefined,
      url: fullUrl,
    },
    twitter: {
      ...elektrodukasiMetadata.twitter,
      title: fullTitle,
      description: safeDescription || undefined,
    },
  }
}