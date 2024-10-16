import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const isValid = (value: unknown, maxLength: number): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && error !== null && "message" in error) {
    return String((error as any).message);
  }

  return "Something went wrong";
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
