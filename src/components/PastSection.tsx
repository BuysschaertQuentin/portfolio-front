import { Heart, Shield, Clock, Users } from "lucide-react";
import auxImg from "@/assets/auxiliaire_de_vie.png";

const softSkills = [
  { icon: Heart, label: "Empathie", desc: "Écoute active et bienveillance au quotidien" },
  { icon: Shield, label: "Résilience", desc: "Gestion du stress et adaptation permanente" },
  { icon: Clock, label: "Gestion des priorités", desc: "Organisation rigoureuse et autonomie" },
  { icon: Users, label: "Travail d'équipe", desc: "Collaboration avec familles et professionnels" },
];

const PastSection = () => {
  return (
    <section id="past" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-muted/30 to-background pointer-events-none" />

      <div className="section-container relative z-10">
        <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-2">
          Parcours précédent
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-glow-cyan">
          Auxiliaire de vie —{" "}
          <span className="text-cyan">8 ans d'humanité</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 border-cyan/20 space-y-4">
              <p className="text-secondary-foreground leading-relaxed">
                Pendant 8 ans, j'ai accompagné des personnes vulnérables au quotidien. 
                Cette expérience profondément humaine m'a doté de compétences transversales 
                qui font aujourd'hui ma force en tant que développeur.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="glass-card rounded-lg p-4 border-cyan/15 flex gap-3 items-start"
                >
                  <div className="p-2 rounded-md bg-cyan-muted">
                    <Icon className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={auxImg}
              alt="Auxiliaire de vie accompagnant une personne âgée, style pixel art"
              className="pixel-image w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSection;
