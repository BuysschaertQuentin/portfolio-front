// services/TechService.ts

export class TechService {
  /**
   * Calculates experience in full years
   * @param since string in format "YYYY-MM"
   * @param t Translation function
   */
  static getExperienceText(since: string, t: (key: string) => string): string {
    const sinceDate = new Date(`${since}-01`);
    const now = new Date();

    let years = now.getFullYear() - sinceDate.getFullYear();
    
    // If the current month is before the starting month, we haven't completed the full year yet
    if (now.getMonth() < sinceDate.getMonth()) {
      years--;
    }

    if (years <= 0) {
      return t("techTooltip.experience.lessThanYear");
    }

    return t("techTooltip.experience.yearsOnly").replace("{{years}}", years.toString());
  }
}
