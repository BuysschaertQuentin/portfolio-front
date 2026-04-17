import profileImg from "@/assets/photo_profil.jpg";
import { Card } from "@/components/ui/Card";
import { PERSONAL } from "@/constants/personal";
import { SKILLS } from "@/constants/skills";
import { useI18n } from "@/i18n";
import {
    type LucideIcon,
    Briefcase,
    Gamepad2,
    Lightbulb,
    Sparkles,
    Users,
} from "lucide-react";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// --- Section header ---

interface SectionHeaderProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly subtitle?: string;
  readonly accentColor?: string;
}

const SectionHeader = memo(
  ({
    icon: Icon,
    title,
    subtitle,
    accentColor = "primary",
  }: SectionHeaderProps) => (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full bg-${accentColor}`}
          aria-hidden="true"
        />
        <Icon className={`w-5 h-5 text-${accentColor}`} aria-hidden="true" />
        <h2 className="text-xl font-mono font-semibold text-foreground">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-2 ml-10">{subtitle}</p>
      )}
    </div>
  ),
);

SectionHeader.displayName = "SectionHeader";

// --- Soft skill card (short, with link) ---

interface SoftSkillLinkProps {
  readonly slug: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly shortDesc: string;
  readonly seeMoreLabel: string;
}

const SoftSkillLink = memo(
  ({
    slug,
    icon: Icon,
    title,
    shortDesc,
    seeMoreLabel,
  }: SoftSkillLinkProps) => (
    <Link to={`/competences/${slug}`} className="block group">
      <Card className="rounded-lg p-4 border-violet/15 space-y-2 hover:border-violet/40 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-violet-muted">
            <Icon
              className="w-4 h-4 text-violet-foreground"
              aria-hidden="true"
            />
          </div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{shortDesc}</p>
        <p className="text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          {seeMoreLabel}
        </p>
      </Card>
    </Link>
  ),
);

SoftSkillLink.displayName = "SoftSkillLink";

// --- Interest card ---

interface InterestCardProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
}

const InterestCard = memo(
  ({ icon: Icon, title, description }: InterestCardProps) => (
    <Card className="rounded-lg p-4 border-primary/10 flex gap-3 items-start">
      <div className="p-2 rounded-md bg-secondary">
        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  ),
);

InterestCard.displayName = "InterestCard";

// --- Main page ---

const About = () => {
  const { t } = useI18n();

  // Filter only human skills for the soft skills overview
  const humanSkills = useMemo(
    () => SKILLS.filter((s) => s.type === "human"),
    [],
  );

  return (
    <section className="section-container pt-10 space-y-16">
      {/* Hero intro — values integrated */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={profileImg}
          alt={PERSONAL.fullName}
          className="w-32 h-32 rounded-full object-cover border-2 border-primary/50"
          width={128}
          height={128}
        />
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary">
            {t("about.title")}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {t("about.intro")}
          </p>
        </div>
      </div>

      {/* Professional & Personal projects */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <SectionHeader
            icon={Briefcase}
            title={t("about.proProjectTitle")}
            accentColor="orange"
          />
          <Card className="rounded-xl p-6 border-orange/20">
            <p className="text-muted-foreground leading-relaxed">
              {t("about.proProjectDesc")}
            </p>
          </Card>
        </div>
        <div>
          <SectionHeader
            icon={Lightbulb}
            title={t("about.persoProjectTitle")}
            accentColor="cyan"
          />
          <Card className="rounded-xl p-6 border-cyan/20">
            <p className="text-muted-foreground leading-relaxed">
              {t("about.persoProjectDesc")}
            </p>
          </Card>
        </div>
      </div>

      {/* Soft skills — short overview with links to detail pages */}
      <div>
        <SectionHeader
          icon={Users}
          title={t("about.softSkillsTitle")}
          subtitle={t("about.softSkillsSubtitle")}
          accentColor="violet-foreground"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {humanSkills.map((skill) => (
            <SoftSkillLink
              key={skill.slug}
              slug={skill.slug}
              icon={skill.icon}
              title={t(skill.titleKey)}
              shortDesc={t(skill.shortDescKey)}
              seeMoreLabel={t("about.seeMore")}
            />
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <SectionHeader icon={Gamepad2} title={t("about.interestsTitle")} />
        <div className="grid sm:grid-cols-2 gap-4">
          <InterestCard
            icon={Sparkles}
            title={t("about.interests.interest1")}
            description={t("about.interests.interest1Desc")}
          />
          <InterestCard
            icon={Sparkles}
            title={t("about.interests.interest2")}
            description={t("about.interests.interest2Desc")}
          />
          <InterestCard
            icon={Sparkles}
            title={t("about.interests.interest3")}
            description={t("about.interests.interest3Desc")}
          />
          <InterestCard
            icon={Sparkles}
            title={t("about.interests.interest4")}
            description={t("about.interests.interest4Desc")}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
