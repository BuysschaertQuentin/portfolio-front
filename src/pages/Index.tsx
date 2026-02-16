import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FormationSection from "@/components/FormationSection";
import PastSection from "@/components/PastSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <FormationSection />
      <PastSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
