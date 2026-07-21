import { memo } from "react";
import { type LucideIcon } from "lucide-react";
import { Card } from "./Card";

export interface SoftSkillCardProps {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly desc: string;
}

/**
 * Card displaying a soft skill with icon, label and short description.
 * Extracted from PastSection. Interface co-located in this file.
 */
export const SoftSkillCard = memo(({ icon: Icon, label, desc }: SoftSkillCardProps) => (
  <Card className="border-cyan/15 hover:border-cyan/30 flex items-start gap-3 rounded-lg p-4 transition-colors">
    <div className="bg-cyan-muted rounded-md p-2">
      <Icon className="text-cyan h-4 w-4" aria-hidden="true" />
    </div>
    <div>
      <p className="text-foreground text-sm font-semibold">{label}</p>
      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
    </div>
  </Card>
));

SoftSkillCard.displayName = "SoftSkillCard";
