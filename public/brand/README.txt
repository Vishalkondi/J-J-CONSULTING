Brand assets
  jj-mark.svg   vector icon (hand-rebuilt from the supplied artwork): favicon (also app/icon.svg) and non-React uses.

The logo on the site is fully vector and lives in components/BrandMark.tsx:
  BrandIcon     the mark, inline SVG (same geometry and colours as jj-mark.svg, plus a soft sheen)
  BrandLockup   stacked lockup: mark + "J & J" + CONSULTING + EST. 2010, set in Cinzel (@fontsource/cinzel, SIL OFL)
components/Logo.tsx wraps both ("compact" for navbar/footer, "full" for the home hero).
