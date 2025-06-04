import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProjectGallery from "@/components/project-gallery"
import { portfolioApi } from "@/lib/api-client"
import { projectDtoToDomain } from "@/services/projectDtoToDomain"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{id: string}>
  }) {
  
  const {id} = await params;
  const res = await portfolioApi.getProjectById(id);
  console.log(res.data);
  const project = projectDtoToDomain(res.data);

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Link href="/projects" className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mb-8 overflow-hidden rounded-xl">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={630}
          className="w-full object-cover"
        />
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{project.title}</h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mb-8 flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">{project.description}</p>

        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
          {/* {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))} */}
        </ul>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
          <ProjectGallery images={project.gallery} />
        </div>
      )}
    </div>
  )
}
