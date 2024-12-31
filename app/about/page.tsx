// app/about/page.tsx
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import ExperienceItem from '../components/ExperienceItem'

// Define the structure of each experience
interface Experience {
  title: string
  company: string
  duration: string
  description: string[]
}

// Define the structure for experiences grouped by year
interface YearlyExperience {
  year: string
  experiences: Experience[]
}

// Array of experiences grouped by year
const yearlyExperiences: YearlyExperience[] = [
  {
    year: '2024',
    experiences: [
      {
        title: 'Application Engineer',
        company: 'SICK Sensor Intelligence',
        duration: 'Dec 2023 - Dec 2024 · 1 yr 1 mo',
        description: [
          'Developed dynamic analytics algorithms for production line monitoring, transforming static sensor data into responsive analytics pages following OOP best practices.',
          'Provided top-tier technical support to customers, resulting in a 20% increase in satisfaction ratings and a 15% reduction in software bugs.',
          'Expanded the capabilities of industrial software by implementing advanced analytics algorithms, leading to a potential increase in customer satisfaction scores.',
          'Developed customer analytics applications for various industrial production line instances with SICK Field Analytics.',
        ],
      },
      // Add more experiences in 2024 if any
    ],
  },
  {
    year: '2023',
    experiences: [
      {
        title: 'Machine Learning Engineer Intern',
        company: '99Bridges',
        duration: 'June 2023 - Aug 2023 · 3 mos',
        description: [
          'Developed an object detection algorithm for recyclable Chicobag images, improving model performance and efficiency by 50%.',
          'Achieved 98% precision in image classification tasks, strengthening expertise in computer vision and machine learning optimization.',
        ],
      },
      {
        title: 'Researcher',
        company: 'UMass Amherst Math Department',
        duration: 'Jan 2023 - May 2023 · 5 mos',
        description: [
          'Created a meta-population model for COVID-19, leveraging Python, R, and data analysis to simulate and visualize virus spread.',
          'Enhanced skills in statistical modeling and epidemiological simulations through this research project.',
        ],
      },
      // Add more experiences in 2023 if any
    ],
  },
  // Add more years and experiences as needed
]

