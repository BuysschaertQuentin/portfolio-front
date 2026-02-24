import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import FormationSection from "@/components/FormationSection";
import HeroSection from "@/components/HeroSection";
import PastSection from "@/components/PastSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";

/**
 * Home page — one-page layout with all portfolio sections.
 */
const Index = () => (
  <>
    <HeroSection />
    <ExperienceSection />
    <FormationSection />
    <PastSection />
    <ProjectsSection />
    <StackSection />
    <ContactSection />
  </>
);

export default Index;
