import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import FormationSection from "@/components/FormationSection";
import HeroSection from "@/components/HeroSection";
import HomeScrollNav from "@/components/HomeScrollNav";
import PastSection from "@/components/PastSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import { useCallback, useEffect, useRef, useState } from "react";

import { HOME_SECTIONS } from "@/constants/home";

const SECTION_IDS = HOME_SECTIONS.map((s) => s.id);

/**
 * Home page — one-page layout with a guided chronological narrative.
 * Controlled smooth scrolling using wheel events and localized states.
 */
const Index = () => {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= SECTION_IDS.length) return;

    isScrolling.current = true;
    const targetId = SECTION_IDS[index];
    const element = document.getElementById(targetId);

    if (element) {
      // For the first and last sections, ensure they align to the very edges
      // of the container to prevent awkward centering cuts on smaller screens.
      const blockPosition =
        index === 0 ? "start" : index === SECTION_IDS.length - 1 ? "end" : "center";
      element.scrollIntoView({ behavior: "smooth", block: blockPosition });

      // Unlock scrolling after animation completes (~500ms)
      setTimeout(() => {
        isScrolling.current = false;
      }, 400);
    } else {
      isScrolling.current = false;
    }
  }, []);

  // Single source of truth for the active section:
  // Watch what is actually visible on screen.
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    };

    const container = containerRef.current;
    if (!container) return;

    // Use a precise threshold and negative margins to ensure only
    // the most visible section triggers the update when crossing thresholds.
    const observer = new IntersectionObserver(observerCallback, {
      root: container,
      threshold: 0.4,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow internal scrolling on elements with 'overflow-y-auto'
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const isScrollableContainer = target.closest(".overflow-y-auto");

      if (isScrollableContainer instanceof HTMLElement) {
        const container = isScrollableContainer;
        const isAtTop = container.scrollTop <= 0;
        const isAtBottom =
          container.scrollTop + container.clientHeight >= container.scrollHeight - 1;

        // Only hijack if we're at the very boundaries of the internal scroll
        if (!(isAtTop && e.deltaY < 0) && !(isAtBottom && e.deltaY > 0)) {
          return; // Let native internal scroll happen
        }
      }

      e.preventDefault();

      if (isScrolling.current) return;

      const currentIndex = SECTION_IDS.indexOf(activeSection);
      if (e.deltaY > 0) {
        scrollToSection(currentIndex + 1);
      } else if (e.deltaY < 0) {
        scrollToSection(currentIndex - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeSection, scrollToSection]);

  return (
    <main
      ref={containerRef}
      id="scroll-container"
      className="relative h-full w-full overflow-hidden"
    >
      <HomeScrollNav activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection />
      <PastSection />
      <FormationSection />
      <ExperienceSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
