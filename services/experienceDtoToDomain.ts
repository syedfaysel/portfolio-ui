import { ExperienceDto, ExperienceDomain } from "@/lib/types";
import { getYear } from "@/lib/helper/get-year";

export const experienceDtoToDomain = (experience: ExperienceDto): ExperienceDomain => {
  const startYear = getYear(experience.startDate);
  const endYear = experience.current ? "Present" : getYear(experience.endDate!);
  const period = `${startYear} - ${endYear}`;

  return {
    company: experience.company,
    role: experience.position,
    period: period,
    description: experience.description,
    responsibilities: undefined,
  }
}
