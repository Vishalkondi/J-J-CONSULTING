import { SlotImage } from "./SlotImage";
import { cn } from "@/lib/utils";

/** Official logo when supplied at the given path; otherwise a typographic wordmark. */
export function ClientMark({
  name,
  logo,
  className,
  pad = "p-8",
}: {
  name: string;
  logo?: string | null;
  className?: string;
  /** Padding around the logo; small marks (h-14/h-16) need a much smaller value than the default. */
  pad?: string;
}) {
  const wordmark = (
    <div className="absolute inset-0 flex items-center justify-center bg-white px-6 text-center" role="img" aria-label={name}>
      <span className="font-display text-[clamp(22px,3vw,34px)] leading-tight text-navy">{name}</span>
    </div>
  );
  if (!logo) return <div className={cn("relative bg-white", className)}>{wordmark}</div>;
  return (
    <SlotImage src={logo} alt={`${name} logo`} fit="contain" className={cn("bg-white", className)} imgClassName={pad} fallback={wordmark} />
  );
}
