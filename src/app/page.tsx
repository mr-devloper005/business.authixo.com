import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  MessageSquare,
  Plus,
} from 'lucide-react'
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
  const contentImage = typeof post?.content === 'object' && post?.content && Array.isArray((post.content as any).images)
    ? (post.content as any).images.find((url: unknown) => typeof url === 'string' && url)
    : null
  const logo = typeof post?.content === 'object' && post?.content && typeof (post.content as any).logo === 'string'
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
  const supportCards = featuredUpdates.slice(1, 3)
  const freepikImages = [
    'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg',
    'https://img.freepik.com/free-photo/business-people-working-together-office_1303-22863.jpg',
    'https://img.freepik.com/free-photo/close-up-people-working-office_23-2149300656.jpg',
    'https://img.freepik.com/free-photo/businesswoman-giving-presentation-boardroom_23-2148146319.jpg',
    'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg',
    'https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg',
    'https://img.freepik.com/free-photo/teamwork-concept-landing-page_23-2148248105.jpg',
    'https://img.freepik.com/free-photo/business-team-meeting-boardroom_23-2148898716.jpg',
  ]
  const industries = ['Finance', 'Team & Media', 'Public Relations', 'Energy & Science']
  const faqItems = [
    'How quickly can my release go live?',
    'Can I target specific media categories?',
    'Do you help with editorial review?',
    'Will I receive a distribution summary report?',
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
    <div className="min-h-screen bg-gray-900 text-white">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d0d0f] text-white">
          <div className="absolute inset-0">
            <ContentImage src={freepikImages[0]} alt="Press distribution hero background" fill className="object-cover opacity-35" />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Press wire distribution</p>
              <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Distribute press wire with a newsroom that feels premium, not generic.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
                Launch coverage-ready stories with clean editorial structure, faster approvals, and reliable syndication across modern media surfaces.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={updatesRoute} className="inline-flex items-center gap-2 bg-[#f04b23] px-8 py-3 text-sm font-semibold text-white hover:bg-[#db3e18]">
                  Start now
                </Link>

              </div>
            </div>
            <article className="relative rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
              <div className="relative h-52 overflow-hidden rounded-xl">
                <ContentImage src={freepikImages[1]} alt={heroPost?.title || 'Featured update'} fill className="object-cover" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Featured release</p>
              <h2 className="mt-2 line-clamp-2 text-lg font-semibold">{heroPost?.title || 'Distribution update from our desk'}</h2>
              <Link href={heroPost ? `${updatesRoute}/${heroPost.slug}` : updatesRoute} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f37452]">
                Read release
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold tracking-[-0.03em] text-[#1e1e2b] sm:text-3xl">
              An extension of your communications team
            </h2>
            <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
              {supportCards.map((post, index) => (
                <article key={post.id} className="group overflow-hidden rounded-xl border border-[#e7e5f2] bg-white shadow-sm">
                  <div className="relative h-44">
                    <ContentImage src={freepikImages[index + 2]} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101012cc] to-transparent" />
                    <h3 className="absolute bottom-3 left-3 right-3 line-clamp-2 text-base font-semibold text-white">{post.title}</h3>
                  </div>
                  <div className="px-3 pb-3 pt-2">
                    <Link href={`${updatesRoute}/${post.slug}`} className="inline-flex rounded-full bg-[#f04b23] px-3 py-1 text-xs font-semibold text-white">
                      Read story
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f7f8f]">Distribution workflow</p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1d1d2c]">
              Distribution that stays readable end-to-end
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                'Editorial checks before publication',
                'Structured formatting for modern newsrooms',
                'Faster routing to partner channels',
                'One dashboard for delivery updates',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#4d4c5f]">
                  <Check className="h-4 w-4 text-[#f04b23]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={updatesRoute} className="mt-7 inline-flex bg-[#f04b23] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#db3e18]">
              Explore newsroom
            </Link>
          </div>
          <article className="overflow-hidden rounded-2xl border border-[#e6e3f2] bg-white shadow-sm">
            <div className="relative h-64">
              <ContentImage src={freepikImages[4]} alt="Distribution preview" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111d9] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Editorial first</p>
                <p className="mt-2 text-lg font-semibold">Prepare content faster with cleaner press formatting.</p>
              </div>
            </div>
          </article>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#1d1d2c]">Industry-ready presentation</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <article key={industry} className="overflow-hidden rounded-xl border border-[#e8e6f2] bg-white shadow-sm">
                  <div className="relative h-32">
                    <ContentImage src={freepikImages[(index + 4) % freepikImages.length]} alt={industry} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111b3] to-transparent" />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-sm font-semibold text-[#252537]">{industry}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f3] py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[#1d1d2c]">Talk with our distribution desk</h2>
            <p className="mt-2 text-sm text-[#64627a]">
              Work with a team that understands media structure, not just upload forms.
            </p>
            <Link href="/contact" className="mt-6 inline-flex bg-[#f04b23] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#db3e18]">
              Reach out today
            </Link>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f7f8f]">Recent press wire</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#1d1d2c]">Recent press wire</h2>
            </div>
            <Link href={updatesRoute} className="text-sm font-semibold text-[#f04b23] hover:underline">
              View all
            </Link>
          </div>
          <div className="grid max-w-sm gap-5">
            {featuredUpdates.slice(0, 1).map((post) => (
              <Link key={post.id} href={`${updatesRoute}/${post.slug}`} className="group overflow-hidden rounded-xl border border-[#e6e4f1] bg-white shadow-sm">
                <div className="relative h-40">
                  <ContentImage src={freepikImages[7]} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-base font-semibold text-[#1f1f2f]">{post.title}</h3>
                  <p className="mt-2 text-xs text-[#6b6a7c]">Read more</p>
                </div>
              </Link>
            ))}
          </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-semibold text-[#1d1d2c]">Questions, answered</h2>
            <div className="mt-6 divide-y divide-[#eceaf4] rounded-xl border border-[#eceaf4] bg-white">
              {faqItems.map((item) => (
                <div key={item} className="flex items-center justify-between px-4 py-3 text-sm text-[#3f3d54]">
                  <span>{item}</span>
                  <Plus className="h-4 w-4 text-[#8f8da4]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#1d1d2c]">What communicators say</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                '"Simple interface, clean output, and really fast publishing turnaround."',
                '"The formatting quality makes our updates look like true newsroom pieces."',
                '"Distribution and reporting now happen in one predictable workflow."',
              ].map((quote) => (
                <article key={quote} className="rounded-xl border border-[#e9e7f2] bg-white p-4 shadow-sm">
                  <p className="text-sm leading-6 text-[#3f3d54]">{quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
