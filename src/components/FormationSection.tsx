import bootcampImg from "@/assets/bootcamp_o_clock.png";

const FormationSection = () => {
  const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "SQL", "API REST", "Git"];

  return (
    <section id="formation" className="relative bg-violet-deep">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-deep to-background pointer-events-none" />

      <div className="section-container relative z-10">
        <p className="text-violet-foreground font-mono text-sm tracking-widest uppercase mb-2">
          Formation
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-glow-violet">
          Bootcamp{" "}
          <span className="text-violet-foreground">O'clock</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-1">
            <img
              src={bootcampImg}
              alt="Étudiant en bootcamp O'clock apprenant HTML, CSS et JavaScript, style pixel art"
              className="pixel-image w-full max-w-md"
            />
          </div>
          <div className="glass-card rounded-xl p-8 border-violet/30 space-y-6 md:order-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-violet-foreground animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">
                Formation intensive — 6 mois
              </span>
            </div>
            <p className="text-secondary-foreground leading-relaxed">
              Une immersion totale dans le développement web. 6 mois de formation intensive 
              pour maîtriser les fondamentaux du front-end et du back-end. Un rythme exigeant 
              qui a forgé ma <span className="text-violet-foreground font-medium">rigueur</span> et 
              confirmé ma <span className="text-violet-foreground font-medium">passion</span> pour le code.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-violet-muted text-violet-foreground border border-violet/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
