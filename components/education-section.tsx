import { portfolioApi } from "@/lib/api-client";
import { educationDtoToDomain } from "@/services/educationDtoToDomain";
import EducationTimeline from "./education-timeline";
import { Card, CardContent } from "./ui/card";
import { education } from "@/lib/data";

export default async function EducationSection() {

  const res = await portfolioApi.getEducations();
  const educationRes = res.data?.map(educationDtoToDomain) || [];

  const finalEducation = educationRes ? educationRes : education;

  return (
    <div>
      <Card className="mb-16">
        <CardContent className="p-6 md:p-8">
          <h2 className="mb-8 text-center text-3xl font-bold">Education</h2>
          <EducationTimeline education={finalEducation} />
        </CardContent>
      </Card>
    </div>
  )
}
