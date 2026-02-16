import { Download } from "lucide-react";
import heroImg from "@/assets/nouvelles_opportunite.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              Portfolio // 2025
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-glow-primary">
              Développeur{" "}
              <span className="text-primary">Fullstack</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              De l'accompagnement humain au code, je construis des solutions web avec{" "}
              <span className="text-foreground font-medium">rigueur</span>,{" "}
              <span className="text-foreground font-medium">empathie</span> et{" "}
              <span className="text-foreground font-medium">passion</span>.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Découvrir mon parcours
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="Développeur fullstack accueilli dans une entreprise, style pixel art"
              className="pixel-image w-full max-w-md animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
