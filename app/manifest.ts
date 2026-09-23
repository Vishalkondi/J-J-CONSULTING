import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "J & J Consulting",
    short_name: "J & J",
    description: "Technology, transformation and talent.",
    start_url: "/",
    display: "standalone",
    background_color: "#08121F",
    theme_color: "#08121F",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
