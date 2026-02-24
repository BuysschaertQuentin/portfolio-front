/**
 * Single source of truth for personal/contact information.
 * Used across components to avoid duplication and ease future updates.
 */

export const PERSONAL = {
  fullName: "Quentin Buysschaert",
  email: "quentin.buysschaert@gmail.com",
  linkedIn: "https://www.linkedin.com/in/quentin-buysschaert-1b3573218/",
  github: "https://github.com/BuysschaertQuentin",
  cvPath: "/portfolio-front/cv.pdf",
} as const;

export const EXTERNAL_LINKS = {
  oclock: "https://oclock.io",
} as const;
