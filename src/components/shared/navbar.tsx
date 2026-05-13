'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'
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
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800">
      {/* Top Bar */}
      <div className="hidden h-8 items-center justify-center bg-gray-800 text-white text-xs md:flex">
        <div className="flex items-center space-x-6">
          <span>Press Distribution Platform</span>
          <span>|</span>
          <span>Global Media Reach</span>
        </div>
      </div>
      
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-start leading-tight">
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">top24headline</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-300 mt-1">MEDIA DISTRIBUTION DESK</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
            <ul className="flex items-center space-x-8">
              {navLinks.map((task) => {
                const isActive = isActiveLink(task.href)
                return (
                  <Link
                    key={task.key}
                    href={task.href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      isActive ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {task.name}
                  </Link>
                )
              })}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-48 pl-10 pr-4 py-2 text-sm border border-gray-600 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            {/* Sign in Link */}
            <Link href="/login" className="hidden lg:block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Sign in
            </Link>
            
            {/* Get Started Button */}
            <Link href="/register" className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
              Start now
            </Link>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full text-gray-600 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navLinks.map((task) => {
                const isActive = isActiveLink(task.href)
                return (
                  <Link
                    key={task.key}
                    href={task.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn('block px-4 py-2 text-base font-medium transition-colors', isActive ? 'text-orange-500 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800')}
                  >
                    {task.name}
                  </Link>
                )
              })}
              <div className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-600 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                />
                <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white">
                Sign in
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="block mx-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold text-center transition-colors duration-200 shadow-md hover:shadow-lg">
                Start now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
