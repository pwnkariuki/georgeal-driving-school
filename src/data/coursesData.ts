import { CONTACT } from "./sitemapData";

export type CourseIconKey = "car" | "truck" | "motorcycle" | "shield";

export interface DrivingCoursePackage {
  id: string;
  category: string;
  badge?: string;
  title: string;
  transmission: string;
  duration: string;
  practicalHours: string;
  description: string;
  includes: string[];
  requirements: string[];
  pricingNote: string;
  whatsappPrefill: string;
  icon: CourseIconKey;
}

export interface DrivingFaq {
  q: string;
  a: string;
}

export interface SafetyPillar {
  title: string;
  desc: string;
  icon: CourseIconKey;
}

/** Course packages grouped by category. Tab list is derived from this data. */
export const COURSE_PACKAGES: DrivingCoursePackage[] = [
  {
    id: "b1-manual",
    category: "Class B (Light Vehicle)",
    badge: "Most Popular",
    title: "Class B1 - Manual Transmission",
    transmission: "Manual",
    duration: "3 - 4 Weeks",
    practicalHours: "20+ practical hours",
    description:
      "Complete light-vehicle training on dual-control saloon cars, built to get you NTSA test-ready with confident clutch, gear and hill control.",
    includes: [
      "Dual-control saloon vehicle",
      "Theory & highway lessons",
      "Model Town board practice",
      "NTSA PDL processing & booking",
      "Interim driving test",
      "Road safety & first aid basics",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Minimum age 18 years",
    ],
    pricingNote: "Indicative from KES 15,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class B1 Manual (Light Vehicle) driving course. Please share the current fees and next intake.",
    icon: "car",
  },
  {
    id: "b2-automatic",
    category: "Class B (Light Vehicle)",
    badge: "Fast Track",
    title: "Class B2 - Automatic Transmission",
    transmission: "Automatic",
    duration: "2 - 3 Weeks",
    practicalHours: "16+ practical hours",
    description:
      "Learn on modern automatic vehicles for a smoother, faster route to your licence - ideal for busy professionals and new drivers.",
    includes: [
      "Modern automatic vehicle",
      "Theory & road-sign lessons",
      "Parking & city driving",
      "NTSA PDL processing & booking",
      "Interim driving test",
      "Defensive driving intro",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Minimum age 18 years",
    ],
    pricingNote: "Indicative from KES 18,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class B2 Automatic (Light Vehicle) driving course. Please share the current fees and schedule.",
    icon: "car",
  },
  {
    id: "b-executive",
    category: "Class B (Light Vehicle)",
    badge: "Premium",
    title: "Class B Combined - Executive Package",
    transmission: "Manual & Automatic",
    duration: "4 - 5 Weeks",
    practicalHours: "30+ practical hours",
    description:
      "Our most complete light-vehicle programme covering both manual and automatic, flexible timings and priority NTSA test slots.",
    includes: [
      "Manual + automatic training",
      "Highway & night driving",
      "Hill & hazard perception",
      "Priority NTSA PDL booking",
      "Mock test & coaching",
      "Certificate of completion",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Minimum age 18 years",
    ],
    pricingNote: "Indicative from KES 28,000 - bundle discounts confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class B Combined Executive driving package. Please share fees and available intakes.",
    icon: "car",
  },
  {
    id: "c1-canter",
    category: "Class BCE & Commercial",
    badge: "High Demand",
    title: "Class C1 - Light Truck / Canter",
    transmission: "Manual",
    duration: "3 - 4 Weeks",
    practicalHours: "22+ practical hours",
    description:
      "Commercial goods-vehicle training on light trucks and canter-class vehicles, focused on safe loading, manoeuvring and NTSA readiness.",
    includes: [
      "Light truck / canter vehicle",
      "Commercial theory & road signs",
      "Reversing & tight manoeuvres",
      "NTSA PDL processing & booking",
      "Load & cargo safety",
      "Interim driving test",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Valid Class B licence (recommended)",
    ],
    pricingNote: "Indicative from KES 22,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class C1 Light Truck / Canter course. Please share fees and the next available intake.",
    icon: "truck",
  },
  {
    id: "c2-commercial",
    category: "Class BCE & Commercial",
    badge: "Career Track",
    title: "Class C2 - Medium Truck / Commercial",
    transmission: "Manual",
    duration: "4 - 5 Weeks",
    practicalHours: "28+ practical hours",
    description:
      "Step up to medium commercial trucks with structured practical hours, route discipline and full NTSA test preparation.",
    includes: [
      "Medium truck practical",
      "Advanced road discipline",
      "Highway & long-route practice",
      "NTSA PDL processing & booking",
      "Mirror & blind-spot training",
      "Interim driving test",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Valid Class C1 licence (recommended)",
    ],
    pricingNote: "Indicative from KES 26,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class C2 Medium Truck / Commercial course. Please share fees and schedule.",
    icon: "truck",
  },
  {
    id: "bce-articulated",
    category: "Class BCE & Commercial",
    badge: "Advanced",
    title: "Class BCE - Articulated / Heavy Commercial",
    transmission: "Manual",
    duration: "5 - 6 Weeks",
    practicalHours: "32+ practical hours",
    description:
      "Heavy and articulated driver advancement for experienced drivers pursuing high-value commercial and logistics careers.",
    includes: [
      "Articulated / heavy vehicle",
      "Coupling & trailer handling",
      "Long-haul route discipline",
      "NTSA PDL processing & booking",
      "Defensive heavy-driving",
      "Mock test & coaching",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Valid Class C licence (min 1 year)",
    ],
    pricingNote: "Indicative from KES 32,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class BCE Articulated / Heavy Commercial course. Please share fees and requirements.",
    icon: "truck",
  },
  {
    id: "a2-motorcycle",
    category: "Motorcycle (Class A)",
    badge: "Fast Track",
    title: "Class A2 - Motorcycle / Boda Boda",
    transmission: "Manual",
    duration: "2 - 3 Weeks",
    practicalHours: "14+ practical hours",
    description:
      "Rider-focused training covering balance, road-sign mastery and safe boda-boda operation, fully preparing you for the NTSA test.",
    includes: [
      "Training motorcycle provided",
      "Balance & control drills",
      "Road signs & theory",
      "NTSA PDL processing & booking",
      "Protective-gear guidance",
      "Interim riding test",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Minimum age 18 years",
    ],
    pricingNote: "Indicative from KES 8,500 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class A2 Motorcycle / Boda Boda course. Please share fees and the next intake.",
    icon: "motorcycle",
  },
  {
    id: "a3-tuktuk",
    category: "Motorcycle (Class A)",
    badge: "New",
    title: "Class A3 - TukTuk / Three Wheeler",
    transmission: "Automatic",
    duration: "2 - 3 Weeks",
    practicalHours: "12+ practical hours",
    description:
      "Three-wheeler operation training for the growing tuktuk transport sector, with practical handling and NTSA test readiness.",
    includes: [
      "TukTuk practical handling",
      "Passenger safety basics",
      "Road signs & theory",
      "NTSA PDL processing & booking",
      "City-route practice",
      "Interim driving test",
    ],
    requirements: [
      "Valid National ID",
      "2 Passport photos",
      "KRA PIN",
      "Medical fitness report",
      "Minimum age 18 years",
    ],
    pricingNote: "Indicative from KES 10,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Class A3 TukTuk / Three Wheeler course. Please share fees and schedule.",
    icon: "motorcycle",
  },
  {
    id: "refresher-defensive",
    category: "Refresher & Defensive",
    badge: "Confidence Boost",
    title: "Intensive Road Confidence & Defensive Refresher",
    transmission: "Manual or Automatic",
    duration: "1 - 2 Weeks",
    practicalHours: "10 - 16 practical hours",
    description:
      "For licensed drivers who lost confidence or want sharper defensive skills - rebuild road-readiness at your own pace with patient instructors.",
    includes: [
      "Confidence rebuilding",
      "Defensive techniques",
      "City & highway driving",
      "Night driving module",
      "Hazard perception",
      "Personalised coaching plan",
    ],
    requirements: ["Valid driving licence", "Own or school vehicle"],
    pricingNote: "Indicative from KES 7,500 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Refresher & Defensive Driving course. Please share fees and flexible timings.",
    icon: "shield",
  },
  {
    id: "parking-highway",
    category: "Refresher & Defensive",
    badge: "Short Course",
    title: "Parking & Highway Mastery Module",
    transmission: "Manual or Automatic",
    duration: "3 - 5 Days",
    practicalHours: "6 - 10 practical hours",
    description:
      "A focused add-on module for drivers who want to master parallel parking, reversing, roundabouts and confident highway merging.",
    includes: [
      "Parallel & bay parking",
      "Reversing precision",
      "Roundabouts & merges",
      "Highway speed discipline",
      "Town navigation",
      "Skill assessment",
    ],
    requirements: ["Valid driving licence", "Own or school vehicle"],
    pricingNote: "Indicative from KES 5,000 - exact fees confirmed at branch or via WhatsApp.",
    whatsappPrefill:
      "Hello Georgeal! I am interested in the Parking & Highway Mastery module. Please share fees and availability.",
    icon: "shield",
  },
];

