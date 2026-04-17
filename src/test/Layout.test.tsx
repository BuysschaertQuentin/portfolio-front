import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { I18nProvider } from "../i18n";
import Layout from "../layouts/Layout";

// Mock ScrollTo as it's not implemented in JSDOM
window.scrollTo = vi.fn();

describe("Layout component", () => {
  it("renders children via Outlet and shows persistent elements", () => {
    render(
      <I18nProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </I18nProvider>
    );

    // Check if Navbar (via skip to content link) is present
    expect(screen.getByRole("link", { name: /nav\.skipToContent/i })).toBeInTheDocument();
    
    // Check if Footer is present (by checking for a copyright or similar, 
    // here we just check if the footer element exists)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
