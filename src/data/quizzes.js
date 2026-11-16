// Blog self-checks (2026-11-16, "add the quizzes you implemented there" — Corner Canyon blog pattern).
// Short, non-diagnostic self-checks shown inside matching blog posts. Answers are scored in the browser only:
// nothing is stored or sent. Validated screeners are reproduced from public-domain or free-to-use sources and cited;
// the others are plain "signs" checklists written for Hopewell and labelled as such (not validated tools).
// Result text never promises outcomes. Addiction care is offered only at 300 Hebron Ave (Downtown Glastonbury) and
// Westbrook (locations.js `addiction`).

const FREQ = [["Not at all", 0], ["Several days", 1], ["More than half the days", 2], ["Nearly every day", 3]];
const YESNO = [["No", 0], ["Yes", 1]];
const ADDICTION_IOP = `<a class="inl" href="/programs/addiction-iop/">Addiction and Substance Use IOP</a>`;

export const QUIZZES = {
  anxiety: {
    title: "Anxiety self-check (GAD-7)",
    intro: "Over the last 2 weeks, how often have you been bothered by the following problems?",
    source: "Generalized Anxiety Disorder 7-item scale (GAD-7), Spitzer, Kroenke, Williams & Löwe, 2006. Free to use.",
    options: FREQ,
    questions: [
      "Feeling nervous, anxious, or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid, as if something awful might happen",
    ],
    bands: [
      [4, "Minimal anxiety symptoms", "Your answers suggest few anxiety symptoms right now. If worry still gets in the way of daily life, a conversation with a therapist can help."],
      [9, "Mild anxiety symptoms", "Your answers suggest mild anxiety symptoms. Many people find <a class=\"inl\" href=\"/programs/counseling/\">weekly counseling</a> helps at this stage."],
      [14, "Moderate anxiety symptoms", "Your answers suggest moderate anxiety symptoms. A clinician can talk with you about <a class=\"inl\" href=\"/programs/counseling/\">therapy</a>, <a class=\"inl\" href=\"/programs/medication-management/\">medication management</a> or more structured support."],
      [21, "Severe anxiety symptoms", "Your answers suggest severe anxiety symptoms. Ask about our <a class=\"inl\" href=\"/programs/intensive-outpatient-program/\">intensive outpatient programs</a>, which give you several hours of support a week while you live at home."],
    ],
  },
  depression: {
    title: "Depression self-check (PHQ-9)",
    intro: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    source: "Patient Health Questionnaire-9 (PHQ-9), Kroenke, Spitzer & Williams, 2001. Free to use.",
    options: FREQ,
    questions: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      "Trouble concentrating on things, such as reading the newspaper or watching television",
      "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
      "Thoughts that you would be better off dead or of hurting yourself in some way",
    ],
    crisisItem: 8,
    crisis: true,
    bands: [
      [4, "Minimal depression symptoms", "Your answers suggest few symptoms of depression right now. If your mood still worries you, talking with a therapist is a good next step."],
      [9, "Mild depression symptoms", "Your answers suggest mild symptoms. <a class=\"inl\" href=\"/programs/counseling/\">Weekly counseling</a> is often where people start."],
      [14, "Moderate depression symptoms", "Your answers suggest moderate symptoms. A clinician can talk with you about <a class=\"inl\" href=\"/programs/counseling/\">therapy</a> and <a class=\"inl\" href=\"/programs/medication-management/\">medication management</a>."],
      [19, "Moderately severe depression symptoms", "Your answers suggest moderately severe symptoms. Ask about our <a class=\"inl\" href=\"/programs/intensive-outpatient-program/\">intensive outpatient programs</a> for more support each week."],
      [27, "Severe depression symptoms", "Your answers suggest severe symptoms. Please reach out today: our <a class=\"inl\" href=\"/programs/partial-hospitalization-program/\">partial hospitalization program</a> and IOPs offer daily, structured care."],
    ],
  },
  alcohol: {
    title: "Alcohol use self-check (AUDIT-C)",
    intro: "Three questions about your drinking over the past year.",
    source: "AUDIT-C, adapted from the World Health Organization's AUDIT (Bush et al., 1998). Public domain.",
    items: [
      ["How often do you have a drink containing alcohol?", [["Never", 0], ["Monthly or less", 1], ["2–4 times a month", 2], ["2–3 times a week", 3], ["4 or more times a week", 4]]],
      ["How many standard drinks containing alcohol do you have on a typical day when drinking?", [["1 or 2", 0], ["3 or 4", 1], ["5 or 6", 2], ["7 to 9", 3], ["10 or more", 4]]],
      ["How often do you have six or more drinks on one occasion?", [["Never", 0], ["Less than monthly", 1], ["Monthly", 2], ["Weekly", 3], ["Daily or almost daily", 4]]],
    ],
    bands: [
      [2, "Lower-risk drinking", "Your answers fall in the lower-risk range. If you're still worried about how alcohol affects you, our team is glad to talk it through."],
      [5, "Drinking that may be risky", "Your answers suggest your drinking may be risky for your health. Problem drinking often starts here, even when work and home still look fine. Our " + ADDICTION_IOP + " supports working adults in Glastonbury (300 Hebron Ave) and Westbrook."],
      [12, "Higher-risk drinking", "Your answers suggest higher-risk drinking. Please talk with our team about our " + ADDICTION_IOP + " at 300 Hebron Ave in Glastonbury or in Westbrook. If you drink heavily every day, don't stop suddenly without medical advice: withdrawal can be dangerous."],
    ],
  },
  drugs: {
    title: "Drug use: signs to look for",
    intro: "In the past 12 months, has any of the following been true for you?",
    source: "A plain-language checklist written by Hopewell Health Solutions. It is not a validated screening tool.",
    options: YESNO,
    questions: [
      "I've used more, or for longer, than I meant to",
      "I've tried to cut down or stop and couldn't",
      "I've had cravings or strong urges to use",
      "Using has caused problems at work, school or home",
      "I've kept using even though it hurts my health or relationships",
      "I've felt sick or on edge when I stopped using",
    ],
    bands: [
      [0, "No signs right now", "You didn't mark any of these signs. If someone you love is struggling, our team can help you help them."],
      [2, "Some warning signs", "You marked a few common warning signs of a substance use problem. A confidential assessment can help you understand what's going on. Our " + ADDICTION_IOP + " runs at 300 Hebron Ave in Glastonbury and in Westbrook."],
      [6, "Several warning signs", "You marked several signs of a substance use problem. Please talk with our admissions team about our " + ADDICTION_IOP + " (300 Hebron Ave, Glastonbury, and Westbrook), including step-down care after rehab."],
    ],
  },
  postpartum: {
    title: "Postpartum mood self-check (EPDS)",
    intro: "As you are pregnant or have recently had a baby, we would like to know how you are feeling. Please choose the answer that comes closest to how you have felt in the past 7 days, not just how you feel today.",
    source: "Edinburgh Postnatal Depression Scale (EPDS), Cox, Holden & Sagovsky, British Journal of Psychiatry, 1987. © The Royal College of Psychiatrists; may be reproduced with this citation.",
    crisisItem: 9,
    crisis: true,
    items: [
      ["I have been able to laugh and see the funny side of things", [["As much as I always could", 0], ["Not quite so much now", 1], ["Definitely not so much now", 2], ["Not at all", 3]]],
      ["I have looked forward with enjoyment to things", [["As much as I ever did", 0], ["Rather less than I used to", 1], ["Definitely less than I used to", 2], ["Hardly at all", 3]]],
      ["I have blamed myself unnecessarily when things went wrong", [["No, never", 0], ["Not very often", 1], ["Yes, some of the time", 2], ["Yes, most of the time", 3]]],
      ["I have been anxious or worried for no good reason", [["No, not at all", 0], ["Hardly ever", 1], ["Yes, sometimes", 2], ["Yes, very often", 3]]],
      ["I have felt scared or panicky for no very good reason", [["No, not at all", 0], ["No, not much", 1], ["Yes, sometimes", 2], ["Yes, quite a lot", 3]]],
      ["Things have been getting on top of me", [["No, I have been coping as well as ever", 0], ["No, most of the time I have coped quite well", 1], ["Yes, sometimes I haven't been coping as well as usual", 2], ["Yes, most of the time I haven't been able to cope at all", 3]]],
      ["I have been so unhappy that I have had difficulty sleeping", [["No, not at all", 0], ["Not very often", 1], ["Yes, sometimes", 2], ["Yes, most of the time", 3]]],
      ["I have felt sad or miserable", [["No, not at all", 0], ["Not very often", 1], ["Yes, quite often", 2], ["Yes, most of the time", 3]]],
      ["I have been so unhappy that I have been crying", [["No, never", 0], ["Only occasionally", 1], ["Yes, quite often", 2], ["Yes, most of the time", 3]]],
      ["The thought of harming myself has occurred to me", [["Never", 0], ["Hardly ever", 1], ["Sometimes", 2], ["Yes, quite often", 3]]],
    ],
    bands: [
      [9, "Fewer symptoms right now", "Your answers suggest fewer symptoms of postpartum depression right now. If anything here worries you, mention it to your OB, midwife or our team."],
      [12, "Possible postpartum depression", "Your answers suggest you may be experiencing postpartum depression or anxiety. Please talk with a clinician. Our <a class=\"inl\" href=\"/programs/womens-wellness-iop/\">Women’s Wellness IOP</a> and <a class=\"inl\" href=\"/programs/medication-management/\">medication management</a> support new mothers."],
      [30, "Likely postpartum depression", "Your answers suggest likely postpartum depression. Please reach out soon. Our <a class=\"inl\" href=\"/programs/womens-wellness-iop/\">Women’s Wellness IOP</a> (morning and evening groups) and prescribers can help."],
    ],
  },
  adhd: {
    title: "Adult ADHD self-check (ASRS v1.1, Part A)",
    intro: "Over the past 6 months, how often has each of these happened to you?",
    source: "Adult ADHD Self-Report Scale (ASRS v1.1) Screener, World Health Organization, 2003. Free to use with attribution.",
    items: [
      ["How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?", 2],
      ["How often do you have difficulty getting things in order when you have to do a task that requires organization?", 2],
      ["How often do you have problems remembering appointments or obligations?", 2],
      ["When you have a task that requires a lot of thought, how often do you avoid or delay getting started?", 3],
      ["How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?", 3],
      ["How often do you feel overly active and compelled to do things, like you were driven by a motor?", 3],
    ].map(([q, cut]) => [q, [["Never", 0], ["Rarely", 1], ["Sometimes", 2], ["Often", 3], ["Very often", 4]].map(([l, v]) => [l, v >= cut ? 1 : 0, v])]),
    bands: [
      [3, "Fewer ADHD symptoms than the screener's cut-off", "Fewer than four of your answers were in the shaded range the screener uses. If focus or follow-through still get in your way, a clinician can look at the bigger picture."],
      [6, "Symptoms consistent with adult ADHD", "Four or more answers were in the screener's shaded range, which is consistent with adult ADHD and worth a full evaluation. Learn about <a class=\"inl\" href=\"/treatment-methods/adhd-testing/\">ADHD testing</a> at Hopewell."],
    ],
  },
  trauma: {
    title: "PTSD self-check (PC-PTSD-5)",
    intro: "Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. If you have had an experience like this, answer these questions about the past month. In the past month, have you…",
    source: "Primary Care PTSD Screen for DSM-5 (PC-PTSD-5), U.S. Department of Veterans Affairs National Center for PTSD. Public domain.",
    options: YESNO,
    crisis: true,
    questions: [
      "had nightmares about the event(s) or thought about the event(s) when you did not want to?",
      "tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
      "been constantly on guard, watchful, or easily startled?",
      "felt numb or detached from people, activities, or your surroundings?",
      "felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
    ],
    bands: [
      [2, "Below the screener's cut-off", "Your answers are below the cut-off this screener uses for probable PTSD. Trauma can still affect you, and talking with a therapist can help."],
      [5, "Probable PTSD: worth a full evaluation", "Three or more “yes” answers is the cut-off this screener uses for probable PTSD. A trauma-trained clinician can help. Learn about <a class=\"inl\" href=\"/what-we-treat/trauma-ptsd/\">trauma and PTSD treatment</a> and <a class=\"inl\" href=\"/treatment-methods/emdr/\">EMDR</a> at Hopewell."],
    ],
  },
  burnout: {
    title: "Burnout: signs to look for",
    intro: "Over the past month, how often has each of these been true?",
    source: "A plain-language checklist written by Hopewell Health Solutions. It is not a validated screening tool.",
    options: [["Rarely", 0], ["Sometimes", 1], ["Often", 2], ["Almost always", 3]],
    questions: [
      "I feel drained before the workday even starts",
      "I've become cynical or detached about my work",
      "Small tasks feel harder to finish than they used to",
      "I'm sleeping poorly or can't switch off after work",
      "I'm more irritable with people at work or at home",
      "I use alcohol, food or screens to get through the week",
    ],
    bands: [
      [5, "Few signs of burnout", "Your answers show few signs of burnout right now. Keep protecting time to rest and recharge."],
      [11, "Some signs of burnout", "Your answers show some signs of burnout. Talking with a therapist can help you sort out what's work stress and what may be depression or anxiety. See <a class=\"inl\" href=\"/programs/counseling/\">counseling</a>."],
      [18, "Many signs of burnout", "Your answers show many signs of burnout. Our <a class=\"inl\" href=\"/programs/intensive-outpatient-program/\">intensive outpatient programs</a> run day and evening tracks for working adults, and some programs may qualify for <a class=\"inl\" href=\"/post/what-programs-at-hopewell-are-eligible-for-ct-paid-leave-or-fmla/\">CT Paid Leave or FMLA</a>."],
    ],
  },
  teen: {
    title: "Does my child need more support? A parent checklist",
    intro: "Over the past month, has your child or teen…",
    source: "A plain-language checklist written by Hopewell Health Solutions for parents. It is not a validated screening tool.",
    options: YESNO,
    questions: [
      "pulled away from friends, family or activities they used to enjoy?",
      "had big changes in sleep, appetite or energy?",
      "been avoiding or refusing school, or had grades drop sharply?",
      "had angry outbursts or mood swings that feel out of proportion?",
      "seemed constantly worried, panicky or on edge?",
      "talked about feeling hopeless or being a burden?",
      "hurt themselves, or talked about hurting themselves?",
      "kept struggling even with weekly therapy?",
    ],
    crisisItems: [5, 6],
    crisis: true,
    bands: [
      [1, "A few changes to keep an eye on", "A change or two can be part of growing up, but trust your instincts. <a class=\"inl\" href=\"/programs/counseling/\">Child and family counseling</a> is a good place to start talking."],
      [3, "Several warning signs", "Several warning signs together are worth a professional assessment. Our clinicians work with children from age 4 and with the whole family."],
      [8, "Many warning signs", "Many warning signs, or signs that last despite weekly therapy, often mean a child needs more support. Learn about our after-school <a class=\"inl\" href=\"/programs/teen-iop/\">Tween &amp; Teen IOP</a> at 1420 Main St in South Glastonbury."],
    ],
  },
  behavior: {
    title: "Is it becoming a compulsion? A self-check",
    intro: "Think about the habit this article is about (porn, gaming, scrolling or similar). Over the past few months…",
    source: "A plain-language checklist written by Hopewell Health Solutions. It is not a validated screening tool.",
    options: YESNO,
    questions: [
      "I spend more time on it than I mean to",
      "I've tried to cut back and couldn't",
      "I turn to it when I'm stressed, lonely or low",
      "It's caused problems at work, school or in my relationships",
      "I feel restless or irritable when I can't do it",
      "I keep doing it even though I feel worse afterwards",
    ],
    bands: [
      [1, "Few signs right now", "You marked few signs of a compulsive pattern. If the habit still bothers you, a therapist can help you build a healthier routine."],
      [3, "Some signs of a compulsive pattern", "You marked several signs that the habit may be becoming compulsive. <a class=\"inl\" href=\"/programs/counseling/\">Counseling</a> can help you understand what's driving it."],
      [6, "Many signs of a compulsive pattern", "You marked many signs of a compulsive pattern, which often sits alongside anxiety, depression or trauma. Our clinicians treat behavioral addictions; ask about <a class=\"inl\" href=\"/programs/counseling/\">counseling</a> and our <a class=\"inl\" href=\"/programs/intensive-outpatient-program/\">intensive outpatient programs</a>."],
    ],
  },
};

