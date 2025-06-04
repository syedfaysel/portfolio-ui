import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearFromDate(dateString: string): string {
  return new Date(dateString).getFullYear().toString();
}
