import { Card, CardContent } from "@/components/ui/card"
import { portfolioApi } from "@/lib/api-client";
import { experienceDtoToDomain } from "@/services/experienceDtoToDomain";

export default async function ExperiencePage() {
  const res = await portfolioApi.getExperiences();
  const experience = res.data?.map(experienceDtoToDomain);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">Work Experience</h1>

      <div className="space-y-8">
        {experience.map((job, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="border-b border-border bg-muted/40 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">{job.role}</h2>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-lg text-muted-foreground">{job.company}</p>
            </div>
            <CardContent className="p-6">
              <p className="mb-4 text-muted-foreground">{job.description}</p>
              {job.responsibilities && (
                <>
                  <h3 className="mb-2 font-semibold">Key Responsibilities:</h3>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                      {job.responsibilities?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