// Topic matching, most specific first. Each rule tests the slug + title + category.
const RULES = [
  ["depression", /suicid|safety-plan/],
  ["postpartum", /postpartum|baby-blues|perinatal/],
  ["behavior", /porn|scrolling|gaming|video-game|screen-time/],
  ["alcohol", /alcohol|drinking|sobriety|vivitrol/],
  ["drugs", /substance|addiction|suboxone|opioid|\bmat\b|medication-assisted|sud\b|drug/],
  ["trauma", /trauma|ptsd|first-responder|heroism|narcissistic|emdr/],
  ["adhd", /adhd|504|neurodiverg|dopamine/],
  ["burnout", /burnout|type-a|break-from-my-job/],
  ["teen", /teen|tween|kid|child|parent|bully|school|family/],
  ["anxiety", /anxiety|panic|worry|fear-of|flying|social-anxiety|ocd/],
  ["depression", /depress|empty|seasonal|\bsad\b|mood|tms|ssri|suicid|safety-plan|lonel/],
];
const CATEGORY_DEFAULT = {
  "Addiction & Recovery": "drugs",
  "Trauma & PTSD": "trauma",
  "Teens & Families": "teen",
  "Women's Mental Health": "depression",
  "Mental Health": "depression",
};
export function quizFor(post) {
  const hay = `${post.slug} ${post.title} ${post.category}`.toLowerCase();
  for (const [key, re] of RULES) if (re.test(hay)) return key;
  return CATEGORY_DEFAULT[post.category] || null;
}

// Normalised question list: [{ q, opts: [[label, score, raw?]] }]
export function quizItems(qz) {
  if (qz.items) return qz.items.map(([q, opts]) => ({ q, opts }));
  return qz.questions.map((q) => ({ q, opts: qz.options }));
}
