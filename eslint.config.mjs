import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  { ignores: [".next/**", "node_modules/**", "assets-source/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Logos/slots need onError fallbacks that next/image cannot express; each use is annotated.
      "@next/next/no-img-element": "warn",
    },
  },
];
export default config;
