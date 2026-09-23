import { ClientLogo } from "./ClientLogo";
import { insuranceExperience } from "@/data/site";

export function ExperienceGrid() {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-navy/20 sm:grid-cols-3 lg:grid-cols-5">
      {insuranceExperience.map((o) => (
        <li
          key={o.slug}
          className="group relative aspect-[4/3] border-b border-r border-navy/20 bg-white/40 p-5 transition-colors duration-300 hover:bg-white sm:aspect-[3/2]"
        >
          <ClientLogo name={o.name} logo={o.logo} />
          {o.logo && <span className="sr-only">{o.name}</span>}
        </li>
      ))}
    </ul>
  );
}
