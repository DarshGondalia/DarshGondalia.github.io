// app/about/page.tsx
'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Image
            src="/images/your-profile-photo.jpg" // Put your image in public/images
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-gray-300 mb-4">
            Hi, I’m John Doe. I love creating beautiful, high-performing web
            apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-300 mb-4">
            Outside of coding, I enjoy reading about new tech trends, playing
            games, and traveling.
          </p>
        </div>
      </div>
    </main>
  )
}