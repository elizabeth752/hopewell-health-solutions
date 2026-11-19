// Sitewide facts for the 2026 redesign components. Phone = visible NAP (CTM swaps it on the page).
export const SITE = "https://www.hopewellhealthsolutions.com";
export const PHONE = { display: "(860) 735-1448", href: "tel:8607351448" };
// Google: rating/count as shown on the homepage since launch (Downtown Glastonbury profile). Profiles built from the
// map-embed listing IDs in locations.js (cid). Only Downtown Glastonbury and East Hampton are named Hopewell profiles;
// never invent a rating for the others.
export const GOOGLE = { rating: "4.8", count: "368" };
export const GBPS = [
  { loc: "Downtown Glastonbury", sub: "300 Hebron Ave", num: GOOGLE.rating, meta: `${GOOGLE.count} reviews`, url: "https://www.google.com/maps?cid=14566101802764545088" },
  { loc: "East Hampton", sub: "151 E. High St", num: "", meta: "Read reviews", url: "https://www.google.com/maps?cid=5599854262951941274" },
  { loc: "Westbrook", sub: "70 Essex Rd", num: "", meta: "Read reviews", url: "https://www.google.com/search?q=Hopewell+Health+Solutions+Westbrook+CT+reviews" },
];
