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
          'Developed and implemented dynamic analytics algorithms for production line monitoring, transforming static sensor detected information pages into responsive sensor analytics page following OOP best practices.',
          'Provide top-tier technical support to customers, resulting in a 20% increase in satisfaction ratings and a 15% reduction in software bugs.',
          'Expand the capabilities of industrial software by implementing advanced analytics algorithms, leading to a potential increase in customer satisfaction scores.',
          'Developed customer analytics applications for various industrial production line instances with SICK Field Analytics.'
        ],
      },
      {
        title: 'Project Tech Lead - Large Language Model Personalization in Recommendation',
        company: 'Spotify Research',
        duration: 'Jan 2024 - Jun 2024',
        description: [
          'Advanced the existing industry leading LLM for Text based sequential matching (TASTE model) by investigating methods to improve and optimise personalised Large Language Model recommendation.',
          'Analysed the effectiveness of utilising low rank adapter (LoRA) weights per user based on their review history, leading to a 15% improvement in recommendation speed with zero to minimal loss in accuracy.',
          'Led the research and implementation of individual-based fine-tuning models, reducing training time while maintaining a high level of personalisation for individual users.',
          'For Paper and results go to portfolio page'
        ],
      },
      // Add more experiences in 2024 if any
    ],
  },
  {
    year: '2023',
    experiences: [
      {
        title: 'Researcher',
        company: 'UMass Amherst Math Department',
        duration: 'Jun 2023 - Dec 2023 · 7 mos',
        description: [
          'Research Experience for Undergraduates (REU) in the UMass Amherst Mathematics Department, where I spearheaded a meta-population model of COVID-19 to project transmission across major cities.',
          'Leveraged extensive real-world data—including daily case counts, mortality rates, infection/recovery rates, and population susceptibility—to uncover critical drivers of airborne disease spread.',
          'Developed and validated a compartmental SEIR epidemiology framework, accurately estimating city-to-city transmission dynamics and informing actionable insights for public health strategies.'
        ],
      },
      {
        title: 'Project: Snapchat UI Element Pruner',
        company: 'University of Massachusetts Amherst',
        duration: 'Jan 2023 - May 2023',
        description: [
          'Collaborated with cross-functional teams to develop a robust algorithm that quickly prunes any disrupting elements from images containing child sexual abuse material on Snapchat, contributing to a 80% increase in successful restoration of original images.',
          'Utilized Yolov8 and pretrained StableDiffusion model to detect and remove essential elements that hide important information in Snapchat images, such as text boxes, unknown scratches and additional user added GUI elements, resulting in a 90% increase in image clarity for FBI investigations.',
          'Implemented a feature allowing users to select specific areas of the image to target anomalies created by the Snapchat paint tool, leading to a 75% reduction in time spent identifying and removing disruptive elements.',
          'Skills: Computer Vision · Stable Diffusion · REST APIs · Machine Learning · Agile Development'
        ],
      },
      // Add more experiences in 2023 if any
    ],
  },
  {
    year: '2022',
    experiences: [
      {
        title: 'Project: EnRoute- Travel Planning Website for College Students',
        company: 'University of Massachusetts Amherst',
        duration: 'Mar 2022 - May 2022',
        description: [
          'Built and deployed custom EnRoute Travel website using Javascript, ExpressJS, HTML & CSS for college students to easily plan their vacations.',
          'Created user-friendly interface with features tailored to college student\'s vacation needs; grew monthly customer base by 25%.',
          'Optimized MongoDB database for data storage and retrieval speed resulting in a 30% reduction of loading times.',
          'Implemented server using Node.js, Express.js; database using MongoDB; dynamic website using HTML, CSS, Javascript, Bootstrap.'
        ],
      },
      {
        title: 'Project: Hear Your Feelings',
        company: 'University of Massachusetts Amherst',
        duration: 'Apr 2022 - May 2022',
        description: [
          'Developed a project that uses computer vision to detect a user\'s emotion and provides song genre and playlist recommendations based on that emotion.',
          'Integrated Machine Learning algorithms to recognize 5 different emotions with 95% accuracy, increasing user engagement by 25%.',
          'Deployed an automated system for analyzing images of human faces in real-time using TensorFlow & OpenCV technologies, resulting in a 30% reduction in development costs.',
          'Merging two models- 1. Emotion detector using PyTorch, KNF, NumPy. 2. Song Suggestion using SGD on Spotify music dataset.'
        ],
      },
      {
        title: 'Project: Movie Recommendation system',
        company: 'University of Massachusetts Amherst',
        duration: 'Apr 2022 - May 2022',
        description: [
          'Integrated Popularity Based System, Content-Based Filtering, Collaborative Filtering & Hybrid System to recommend movies to users based on preferences & likings.',
          'Achieved 100% approval upon conducting beta test with 300 users for measuring success of the app.',
          'Recommends a movie to a user based on ratings history and personal data like age, gender, location, etc.',
          'Python, SGD on sparse matrix of data to train; Achieved over 85% accuracy using a 94% sparse matrix.'
        ],
      },
      {
        title: 'Project: Scrabble Clone',
        company: 'University of Massachusetts Amherst',
        duration: 'Mar 2022 - May 2022',
        description: [
          'Designed and developed scrabble game clone.',
          'Implemented all time scorekeeping using ExpressJS, NodeJS, Javascript, HTML, CSS.'
        ],
      },
      {
        title: 'Project: Artificial Face Generator',
        company: 'University of Massachusetts Amherst',
        duration: 'Feb 2022 - Feb 2022',
        description: [
          'Created a model that generates a fake face which looks like an actor/actress but is actually fake.',
          'Implemented GANs using PyTorch, NumPy and CNNs/filters and achieved over 95% accuracy in testing.'
        ],
      },
    ]
  },
  {
    year: '2021',
    experiences: [
      {
        title: 'Machine Learning Engineer Intern',
        company: '99Bridges',
        duration: 'Jun 2021 - Sep 2021 · 3 mos',
        description: [
          'Developed object detection algorithm to identify & classify recyclable Chicobag images to automatically increment the count used in a self-checkout counter in product pilot operation in Target, CVS and Walmart.',
          'Collaborated with a cross-functional team to optimize the existing model, improving throughput and latency by 50%, while decreasing false positives.',
          'Engineered & tested a novel image processing pipeline for 99Bridges’ Chicobag using TensorFlow, achieving 98% precision within 2 weeks.'
        ],
      },
      {
        title: 'Project: TradeComm',
        company: 'Personal Venture',
        duration: 'Aug 2020 - Nov 2021',
        description: [
          'Developed TradeComm platform to enable seamless digital communication between different stakeholders in the textile industry, allowing for improved collaboration & feedback.',
          'Installed direct conversation & public review system accessible to over 4K users worldwide, increasing visibility of customer reviews by 20%.',
          'Enabled automated follow-up processes for customer feedback, resulting in increased satisfaction ratings by 15%.',
          'Implemented an immediate feedback system and public/private forums- swift, RESTful API, Firebase.'
        ],
      },
      // Add more experiences in 2023 if any
    ],
  },
  {
    year: '2020',
    experiences: [
      {
        title: 'Software Application Developer',
        company: 'SGKWA',
        duration: 'Jun 2020 - Oct 2020 · 5 mos',
        description: [
          'Worked with the team to understand requirements and used requirements elicitation techniques such as interviews, questionnaires and surveys and documented them.',
          'Used Java with Android studio and developed a basic 4 page app.'
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
                const isLeft = yearIndex % 2 === 0
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