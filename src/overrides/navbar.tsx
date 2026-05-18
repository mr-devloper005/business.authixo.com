'use client'

import Link from 'next/link'
import { Search, Radio } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = false

export function NavbarOverride() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#7F27FF]/15 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top bar */}
      <div className="hidden h-8 items-center justify-center bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] text-white text-xs md:flex gap-2">
        <Radio className="h-3 w-3 animate-pulse" />
        <span className="font-medium tracking-wide">Live Press Wire Distribution — Reach 3,200+ Media Outlets</span>
      </div>
      {/* Brand row */}
      <div className="mx-auto max-w-6xl px-4 py-5 text-center sm:px-6">
        <Link href="/" className="inline-flex flex-col items-center gap-1">
          <span className="text-4xl font-black tracking-[-0.04em] text-[#1a0a2e] sm:text-5xl">
            {SITE_CONFIG.name}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7F27FF]">
            Media Press Wire Platform
          </span>
        </Link>
      </div>
      {/* Nav row */}
      <div className="border-t border-[#e8e0ff]">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-7 px-4 py-3 text-sm sm:px-6">
          <Link href="/" className="font-semibold text-[#7F27FF]">Home</Link>
          <Link href="/updates" className="text-[#3a2a5a] transition hover:text-[#7F27FF]">Newsroom</Link>
          <Link href="/about" className="text-[#3a2a5a] transition hover:text-[#7F27FF]">About</Link>
          <Link href="/contact" className="text-[#3a2a5a] transition hover:text-[#7F27FF]">Contact</Link>
          <Link href="/search" className="text-[#3a2a5a] transition hover:text-[#7F27FF]">
            <Search className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