export default function AboutPage() {
  // State to track which experience is hovered or clicked
  const [hoveredExp, setHoveredExp] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Effect to detect screen size for mobile interactivity
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-12">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/images/portrait.jpg" // Ensure the image is in public/images/
            alt="Profile Picture"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 300px"
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Profile Text */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-300 mb-4">
            Hello! I am a Machine Learning Engineer focused on creating real-world applications that enhance daily experiences and optimize industrial processes. With dual degrees in Computer Science and Statistics from the University of Massachusetts Amherst, I specialize in developing intelligent algorithms to improve sensor capabilities, building regression and predictive models, and conducting statistical modeling for stochastic processes. I am passionate about researching computer vision algorithms, enhancing their robustness, and increasing their effectiveness in existing applications.
          </p>
          <p className="text-gray-300 mb-4">
            Machine Learning and Analytics are my core strengths. I thrive on learning new technologies and frameworks and am always eager to engage with and contribute to cutting-edge open-source initiatives. Don’t hesitate to reach out if you have exciting projects or collaborations in mind.
          </p>
          <p className="text-gray-300 mb-4">
            In my free time, I enjoy playing the drums and playing soccer.
          </p>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>

        {/* Timeline Items */}
        <ul className="space-y-16">
          {yearlyExperiences.map((yearlyExp, yearIndex) => (
            <li key={yearIndex} className="relative">
              {/* Year Header */}
              <div className="flex items-center mb-6">
                {/* Year Positioned on the Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 px-4 py-2 rounded-full text-lg font-semibold">
                  {yearlyExp.year}
                </div>
              </div>

              {/* Experiences under the Year */}
              {yearlyExp.experiences.map((exp, expIndex) => {
                // Determine alignment based on experience index
                const isLeft = expIndex % 2 === 0
                const uniqueId = `${yearlyExp.year}-${expIndex}`

                return (
                  <ExperienceItem
                    key={uniqueId}
                    exp={exp}
                    uniqueId={uniqueId}
                    isHovered={hoveredExp === uniqueId}
                    onHover={setHoveredExp}
                    isLeft={isLeft}
                    isMobile={isMobile}
                  />
                )
              })}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

// // app/about/page.tsx
// 'use client'

// import { AnimatePresence, motion } from 'framer-motion'
// import Image from 'next/image'
// import { useState } from 'react'

// // Define the structure of each experience
// interface Experience {
//   title: string
//   company: string
//   duration: string
//   description: string[]
// }

// // Define the structure for experiences grouped by year
// interface YearlyExperience {
//   year: string
//   experiences: Experience[]
// }

// // Array of experiences grouped by year
// const yearlyExperiences: YearlyExperience[] = [
//   {
//     year: '2024',
//     experiences: [
//       {
//         title: 'Application Engineer',
//         company: 'SICK Sensor Intelligence',
//         duration: 'Dec 2023 - Dec 2024 · 1 yr 1 mo',
//         description: [
//           'Developed dynamic analytics algorithms for production line monitoring, transforming static sensor data into responsive analytics pages following OOP best practices.',
//           'Provided top-tier technical support to customers, resulting in a 20% increase in satisfaction ratings and a 15% reduction in software bugs.',
//           'Expanded the capabilities of industrial software by implementing advanced analytics algorithms, leading to a potential increase in customer satisfaction scores.',
//           'Developed customer analytics applications for various industrial production line instances with SICK Field Analytics.',
//         ],
//       },
//       // Add more experiences in 2024 if any
//     ],
//   },
//   {
//     year: '2023',
//     experiences: [
//       {
//         title: 'Machine Learning Engineer Intern',
//         company: '99Bridges',
//         duration: 'June 2023 - Aug 2023 · 3 mos',
//         description: [
//           'Developed an object detection algorithm for recyclable Chicobag images, improving model performance and efficiency by 50%.',
//           'Achieved 98% precision in image classification tasks, strengthening expertise in computer vision and machine learning optimization.',
//         ],
//       },
//       {
//         title: 'Researcher',
//         company: 'UMass Amherst Math Department',
//         duration: 'Jan 2023 - May 2023 · 5 mos',
//         description: [
//           'Created a meta-population model for COVID-19, leveraging Python, R, and data analysis to simulate and visualize virus spread.',
//           'Enhanced skills in statistical modeling and epidemiological simulations through this research project.',
//         ],
//       },
//       // Add more experiences in 2023 if any
//     ],
//   },
//   // Add more years and experiences as needed
// ]

// export default function AboutPage() {
//   // State to track which experience is hovered
//   const [hoveredExp, setHoveredExp] = useState<string | null>(null)

//   return (
//     <main className="max-w-5xl mx-auto p-6 bg-gray-900 text-gray-100 min-h-screen">
//       {/* Header */}
//       <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

//       {/* Profile Section */}
//       <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-12">
//         {/* Profile Image */}
//         <div className="w-full md:w-1/3 mb-6 md:mb-0">
//           <Image
//             src="/images/portrait.jpg" // Ensure the image is in public/images/
//             alt="Profile Picture"
//             width={300}
//             height={300}
//             className="rounded-full object-cover shadow-lg"
//           />
//         </div>

//         {/* Profile Text */}
//         <div className="w-full md:w-2/3">
//           <p className="text-gray-300 mb-4">
//             Hello! I am a Machine Learning Engineer focused on creating real-world applications that enhance daily experiences and optimize industrial processes. With dual degrees in Computer Science and Statistics from the University of Massachusetts Amherst, I specialize in developing intelligent algorithms to improve sensor capabilities, building regression and predictive models, and conducting statistical modeling for stochastic processes. I am passionate about researching computer vision algorithms, enhancing their robustness, and increasing their effectiveness in existing applications.
//           </p>
//           <p className="text-gray-300 mb-4">
//             Machine Learning and Analytics are my core strengths. I thrive on learning new technologies and frameworks and am always eager to engage with and contribute to cutting-edge open-source initiatives. Don’t hesitate to reach out if you have exciting projects or collaborations in mind.
//           </p>
//           <p className="text-gray-300 mb-4">
//             In my free time, I enjoy playing the drums and playing soccer.
//           </p>
//         </div>
//       </div>

//       {/* Vertical Timeline */}
//       <div className="relative">
//         {/* Timeline Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>

//         {/* Timeline Items */}
//         <ul className="space-y-8">
//           {yearlyExperiences.map((yearlyExp, yearIndex) => (
//             <li key={yearIndex} className="relative">
//               {/* Year Header */}
//               <div className="flex items-center mb-4">
//                 {/* Year Positioned on the Timeline Line */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-gray-800 px-3 py-1 rounded-full text-lg font-semibold">
//                   {yearlyExp.year}
//                 </div>
//               </div>

//               {/* Experiences under the Year */}
//               {yearlyExp.experiences.map((exp, expIndex) => {
//                 // Determine alignment based on experience index
//                 const isLeft = yearIndex % 2 === 0

//                 return (
//                   <div
//                     key={expIndex}
//                     className="flex items-start"
//                   >
//                     {/* Experience on the Left Side */}
//                     {isLeft && (
//                       <div className="w-1/2 pr-4 hidden md:block">
//                         {/* Empty space for alignment */}
//                       </div>
//                     )}

//                     {/* Experience Content */}
//                     <div className="w-full md:w-1/2 px-4">
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: hoveredExp === `${yearlyExp.year}-${expIndex}` ? 1 : 0 }}
//                         transition={{ duration: 0.3 }}
//                         className={`bg-gray-800 p-4 rounded shadow-lg cursor-pointer`}
//                         onMouseEnter={() => setHoveredExp(`${yearlyExp.year}-${expIndex}`)}
//                         onMouseLeave={() => setHoveredExp(null)}
//                       >
//                         <h3 className="text-xl font-semibold">{exp.title} at {exp.company}</h3>
//                         <span className="text-sm text-gray-400">{exp.duration}</span>
//                         <AnimatePresence>
//                           {hoveredExp === `${yearlyExp.year}-${expIndex}` && (
//                             <motion.ul
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: 'auto', opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.3 }}
//                               className="mt-2 pl-5 list-disc text-gray-300 overflow-hidden"
//                             >
//                               {exp.description.map((desc, descIndex) => (
//                                 <li key={descIndex} className="mb-1">
//                                   {desc}
//                                 </li>
//                               ))}
//                             </motion.ul>
//                           )}
//                         </AnimatePresence>
//                       </motion.div>
//                     </div>

