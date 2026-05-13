import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Press wire media desk',
  },
  footer: {
    tagline: 'Distribution-ready newsroom platform',
  },
  hero: {
    badge: 'Media Distribution',
    title: ['Press wire delivery with modern newsroom design.'],
    description:
      'A media-first publishing surface built for high-visibility announcements, campaign updates, and business press wires.',
    primaryCta: {
      label: 'Browse latest releases',
      href: '/public-relation',
    },
    secondaryCta: {
      label: 'Talk to our team',
      href: '/contact',
    },
    searchPlaceholder: 'Search releases',
    focusLabel: 'Top stories',
    featureCardBadge: 'coverage note',
    featureCardTitle: 'Latest releases appear instantly across the newsroom.',
    featureCardDescription:
      'The homepage is tuned for quick scanning so press wires stay visible and easy to access.',
  },
  home: {
    metadata: {
      title: 'Top24Headline media distribution newsroom',
      description:
        'Publish and discover press wires, distribution plans, and media-ready updates through a modern SaaS newsroom.',
      openGraphTitle: 'Top24Headline media distribution newsroom',
      openGraphDescription:
        'Send your news to digital publishers instantly with clean press-wire workflows and readable editorial pages.',
      keywords: ['press wire distribution', 'media newsroom', 'digital publishers', 'latest press wires'],
    },
    introBadge: 'Platform',
    introTitle: 'A focused newsroom product for growth-stage media distribution.',
    introParagraphs: [
      'Top24Headline helps startups and PR teams distribute announcements across digital publisher networks with clarity and speed.',
      'Releases are structured for readability, trust, and SEO performance so each story can travel further.',
      'The interface keeps editorial quality high while preserving rapid SaaS-style publishing workflows.',
    ],
    sideBadge: 'What it prioritizes',
    sidePoints: [
      'Reliable media distribution with clear plan options.',
      'Fast newsroom scanning with search and filters.',
      'Readable single release pages with social sharing.',
      'Distinct branding built for press and PR operations.',
    ],
    primaryLink: {
      label: 'Open newsroom',
      href: '/public-relation',
    },
    secondaryLink: {
      label: 'Contact support',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Get Started',
    title: 'Publish high-impact releases through a media-native distribution workflow.',
    description:
      'From writing to publisher placement, Top24Headline gives your brand a stronger digital media footprint.',
    primaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View newsroom',
      href: '/public-relation',
    },
  },
  taskSectionHeading: 'Latest releases',
  taskSectionDescriptionSuffix: 'Read the newest published press wires.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest press wire',
    description: 'Explore published press wires, brand stories, and newsroom updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest press wire',
    paragraphs: [
      'This newsroom archive is built for media distribution teams publishing high-visibility updates.',
      'Use filters and search to quickly scan headlines, open full stories, and share release links.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
