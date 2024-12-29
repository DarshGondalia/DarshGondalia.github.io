'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  )
}