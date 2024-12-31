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
            src="/images/portrait.jpg" // Put your image in public/images
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-gray-300 mb-4">
          Hello! I am a Machine Learning Engineer focused on creating real-world
           applications that enhance daily experiences and optimize industrial processes.
            With dual degrees in Computer Science and Statistics from the University of 
            Massachusetts Amherst, I specialize in developing intelligent algorithms to 
            improve sensor capabilities, building regression and predictive models, and 
            conducting statistical modeling for stochastic processes. I am passionate 
            about researching computer vision algorithms, enhancing their robustness, and
             increasing their effectiveness in existing applications.
          </p>
          <p className="text-gray-300 mb-4">
          With dual degrees in Computer Science and Statistics from the University of 
          Massachusetts Amherst, I am a Software Developer and Data Science Student 
          driven by innovation and a commitment to creating impactful software solutions.
          </p>

          <p className="text-gray-300 mb-4">
          Machine Learning and Analytics are my core strengths. I thrive on learning 
          new technologies and frameworks and am always eager to engage with and 
          contribute to cutting-edge open-source initiatives. Don’t hesitate to reach 
          out if you have exciting projects or collaborations in mind.
          </p>
        </div>
      </div>
    </main>
  )
}