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
      title: 'LiteDiffusion for CIFAR10',
      description: 'Diffusion models have revolutionized image generation, but their significant computational demands and large model sizes limit practical deployment on resource-constrained devices. This paper introduces Lite-Diffusion (L-Diff), a compressed diffusion model designed for efficient and rapid inference on edge devices. By leveraging a combination of modern model compression techniques—including pruning variants, quantization, knowledge distillation, and the novel application of Low-Rank Adaptation (LoRA)—we reduce model size and computational requirements without substantial loss in image quality. A real-world example illustrates the utility of deploying DDPMs on edge devices: enabling offline content generation for augmented reality applications on smartphones, where quick and efficient image synthesis is crucial. We evaluate various combinations of these techniques to develop the best-performing compressed model.',
      link: 'https://github.com/DarshGondalia/Prune-QuantizationDDPM',
    },
    {
      title: 'Defense Against One-Pixel Attacks',
      description: 'Ensuring robust visual classification is crucial in high-stakes applications like autonomous driving, where even a single misclassification—of a pedestrian, traffic light, or road sign—could have catastrophic consequences. Recent work has demonstrated that state-of-the-art classifiers can be easily fooled by minor adversarial perturbations, such as altering a single pixel in a CIFAR-10 image (the ``one-pixel attack") {Su2019}. In this paper, we examine a range of defense strategies designed to mitigate this vulnerability by cleansing attacked images before they are classified. We also introduce novel defense pipelines tailored specifically for combating the one-pixel attack, and more generally an n-pixel attack. Through extensive experiments on CIFAR-10, we evaluate the effectiveness of these defenses in fortifying models like LeNet and ResNet. Our findings show that combining existing defense strategies can create robust classification systems, offering promising solutions for applications requiring near-faultless performance.',
      link: 'https://github.com/DarshGondalia/DefenseAgainstOnePixelAttacks',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Integrated Popularity Based System, Content-Based Filtering, Collaborative Filtering & Hybrid System to recommend movies to users based on preferences & likings. Recommends a movie to a user based on ratings history and personal data like age, gender, location, etc.',
      link: 'https://github.com/DarshGondalia/MovieRecommendationSystem',
    },
    {
      title: 'Artificial Face Generator',
      description: 'Created a model that generates a fake face which looks like an actor/actress but is actually fake. Implemented GANs using PyTorch, NumPy and CNNs/filters and achieved over 95% accuracy in testing.',
      link: 'https://github.com/DarshGondalia/FaceGenerator',
    },
    {
      title: 'Spotify Research',
      description: 'Advanced the existing industry leading LLM for Text based sequential matching (TASTE model) by investigating methods to improve and optimise personalised Large Language Model recommendation. Analysed the effectiveness of utilising low rank adapter (LoRA) weights per user based on their review history, leading to a 15% improvement in recommendation speed with zero to minimal loss in accuracy. Led the research and implementation of individual-based fine-tuning models, reducing training time while maintaining a high level of personalisation for individual users.',
      link: 'https://www.linkedin.com/in/darsh-gondalia/',
    },
    {
      title: 'Snapchat UI Element Pruner',
      description: 'Collaborated with cross-functional teams to develop a robust algorithm that quickly prunes any disrupting elements from images containing child sexual abuse material on Snapchat, contributing to a 80% increase in successful restoration of original images. Utilized Yolov8 and pretrained StableDiffusion model to detect and remove essential elements that hide important information in Snapchat images, such as text boxes, unknown scratches and additional user added GUI elements, resulting in a 90% increase in image clarity for FBI investigations.',
      link: 'https://docs.google.com/presentation/d/18bIOMT48OugeQZZq_j95trcD_jF-MUwv3dT0VAnabHM/edit#slide=id.p',
    },
    {
      title: 'EnRoute- Travel Planning Website for College Students',
      description: 'Built and deployed custom EnRoute Travel website using Javascript, ExpressJS, HTML & CSS for college students to easily plan their vacations. Created user-friendly interface with features tailored to college student\'s vacation needs; grew monthly customer base by 25%. Implemented server using Node.js, Express.js; database using MongoDB; dynamic website using HTML, CSS, Javascript, Bootstrap.',
      link: 'https://docs.google.com/presentation/d/18bIOMT48OugeQZZq_j95trcD_jF-MUwv3dT0VAnabHM/edit#slide=id.p',
    },
    {
      title: 'Hear Your Feelings',
      description: 'Developed a project that uses computer vision to detect a user\'s emotion and provides song genre and playlist recommendations based on that emotion. Integrated Machine Learning algorithms to recognize 5 different emotions with 95% accuracy, increasing user engagement by 25%. Deployed an automated system for analyzing images of human faces in real-time using TensorFlow & OpenCV technologies, resulting in a 30% reduction in development costs. Merging two models- 1. Emotion detector using PyTorch, KNF, NumPy. 2. Song Suggestion using SGD on Spotify music dataset.',
      link: 'https://github.com/DarshGondalia/HearYourFeelings',
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