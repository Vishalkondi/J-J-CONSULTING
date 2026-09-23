import { rre } from "@/data/renaissance-re";
import type { VisualData } from "./CaseVisual";

export const rreVisualData: VisualData = {
  eyebrow: rre.eyebrow,
  titleLines: ["Systems & Integrations", "Evaluation"],
  subtitle: rre.subtitle,
  role: rre.role,
  period: rre.period,
  areas: rre.areas,
  steps: rre.impact.steps,
  layers: rre.architecture,
  note: rre.disclaimers.visual,
};
