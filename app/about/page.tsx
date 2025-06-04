import Image from "next/image"
import { Download, Github, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { certifications, education } from "@/lib/data"
import { Separator } from "@/components/ui/separator"
import EducationSection from "@/components/education-section"
import { portfolioApi } from "@/lib/api-client"
import SkillsSection from "@/components/skills-section"

export default async function AboutPage() {
  const res = await portfolioApi.getSkills();
  const skills = res.data;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Profile Section */}
      <div className="mb-16 flex max-w-4xl flex-col items-center mx-auto">
        {/* Profile Image */}
        <div className="mb-6 overflow-hidden rounded-full border-4 border-background shadow-xl dark:border-border">
          <Image
            src="/my-image.png?height=180&width=180"
            alt="Profile"
            width={180}
            height={180}
            className="h-[180px] w-[180px] object-cover"
            priority
          />
        </div>

        {/* Name Badge */}
        <Badge variant="default" className="mb-4 px-4 py-1.5 text-base">
          Syed Faysel Ahammad Rajo
        </Badge>

        {/* Title */}
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Full Stack Developer
        </h1>

        {/* Credentials */}
        <p className="mb-8 text-center text-muted-foreground">
          Software developer @ Coastal Code Solution | 2+ Years Experience | web & app | Open Source
          Contributor
        </p>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
        <Button 
            variant="outline" 
            className="min-w-[140px]"
            asChild
          >
            <a 
              href="https://github.com/syedfaysel" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          
          <Button 
            className="min-w-[140px] bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            asChild
          >
            <a 
              href="https://youtube.com/@syedfaysel" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-4 w-4" /> YouTube
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a 
              href="/Syed Faysel CV.pdf" 
              download="Syed Faysel CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>

        </div>
      </div>

      {/* Personal Information */}
      <Card className="mb-16">
        <CardContent className="p-6 md:p-8">
          <h2 className="mb-6 text-center text-3xl font-bold">About Me</h2>
            <div className="flex flex-col gap-4 text-justify">
              <p className="text-muted-foreground">
                I'm a passionate developer with 2+ years of experience building web applications. I specialize in
                creating intuitive, responsive, and performant user interfaces with modern technologies like React,
                Next.js, and TypeScript.
              </p>
              <p className="text-muted-foreground">
                My background in both frontend and backend development allows me to build complete solutions from
                concept to deployment. I'm constantly learning and exploring new technologies to improve my skills and
                deliver better results.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the kitchen.
              </p>
            </div>
        </CardContent>
      </Card>

      {/* Certifications */}
    {/* Will update later */}
      {/* <Card className="mb-16">
        <CardContent className="p-6 md:p-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="p-6">
                      <div className="mb-4 flex items-center">
                        <Button variant="outline" size="sm" className="text-xs">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          </svg>
                          Show Credential
                        </Button>
                      </div>
                      <Separator className="my-4" />
                      <h3 className="mb-2 text-lg font-bold">{cert.title}</h3>
                      <p className="mb-6 text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                    <div className="flex justify-center p-6 pt-0">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        width={150}
                        height={150}
                        className="h-auto max-w-[150px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* Education */}
      <EducationSection />

      <SkillsSection skills={skills || []} />
    </div>
  )
}
