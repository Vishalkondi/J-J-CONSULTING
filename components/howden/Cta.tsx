import { CtaBand } from "../CtaBand";
import { cta } from "@/data/howden-hx";

export function HowdenCta() {
  return <CtaBand title={cta.title} text={cta.text} label={cta.label} />;
}
