'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    // Read localStorage if you want to remember user's preference
    if (typeof window !== 'undefined') {
      const userPref = localStorage.getItem('theme')
      if (userPref === 'dark') {
        setDarkMode(true)
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  const handleToggle = () => {
    setDarkMode(prev => !prev)

    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-5 right-5 p-2 border rounded bg-gray-800 text-gray-200 z-50"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}