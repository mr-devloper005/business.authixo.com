'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const navLinks = [
    { key: 'newsroom', name: 'Newsroom', href: '/updates' },
    { key: 'about', name: 'About', href: '/about' },
    { key: 'contact', name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#7F27FF]/15 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top ticker bar */}
      <div className="hidden h-8 items-center justify-center bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] text-white text-xs md:flex gap-2">
        <Radio className="h-3 w-3 animate-pulse" />
        <span className="font-medium tracking-wide">Live Press Wire Distribution — Reach 3,200+ Media Outlets</span>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7F27FF] to-[#9F70FD] shadow-md shadow-[#7F27FF]/25 transition group-hover:shadow-[#7F27FF]/40">
              <Radio className="h-4 w-4 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-bold tracking-tight text-[#1a0a2e]">PressWire</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7F27FF]">Media Distribution</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-[#7F27FF] font-semibold'
                        : 'text-[#3a2a5a] hover:text-[#7F27FF]'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search releases…"
                  className="w-44 rounded-full border border-[#e8e0ff] bg-[#f8f5ff] py-2 pl-9 pr-4 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF] focus:ring-2 focus:ring-[#7F27FF]/20 transition"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9a8ab0]" />
              </div>
            </div>

            <Link
              href="/login"
              className="hidden lg:block text-sm font-medium text-[#3a2a5a] hover:text-[#7F27FF] transition-colors"
            >
              Sign in
            </Link>

            <Link
              href="/register"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#7F27FF]/25 transition hover:shadow-[#7F27FF]/40 hover:opacity-90"
            >
              Submit Release
            </Link>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full text-[#3a2a5a] hover:bg-[#f8f5ff]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e8e0ff] py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#7F27FF]/08 text-[#7F27FF] font-semibold'
                      : 'text-[#3a2a5a] hover:bg-[#f8f5ff] hover:text-[#7F27FF]'
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="px-4 pt-2 pb-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search releases…"
                  className="w-full rounded-full border border-[#e8e0ff] bg-[#f8f5ff] py-2 pl-9 pr-4 text-sm text-[#1a0a2e] placeholder-[#9a8ab0] outline-none focus:border-[#7F27FF]"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9a8ab0]" />
              </div>
            </div>
            <div className="flex gap-2 px-4 pt-2">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 rounded-full border border-[#7F27FF]/30 py-2 text-center text-sm font-medium text-[#7F27FF] transition hover:bg-[#7F27FF]/05"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 rounded-full bg-gradient-to-r from-[#7F27FF] to-[#9F70FD] py-2 text-center text-sm font-semibold text-white shadow-md"
              >
                Submit Release
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
