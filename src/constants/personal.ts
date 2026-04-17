import cvPdf from "@/assets/Quentin Buysschaert_CV_juillet_2023.pdf";

export const PERSONAL = {
  fullName: import.meta.env.VITE_FULL_NAME || "Quentin Buysschaert",
  email: import.meta.env.VITE_EMAIL || "",
  linkedIn: import.meta.env.VITE_LINKEDIN_URL || "",
  github: import.meta.env.VITE_GITHUB_URL || "",
  cvPath: cvPdf,
};

export const EXTERNAL_LINKS = {
  oclock: "https://oclock.io",
};
