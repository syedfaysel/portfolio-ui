import { BlogPostDomain, CertificationDomain, EducationDomain, ExperienceDomain, ProjectDomain, SkillsDomain } from "./types"
export const certifications: CertificationDomain[] = [
  {
    title: "React Advanced Certification",
    description:
      "This certification demonstrates expertise in advanced React concepts including hooks, context API, and performance optimization techniques.",
    image: "/placeholder.svg?height=150&width=150",
    url: "#",
  },
  {
    title: "AWS Solutions Architect",
    description:
      "This certification validates the ability to design and deploy scalable, highly available systems on Amazon Web Services.",
    image: "/placeholder.svg?height=150&width=150",
    url: "#",
  },
  {
    title: "TypeScript Professional",
    description:
      "This certification demonstrates proficiency in TypeScript, including advanced type systems, generics, and integration with modern frameworks.",
    image: "/placeholder.svg?height=150&width=150",
    url: "#",
  },
]

export const featuredProjects: ProjectDomain[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    summary: "A full-stack e-commerce solution with modern UI and payment integration",
    description:
      "A comprehensive e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and Stripe payment integration. The application uses a headless CMS for content management and includes an admin dashboard for inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    features: [
      "User authentication and profile management",
      "Product search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product management",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    summary: "A collaborative task management application with real-time updates",
    description:
      "A task management application designed for teams, featuring real-time updates, task assignment, and progress tracking. The app includes a drag-and-drop interface for managing tasks across different stages and supports file attachments and comments.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
    features: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Drag-and-drop interface",
      "File attachments",
      "Comments and discussions",
      "Email notifications",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    summary: "A mobile-first fitness tracking application with data visualization",
    description:
      "A fitness tracking application that allows users to log workouts, track progress, and visualize performance over time. The app includes features like workout plans, nutrition tracking, and social sharing.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Firebase", "Redux", "D3.js", "Expo"],
    features: [
      "Workout logging and tracking",
      "Progress visualization",
      "Custom workout plans",
      "Nutrition tracking",
      "Social sharing",
      "Achievements and badges",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export const allProjects: ProjectDomain[] = [
  ...featuredProjects,
  {
    id: "weather-app",
    title: "Weather App",
    summary: "A weather forecasting application with location-based services",
    description:
      "A weather forecasting application that provides current weather conditions and forecasts based on user location. The app includes features like hourly and daily forecasts, weather alerts, and location search.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "OpenWeather API", "Geolocation API", "CSS Modules"],
    features: [
      "Current weather conditions",
      "Hourly and daily forecasts",
      "Location-based services",
      "Weather alerts",
      "Location search",
      "Responsive design",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder",
    summary: "A recipe search and discovery application with filtering options",
    description:
      "A recipe search and discovery application that allows users to find recipes based on ingredients, dietary restrictions, and cuisine types. The app includes features like recipe saving, meal planning, and nutritional information.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Vue.js", "Vuex", "Spoonacular API", "Firebase", "Sass"],
    features: [
      "Recipe search and filtering",
      "Ingredient-based search",
      "Dietary restriction filters",
      "Recipe saving",
      "Meal planning",
      "Nutritional information",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    summary: "A personal portfolio website showcasing projects and skills",
    description:
      "A personal portfolio website designed to showcase projects, skills, and experience. The website includes sections for about, projects, blog, and contact information.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Project showcase",
      "Blog section",
      "Contact form",
      "Dark mode support",
      "Smooth animations",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]


export const education: EducationDomain[] = [
  {
    institution: "Stanford University",
    degree: "Master of Science in Computer Science",
    years: "2018 - 2020",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Deep Learning Approaches for Natural Language Processing'.",
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    years: "2014 - 2018",
    description:
      "Graduated with honors. Participated in the competitive programming team and contributed to open-source projects.",
  },
]

export const experience: ExperienceDomain[] = [
  {
    company: "Google",
    role: "Senior Software Engineer",
    period: "2020 - Present",
    description:
      "Working on the Google Cloud Platform team, focusing on developing and improving cloud infrastructure services.",
    responsibilities: [
      "Architecting and implementing scalable cloud solutions",
      "Optimizing performance of distributed systems",
      "Collaborating with cross-functional teams to deliver new features",
      "Mentoring junior engineers and conducting code reviews",
      "Contributing to technical documentation and knowledge sharing",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    period: "2018 - 2020",
    description:
      "Worked on the Azure DevOps team, developing tools and services for continuous integration and deployment.",
    responsibilities: [
      "Developed new features for Azure DevOps using React and TypeScript",
      "Implemented RESTful APIs using .NET Core",
      "Improved system reliability and performance",
      "Participated in agile development processes",
      "Collaborated with UX designers to improve user experience",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Full Stack Developer",
    period: "2016 - 2018",
    description:
      "Joined as an early employee at a fintech startup, helping to build the company's core product from the ground up.",
  },
]

export const skills: SkillsDomain = {
  technical: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
    backend: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API", "PostgreSQL", "MongoDB", "Firebase"],
    devops: ["Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Terraform"],
    tools: ["VS Code", "Figma", "Postman", "Jest", "Cypress", "Webpack", "npm/yarn", "Storybook"],
  },
  soft: [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
    "Creativity",
    "Project Management",
    "Mentoring",
    "User Empathy",
  ],
}
