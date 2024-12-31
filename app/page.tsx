// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen p-8 bg-gray-900 text-gray-100">
      {/* Portrait Image */}
      <div className="mb-8 md:mb-0 md:mr-12 flex-shrink-0">
        <Image
          src="/images/portrait.jpg" // Path to your portrait image
          alt="Darsh Gondalia"
          width={300} // Adjust as needed
          height={400} // Adjust as needed
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Darsh Gondalia
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-4xl text-blue-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          AI/ML Engineer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hello! I am a Machine Learning Engineer focused on creating real-world applications that enhance daily experiences and optimize industrial processes. My expertise includes developing intelligent algorithms to improve sensor capabilities, building regression and predictive models, and conducting statistical modeling for stochastic processes. I am passionate about researching computer vision algorithms, enhancing their robustness, and increasing their effectiveness in existing applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a
            href="/portfolio"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </main>
  )
}