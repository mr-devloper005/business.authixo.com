export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'i7gbaqgfl0',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Business Authixo',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A media-distribution newsroom for announcements, coverage, and press updates on Business Authixo.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'business.authixo.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://business.authixo.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/site-media/freepik-main.png',
} as const
