// Clinical staff by office, from the client's "Staff List for Website" PDF (ClickUp 1dfm34y3p64, 2026-11-11).
// Medical staff (prescribers) are NOT listed by location: the team page shows them as one group, and the
// location pages show only these clinicians. Someone listed at more than one location appears in each.
// Used by /about-us/team/ and /location/[slug]/.
export const clinicalRoster = {
  glastonbury: ["jonathan-ficara-lcsw", "madeline-blinderman-lpc-a", "amenah-thomas-lpc-a", "eunice-rivera-miranda-ph-d", "meagan-carr-ph-d", "jeff-rapp-lmsw", "dashelle-barco-lpc", "cassie-gittens-lpc-a", "kelly-fluckiger-lmsw", "karmen-hayensworth-lmsw", "viviana-alvarado-lpc-a", "traci-schneider-maatc-lpc-a-atr-p", "kayla-orozco-lcsw", "natalia-de-lonardo-lpca", "dori-bessette-crail-lmft", "joanne-malinka-lcsw", "angela-pierce-lmsw", "eleni-fatsis-lmsw", "nathan-truong-lmft-a", "savannah-henault-lmsw", "madison-anderson-lmsw", "kris-feller-lmsw", "william-telemaque-lpca", "christina-coelho-lmsw", "jessenia-medina-lpc-ncc", "stacy-piscottano-lmsw", "sheryll-waring-lpc-ldac", "erica-schwartz-lcat", "chris-barclay-ph-d-bcba-ncsp", "laura-miller-ph-d", "bido-aguessy-psy-d-lpc-a", "kelvin-young-cpsrp", "sherrie-gaudet-lcsw", "patricia-nogelo-ph-d-lcsw", "eric-schwartz-psy-d-abpp"],
  westbrook: ["jackie-plagesse-lmfta", "noah-mccarter-lpc-a", "jeff-rapp-lmsw", "kate-henneberry-lmfta", "kaitlyn-czapiga-lmsw"],
  eastHampton: ["erin-kruse-lmsw", "kate-henneberry-lmfta", "mariah-thomas-lmsw", "ashley-singh-psy-d"],
  westHartford: ["kimberly-devine-lcsw", "eric-schwartz-psy-d-abpp", "christina-coelho-lmsw", "amenah-thomas-lpc-a"],
};

// Location page slug → roster group. The PDF lists Glastonbury as one group, so all three Glastonbury offices share it.
export const rosterByLocation = {
  "glastonbury-ct": "glastonbury",
  "glastonbury-ct-2": "glastonbury",
  "glastonbury-ct-3": "glastonbury",
  "westbrook-ct": "westbrook",
  "east-hampton-ct": "eastHampton",
  "west-hartford-ct": "westHartford",
};
