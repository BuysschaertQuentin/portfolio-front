import { ChevronDown } from "lucide-react";

interface SectionChevronProps {
  targetId: string;
  label: string;
  /** Optional title displayed as static text above the chevron */
  title?: string;
}

const SectionChevron = ({ targetId, label, title }: SectionChevronProps) => {
  const scrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Use center to ensure the whole block is vertically centered
      element.scrollIntoView({ behavior: "smooth", block: "center" });

      // Update URL hash for accessibility/history without jumping
      history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <div className="animate-fade-in z-20 m-5 flex flex-col items-center gap-3">
      {title && (
        <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
          {title}
        </span>
      )}
      <a
        href={`#${targetId}`}
        onClick={scrollToTarget}
        className="group border-primary/20 bg-background/50 hover:border-primary/50 hover:bg-primary/10 focus-visible:ring-primary relative flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_hsla(var(--primary)/0.3)] focus:outline-none focus-visible:ring-2"
        aria-label={`Aller à la section : ${label}`}
      >
        <ChevronDown
          className="text-primary h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
          aria-hidden="true"
          strokeWidth={2.5}
        />
        {/* Subtle glowing ping effect */}
        <span className="border-primary/30 absolute inset-0 animate-[ping_3s_ease-in-out_infinite] rounded-full border" />
      </a>
    </div>
  );
};

export default SectionChevron;
