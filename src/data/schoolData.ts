import type { CoursePackage, Branch, Benefit, Testimonial, ComputerPackage, TrustMetric } from "@/types";

export const WHATSAPP_NUMBER = "254722000000";
export const PHONE_DISPLAY = "0722 000 000";
export const PHONE_INTL = "+254722000000";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const trustMetrics: TrustMetric[] = [
  { label: "Nairobi Branches", value: "15+" },
  { label: "First-Time Pass Rate", value: "98.4%" },
  { label: "NTSA Approved Curriculum", value: "100%" },
  { label: "Dual-Control Safety Fleet", value: "Modern" },
];

export const courses: CoursePackage[] = [
  {
    id: "b1-manual",
    category: "Class B1",
    label: "Light Vehicle (Manual)",
    vehicleType: "Saloon & Hatchback",
    duration: "3 - 4 Weeks",
    priceKES: 25000,
    instalments: "Split into 3 instalments",
    features: [
      "NTSA-approved lessons",
      "Dual-control training car",
      "Free learner's handbook",
      "Road & traffic signs mastery",
      "Test booking assistance",
    ],
    recommended: true,
  },
  {
    id: "b2-auto",
    category: "Class B2",
    label: "Light Vehicle (Automatic)",
    vehicleType: "Automatic Saloon",
    duration: "2 - 3 Weeks",
    priceKES: 30000,
    instalments: "Split into 2 instalments",
    features: [
      "Smooth automatic gear training",
      "Dual-control auto car",
      "Ideal for busy professionals",
      "Free learner's handbook",
      "Priority test slots",
    ],
  },
  {
    id: "c1",
    category: "Class C1",
    label: "Light Truck / Canter",
    vehicleType: "Commercial Vehicles",
    duration: "4 - 5 Weeks",
    priceKES: 35000,
    instalments: "Split into 4 instalments",
    features: [
      "Professional driving skills",
      "Cargo handling basics",
      "Highway & long-route training",
      "NTSA commercial endorsement",
      "Job placement support",
    ],
  },
  {
    id: "a2",
    category: "Class A2",
    label: "Motorcycle / Boda Boda",
    vehicleType: "Motorcycles",
    duration: "1 - 2 Weeks",
    priceKES: 12000,
    instalments: "One-time payment",
    features: [
      "Safety-first riding lessons",
      "Balance & control drills",
      "Protective gear provided",
      "NTSA motorcycle endorsement",
      "Road test preparation",
    ],
  },
  {
    id: "refresher",
    category: "Refresher",
    label: "Confidence Booster",
    vehicleType: "Any Vehicle",
    duration: "Flexible (5-15 hrs)",
    priceKES: 8000,
    instalments: "Per session available",
    features: [
      "For licence holders returning",
      "Nairobi traffic navigation",
      "Highway driving confidence",
      "Parking & hill starts",
      "One-on-one instructor",
    ],
  },
];

export const benefits: Benefit[] = [
  {
    id: "instructors",
    title: "Certified NTSA Instructors",
    description: "Patient, experienced professionals who have trained 25,000+ students across Nairobi. Every instructor holds a valid NTSA teaching permit.",
    icon: "graduation",
  },
  {
    id: "fleet",
    title: "Modern Dual-Control Fleet",
    description: "Our training cars have instructor-side brakes and clutches so you learn with zero risk. Well-maintained saloons, hatchbacks, and trucks.",
    icon: "shield",
  },
  {
    id: "flexible",
    title: "Flexible Timing",
    description: "Morning, day, evening, and weekend batches designed for students, working professionals, and stay-at-home parents. Learn at your pace.",
    icon: "clock",
  },
  {
    id: "support",
    title: "End-to-End DL Support",
    description: "From PDL application to test booking and smart DL collection, we handle every step. No hidden fees, no confusion, no running around.",
    icon: "certificate",
  },
];

