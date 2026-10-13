Brand assets
  jj-mark.svg   gold-and-silver metal mark (same as MetalIcon): favicon (also app/icon.svg) and non-React uses.

The logo on the site is fully vector and lives in components/BrandMark.tsx:
  MetalIcon     the gold-and-silver mark used site-wide (default finish)
  BrandIcon     the earlier blue-and-gold mark (Logo finish="brand")
  BrandLockup   stacked lockup: mark + "J & J" + CONSULTING + EST. 2010, set in Cinzel (@fontsource/cinzel, SIL OFL)
components/Logo.tsx wraps both ("compact" for navbar/footer, "full" for the home hero).
