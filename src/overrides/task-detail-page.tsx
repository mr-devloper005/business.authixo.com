import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Search, Radio } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPostBySlug, fetchTaskPosts, buildPostUrl } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { SITE_CONFIG } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

const isValidImageUrl = (value?: string | null) =>
  typeof value === 'string' && (value.startsWith('/') || /^https?:\/\//i.test(value))

const getContent = (post: SitePost) => {
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  return content as Record<string, unknown>
}

const getImageUrls = (post: SitePost, content: Record<string, unknown>) => {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaImages = media.map((item) => item?.url).filter((url): url is string => isValidImageUrl(url))
  const contentImages = Array.isArray(content.images)
    ? content.images.filter((url): url is string => typeof url === 'string' && isValidImageUrl(url))
    : []
  const merged = [...mediaImages, ...contentImages]
  if (merged.length) return merged
  if (isValidImageUrl(content.logo as string)) return [content.logo as string]
  return [] as string[]
}

const getCategoryLabel = (post: SitePost, content: Record<string, unknown>) => {
  const raw =
    (typeof content.category === 'string' && content.category.trim()) ||
    (Array.isArray(post.tags) ? post.tags.find((tag) => typeof tag === 'string' && tag !== 'mediaDistribution') : '') ||
    ''
  if (!raw || typeof raw !== 'string') return 'Press releases'
  const normalized = normalizeCategory(raw)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || raw.trim()
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true }))
    .filter((item) => item.slug !== slug)
    .slice(0, 5)

  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const category = String((content.category as string) || 'Press Release')
  const author = post.authorName || 'Editorial Desk'

  return (
    <div className="min-h-screen bg-white text-[#1a0a2e]">
      <NavbarShell />

      {/* Hero header */}
      <section className="relative overflow-hidden bg-[#0d0520] py-14 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 h-[350px] w-[350px] rounded-full bg-[#7F27FF]/25 blur-[100px]" />
          <div className="absolute -bottom-10 right-1/4 h-[280px] w-[280px] rounded-full bg-[#FDBF60]/15 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="transition hover:text-[#9F70FD]">Home</Link>
            <span>›</span>
            <Link href="/updates" className="transition hover:text-[#9F70FD]">Newsroom</Link>
            <span>›</span>
            <span className="truncate max-w-xs text-white/70">{post.title}</span>
          </div>

          {/* Category badge */}
          <div className="mb-4 flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-[#9F70FD] animate-pulse" />
            <span className="rounded-full bg-[#7F27FF]/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#9F70FD]">
              {category}
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Author */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] text-sm font-bold text-white">
              {author.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm text-white/70">by <span className="font-medium text-white">{author}</span></span>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Article body */}
        <article>
          <Link
            href="/updates"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e8e0ff] bg-[#f8f5ff] px-4 py-2 text-sm font-medium text-[#7F27FF] transition hover:bg-[#7F27FF]/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Newsroom
          </Link>

          <div className="prose prose-lg max-w-none
            prose-headings:text-[#1a0a2e] prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-[#3a2a5a] prose-p:leading-8
            prose-a:text-[#7F27FF] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#1a0a2e]
            prose-ul:text-[#3a2a5a] prose-ol:text-[#3a2a5a]
            prose-li:marker:text-[#7F27FF]
            prose-blockquote:border-l-[#7F27FF] prose-blockquote:text-[#5a4a7a]
            prose-hr:border-[#e8e0ff]
            prose-h2:text-[#7F27FF]
          ">
            <RichContent html={html} />
          </div>

          {/* Prev / Next navigation */}
          {recent.length >= 2 && (
            <div className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-[#e8e0ff] md:grid-cols-2">
              {recent.slice(0, 2).map((item, index) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="group flex flex-col gap-2 p-6 transition hover:bg-[#f8f5ff] first:border-b border-[#e8e0ff] md:first:border-b-0 md:first:border-r"
                >
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9F70FD]">
                    {index === 0 ? <><ArrowLeft className="h-3 w-3" /> Previous</> : <>Next <ArrowRight className="h-3 w-3" /></>}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[#1a0a2e] group-hover:text-[#7F27FF] transition-colors line-clamp-2">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">

          {/* Search */}
          <div className="rounded-2xl border border-[#e8e0ff] bg-[#f8f5ff] p-5">
            <h3 className="mb-3 text-sm font-semibold text-[#1a0a2e]">Search releases</h3>
            <div className="flex overflow-hidden rounded-xl border border-[#e8e0ff] bg-white">
              <input
                className="h-11 flex-1 bg-transparent px-4 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none"
                placeholder="Type to search…"
              />
              <button className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] text-white transition hover:opacity-90">
                <Search className="h-4 w-4" />
              </button>
            </div>

            {hero ? (
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-border bg-muted shadow-sm">
                <ContentImage src={hero} alt={post.title} fill className="object-cover" priority />
              </div>
            ) : null}

            <RichContent html={html} className="article-content mt-10 max-w-none text-[1.05rem] leading-[1.75] text-foreground/90" />
          </div>

          {/* Recent releases */}
          <div className="rounded-2xl border border-[#e8e0ff] bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold text-[#1a0a2e]">Recent releases</h3>
            <div className="space-y-4">
              {recent.map((item) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="group block border-b border-[#f0ecff] pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm font-medium leading-6 text-[#3a2a5a] group-hover:text-[#7F27FF] transition-colors line-clamp-2">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0d0520] p-5 text-white">
            <div className="pointer-events-none absolute -top-8 -right-8 h-[150px] w-[150px] rounded-full bg-[#7F27FF]/30 blur-[50px]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F70FD]">Submit a release</p>
              <p className="mt-2 text-sm font-semibold leading-6">Get your story in front of 3,200+ media outlets.</p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FDBF60] to-[#FF8911] px-4 py-2 text-xs font-bold text-[#1a0a2e] transition hover:opacity-90"
              >
                Contact us <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  )
}
