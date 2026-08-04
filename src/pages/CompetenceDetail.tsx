import { ReturnButton } from "@/components/ui/buttons/ReturnButton";
import { Card } from "@/components/ui/cards/Card";
import { CONTEXT_COLORS, REALISATIONS } from "@/constants/realisations";
import { findSkillBySlug } from "@/constants/skills";
import { useI18n } from "@/i18n";
import {
  type LucideIcon,
  BookOpen,
  Eye,
  Lightbulb,
  MessageSquare,
  Target,
  TrendingUp,
} from "lucide-react";
import { memo, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

// --- Detail section block ---

interface DetailBlockProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly content: string;
  readonly accentColor?: string;
}

// --- Native Lightweight Syntax Highlighter ---

const highlightLine = (line: string, lineIdx: number) => {
  if (line.trim().startsWith("//")) {
    return (
      <div key={lineIdx} className="text-slate-500 italic">
        {line}
      </div>
    );
  }

  const tokenRegex =
    /(\/\/.+$|"[^"]*"|'[^']*'|`[^`]*`|\b(?:export|import|from|const|let|var|function|return|default|type|interface|readonly|if|else|new|try|catch|async|await)\b|\b(?:true|false|null|undefined)\b|\b(?:string|number|boolean|any|void|ReactNode|Locale|Translations|Record|FC)\b|<\/?[A-Za-z0-9.]*>|\b[A-Za-z0-9_]+(?=\s*\())/g;

  const parts: React.ReactNode[] = [];
  let lastPos = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    const matchedText = match[0];
    const matchPos = match.index;

    if (matchPos > lastPos) {
      parts.push(line.slice(lastPos, matchPos));
    }

    if (matchedText.startsWith("//")) {
      parts.push(
        <span key={matchPos} className="text-slate-500 italic">
          {matchedText}
        </span>,
      );
    } else if (
      matchedText.startsWith('"') ||
      matchedText.startsWith("'") ||
      matchedText.startsWith("`")
    ) {
      parts.push(
        <span key={matchPos} className="text-amber-300">
          {matchedText}
        </span>,
      );
    } else if (
      /^(export|import|from|const|let|var|function|return|default|type|interface|readonly|if|else|new|try|catch|async|await)$/.test(
        matchedText,
      )
    ) {
      parts.push(
        <span key={matchPos} className="font-semibold text-purple-400">
          {matchedText}
        </span>,
      );
    } else if (/^(true|false|null|undefined)$/.test(matchedText)) {
      parts.push(
        <span key={matchPos} className="font-semibold text-rose-400">
          {matchedText}
        </span>,
      );
    } else if (
      /^(string|number|boolean|any|void|ReactNode|Locale|Translations|Record|FC)$/.test(
        matchedText,
      )
    ) {
      parts.push(
        <span key={matchPos} className="text-cyan-400">
          {matchedText}
        </span>,
      );
    } else if (/^<\/?[A-Za-z]/.test(matchedText)) {
      parts.push(
        <span key={matchPos} className="font-medium text-sky-300">
          {matchedText}
        </span>,
      );
    } else {
      parts.push(
        <span key={matchPos} className="text-blue-300">
          {matchedText}
        </span>,
      );
    }

    lastPos = matchPos + matchedText.length;
  }

  if (lastPos < line.length) {
    parts.push(line.slice(lastPos));
  }

  return (
    <div key={lineIdx} className="leading-relaxed">
      {parts}
    </div>
  );
};

// --- Code Block Component (Carbon.sh Style with Syntax Highlighting) ---

const CodeSnippetBlock = memo(
  ({ lang, code }: { readonly lang: string; readonly code: string }) => {
    const lines = code.split("\n");
    return (
      <div className="my-4 overflow-hidden rounded-xl border border-border/40 bg-slate-950/95 font-mono text-xs shadow-2xl sm:text-sm">
        <div className="flex items-center justify-between border-b border-border/20 bg-slate-900/80 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {lang}
          </span>
        </div>
        <div className="overflow-x-auto p-4 flex gap-4">
          <div className="select-none text-right font-mono text-slate-600 text-xs leading-relaxed border-r border-border/20 pr-3">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="flex-1 font-mono text-slate-200">
            {lines.map((line, idx) => highlightLine(line, idx))}
          </div>
        </div>
      </div>
    );
  },
);

CodeSnippetBlock.displayName = "CodeSnippetBlock";

import { renderFormattedText } from "@/lib/formatText";

const DetailBlock = memo(
  ({ icon: Icon, title, content, accentColor = "primary" }: DetailBlockProps) => (
    <Card className={`rounded-xl p-6 border-${accentColor}/15 space-y-3`}>
      <div className="flex items-center gap-3">
        <div className={`rounded-lg p-2 bg-${accentColor}/10`}>
          <Icon className={`h-5 w-5 text-${accentColor}`} aria-hidden="true" />
        </div>
        <h2 className="font-semibold text-foreground">{title}</h2>
      </div>
      <div className="leading-relaxed text-muted-foreground space-y-2">
        {renderFormattedText(content, (lang, code, key) => (
          <CodeSnippetBlock key={key} lang={lang} code={code} />
        ))}
      </div>
    </Card>
  ),
);

