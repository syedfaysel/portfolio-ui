import { ProjectDto, ProjectDomain } from "@/lib/types";

export const projectDtoToDomain = (project: ProjectDto): ProjectDomain => {
    return {
        id: project.id,
        title: project.title,
        summary: project.summary,
        description: project.description,
        image: project.image,
        technologies: project.technologies,
        features: project.features,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl
    }
}