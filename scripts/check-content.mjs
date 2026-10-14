#!/usr/bin/env node
/**
 * Content-integrity check (run: npm run check:content).
 *  1. Evaluation-only case studies must not use outcome language (implemented/deployed/migrated/...).
 *  2. Site-wide: no unverified-claim words (awards, certifications, "official partner", office claims).
 *  3. Every /images, /videos, /brand path referenced in code exists in /public (missing = warning: these are asset slots).
 *  4. Production build needs NEXT_PUBLIC_SITE_URL.
 * Exit code 1 only on (1) or (2). Use --strict to fail on missing assets too.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const root = process.cwd();
const strict = process.argv.includes("--strict");
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    if ([".next", "node_modules", "assets-source", "public", "scripts", ".git"].includes(f)) return [];
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [".ts", ".tsx"].includes(extname(p)) ? [p] : [];
  });
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");

const files = walk(root);
let errors = 0;
const warn = [];

// 1. evaluation-only case studies
// Only RenaissanceRe is a genuine evaluation/assessment-only engagement (per its own brief: identified,
// documented, assessed, recommended — no implementation). Every other case study is resume-confirmed
// delivered work and may legitimately use outcome language like "implemented" or "delivered".
const evalFiles = ["data/renaissance-re.ts", "app/case-studies/renaissance-re/page.tsx"];
const outcome = /\b(implemented|deployed|migrated|completed|went live|decommissioned|saved|reduced by|increased by|improved by)\b/gi;
for (const f of evalFiles) {
  if (!existsSync(join(root, f))) continue;
  const text = stripComments(readFileSync(join(root, f), "utf8"));
  for (const m of text.matchAll(outcome)) {
    // Allow explicit negations such as "does not claim ... migrated".
    const ctx = text.slice(Math.max(0, m.index - 60), m.index).toLowerCase();
    if (/\b(not|never|no|without|nor)\b/.test(ctx)) continue;
    console.error(`✗ outcome wording "${m[0]}" in ${f}`);
    errors++;
  }
}

// 2. unverified-claim words (rendered content only)
const claims =
  /\b(award[- ]winning|awards?\b|iso ?\d{4,5}|certified partner|official partner|gold partner|trusted by \d|offices in|\d+\+? clients|guaranteed)\b/gi;
for (const f of files) {
  const rel = f.slice(root.length + 1);
  if (rel.startsWith("components/marketing") || rel === "data/insights.ts") continue;
  const text = stripComments(readFileSync(f, "utf8"));
  for (const m of text.matchAll(claims)) {
    const ctx = text.slice(Math.max(0, m.index - 80), m.index + 80).toLowerCase();
    if (/(do not|don't|never|not )/.test(ctx) || /pending|to be confirmed/.test(ctx)) continue;
    console.error(`✗ possible unverified claim "${m[0]}" in ${rel}`);
    errors++;
  }
}

// 3. asset slots
const pub = join(root, "public");
const seen = new Set();
for (const f of files) {
  const text = readFileSync(f, "utf8");
  for (const m of text.matchAll(/["'`](\/(?:images|videos|brand)\/[A-Za-z0-9_\-./]+\.[a-z0-9]+)["'`]/g)) seen.add(m[1]);
}
for (const p of [...seen].sort()) if (!existsSync(join(pub, p))) warn.push(p);
if (warn.length) {
  console.warn(`! ${warn.length} asset slot(s) not yet supplied (fallbacks are shown until added):`);
  warn.forEach((p) => console.warn(`    public${p}`));
  if (strict) errors += warn.length;
}

// 4. site URL
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn("! NEXT_PUBLIC_SITE_URL is not set — canonical URLs/sitemap will use the placeholder domain.");
}

console.log(errors ? `\n${errors} problem(s) found.` : "\n✓ content checks passed");
process.exit(errors ? 1 : 0);
