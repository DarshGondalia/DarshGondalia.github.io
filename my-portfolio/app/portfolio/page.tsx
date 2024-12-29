// app/portfolio/page.tsx
'use client'

interface Project {
  title: string
  description: string
  link: string
}

export default function PortfolioPage() {
  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'Short description of project one.',
      link: 'https://example.com/project-one',
    },
    {
      title: 'Project Two',
      description: 'Short description of project two.',
      link: 'https://example.com/project-two',
    },
    {
      title: 'Project Three',
      description: 'Short description of project three.',
      link: 'https://example.com/project-three',
    },
  ]

  return (
    <main className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}