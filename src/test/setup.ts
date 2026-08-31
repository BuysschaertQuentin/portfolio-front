import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

// Mock matchMedia for JSDOM
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

// Ultra-fast Proxy mock for lucide-react (intercepts any named icon import instantly without CI delay)
vi.mock("lucide-react", () => {
  const DummyIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) =>
    React.createElement("svg", { ...props, ref }),
  );
  (DummyIcon as any).displayName = "LucideIcon";

  return new Proxy(
    { __esModule: true, default: DummyIcon },
    {
      get: (target, prop: string) => {
        if (prop in target) return (target as any)[prop];
        return DummyIcon;
      },
      has: () => true,
    },
  );
});
