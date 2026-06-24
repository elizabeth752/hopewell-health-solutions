# Hopewell Health Solutions — Site Architecture, Taxonomy & Redirect Plan

> Built 2026-06-15 from the live Tebra sitemap + the client wiki, following the elev8 SEO Playbook 7-step process (Steps 2–6). Blog (`/post/*`, `/blog`, `/blog-archive`) is **Phase 2** and excluded here per instruction.
>
> ⚠️ **Before executing the 301s:** validate against Semrush **Organic Positions** (protect any slug ranking top-5) and **Backlinks** (flag pages with external links). The playbook forbids touching a top-5 slug or redirecting a page with significant backlinks without sign-off. This doc is the plan; the Semrush pass is the gate.

---

## 1. The core problem (Step 2–3 findings)

The Tebra/PatientPop site auto-generated **three parallel URL patterns for the same services**, plus duplicate location pages. Every service is cannibalized 2–3×:

| Service | Lives at (all competing) |
|---|---|
| IOP | `/adult-mental-health-iop`, `/service/intensive-outpatient-program`, `/content/intensive-outpatient`, `/content/adult-intensive-outpatient-program` |
| Spravato | `/spravato`, `/service/spravato`, `/content/spravato` |
| Med Management | `/medication-management`, `/medication-management-service`, `/service/medication-management`, `/content/psychiatric-care--medication-management` |
| Neuropsych Testing | `/neuropsychological-psychological-testing`, `/service/neuropsychological-testing`, `/content/neuropsychologicalpsychological-testing` |
| HHS Therapeutic | `/hhs-therapeutic-treatments`, `/service/hhs-therapeutic-treatments`, `/content/hhs-therapeutic-treatments` |
| Women's Trauma/Wellness | `/womens-trauma`, `/womens-wellness-iop`, `/content/womens-trauma-intensive-outpatient-program` |
| SUD IOP (true dupes → consolidate) | `/service/s-u-d-treatment`, `/content/addiction-intensive-outpatient-program` |
| Substance pages (DISTINCT intent → keep separate) | `/service/alcohol-dependence-treatment`, `/service/drug-dependence-treatment`, `/service/prescription-drug-dependence-treatment` |
| Rates & Insurance | `/rates-and-insurance-coverage`, `/content/rates-and-insurance-coverage` |
| Glastonbury location | `/location/glastonbury-ct`, `/location/glastonbury-ct-2`, `/location/glastonbury-ct-3`, `/glastonbury` |

Plus three hub patterns (`/services`, `/contents`, `/content/*`, `/service/*`) and root-level orphans (`/glastonbury`, `/west-hartford`, `/east-hampton`, `/eric-schwartz-psyd-abpp`).

**Strategy:** collapse all three patterns into one clean folder taxonomy, 301 every duplicate into the survivor.

---

## 2. Ideal architecture (Step 4)

```
/                                         Home

/programs/                                HUB — levels of care + specialized IOP tracks
  /programs/intensive-outpatient-program/   IOP overview
  /programs/adult-mental-health-iop/
  /programs/mens-iop/
  /programs/womens-wellness-iop/            (consolidates women's trauma + women's wellness)
  /programs/teen-iop/                       (13–17)
  /programs/tween-iop/                      (8–12)
  /programs/first-responder-iop/
  /programs/substance-use-iop/              (addiction IOP — SUD copy now allowed)
  /programs/partial-hospitalization-program/
  /programs/medication-management/
  /programs/outpatient-therapy/             (individual counseling)

/what-we-treat/                           HUB — conditions (mostly NET-NEW)
  /what-we-treat/depression/
  /what-we-treat/anxiety/
  /what-we-treat/trauma-ptsd/
  /what-we-treat/bipolar-disorder/
  /what-we-treat/ocd/
  /what-we-treat/adhd/
  /what-we-treat/substance-use-disorder/      (pillar)
    /what-we-treat/alcohol-addiction/
    /what-we-treat/drug-addiction/
    /what-we-treat/prescription-drug-addiction/
  /what-we-treat/co-occurring-disorders/

/treatment-methods/                       HUB — therapies/modalities
  /treatment-methods/tms/
  /treatment-methods/spravato/
  /treatment-methods/medication-assisted-treatment/
  /treatment-methods/emdr/
  /treatment-methods/dbt/
  /treatment-methods/group-therapy/
  /treatment-methods/neuropsychological-testing/
  /treatment-methods/adhd-testing/
  /treatment-methods/genesight-testing/

/locations/                               HUB
  /locations/glastonbury-ct/                (300 Hebron — flagship: IOP/PHP/Med Mgmt)
  /locations/south-glastonbury-ct/          (1420 Main — Teen & Tween IOP)
  /locations/glastonbury-pratt-ct/          (33 Pratt — therapy only)
  /locations/west-hartford-ct/
  /locations/east-hampton-ct/
  /locations/westbrook-ct/                  (NEW location — IOP/PHP, shoreline)

/about-us/                                HUB
  /about-us/team/                           providers hub
  /about-us/team/[provider-slug]/           individual providers
  /about-us/careers/                        (NEW)

/admissions/                              HUB (mostly NET-NEW)
  /admissions/rates-and-insurance/
  /admissions/verify-insurance/             (NEW)
  /admissions/what-to-expect/               (NEW)
  /admissions/for-families/                 (NEW)

/contact/
/testimonials/
/resources/                               (patient handouts)
/privacy-policy/   /terms/   /accessibility/

/blog/  + /blog/[post-slug]/              PHASE 2 (flatten /post/* → /blog/*)
```

