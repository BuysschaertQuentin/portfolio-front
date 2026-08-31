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
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-6 overflow-hidden">
        <SectionHeader
          index="04"
          label={t("stack.sectionLabel")}
          title={t("stack.title")}
          accentColor="primary"
        />

        <div className="scrollbar-styled mask-bottom-fade flex-1 overflow-x-hidden overflow-y-auto px-2">
          <StackGroup title={t("stack.core")} items={coreStack} dotColor="bg-primary" />
          <StackGroup
            title={t("stack.transversal")}
            items={transversalStack}
            dotColor="bg-muted-foreground"
            titleColor="text-muted-foreground"
          />

          <div className="mt-6 flex justify-center pb-8">
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
      </div>

      <div className="absolute right-0 bottom-4 left-0 flex justify-center">
        <SectionChevron targetId="past" label={t("chevrons.past")} />
      </div>
    </section>
  );
};

export default StackSection;

