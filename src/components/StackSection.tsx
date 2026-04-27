import { coreStack, transversalStack } from "@/constants/stack";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import SectionChevron from "./ui/navigation/SectionChevron";
import { StackGroup } from "./ui/groups/StackGroup";
import { Button } from "./ui/buttons/Button";
import { SectionHeader } from "./ui/headers/SectionHeader";

const StackSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="stack"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-8 md:pt-12"
    >
      <div className="section-container scrollbar-styled mask-bottom-fade flex-1 overflow-x-hidden overflow-y-auto p-2">
        <SectionHeader
          index="04"
          label={t("stack.sectionLabel")}
          title={t("stack.title")}
          accentColor="primary"
        />

        <StackGroup title={t("stack.core")} items={coreStack} dotColor="bg-primary" />
        <StackGroup
          title={t("stack.transversal")}
          items={transversalStack}
          dotColor="bg-muted-foreground"
          titleColor="text-muted-foreground"
        />

        <div className="mt-6 flex justify-center pb-4">
          <Button
            to="/competences"
            variant="secondary"
            className="border-primary/20 hover:border-primary/40"
          >
            {t("stack.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <SectionChevron targetId="past" label={t("chevrons.past")} />
    </section>
  );
};

export default StackSection;
