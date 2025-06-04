export interface ProjectDomain {
  id: string
  title: string
  summary: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  gallery?: string[]
}

export interface BlogPostDomain {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  tags: string[]
}

export interface EducationDomain {
  institution: string
  degree: string
  years: string
  description: string | null
}

export interface ExperienceDomain {
  company: string
  role: string
  period: string
  description: string
  responsibilities?: string[]
}

export interface SkillsDomain {
  technical: {
    [key: string]: string[]
  }
  soft: string[]
}

export interface CertificationDomain {
  title: string
  description: string
  image: string
  url: string
}



// Data Transfer Object 

export interface ProjectDto {
  id: string
  title: string
  summary: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  gallery: string[]
}

export interface BlogPostDto {
  id: string
  title: string
  content: string
  image: string
  createdAt: string
  updatedAt: string
  tags: string[],
}

export interface EducationDto {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  current: boolean
  location?: string

}

export interface ExperienceDto {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  responsibilities?: string[]
}

export interface SkillsDto {
  id: string
  name: string
  level: number
  category: string
}

export interface CertificationDto {
  id: string
  title: string
  description: string
  image: string
  url: string
}
