import { EducationDto, EducationDomain } from "@/lib/types";

export const getYear = (date: string) => {
  const year = new Date(date).getFullYear();
  return year;
}

export const educationDtoToDomain = (education: EducationDto): EducationDomain => {
  const endYear = education.endDate ? getYear(education.endDate) : "Present";
  return {
    institution: education.institution,
    degree: education.degree + " in " + education.field,
    years: `${getYear(education.startDate)} - ${endYear}`,
    description: null,
  }
}