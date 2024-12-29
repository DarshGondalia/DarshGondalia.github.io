// app/contact/page.tsx
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Integrate an email or serverless function here.
    alert(`Thank you for reaching out, ${name}!`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="max-w-md mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-800 text-gray-100 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-gray-800 text-gray-100 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            className="w-full px-3 py-2 bg-gray-800 text-gray-100 rounded"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </main>
  )
}