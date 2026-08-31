import cvPdf from "@/assets/Quentin Buysschaert_CV_juillet_2023.pdf";

export const PERSONAL = {
  fullName: import.meta.env.VITE_FULL_NAME || "NOM_NON_TROUVÉ",
  email: import.meta.env.VITE_EMAIL || "EMAIL_NON_TROUVÉ",
  linkedIn: import.meta.env.VITE_LINKEDIN_URL || "LINKEDIN_NON_TROUVÉ",
  github: import.meta.env.VITE_GITHUB_URL || "GITHUB_NON_TROUVÉ",
  cvPath: cvPdf,
};

export const EXTERNAL_LINKS = {
  oclock: "https://oclock.io",
};