**Design rationale (from the wiki):**
- The **specialized IOP tracks are the differentiators** (programs hospitals don't offer), so each gets its own keyword-targeted page directly under `/programs/`.
- **Conditions are the biggest gap** — the current site has almost no condition pages, yet "depression/anxiety/PTSD/ADHD treatment CT" are core demand. Whole `/what-we-treat/` cluster is net-new.
- **Women's Trauma + Women's Wellness collapse into one** — same program (Suite 212, Kaitlyn Zapiga). ⚠️ confirm preferred slug.
- **SUD pages are kept and consolidated** (compliance rule lifted — ads run on separate LPs + LegitScript in progress).
- Marketing focus stays on **Glastonbury (300 Hebron) + Westbrook**; the other 4 locations get pages for NAP/GBP but light content.

---

## 3. Redirect map (Step 4) — all 301

Ordered per playbook: kills → cannibalization → root orphans → hub renames.

### 3a. Hub renames & homepage
| Old | New (301) | Action |
|---|---|---|
| `/index` | `/` | MIGRATE |
| `/services` | `/programs/` | hub rename |
| `/contents` | `/programs/` | hub rename (kill `/content/*` pattern) |
| `/about` | `/about-us/` | MIGRATE |
| `/providers` | `/about-us/team/` | MIGRATE |
| `/locations` | `/locations/` | EXISTS (keep) |
| `/blog`, `/blog-archive` | `/blog/` | PHASE 2 |

### 3b. Programs — IOP & levels of care (cannibalization consolidation)
| Old | New (301) |
|---|---|
| `/adult-mental-health-iop` | `/programs/adult-mental-health-iop/` |
| `/content/adult-intensive-outpatient-program` | `/programs/adult-mental-health-iop/` |
| `/service/intensive-outpatient-program` | `/programs/intensive-outpatient-program/` |
| `/content/intensive-outpatient` | `/programs/intensive-outpatient-program/` |
| `/tweenteen-iop` | `/programs/teen-iop/` (primary; Tween IOP is net-new, cross-linked) |
| `/first-responder-iop` | `/programs/first-responder-iop/` |
| `/womens-trauma` | `/programs/womens-wellness-iop/` |
| `/womens-wellness-iop` | `/programs/womens-wellness-iop/` |
| `/content/womens-trauma-intensive-outpatient-program` | `/programs/womens-wellness-iop/` |
| `/partial-hospitalization-program` | `/programs/partial-hospitalization-program/` |
| `/medication-management` | `/programs/medication-management/` |
| `/medication-management-service` | `/programs/medication-management/` |
| `/service/medication-management` | `/programs/medication-management/` |
| `/content/psychiatric-care--medication-management` | `/programs/medication-management/` |
| `/service/counseling` | `/programs/outpatient-therapy/` |

### 3c. Substance use (consolidate; SUD now allowed)
| Old | New (301) |
|---|---|
| `/service/s-u-d-treatment` | `/programs/substance-use-iop/` |
| `/content/addiction-intensive-outpatient-program` | `/programs/substance-use-iop/` |
| `/service/alcohol-dependence-treatment` | `/what-we-treat/alcohol-addiction/` |
| `/service/drug-dependence-treatment` | `/what-we-treat/drug-addiction/` |
| `/service/prescription-drug-dependence-treatment` | `/what-we-treat/prescription-drug-addiction/` |

> **SUD = pillar + 3 spokes.** `/what-we-treat/substance-use-disorder/` is the pillar page; alcohol / drug / prescription-drug each get a dedicated child targeting their own search intent (do NOT consolidate distinct-intent pages — only true duplicates).

### 3d. Treatment methods / therapies
| Old | New (301) |
|---|---|
| `/spravato` | `/treatment-methods/spravato/` |
| `/service/spravato` | `/treatment-methods/spravato/` |
| `/content/spravato` | `/treatment-methods/spravato/` |
| `/service/tms` | `/treatment-methods/tms/` |
| `/content/what-is-emdr-therapy` | `/treatment-methods/emdr/` |
| `/neuropsychological-psychological-testing` | `/treatment-methods/neuropsychological-testing/` |
| `/service/neuropsychological-testing` | `/treatment-methods/neuropsychological-testing/` |
| `/content/neuropsychologicalpsychological-testing` | `/treatment-methods/neuropsychological-testing/` |
| `/service/adhd-testing` | `/treatment-methods/adhd-testing/` |
| `/hhs-therapeutic-treatments` | `/treatment-methods/` (hub) |
| `/service/hhs-therapeutic-treatments` | `/treatment-methods/` (hub) |
| `/content/hhs-therapeutic-treatments` | `/treatment-methods/` (hub) |

### 3e. Locations (kill root orphans + duplicate Glastonbury profiles)
| Old | New (301) | Note |
|---|---|---|
| `/location/glastonbury-ct` | `/locations/glastonbury-ct/` | ⚠️ confirm which of the 3 = 300 Hebron / 1420 Main / 33 Pratt |
| `/location/glastonbury-ct-2` | `/locations/south-glastonbury-ct/` | ⚠️ confirm |
| `/location/glastonbury-ct-3` | `/locations/glastonbury-pratt-ct/` | ⚠️ confirm |
| `/glastonbury` | `/locations/glastonbury-ct/` | root orphan |
| `/location/west-hartford-ct` | `/locations/west-hartford-ct/` | |
| `/west-hartford` | `/locations/west-hartford-ct/` | root orphan |
| `/location/east-hampton-ct` | `/locations/east-hampton-ct/` | |
| `/east-hampton` | `/locations/east-hampton-ct/` | root orphan |
| `/location/westbrook-ct` | `/locations/westbrook-ct/` | |

### 3f. Providers (team) — slug normalization rule
**Rule:** `/provider/[slug]` → `/about-us/team/[slug]`, normalizing credential abbreviations to match the approved photo filenames: `psy-d`→`psyd`, `ph-d`→`phd`, `lpc-a`/`lpca` kept as-is per file. The root orphan `/eric-schwartz-psyd-abpp` → `/about-us/team/eric-schwartz-psyd-abpp/` (kill the `/provider/eric-schwartz-psy-d-abpp` duplicate too → same target).

Examples:
| Old | New (301) |
|---|---|
| `/provider/kristine-a-schlichting-ph-d` | `/about-us/team/kristine-a-schlichting-phd/` |
| `/provider/ashley-singh-psy-d` | `/about-us/team/ashley-singh-psyd/` |
| `/provider/tj-aitken-cpsrp` | `/about-us/team/tj-aitken-cpsrp/` |
| `/eric-schwartz-psyd-abpp` + `/provider/eric-schwartz-psy-d-abpp` | `/about-us/team/eric-schwartz-psyd-abpp/` |
| …all ~50 `/provider/*` | `/about-us/team/[normalized-slug]/` |

> Note: the 47 approved photos include the **5 new providers waiting ~2 months** to be added. New `/about-us/team/` = union of live `/provider/*` + the 5 net-new. Conversely, some live providers (e.g. melissa-holznagel, kelly-fluckiger, karmen-hayensworth, karla-dunkley, kate-henneberry) have **no photo** — confirm whether they're current before building their page.

### 3g. Admissions, utility & legal
| Old | New (301) |
|---|---|
| `/rates-and-insurance-coverage` | `/admissions/rates-and-insurance/` |
| `/content/rates-and-insurance-coverage` | `/admissions/rates-and-insurance/` |
| `/schedule` | `/admissions/` (no online booking — phone intake only) |
| `/contact-us` | `/contact/` |
| `/handouts` | `/resources/` |
| `/testimonials` | `/testimonials/` (keep) |
| `/social-media` | `/contact/` (low-value indexed page) |
| `/accessibility-statement` | `/accessibility/` |
| `/our-terms` | `/terms/` |
| `/your-privacy` | `/privacy-policy/` |

---

## 4. Net-new pages (Step 6) — priority tiers

**P1 (build first — demand + GBP):**
- All 6 `/locations/*` pages (rebuilt to the 16-point checklist; Glastonbury + Westbrook richest)
- `/programs/` hub + IOP overview + adult / women's wellness / teen-tween / first-responder / SUD IOP + PHP + med management
- `/admissions/rates-and-insurance/` + `/admissions/verify-insurance/`

**P2 (conditions + therapies — the big gap):**
- `/what-we-treat/` hub + depression, anxiety, trauma-ptsd, adhd, substance-use-disorder, co-occurring (bipolar, ocd second)
- `/treatment-methods/` hub + tms, spravato, mat, emdr, dbt, group-therapy, neuropsych, adhd-testing, genesight

**P3 (support / E-E-A-T):**
- `/about-us/` + `/about-us/team/` + all provider pages + `/about-us/careers/`
- `/admissions/what-to-expect/`, `/admissions/for-families/`
- `/resources/`, legal pages

---

## 5. Open decisions (need Eli/client)
1. **Glastonbury location mapping** — which of `glastonbury-ct` / `-ct-2` / `-ct-3` is 300 Hebron vs 1420 Main vs 33 Pratt? (Drives the redirect targets in 3e.)
2. **Women's program slug** — `/programs/womens-wellness-iop/` vs `/programs/womens-trauma-iop/`?
3. **Provider roster** — confirm the 5 photo-less live providers are current; confirm the 5 waiting new hires to add.
4. **Semrush gate** — pull Organic Positions + Backlinks before executing, to protect any top-5 slug / linked page (playbook rule).
5. `/first-responder-iop` and SUD pages — confirm these programs are actively running (kickoff said first-responder IOP is a differentiator; wiki lists SUD as co-occurring).
```
