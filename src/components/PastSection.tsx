import auxImg from "@/assets/auxiliaire_de_vie.png";
import { useI18n } from "@/i18n";
import { type LucideIcon, Clock, Heart, Shield, Users } from "lucide-react";

interface SoftSkill {
  readonly icon: LucideIcon;
  readonly labelKey: string;
  readonly descKey: string;
}

const softSkillsDef: readonly SoftSkill[] = [
  { icon: Heart, labelKey: "past.empathy", descKey: "past.empathyDesc" },
  { icon: Shield, labelKey: "past.resilience", descKey: "past.resilienceDesc" },
  { icon: Clock, labelKey: "past.priorities", descKey: "past.prioritiesDesc" },
  { icon: Users, labelKey: "past.teamwork", descKey: "past.teamworkDesc" },
];

interface SoftSkillCardProps {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly desc: string;
}

const SoftSkillCard = ({ icon: Icon, label, desc }: SoftSkillCardProps) => (
  <div className="glass-card rounded-lg p-4 border-cyan/15 flex gap-3 items-start">
    <div className="p-2 rounded-md bg-cyan-muted">
      <Icon className="w-4 h-4 text-cyan" />
    </div>
    <div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const PastSection = () => {
  const { t } = useI18n();

  return (
    <section id="past" className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-background via-cyan-muted/30 to-background pointer-events-none" />

      <div className="section-container relative z-10">
        <p className="text-cyan font-mono text-sm tracking-widest uppercase mb-2">
          {t("past.sectionLabel")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-glow-cyan">
          {t("past.title")}{" "}
          <span className="text-cyan">{t("past.titleHighlight")}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 border-cyan/20 space-y-4">
              <p className="text-secondary-foreground leading-relaxed">
                {t("past.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkillsDef.map((skill) => (
                <SoftSkillCard
                  key={skill.labelKey}
                  icon={skill.icon}
                  label={t(skill.labelKey)}
                  desc={t(skill.descKey)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={auxImg}
              alt={t("past.imgAlt")}
              className="pixel-image w-full max-w-md"
              width={448}
              height={448}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSection;
