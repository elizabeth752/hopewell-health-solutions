# Blog post standard

Checklist for publishing a new hand-authored post (`src/data/posts/{slug}.js`,
`sections` model, rendered by `src/pages/post/[slug].astro`). Written up
2026-09-10 after the "How to Stop Scrolling Addiction" post, imitating the
schema and interlinking discipline already in place on the Virtue Recovery
Center build — read this before the next post so we don't have to rediscover
it from scratch.

## 1. Sourcing

- Extract the docx hyperlink-aware (walk runs + `<w:hyperlink r:id>`, resolved
  via `word/_rels/document.xml.rels`) — never scrape plain `<w:t>` text nodes,
  it silently drops embedded citation links.
- **Fetch-verify every citation against the specific claim it supports**, not
  just that the source exists. Quote the exact passage back to yourself before
  trusting it. This has caught real miscitations on other elev8 builds (wrong
  paper, wrong claim attached to a real paper) — worth the extra few minutes
  every time.
- Author/reviewer: use the docx's suggested author if it names one (cross-
  check against `src/data/providers.js` — title wording can drift, e.g. "Clinic
  Director" vs "Clinical Director," same person). If no reviewer is named,
  the standing clinical reviewer on recent posts is Kristine Schlichting, PhD.

## 2. Infographics

**Three small, section-adjacent SVGs, not one summary poster.** Confirmed
2026-09-08 (commit `c5e0fd1`) after the client explicitly liked this over the
single-1840px-poster format used earlier — each post got 3 purpose-built
graphics placed next to the content they illustrate, each with its own visual
language (don't reskin the last post's shapes with new labels).

- Live at `public/Assets/Blogs/{descriptive-name}.svg`, referenced as an
  ordinary `{ img, alt }` block inside the relevant section.
- **SVG is strict XML** — only `&amp; &lt; &gt; &apos; &quot;` are valid named
  entities. `&ndash;`, `&rsquo;`, `&middot;` etc. will silently fail to render
  as an `<img>` in the browser. Use the literal UTF-8 character or a numeric
  reference (`&#183;`) instead.
- No baked-in CTA band — the post page's sidebar already carries one.
- When exporting a PNG copy for social (sharp handles SVG rasterization fine,
  no need for a headless-Chrome round trip): render at 2x, and re-check the
  full-size raster before calling it done — a label sitting exactly on top of
  a dashed line can look fine in a quick preview and only show as broken once
  you look at it at real size.
- **Rasterize every infographic to PNG and actually look at it before shipping**
  (confirmed 2026-10-06, postpartum-rage/baby-blues posts) — three real bugs
  only showed up this way, none visible from reading the SVG source: (1) a
  `transform="translate(x,y) scale(s)"` on a path whose own coordinates were
  already in final position — `scale()` multiplies from the origin `(0,0)`,
  not the shape's own center, so it silently teleported the icon away from
  where it visually needed to be; author icon paths directly in their final
  position instead of scaling a copy-pasted shape into place. (2) A multi-item
  body-map/callout diagram with ≥3 leader lines had two lines share an x
  coordinate, which read as one line connecting to the wrong label even
  though the paths were mathematically correct — order callout rows to match
  the source shape's natural top-to-bottom layout so no two leader lines can
  visually cross. (3) A rotated "balance scale" beam (`<line>` + `transform=
  "rotate(-6 cx cy)"`) rendered and was eyeballed as fine, then shipped with
  the heavier side reading as *higher* — `rotate()` pivots around the point
  you give it, not around "make the right side go down," so the sign of the
  angle needs to be checked against which side you want lower, not assumed.
  The same rotation also left a gap above one pan, because its connector
  line used fixed coordinates that didn't match where the rotated beam
  endpoint actually landed. A user caught both in the published PR, not the
  render-and-glance QA pass. Fix: for any tilt/beam/seesaw diagram, skip
  `rotate()` entirely — author the two beam endpoints as literal coordinates
  (e.g. `x1,y1` to `x2,y2` with the heavier side's `y` numerically larger),
  and attach every connector line to those exact literal endpoints. When a
  render looks "about right," explicitly re-derive which element is supposed
  to be visually lower/heavier/first and confirm the raster agrees — don't
  let a plausible-looking image stand in for that check.
- The `sections` block model has no table type (`p`, `h3`, `ul`, `img`, `note`
  only). When source copy includes a comparison table, don't flatten it to
  prose — build one of the three infographics as the table's replacement
  (e.g. two side-by-side comparison cards), and drop a one-line prose synthesis
  of the table right before it so the section still reads without the image.

## 3. Schema

Mirrors the Virtue Recovery Center strategy. All of this lives in the shared
template (`src/pages/post/[slug].astro`), so it applies automatically to every
hand-authored post — nothing to add per post.

- **BlogPosting** — headline, description, image, dates, author, publisher.
  ⚠️ `reviewedBy` is **not** a valid property on `Article`/`BlogPosting` per
  schema.org — it only exists on `MedicalWebPage` (which is what Virtue uses).
  Adding it here isn't recognized by validators. The reviewer stays
  visible-only (byline + bio card), not in schema.
- **BreadcrumbList** — Home → Blog → post title.
- **FAQPage, auto-derived** — any section whose `h2` ends in `?` becomes a
  Question; that section's *first* `p` block is the Answer, verbatim. Never
  write new copy just for schema — the answer must already be doing that job
  in the article body.
- **ImageObject per infographic** — any block with both `img` and `alt` gets
  a schema entry (contentUrl, caption from alt text, credit, license).
- **Not yet done:** migrated posts (`bodyHtml`, the ~75 older posts) don't get
  any of this — the FAQ/Image auto-extraction only understands the structured
  `sections` format. Retrofitting those is a separate, larger pass.
- **Judgment call, not yet made:** whether to add `MedicalWebPage` +
  `MedicalCondition` schema (like Virtue) for posts about a real, formally
  diagnosed condition. Skipped on the scrolling-addiction post specifically
  because the article's own thesis is that it is *not* a formal diagnosis —
  asserting a `MedicalCondition` entity would contradict that. Would fit
  cleanly on a post about e.g. panic disorder or PTSD, though.

## 4. Internal links

Aim for **~10 links per post**, same range as Virtue's practice.

- **First natural occurrence only.** If a term (e.g. "IOP") appears twice,
  link the first mention, not both.
- **Verify every target actually resolves** before shipping — check the page
  exists under `src/pages/` (or the built `dist/`), don't guess a slug.
- Prefer linking directly-named clinical terms and levels of care to their
  real page: a condition named in prose → `/what-we-treat/{slug}/`, a therapy
  modality → `/treatment-methods/{slug}/`, a level of care → `/programs/{slug}/`.
- ⚠️ **Requires `set:html`, not plain text interpolation.** The `sections`
  template originally rendered `{b.p}` and `{li}` as escaped text, so an
  `<a href>` typed into a post's `p:`/`ul:` string would show up as literal
  angle-bracket text instead of a working link — there was no way to
  interlink a hand-authored post at all until this was fixed (2026-09-10).
  Before relying on this, all 13 existing `sections`-based posts were checked
  for bare `&` or `<` characters in their body text that could break under
  raw HTML rendering — none had any, so the switch was safe project-wide.
  If a future post's copy genuinely needs a literal `<` or unescaped `&` in
  body text, it must be entity-escaped (`&amp;`, `&lt;`) same as any HTML.
