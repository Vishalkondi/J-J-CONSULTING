Brand assets
  jj-mark.svg   gold-and-silver metal mark (same as MetalIcon): favicon (also app/icon.svg) and non-React uses.

  jj-mark-metal.webp / -sm.webp   photo-real gold-and-silver mark cut out of the logo artwork
                (full-res source: assets-source/jj-mark-metal-source.png)

The logo components live in components/BrandMark.tsx:
  MetalIcon     the gold-and-silver mark used site-wide (default finish), renders jj-mark-metal.webp
  BrandIcon     the earlier blue-and-gold mark (Logo finish="brand")
  BrandLockup   stacked lockup: mark + "J & J" + CONSULTING + EST. 2010, set in Cinzel (@fontsource/cinzel, SIL OFL)
components/Logo.tsx wraps both ("compact" for navbar/footer, "full" for the home hero).
