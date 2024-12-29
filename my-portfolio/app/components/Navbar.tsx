'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">MyBrand</span>
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}