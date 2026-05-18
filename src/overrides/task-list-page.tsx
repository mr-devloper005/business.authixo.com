import Link from 'next/link'
import { Search, ArrowRight, Radio } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 200 ? value.slice(0, 197).trimEnd() + '...' : value
}

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 5)

  return (
    <div className="min-h-screen bg-white text-[#1a0a2e]">
      <NavbarShell />

      {/* Page header */}
      <section className="relative overflow-hidden bg-[#0d0520] py-14 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-1/4 h-[300px] w-[300px] rounded-full bg-[#7F27FF]/25 blur-[90px]" />
          <div className="absolute -bottom-8 right-1/4 h-[250px] w-[250px] rounded-full bg-[#FDBF60]/15 blur-[70px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-3">
            <Radio className="h-4 w-4 text-[#9F70FD] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">Live Newsroom</span>
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Press Wire Releases</h1>
          <p className="mt-2 text-sm text-white/65 max-w-xl">
            Browse the latest press releases, brand announcements, and media updates from our distribution network.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Main feed */}
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="group rounded-2xl border border-[#e8e0ff] bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#9F70FD]/40">
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full bg-[#7F27FF]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#7F27FF]">
                  {String((post.content as any)?.category || 'Press Release')}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1a0a2e] group-hover:text-[#7F27FF] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5a4a7a]">{excerpt(post.summary)}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#9a8ab0]">by {post.authorName || 'Editorial Desk'}</span>
                <Link
                  href={`/updates/${post.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-[#7F27FF]/20 transition hover:opacity-90"
                >
                  Read release <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="rounded-2xl border border-[#e8e0ff] bg-[#f8f5ff] p-5">
            <h3 className="text-sm font-semibold text-[#1a0a2e] mb-3">Search releases</h3>
            <div className="flex items-center gap-0 overflow-hidden rounded-xl border border-[#e8e0ff] bg-white">
              <input
                className="h-11 flex-1 bg-transparent px-4 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none"
                placeholder="Type to search…"
              />
              <button className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] text-white transition hover:opacity-90">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Recent */}
          <div className="rounded-2xl border border-[#e8e0ff] bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1a0a2e] mb-4">Recent releases</h3>
            <div className="space-y-4">
              {recent.map((post) => (
                <Link
                  key={post.id}
                  href={`/updates/${post.slug}`}
                  className="group block border-b border-[#f0ecff] pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm font-medium leading-6 text-[#3a2a5a] group-hover:text-[#7F27FF] transition-colors line-clamp-2">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0d0520] p-5 text-white">
            <div className="pointer-events-none absolute -top-8 -right-8 h-[150px] w-[150px] rounded-full bg-[#7F27FF]/30 blur-[50px]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F70FD]">Submit a release</p>
              <p className="mt-2 text-sm font-semibold">Get your story in front of 3,200+ media outlets.</p>
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
