import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function extractFirstText(data: {text?: string} | string): string | null {
  if (typeof data === 'object' && data !== null) {
      if (data.text) return data.text;

      const values = Object.values(data);
      for (const value of values) {
          const result = extractFirstText(value);
          if (result) return result;
      }
  }
  return null;
}