/** Derive the ordered category list from the data so tabs always match cards. */
export const COURSE_CATEGORIES: string[] = Array.from(
  new Set(COURSE_PACKAGES.map((c) => c.category))
);

export const DRIVING_FAQS: DrivingFaq[] = [
  {
    q: "What documents do I need to enroll?",
    a: "You will need a valid National ID, two passport-size photos, your KRA PIN, and a medical fitness report from an NTSA-recognised clinic. For commercial classes we also verify any existing licence you hold.",
  },
  {
    q: "How long does the course and NTSA test process take?",
    a: "Most Class B courses run 2 to 5 weeks depending on the package and your schedule. After your training, we process and book your NTSA PDL and test slot. Total time from enrollment to licence is typically 4 to 8 weeks, subject to NTSA scheduling.",
  },
  {
    q: "What is the difference between Manual (B1) and Automatic (B2)?",
    a: "Manual (Class B1) trains you on clutch and gear control, giving a wider licence that also covers automatic cars. Automatic (Class B2) is faster and simpler to learn but restricts you to automatic vehicles. We help you choose based on your goals.",
  },
  {
    q: "Do you offer installment payment plans?",
    a: "Yes. We accept M-Pesa lipa polepole-style installments so you can pay in stages while training continues. Exact installment structures and any bundle discounts are confirmed at your branch or over WhatsApp.",
  },
  {
    q: "What happens if I fail my first NTSA test?",
    a: "You can re-sit after the NTSA waiting period. We offer free coaching review sessions and discounted top-up practical hours so you go back for the test better prepared and more confident.",
  },
  {
    q: "Am I eligible for the refresher course?",
    a: "If you already hold a valid driving licence but feel unsure on the road, the Refresher & Defensive Driving course is for you. No minimum experience is required - just your licence and willingness to rebuild confidence.",
  },
  {
    q: "How do I apply for a PDL (Provisional Driving Licence)?",
    a: "We handle the entire PDL application for you through the NTSA TIMS system. You need a valid National ID or Passport, KRA PIN, two passport-size photos, and a medical fitness report from an NTSA-approved clinic. Once you enroll, our team submits your application and you receive your PDL within 5 to 7 working days.",
  },
  {
    q: "What is the NTSA driving test process?",
    a: "The NTSA test has three parts: an eye/vision test, a computerised theory exam covering road signs, rules and safe driving, and a practical road test with an NTSA examiner. We prepare you thoroughly for all three stages, and you book the test through TIMS after completing your training hours.",
  },
  {
    q: "Can I upgrade my licence class (for example from B to C1)?",
    a: "Yes. To upgrade from Class B to C1 (commercial goods vehicle) you need at least one year of valid B-licence experience. For PSV (Class D) you need a valid C licence. We offer endorsement-upgrade courses that include the additional theory and practical training required by NTSA.",
  },
  {
    q: "Are NTSA exam fees included in the course price?",
    a: "Our advertised package prices are all-inclusive: theory lessons, practical driving hours, NTSA PDL processing, exam booking and the first test attempt. The only extra cost is if you need to re-sit the NTSA test, which is paid directly to NTSA.",
  },
  {
    q: "How many lessons do I need before I am test-ready?",
    a: "Class B1 (Automatic): typically 10 to 15 practical sessions. Class B2 (Manual): 15 to 20 sessions. Class A (Motorcycle): 8 to 12 sessions. Most students are ready within our advertised duration, and extra practice sessions can be added if you want more road time before your test.",
  },
  {
    q: "What is the minimum age for each licence class?",
    a: "Class A (Motorcycle): 18 years. Class B (Light vehicles): 18 years. Class C1 (Heavy goods): 21 years. Class D / PSV (Passenger): 21 years with a valid C licence. Your instructor confirms eligibility for your chosen class at enrollment.",
  },
  {
    q: "Do I need my own vehicle for training?",
    a: "No. We provide all training vehicles - modern dual-pedal cars, motorcycles and trucks depending on your class - maintained to NTSA standards. You only need your documents and the willingness to learn.",
  },
];

export const SAFETY_PILLARS: SafetyPillar[] = [
  {
    title: "Dual-Pedal Safety Systems",
    desc: "Every training vehicle is fitted with instructor dual-pedal controls, so you learn in a fully supervised, fail-safe environment from day one.",
    icon: "shield",
  },
  {
    title: "Model Town Board & Hazard Perception",
    desc: "Dedicated model-town boards and hazard-perception drills mirror the real NTSA test so you know exactly what to expect on test day.",
    icon: "truck",
  },
  {
    title: "Patient NTSA-Certified Instructors",
    desc: "Our instructors are NTSA-certified and chosen for patience - clear, calm coaching that builds genuine road confidence, not just a pass.",
    icon: "car",
  },
];

export function courseWhatsAppUrl(prefill: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(prefill)}`;
}