export const branches: Branch[] = [
  {
    id: "donholm",
    name: "Donholm (Main Campus)",
    area: "Donholm",
    region: "Eastlands",
    landmark: "Donholm Stage, opposite Donholm Shopping Centre",
    phone: "0722 000 001",
    whatsapp: "254722000001",
    hours: "Mon - Sat: 7:00 AM - 6:30 PM",
    contactPerson: "Capt. James Mwangi",
  },
  {
    id: "buruburu",
    name: "Buruburu",
    area: "Buruburu",
    region: "Eastlands",
    landmark: "Buruburu Shopping Centre, Phase 5",
    phone: "0722 000 002",
    whatsapp: "254722000002",
    hours: "Mon - Sat: 7:00 AM - 6:00 PM",
    contactPerson: "Sarah Wanjiku",
  },
  {
    id: "kayole",
    name: "Kayole Masimba",
    area: "Kayole",
    region: "Eastlands",
    landmark: "Masimba Estate, near Kayole Stage",
    phone: "0722 000 003",
    whatsapp: "254722000003",
    hours: "Mon - Sat: 7:30 AM - 6:00 PM",
    contactPerson: "Peter Otieno",
  },
  {
    id: "umoja",
    name: "Umoja Innercore",
    area: "Umoja",
    region: "Eastlands",
    landmark: "Innercore Road, next to Umoja Police Station",
    phone: "0722 000 004",
    whatsapp: "254722000004",
    hours: "Mon - Sat: 7:00 AM - 6:30 PM",
    contactPerson: "Grace Njeri",
  },
  {
    id: "pipeline",
    name: "Pipeline Outering",
    area: "Pipeline",
    region: "Eastlands",
    landmark: "Outering Road, opposite Pipeline Shopping Mall",
    phone: "0722 000 005",
    whatsapp: "254722000005",
    hours: "Mon - Sat: 7:00 AM - 6:00 PM",
    contactPerson: "David Kiptoo",
  },
  {
    id: "cbd",
    name: "Nairobi CBD",
    area: "Central Business District",
    region: "CBD",
    landmark: "Tom Mboya Street, near Moi Avenue",
    phone: "0722 000 006",
    whatsapp: "254722000006",
    hours: "Mon - Fri: 8:00 AM - 5:30 PM",
    contactPerson: "Mary Achieng",
  },
  {
    id: "kasarani",
    name: "Kasarani",
    area: "Kasarani",
    region: "North",
    landmark: "Kasarani Town, near Kasarani Stadium Road",
    phone: "0722 000 007",
    whatsapp: "254722000007",
    hours: "Mon - Sat: 7:00 AM - 6:00 PM",
    contactPerson: "John Kamau",
  },
];

export const computerPackages: ComputerPackage[] = [
  {
    id: "office",
    title: "Microsoft Office Suite",
    description: "Word, Excel, PowerPoint, Access. Job-ready in 4 weeks.",
    icon: "monitor",
    comboDiscount: "Save 30% with driving combo",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description: "CorelDRAW, Photoshop, Canva Pro. Build your brand skills.",
    icon: "palette",
    comboDiscount: "Save 25% with driving combo",
  },
  {
    id: "web",
    title: "Web Development Basics",
    description: "HTML, CSS, WordPress. Create your own website from scratch.",
    icon: "code",
    comboDiscount: "Save 20% with driving combo",
  },
  {
    id: "quickbooks",
    title: "QuickBooks Accounting",
    description: "Bookkeeping, invoicing, payroll. Essential for business owners.",
    icon: "calculator",
    comboDiscount: "Save 25% with driving combo",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Brian Kariuki",
    branch: "Donholm",
    quote: "I failed twice with another school. Georgeal's instructor spotted my weak points in the first lesson. Passed NTSA test on my first attempt here!",
    rating: 5,
    verified: true,
  },
  {
    id: "t2",
    name: "Faith Wambui",
    branch: "Buruburu",
    quote: "As a mum of two, I needed evening classes. They adjusted my schedule perfectly. The dual-control car made me feel safe from day one.",
    rating: 5,
    verified: true,
  },
  {
    id: "t3",
    name: "Samuel Odhiambo",
    branch: "CBD",
    quote: "Booked my PDL, lessons, and test all from one place. No hidden charges. Got my smart DL within 3 weeks. Highly recommend for busy professionals.",
    rating: 5,
    verified: true,
  },
  {
    id: "t4",
    name: "Njeri Gitau",
    branch: "Kasarani",
    quote: "The refresher course gave me back my confidence after 5 years without driving. My instructor was so patient and encouraging.",
    rating: 4,
    verified: true,
  },
];
