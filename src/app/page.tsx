import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, MessageSquare, Plus, Zap, Globe, BarChart3, Shield } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import { siteContent } from '@/config/site.content'
import type { SitePost } from '@/lib/site-connector'
import { HOME_PAGE_OVERRIDE_ENABLED, HomePageOverride } from '@/overrides/home-page'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

function getPostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const contentImage =
    typeof post?.content === 'object' && post?.content && Array.isArray((post.content as any).images)
      ? (post.content as any).images.find((url: unknown) => typeof url === 'string' && url)
      : null
  const logo =
    typeof post?.content === 'object' && post?.content && typeof (post.content as any).logo === 'string'
      ? (post.content as any).logo
      : null
  return mediaUrl || contentImage || logo || '/site-media/freepik-main.png'
}

export default async function HomePage() {
  if (HOME_PAGE_OVERRIDE_ENABLED) {
    return <HomePageOverride />
  }

  const mediaDistributionPosts = await fetchTaskPosts('mediaDistribution', 8, {
    allowMockFallback: true,
    fresh: false,
    revalidate: 120,
  })
  const updatesRoute =
    SITE_CONFIG.tasks.find((task) => task.key === 'mediaDistribution')?.route || '/public-relation'
  const featuredUpdates = mediaDistributionPosts.slice(0, 6)
  const heroPost = featuredUpdates[0]
  const recentPosts = featuredUpdates.slice(1, 4)

  const freepikImages = [
    'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg',
    'https://img.freepik.com/free-photo/business-people-working-together-office_1303-22863.jpg',
    'https://img.freepik.com/free-photo/close-up-people-working-office_23-2149300656.jpg',
    'https://img.freepik.com/free-photo/businesswoman-giving-presentation-boardroom_23-2148146319.jpg',
    'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg',
    'https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg',
  ]

  const features = [
    { icon: Zap, title: 'Instant Distribution', desc: 'Releases go live across 3,200+ publisher endpoints within hours of approval.' },
    { icon: Globe, title: 'Global Media Reach', desc: 'Target regional, national, or international outlets with precision routing.' },
    { icon: BarChart3, title: 'Live Analytics', desc: 'Track impressions, pickups, and coverage performance from one dashboard.' },
    { icon: Shield, title: 'Editorial QA', desc: 'Every release passes editorial review before it reaches the wire.' },
  ]

  const stats = [
    { value: '52K+', label: 'Press Wires Sent' },
    { value: '3,200+', label: 'Publisher Network' },
    { value: '< 24 hrs', label: 'Avg. Turnaround' },
    { value: '98%', label: 'Delivery Rate' },
  ]

  const faqItems = [
    { q: 'How quickly can my release go live?', a: 'Most releases are distributed within 24 hours after editorial verification and approval.' },
    { q: 'Can I target specific media categories?', a: 'Yes — choose from Finance, Tech, Healthcare, Energy, and more for precise audience targeting.' },
    { q: 'Do you help with editorial review?', a: 'Our editorial team reviews every release for structure, clarity, and newsroom standards.' },
    { q: 'Will I receive a distribution report?', a: 'All plans include a post-distribution summary with pickup counts and coverage links.' },
  ]

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#1a0a2e]">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <main>

        {/* ── HERO ── */}
        <section className="relative isolate overflow-hidden bg-[#0d0520]">
          <div className="absolute inset-0">
            <ContentImage src={freepikImages[0]} alt="Media press release hero" fill className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7F27FF]/60 via-[#0d0520]/80 to-[#0d0520]" />
          </div>
          {/* decorative glow blobs */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#7F27FF]/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-[#FDBF60]/15 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7F27FF]/30 bg-[#7F27FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">
                  Media Press Wire Platform
                </span>
                <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Distribute your press releases to{' '}
                  <span className="bg-gradient-to-r from-[#FDBF60] to-[#FF8911] bg-clip-text text-transparent">
                    3,200+ media outlets
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                  A professional press wire platform built for PR teams, startups, and enterprises. Get your story in front of journalists, editors, and digital publishers — fast.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={updatesRoute}
                    className="inline-flex items-center gap-2 rounded-full bg-[#7F27FF] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7F27FF]/30 transition hover:bg-[#6a1fe0]"
                  >
                    Browse Newsroom
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Talk to Our Team
                  </Link>
                </div>
                {/* trust bar */}
                <div className="mt-10 flex flex-wrap gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold text-[#FDBF60]">{s.value}</p>
                      <p className="text-xs text-white/55">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* featured release card */}
              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                <div className="relative h-56 overflow-hidden rounded-xl">
                  <ContentImage src={freepikImages[1]} alt={heroPost?.title || 'Featured press release'} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0520] via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#FF8911] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Featured Release
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="line-clamp-2 text-lg font-semibold text-white">
                    {heroPost?.title || 'Latest press wire from our distribution desk'}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-white/60">
                    {heroPost?.summary || 'Read the full release for complete coverage details and distribution notes.'}
                  </p>
                  <Link
                    href={heroPost ? `${updatesRoute}/${heroPost.slug}` : updatesRoute}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#9F70FD] hover:text-[#FDBF60] transition-colors"
                  >
                    Read full release <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section className="bg-[#f8f5ff] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7F27FF]/20 bg-[#7F27FF]/08 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#7F27FF]">
                Platform
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#1a0a2e] sm:text-4xl">
                Everything your PR team needs
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#5a4a7a]">
                From writing to publisher placement — one platform handles the full press wire lifecycle.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <article
                  key={f.title}
                  className="group rounded-2xl border border-[#e8e0ff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[#9F70FD]/40"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: i % 2 === 0 ? 'linear-gradient(135deg,#7F27FF,#9F70FD)' : 'linear-gradient(135deg,#FF8911,#FDBF60)' }}
                  >
                    <f.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#1a0a2e]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5a4a7a]">{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECENT RELEASES ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8911]">Newsroom</span>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#1a0a2e] sm:text-3xl">
                  Recent press releases
                </h2>
              </div>
              <Link href={updatesRoute} className="flex items-center gap-1 text-sm font-semibold text-[#7F27FF] hover:text-[#9F70FD] transition-colors">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post, index) => (
                <Link key={post.id} href={`${updatesRoute}/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-[#e8e0ff] bg-white shadow-sm transition hover:shadow-md hover:border-[#9F70FD]/40">
                  <div className="relative h-44 overflow-hidden">
                    <ContentImage
                      src={freepikImages[index + 2]}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/70 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#7F27FF]/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {String((post.content as any)?.category || 'Press Release')}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-base font-semibold text-[#1a0a2e] group-hover:text-[#7F27FF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-[#5a4a7a]">
                      {post.summary || 'Read the full release for complete details.'}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#FF8911]">
                      Read release <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-[#f8f5ff] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1a0a2e] sm:text-4xl">
                  From draft to live wire in under 24 hours
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5a4a7a]">
                  Our streamlined process ensures your press release reaches the right journalists and publishers without delays or formatting issues.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Submit your release through our clean editor',
                    'Editorial team reviews for structure and clarity',
                    'Routed to targeted publisher channels instantly',
                    'Receive a full distribution report with pickup data',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#3a2a5a]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7F27FF] text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-3">
                  <Link
                    href={updatesRoute}
                    className="inline-flex items-center gap-2 rounded-full bg-[#7F27FF] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7F27FF]/25 transition hover:bg-[#6a1fe0]"
                  >
                    Explore newsroom
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#e8e0ff] shadow-lg">
                <div className="relative h-80">
                  <ContentImage src={freepikImages[4]} alt="Distribution workflow" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/80 via-[#1a0a2e]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FDBF60]">Editorial first</span>
                    <p className="mt-1 text-base font-semibold text-white">Every release reviewed before it hits the wire.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#1a0a2e] sm:text-3xl">What communicators say</h2>
              <p className="mt-2 text-sm text-[#5a4a7a]">Trusted by PR teams, agencies, and growth-stage brands.</p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { quote: '"Simple interface, clean output, and really fast publishing turnaround. Our team adopted it in a day."', name: 'Sarah K.', role: 'PR Director' },
                { quote: '"The formatting quality makes our updates look like true newsroom pieces. Journalists actually respond."', name: 'Marcus T.', role: 'Communications Lead' },
                { quote: '"Distribution and reporting now happen in one predictable workflow. No more chasing pickups manually."', name: 'James R.', role: 'Head of Media Relations' },
              ].map((t) => (
                <article key={t.name} className="rounded-2xl border border-[#e8e0ff] bg-[#f8f5ff] p-6 shadow-sm">
                  <p className="text-sm leading-7 text-[#3a2a5a]">{t.quote}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] text-xs font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a0a2e]">{t.name}</p>
                      <p className="text-xs text-[#7a6a9a]">{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#f8f5ff] py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#1a0a2e] sm:text-3xl">Questions, answered</h2>
              <p className="mt-2 text-sm text-[#5a4a7a]">Everything you need to know about our press wire service.</p>
            </div>
            <div className="mt-8 divide-y divide-[#e8e0ff] rounded-2xl border border-[#e8e0ff] bg-white overflow-hidden shadow-sm">
              {faqItems.map((item) => (
                <details key={item.q} className="group px-5 py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[#1a0a2e] list-none">
                    {item.q}
                    <Plus className="h-4 w-4 shrink-0 text-[#7F27FF] transition group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#5a4a7a]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="relative overflow-hidden bg-[#0d0520] py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-1/4 h-[350px] w-[350px] rounded-full bg-[#7F27FF]/25 blur-[100px]" />
            <div className="absolute -bottom-10 right-1/4 h-[300px] w-[300px] rounded-full bg-[#FDBF60]/15 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7F27FF]/30 bg-[#7F27FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">
              Get Started
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              Ready to amplify your media presence?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
              Join thousands of brands using our press wire platform to reach journalists, editors, and digital publishers at scale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FDBF60] px-8 py-3 text-sm font-bold text-[#1a0a2e] shadow-lg shadow-[#FDBF60]/25 transition hover:bg-[#FF8911]"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={updatesRoute}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View newsroom
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
