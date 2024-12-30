// app/layout.tsx (Server Component)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DarkModeToggle from './components/DarkModeToggle'; // We'll create this
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

// ✔ OK to export metadata from a server component
export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A dark-themed Next.js 13 portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 
        No need to pass "dark" class here,
        we can do that in the client component 
        or conditionally from the server if you want a default.
      */}
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Navbar />
        
        <div className="min-h-screen container mx-auto px-4 py-8">
          {children}
        </div>
        
        <Footer />

        {/* Our new Client Component for dark-mode toggling */}
        <DarkModeToggle />
      </body>
    </html>
  )
}