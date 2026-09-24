import type { ReactNode } from "react";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

const svg = (children: ReactNode) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

/**
 * Contact details as icon tiles. Email and phone appear automatically once they are set on
 * `company` in data/site.ts (they are null until confirmed, so nothing is invented).
 */
export function ContactDetails({ className }: { className?: string }) {
  const rows: { label: string; value: ReactNode; icon: ReactNode }[] = [
    {
      label: "Office",
      icon: svg(
        <>
          <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
          <circle cx="12" cy="10" r="2.3" />
        </>,
      ),
      value: company.address.oneLine,
    },
  ];
  if (company.email)
    rows.push({
      label: "Email",
      icon: svg(
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
        </>,
      ),
      value: (
        <a href={`mailto:${company.email}`} className="underline decoration-gold/50 underline-offset-4 hover:decoration-navy">
          {company.email}
        </a>
      ),
    });
  if (company.phone)
    rows.push({
      label: "Phone",
      icon: svg(
        <path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z" />,
      ),
      value: (
        <a
          href={`tel:${company.phone.replace(/\s+/g, "")}`}
          className="underline decoration-gold/50 underline-offset-4 hover:decoration-navy"
        >
          {company.phone}
        </a>
      ),
    });

  return (
    <address className={cn("space-y-4 not-italic", className)}>
      {rows.map((r) => (
        <div key={r.label} className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-light">{r.icon}</span>
          <div>
            <p className="label text-graphite">{r.label}</p>
            <p className="mt-1 max-w-xs text-[15.5px] leading-relaxed text-charcoal">{r.value}</p>
          </div>
        </div>
      ))}
    </address>
  );
}
