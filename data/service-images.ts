/** Photos for the service pages, shared by /services and /services/[slug]. */

/**
 * Hero background per service — every page below has its own distinct photo (no repeats among
 * these five, and none reuse the homepage's London aerial video). This is the page's only photo;
 * an earlier version also had a second "below-hero strip" image, which was removed because it
 * duplicated two of these five photos on their own pages.
 */
export const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  "it-consultancy": {
    src: "/images/analyst-dashboards-desk.jpg",
    alt: "An analyst reviewing multi-monitor dashboards at a desk overlooking Tower Bridge",
  },
  "technology-training": { src: "/images/engineering-team.jpg", alt: "A team reviewing code together in an open-plan office" },
  recruitment: {
    src: "/images/boardroom-team-london.jpg",
    alt: "A boardroom meeting with St Paul's Cathedral and the City skyline behind",
  },
  "workforce-solutions": { src: "/images/operations-team.jpg", alt: "A team gathered around screens in a modern office" },
  "management-consultancy": {
    src: "/images/headset-call-meeting.jpg",
    alt: "A colleague on a headset call with the team in a meeting behind, City of London skyline through the window",
  },
};

/** Second photo beside "What this covers" — distinct from the same page's hero above. */
export const serviceCoverImages: Record<string, { src: string; alt: string }> = {
  "it-consultancy": { src: "/images/developer-coding-desk.jpg", alt: "A developer working across code on two screens" },
  "management-consultancy": { src: "/images/boardroom-presentation-large.jpg", alt: "A consultant presenting to a boardroom" },
  recruitment: { src: "/images/office-team.jpg", alt: "Colleagues collaborating in a bright office" },
  "technology-training": { src: "/images/presenter-data-wall.jpg", alt: "An analyst at a multi-screen data workstation" },
  "workforce-solutions": { src: "/images/modern-office-workspace.jpg", alt: "A modern open-plan office workspace" },
};