//                     {/* Experience on the Right Side */}
//                     {!isLeft && (
//                       <div className="w-1/2 pl-4 hidden md:block">
//                         {/* Empty space for alignment */}
//                       </div>
//                     )}
//                   </div>
//                 )
//               })}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </main>
//   )
// }
// // app/about/page.tsx
// 'use client'

// import Image from 'next/image'

// export default function AboutPage() {
//   return (
//     <main className="max-w-3xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
//       <div className="flex flex-col md:flex-row items-center md:space-x-6">
//         <div className="w-full md:w-1/3 mb-4 md:mb-0">
//           <Image
//             src="/images/portrait.jpg" // Put your image in public/images
//             alt="Profile Picture"
//             width={300}
//             height={300}
//             className="rounded-full object-cover"
//           />
//         </div>
//         <div className="w-full md:w-2/3">
//           <p className="text-gray-300 mb-4">
//           Hello! I am a Machine Learning Engineer focused on creating real-world
//            applications that enhance daily experiences and optimize industrial processes.
//             With dual degrees in Computer Science and Statistics from the University of 
//             Massachusetts Amherst, I specialize in developing intelligent algorithms to 
//             improve sensor capabilities, building regression and predictive models, and 
//             conducting statistical modeling for stochastic processes. I am passionate 
//             about researching computer vision algorithms, enhancing their robustness, and
//              increasing their effectiveness in existing applications.
//           </p>
//           <p className="text-gray-300 mb-4">
//           With dual degrees in Computer Science and Statistics from the University of 
//           Massachusetts Amherst, I am a Software Developer and Data Science Student 
//           driven by innovation and a commitment to creating impactful software solutions.
//           </p>

//           <p className="text-gray-300 mb-4">
//           Machine Learning and Analytics are my core strengths. I thrive on learning 
//           new technologies and frameworks and am always eager to engage with and 
//           contribute to cutting-edge open-source initiatives. Don’t hesitate to reach 
//           out if you have exciting projects or collaborations in mind.
//           </p>
//         </div>
//       </div>
//     </main>
//   )
// }