DetailBlock.displayName = "DetailBlock";

// --- Slug to i18n key mapping ---

const SLUG_TO_KEY: Record<string, string> = {
  autonome: "autonome",
  empathie: "empathy",
  resilience: "resilience",
  communication: "communication",
  "travail-equipe": "teamwork",
  pedagogie: "pedagogy",
};

// --- Main page ---

const CompetenceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t } = useI18n();

  const skill = useMemo(() => (slug ? findSkillBySlug(slug) : undefined), [slug]);

  const i18nKey = slug ? SLUG_TO_KEY[slug] || slug : undefined;

  // Find all realisations that reference this skill
  const linkedRealisations = useMemo(
    () => (slug ? REALISATIONS.filter((r) => r.linkedSkills.includes(slug)) : []),
    [slug],
  );

  // Redirect to overview if skill not found
  if (!skill || !i18nKey) {
    return <Navigate to="/competences" replace />;
  }

  const Icon = skill.icon;
  const CustomIcon = skill.customIcon;
  const base = i18nKey ? `competences.skills.${i18nKey}` : undefined;

  const fallback = locale === "fr" ? "[À RÉDIGER]" : "[TO WRITE]";

  const getTranslation = (key: string): string => {
    const val = t(key);
    return val === key ? fallback : val;
  };

  return (
    <section className="section-container space-y-8 pt-10">
      {/* Back link */}
      <ReturnButton to="/competences" label={t("competences.backToList")} />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center justify-center rounded-xl p-3 ${skill.type === "human" ? "bg-cyan/10" : "bg-orange/10"}`}
        >
          {Icon && (
            <Icon
              className={`h-8 w-8 ${skill.type === "human" ? "text-cyan" : "text-orange"}`}
              aria-hidden="true"
            />
          )}
          {skill.logoUrl && (
            <img src={skill.logoUrl} alt={skill.techName} className="h-8 w-8 object-contain" />
          )}
          {CustomIcon && (
            <CustomIcon
              className={`h-8 w-8 ${skill.type === "human" ? "text-cyan" : "text-orange"}`}
              aria-hidden="true"
            />
          )}
        </div>
        <div>
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            {skill.type === "human" ? t("competences.humanTitle") : t("competences.technicalTitle")}
          </p>
          <h1 className="text-glow-primary text-3xl font-bold sm:text-4xl">
            {skill.titleKey ? t(skill.titleKey) : skill.techName}
          </h1>
        </div>
      </div>

      {/* Detail blocks */}
      <div className="grid gap-6">
        <DetailBlock
          icon={BookOpen}
          title={t("competences.detail.definitionTitle")}
          content={base ? getTranslation(`${base}.definition`) : fallback}
          accentColor="primary"
        />
        <DetailBlock
          icon={Target}
          title={t("competences.detail.proofsTitle")}
          content={base ? getTranslation(`${base}.proofs`) : fallback}
          accentColor={skill.type === "human" ? "cyan" : "orange"}
        />
        <DetailBlock
          icon={Eye}
          title={t("competences.detail.selfCritiqueTitle")}
          content={base ? getTranslation(`${base}.selfCritique`) : fallback}
          accentColor="violet-foreground"
        />
        <DetailBlock
          icon={MessageSquare}
          title={t("competences.detail.hindsightTitle")}
          content={base ? getTranslation(`${base}.hindsight`) : fallback}
          accentColor="primary"
        />
        <DetailBlock
          icon={TrendingUp}
          title={t("competences.detail.evolutionTitle")}
          content={base ? getTranslation(`${base}.evolution`) : fallback}
          accentColor={skill.type === "human" ? "cyan" : "orange"}
        />
      </div>

      {/* Linked realisations — bidirectional navigation */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
          <Lightbulb className="text-primary h-5 w-5" aria-hidden="true" />
          <h2 className="text-foreground font-mono font-semibold">
            {t("competences.detail.linkedRealisationsTitle")}
          </h2>
          <div className="bg-border h-px flex-1" aria-hidden="true" />
        </div>
        {linkedRealisations.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {linkedRealisations.map((r) => {
              const RIcon = r.icon;
              const color = CONTEXT_COLORS[r.context];
              return (
                <Link
                  key={r.slug}
                  to={`/realisations/${r.slug}`}
                  state={{ from: `/competences/${slug}` }}
                  className="group"
                >
                  <Card
                    className={`rounded-lg px-4 py-2 border-${color}/10 flex items-center gap-2 hover:border-${color}/30 transition-all duration-200`}
                    focusable={false}
                  >
                    <RIcon
                      className={`text-muted-foreground h-4 w-4 group-hover:text-${color} transition-colors`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-muted-foreground font-mono text-sm group-hover:text-${color} transition-colors`}
                    >
                      {t(r.titleKey)}
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm italic">
            {t("competences.detail.noLinkedRealisations")}
          </p>
        )}
      </div>
    </section>
  );
};

export default CompetenceDetail;
