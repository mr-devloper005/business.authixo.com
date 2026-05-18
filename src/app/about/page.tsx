import Link from 'next/link'
import { BarChart3, Building2, Globe2, Users, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'

const metrics = [
  { label: 'Press Wires Distributed', value: '52K+' },
  { label: 'Publisher Network Reach', value: '3,200+' },
  { label: 'Average Turnaround', value: '< 24 hrs' },
]

const pillars = [
  {
    icon: Globe2,
    title: 'Publisher Reach',
    description: 'Built to route releases across digital publisher ecosystems with speed and structure.',
    gradient: 'from-[#7F27FF] to-[#9F70FD]',
  },
  {
    icon: BarChart3,
    title: 'Actionable Reporting',
    description: 'Track campaign-level visibility and coverage performance from a single dashboard.',
    gradient: 'from-[#FF8911] to-[#FDBF60]',
  },
  {
    icon: Users,
    title: 'Editorial Support',
    description: 'Combine SaaS delivery speed with editorial-grade release formatting and QA.',
    gradient: 'from-[#7F27FF] to-[#9F70FD]',
  },
  {
    icon: Building2,
    title: 'Brand Authority',
    description: 'Position your business updates with a consistent, professional newsroom experience.',
    gradient: 'from-[#FF8911] to-[#FDBF60]',
  },
]

const freepikImages = [
  'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg',
  'https://img.freepik.com/free-photo/business-people-working-together-office_1303-22863.jpg',
  'https://img.freepik.com/free-photo/close-up-people-working-office_23-2149300656.jpg',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-[#0d0520] p-8 text-white shadow-2xl lg:p-12">
          <div className="absolute inset-0">
            <ContentImage src={freepikImages[0]} alt="Team collaboration" fill className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7F27FF]/60 via-[#0d0520]/80 to-[#0d0520]" />
          </div>
          <div className="pointer-events-none absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-[#7F27FF]/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-16 right-0 h-[300px] w-[300px] rounded-full bg-[#FDBF60]/15 blur-[80px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7F27FF]/30 bg-[#7F27FF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9F70FD]">
                About Us
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                We help brands scale media visibility through reliable press distribution
              </h1>
              <p className="mt-5 text-sm leading-8 text-white/75">
                PressWire is a media press wire platform designed for modern businesses that need fast, professional, and high-reach distribution. Our mission is simple: make quality media publication accessible for every growing brand.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FDBF60] to-[#FF8911] px-6 py-2.5 text-sm font-bold text-[#1a0a2e] shadow-md transition hover:opacity-90"
                >
                  Talk to Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/updates"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Browse Newsroom
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/15">
              <ContentImage src={freepikImages[1]} alt="Team collaboration" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {metrics.map((item) => (
            <article key={item.label} className="rounded-2xl border border-[#e8e0ff] bg-[#f8f5ff] p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-[#7F27FF]">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-[#5a4a7a]">{item.label}</p>
            </article>
          ))}
        </section>

        {/* Pillars */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#1a0a2e]">What defines our product</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e8e0ff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[#9F70FD]/40"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1a0a2e]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5a4a7a]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          {[freepikImages[2], freepikImages[0]].map((image) => (
            <article key={image} className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[#e8e0ff] shadow-sm">
              <ContentImage src={image} alt="About media distribution visual" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#7F27FF]/15" />
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
