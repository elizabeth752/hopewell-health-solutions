// Hopewell's own YouTube videos (channel @hopewellhealthsolutions2285). Posters are branded frames rendered from each
// video's thumbnail (public/Assets/videos/). Descriptions summarise the YouTube description; never put words in a
// speaker's mouth.
export const VIDEOS = [
  { yt: "7ISgjKEBoZo", img: "story-138-days", name: "138 days sober", type: "IOP client story", program: "addiction", date: "2026-08-04", duration: "PT2M52S", len: "2:52",
    title: "138 Days Sober | How IOP Helped Me Build a New Life",
    desc: "An IOP graduate shares the tools, confidence and support she found in treatment, in her own words." },
  { yt: "eX6WO-MRdPs", img: "story-sisterhood", name: "“I found my sisterhood”", type: "Women’s Wellness IOP client story", program: "womens", date: "2026-08-04", duration: "PT0M59S", len: "0:59",
    title: "\"I Found My Sisterhood\" | Women's Wellness IOP Testimonial",
    desc: "A Women’s Wellness IOP participant on finding healing and a sense of sisterhood with other women." },
  { yt: "ZsyYzk9epww", img: "tour-welcome", name: "Welcome to Hopewell", type: "Tour", program: "tour", date: "2026-04-01", duration: "PT0M16S", len: "0:16",
    title: "Welcome to Hopewell Health Solutions",
    desc: "A quick tour of our Glastonbury spaces, designed with comfort, safety and healing in mind." },
  { yt: "loSaQbRc-oE", img: "tour-teen-tween", name: "Teen & Tween IOP tour", type: "Tour", program: "tour", date: "2026-03-06", duration: "PT0M34S", len: "0:34",
    title: "Teen and Tween IOP tour",
    desc: "Our clinicians show the thoughtful touches that make our teen and tween IOP space feel safe and welcoming." },
  { yt: "1NnnRKONzhg", img: "podcast-ep2-luke", name: "Luke’s story", type: "Podcast · Episode 2", date: "2026-10-20", duration: "PT24M31S", len: "24:31",
    title: "Hope, Health and Healing | Episode 2: Luke’s Powerful Story of Recovery",
    desc: "Luke shares his personal story of recovery: the challenges he faced, what helped, and what recovery means to him today." },
  { yt: "vlKx8J6hykA", img: "podcast-ep1-evan", name: "Evan’s story", type: "Podcast · Episode 1", date: "2026-07-31", duration: "PT26M12S", len: "26:12",
    title: "Hope, Health & Healing Podcast – Episode 1: The Help I Didn't Know I Needed",
    desc: "Evan wasn’t sure treatment was for him. He talks about what led him to an Intensive Outpatient Program and the support and tools he found there." },
  { yt: "awy7nfDgC0k", img: "teen-iop-story", name: "A teen’s story", type: "Teen IOP client story", date: "2026-06-30", duration: "PT3M12S", len: "3:12",
    title: "Teen IOP Success Story: How Hopewell Helped Me Take Back My Life",
    desc: "A former Teen IOP client and his mom on the daily one-on-one support, the coping skills, and life at home and school today." },
  { yt: "uIlSCS7clwE", img: "evan-iop-short", name: "“You have to take that step”", type: "Adult IOP client story", date: "2026-05-12", duration: "PT0M35S", len: "0:35",
    title: "Hear Evan share his experience in Hopewell Health Solutions’ Intensive Outpatient Program (IOP)",
    desc: "Evan on why weekly therapy wasn’t enough, and finding people who wanted to help him at Hopewell." },
  { yt: "x6R6XOZmxUQ", img: "womens-wellness-connection", name: "“They understand what you’re going through”", type: "Women’s Wellness IOP client story", date: "2026-05-12", duration: "PT0M47S", len: "0:47",
    title: "Women’s Wellness IOP Testimonial: Finding Connection and Support",
    desc: "How the Women’s Wellness IOP and the connection with other women made a real difference." },
  { yt: "S_CyYMDqEio", img: "womens-wellness-saved", name: "“It saved my life”", type: "Women’s Wellness IOP client story", date: "2026-08-04", duration: "PT0M26S", len: "0:26",
    title: "I Knew I Needed Help — But I Never Imagined Life Could Get This Good | Women’s Wellness IOP",
    desc: "An alum describes the Women’s Wellness IOP as one of the best things she has done for herself." },
  { yt: "aff5Xfy9CfE", img: "loneliness-crisis", name: "The loneliness crisis in adults", type: "Dr. K on group therapy", date: "2026-04-01", duration: "PT3M48S", len: "3:48",
    title: "The Loneliness Crisis in Adults",
    desc: "Dr. Kristine Schlichting on why group therapy is such a powerful part of healing, and how it reduces isolation." },
  { yt: "LInMQYyZSmY", img: "neurodivergent-tweens", name: "Supporting neurodivergent tweens", type: "Clinician tip · Viviana", date: "2026-05-12", duration: "PT1M12S", len: "1:12",
    title: "3 Clinical Strategies for Supporting Neurodivergent Tweens",
    desc: "Structure and predictability, emotional regulation, and building on each child’s strengths." },
  { yt: "cb3SsebwGiA", img: "anchoring", name: "Anchoring", type: "Clinician tip · Viviana", date: "2026-04-01", duration: "PT1M52S", len: "1:52",
    title: "A lesson from Viviana on anchoring",
    desc: "A simple technique to stay grounded and present in moments of stress or overwhelm." },
];
// Client stories only: the podcast has its own section and page (user, 2026-11-16).
export const STORIES = VIDEOS.filter((v) => v.type.includes("client story"));
export const TOURS = VIDEOS.filter((v) => v.type === "Tour");
export const PODCAST = VIDEOS.filter((v) => v.type.startsWith("Podcast"));
export const videoSchema = (v, site) => ({
  "@context": "https://schema.org", "@type": "VideoObject", name: v.title, description: v.desc,
  thumbnailUrl: `${site}/Assets/videos/${v.img}.webp`, uploadDate: v.date, duration: v.duration,
  embedUrl: `https://www.youtube-nocookie.com/embed/${v.yt}`, contentUrl: `https://www.youtube.com/watch?v=${v.yt}`,
  publisher: { "@type": "Organization", name: "Hopewell Health Solutions", logo: { "@type": "ImageObject", url: `${site}/Assets/logo/hopewell-wave-logo.webp` } },
});
