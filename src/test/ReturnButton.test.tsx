import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { ReturnButton } from "../components/ui/buttons/ReturnButton";

describe("ReturnButton component", () => {
  it("renders as a React Router Link when 'to' is provided", () => {
    render(
      <BrowserRouter>
        <ReturnButton to="/test-path" label="Retour" />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", { name: "Retour" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test-path");
  });

  it("renders as an anchor link when 'href' is provided", () => {
    render(
      <ReturnButton href="https://example.com" label="External" />
    );

    const anchorElement = screen.getByRole("link", { name: "External" });
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "https://example.com");
  });

  it("renders as a button when 'onClick' is provided", () => {
    const handleClick = vi.fn();
    render(<ReturnButton onClick={handleClick} label="Click me" />);

    const buttonElement = screen.getByRole("button", { name: "Click me" });
    expect(buttonElement).toBeInTheDocument();
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies a custom aria-label when provided", () => {
    render(<ReturnButton onClick={() => {}} ariaLabel="Custom Back Label" label="Back" />);
    
    const buttonElement = screen.getByRole("button", { name: "Custom Back Label" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies custom class names", () => {
    const { container } = render(<ReturnButton onClick={() => {}} className="custom-class" />);
    
    const element = container.firstChild;
    expect(element).toHaveClass("custom-class");
  });
});
