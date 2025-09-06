import { BlogPostDto, ProjectDto, CertificationDto, EducationDto, ExperienceDto, SkillsDto } from './types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

interface ApiResponse<T> {
  data: T
  error?: string
}

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { data }
  } catch (error) {
    return {
      data: null as T,
      error: error instanceof Error ? error.message : 'An error occurred',
    }
  }
}

// Portfolio related API calls
export const portfolioApi = {
  getProjects: () => fetchApi<ProjectDto[]>('/projects'),
  getProjectById: (id: string) => fetchApi<ProjectDto>(`/projects/${id}`),
  getCertifications: () => fetchApi<CertificationDto[]>('/certifications', {next: {revalidate: 60}}),
  getCertificationById: (id: string) => fetchApi<CertificationDto>(`/certifications/${id}`, {next: {revalidate: 60}}),
  getEducations: () => fetchApi<EducationDto[]>('/education', {next: {revalidate: 60}}),
  // getEducationById: (id: string) => fetchApi<Education>(`/educations/${id}`),
  getExperiences: () => fetchApi<ExperienceDto[]>('/experiences', {next: {revalidate: 60}}),
  // getExperienceById: (id: string) => fetchApi<Experience>(`/experiences/${id}`),
  getSkills: () => fetchApi<SkillsDto[]>('/skills', {next: {revalidate: 60}}),
}

// Blog related API calls
export const blogApi = {
  getBlogs: () => fetchApi<BlogPostDto[]>('/blogs', {next: {revalidate: 60}}),
  getBlogById: (id: string) => fetchApi<BlogPostDto>(`/blogs/${id}`),
} 