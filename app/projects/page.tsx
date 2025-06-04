import { allProjects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import { portfolioApi } from "@/lib/api-client";
import { projectDtoToDomain } from "@/services/projectDtoToDomain";

export default async function ProjectsPage() {

  const res = await portfolioApi.getProjects();
  const projects = res.data.map(projectDtoToDomain);

  const finalProjects = projects ? projects: allProjects;
  
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">My Projects</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        A collection of my work, including web applications, design projects, and open-source contributions.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {finalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
