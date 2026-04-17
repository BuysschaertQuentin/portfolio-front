import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock lucide-react icons to avoid SVG rendering issues in JSDOM
vi.mock("lucide-react", () => ({
  // Add common icons used in the project or a proxy
  Menu: () => "MenuIcon",
  X: () => "XIcon",
  ChevronRight: () => "ChevronRightIcon",
  Github: () => "GithubIcon",
  Linkedin: () => "LinkedinIcon",
  Mail: () => "MailIcon",
  ExternalLink: () => "ExternalLinkIcon",
  // Fallback for any other icon
  ...new Proxy({}, { get: () => () => "LucideIcon" }),
}));
