// components/ExperienceItem.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface Experience {
  title: string
  company: string
  duration: string
  description: string[]
}

interface ExperienceItemProps {
  exp: Experience
  uniqueId: string
  isHovered: boolean
  onHover: (id: string | null) => void
  isLeft: boolean
  isMobile: boolean
}

const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({
  exp,
  uniqueId,
  isHovered,
  onHover,
  isLeft,
  isMobile,
}) => {
  const handleMouseEnter = () => {
    if (!isMobile) {
      onHover(uniqueId)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      onHover(null)
    }
  }

  const handleClick = () => {
    if (isMobile) {
      onHover(isHovered ? null : uniqueId)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 rounded shadow-lg cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-expanded={isHovered}
    >
      <h3 className="text-xl font-semibold">
        {exp.title} at {exp.company}
      </h3>
      <span className="text-sm text-gray-400">{exp.duration}</span>

      <AnimatePresence>
        {isHovered && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 pl-5 list-disc text-gray-300 overflow-hidden"
          >
            {exp.description.map((desc, descIndex) => (
              <li key={descIndex} className="mb-1">
                {desc}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <div className="flex items-center w-full">
      {isLeft ? (
        <>
          {/* Left Content */}
          <div className="w-1/2 pr-4 hidden md:block">{content}</div>

          {/* Marker */}
          <div className="flex flex-col items-center">
            <span
              className={`block w-4 h-4 rounded-full ring-4 ring-gray-900 ${
                isHovered ? 'bg-blue-600' : 'bg-blue-300'
              }`}
            ></span>
            {/* Optional: Connector line can be added here */}
          </div>

          {/* Right Placeholder */}
          <div className="w-1/2 pl-4 hidden md:block"></div>
        </>
      ) : (
        <>
          {/* Left Placeholder */}
          <div className="w-1/2 pr-4 hidden md:block"></div>

          {/* Marker */}
          <div className="flex flex-col items-center">
            <span
              className={`block w-4 h-4 rounded-full ring-4 ring-gray-900 ${
                isHovered ? 'bg-blue-600' : 'bg-blue-300'
              }`}
            ></span>
            {/* Optional: Connector line can be added here */}
          </div>

          {/* Right Content */}
          <div className="w-1/2 pl-4 hidden md:block">{content}</div>
        </>
      )}

      {/* Mobile: Show title centered */}
      <div className="w-full md:hidden px-4 mt-4">{content}</div>
    </div>
  )
}

const ExperienceItem = React.memo(ExperienceItemComponent)
ExperienceItem.displayName = 'ExperienceItem'

export default ExperienceItem