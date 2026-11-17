// Getting here, per office (2026-11-17). Checked against the operators' own GTFS feeds: CTtransit (feed from
// 2026-10-18) and River Valley Transit (RVT, formerly 9 Town Transit + Middletown Area Transit, feed 2026-11-13),
// CTDOT exit-renumbering notices, and Shore Line East. Walk times are estimates from straight-line distance.
// CT-2 exits were renumbered in 2025 (new number first, old in brackets). I-84 renumbering is due 2027, so street
// names are given too. Schedules change: pages link to the operator for current times.
// Sign kinds: "i" interstate shield, "ct" state route, "exit" exit tab, "st" street, "bus", "train", "home" (the office).

export const OPERATORS = {
  cttransit: { name: "CTtransit", href: "https://www.cttransit.com/" },
  rvt: { name: "River Valley Transit", href: "https://rivervalleytransit.com/" },
  ctrail: { name: "CTrail Hartford Line", href: "https://www.hartfordline.com/" },
  sle: { name: "Shore Line East", href: "https://shorelineeast.com/stations/westbrook-station/" },
};

export const TRANSIT = {
  "glastonbury-ct": {
    from: "From Hartford",
    signs: [{ k: "i", n: "84", s: "East" }, { k: "ct", n: "2", s: "East" }, { k: "exit", n: "6", s: "Hebron Ave" }, { k: "st", n: "Main St", s: "North" }, { k: "home", n: "33 Pratt St" }],
    car: "Take I-84 East to CT-2 East. Use Exit 6 (formerly Exit 8), Hebron Ave/CT-94, toward Glastonbury Center, then head north on Main St to Pratt St.",
    bus: { op: "cttransit", routes: ["95"], text: "CTtransit route 95 (Glastonbury) stops at Main St and Pratt St, about a 3-minute walk from the office. Runs seven days a week." },
    train: { op: "ctrail", text: "From Hartford Union Station (CTrail Hartford Line and Amtrak), walk about 10 minutes to Central Row at Main St and take the 95." },
  },
  "glastonbury-ct-2": {
    from: "From Hartford",
    signs: [{ k: "i", n: "84", s: "East" }, { k: "ct", n: "2", s: "East" }, { k: "exit", n: "6", s: "Hebron Ave" }, { k: "ct", n: "94", s: "Hebron Ave" }, { k: "home", n: "300 Hebron Ave" }],
    car: "Take I-84 East to CT-2 East. Use Exit 6 (formerly Exit 8) onto Hebron Ave (CT-94) and continue to the Medical Arts Center at House St.",
    bus: { op: "cttransit", routes: ["95", "95C"], text: "The 95C stops at Hebron Ave and House St, right outside, but only on a few weekday commuter trips. For all-day service seven days a week, take the 95 to New London Tpke at Rankin Rd, about a 5-minute walk." },
    train: { op: "ctrail", text: "From Hartford Union Station (CTrail Hartford Line and Amtrak), walk about 10 minutes to Central Row at Main St and take the 95." },
  },
  "glastonbury-ct-3": {
    from: "From Hartford",
    signs: [{ k: "i", n: "84", s: "East" }, { k: "ct", n: "2", s: "East" }, { k: "exit", n: "5", s: "CT-17 South" }, { k: "st", n: "Main St", s: "South" }, { k: "home", n: "1420 Main St" }],
    car: "Take I-84 East to CT-2 East. Use Exit 5 (formerly Exit 7) for CT-17 South, the Glastonbury Expressway, which rejoins Main St. Continue south on Main St into South Glastonbury.",
    bus: { op: "cttransit", routes: [], text: "No bus route runs along this part of Main St. The nearest stop is more than a mile away, so most clients drive, get a ride or use a taxi or rideshare." },
    train: { op: "ctrail", text: "The nearest station is Hartford Union Station (CTrail Hartford Line and Amtrak). From there, a taxi or rideshare is the easiest way to the office." },
  },
  "west-hartford-ct": {
    from: "From Hartford",
    signs: [{ k: "st", n: "Farmington Ave", s: "West" }, { k: "ct", n: "4", s: "West" }, { k: "st", n: "West Hartford Center" }, { k: "st", n: "Mountain Rd" }, { k: "home", n: "1216 Farmington Ave" }],
    car: "From Hartford, take Farmington Ave (CT-4) west through West Hartford Center to Mountain Rd. From I-84, use the Park Rd / West Hartford Center exit, then go north to Farmington Ave and west.",
    bus: { op: "cttransit", routes: ["66"], text: "CTtransit route 66 stops at Farmington Ave and Mountain Rd, right by the office. Runs seven days a week." },
    train: { op: "ctrail", text: "From Hartford Union Station (CTrail Hartford Line and Amtrak), the 66 leaves from the Union Station bus terminal on Spruce St and goes straight to Mountain Rd, with no transfer." },
  },
  "east-hampton-ct": {
    from: "From Hartford",
    signs: [{ k: "i", n: "84", s: "East" }, { k: "ct", n: "2", s: "East" }, { k: "exit", n: "15", s: "CT-66" }, { k: "ct", n: "66", s: "West" }, { k: "home", n: "151 E. High St" }],
    car: "Take I-84 East to CT-2 East. Use Exit 15 (formerly Exit 13) for CT-66 in Marlborough, then follow CT-66 west into East Hampton.",
    bus: { op: "rvt", routes: ["586"], text: "River Valley Transit route 586 (Portland/East Hampton) stops at Edgewater Hills Apartments, about a 5-minute walk. Weekdays about hourly from early morning to early evening; weekends about every two hours." },
    train: { op: "ctrail", text: "The closest rail link is Meriden on the CTrail Hartford Line. From there, take River Valley Transit's 590 Flyer to Middletown, then the 586 to East Hampton." },
  },
  "westbrook-ct": {
    from: "From I-95",
    signs: [{ k: "i", n: "95" }, { k: "exit", n: "65", s: "Essex Rd" }, { k: "ct", n: "153", s: "South" }, { k: "home", n: "70 Essex Rd" }],
    car: "Take I-95 to Exit 65 (Essex Rd / CT-153) and head south on Essex Rd to the office.",
    bus: { op: "rvt", routes: ["641"], text: "River Valley Transit route 641 (Old Saybrook–Madison) stops on Essex Rd at Norris Ave, about a 2-minute walk. Weekdays about hourly; weekend service too. RVT Go on-demand rides also cover Westbrook." },
    train: { op: "sle", text: "Westbrook station on Shore Line East (101 Norris Ave) is about a 3-minute walk. Coming by Amtrak? Get off at Old Saybrook and take the 641." },
  },
};
