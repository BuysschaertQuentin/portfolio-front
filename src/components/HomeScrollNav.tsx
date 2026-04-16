import { ChevronDown, ChevronUp } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Intro" },
  { id: "past", label: "Origines" },
  { id: "formation", label: "Transition" },
  { id: "experience", label: "Aujourd'hui" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Réalisations" },
  { id: "contact", label: "Contact" },
];

interface HomeScrollNavProps {
  activeSection: string;
  onNavigate: (index: number) => void;
}

const HomeScrollNav = ({ activeSection, onNavigate }: HomeScrollNavProps) => {
  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : -1;
  const nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : -1;

  return (
    <nav
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      aria-label="Table des matières de la page"
    >
      <button
        onClick={() => onNavigate(prevIndex)}
        disabled={prevIndex === -1}
        className="text-muted-foreground hover:text-primary disabled:hover:text-muted-foreground p-1 transition-colors focus:outline-none disabled:opacity-30"
        aria-label="Section précédente"
      >
        <ChevronUp className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex flex-col gap-5">
        {sections.map(({ id, label }, index) => (
          <button
            key={id}
            onClick={() => onNavigate(index)}
            className="group relative flex h-6 w-6 items-center justify-center focus:outline-none"
            aria-label={`Aller à la section ${label}`}
          >
            <div
              className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === id
                  ? "bg-primary border-primary scale-125 shadow-[0_0_10px_hsla(var(--primary)/0.5)]"
                  : "border-muted-foreground group-hover:border-primary bg-transparent group-hover:scale-110"
              }`}
            />
            <span
              className={`pointer-events-none absolute left-8 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-all duration-300 ${
                activeSection === id
                  ? "text-primary translate-x-0 opacity-100"
                  : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => onNavigate(nextIndex)}
        disabled={nextIndex === -1}
        className="text-muted-foreground hover:text-primary disabled:hover:text-muted-foreground p-1 transition-colors focus:outline-none disabled:opacity-30"
        aria-label="Section suivante"
      >
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
};

export default HomeScrollNav;
