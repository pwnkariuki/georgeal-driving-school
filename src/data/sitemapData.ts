import type { NavItem, DrivingCourse, ComputerCourse, Branch, Testimonial, GalleryItem, ContactInfo } from "../types";

export const CONTACT: ContactInfo = {
  phone: "+254 721 563933",
  altPhone: "+254 719 351171",
  whatsapp: "254721563933",
  altWhatsapp: "254719351171",
  email: "info@georgealdriving.co.ke",
  address: "Dune Plaza, Kangundo Road, Nairobi",
  hours: "Mon - Sun: 8:00 AM - 5:00 PM",
  mpesaPaybill: "400100",
  mpesaAccount: "GEORGEAL",
};

// Opening hours for the live open/closed badge (Mon-Sun, 08:00-17:00)
export const OPENING = { openHour: 8, closeHour: 17 };

export function isOpenNow(d: Date = new Date()): boolean {
  const h = d.getHours();
  return h >= OPENING.openHour && h < OPENING.closeHour;
}

export const NAV_ITEMS: NavItem[] = [
  // Gallery intentionally removed from primary navigation; student stories now live in About Us.
  { key: "home", label: "Home", icon: "House" },
  { key: "driving-courses", label: "Driving Courses", icon: "Car" },
  { key: "computer-courses", label: "Computer Courses", icon: "Monitor" },
  { key: "branches", label: "Branches", icon: "Buildings" },
  { key: "about", label: "About Us", icon: "Info" },
  
  { key: "contact", label: "Contact", icon: "Envelope" },
];

export const DRIVING_COURSES: DrivingCourse[] = [
  {
    id: "class-a",
    title: "Motorcycle / Boda Boda",
    category: "Class A",
    licenseClass: "A",
    duration: "2 - 3 Weeks",
    priceKES: 8500,
    installments: "3 payments of KES 3,000",
    requirements: ["Valid National ID", "KRA PIN", "2 Passport Photos", "Medical Fitness Report"],
    includes: ["Theory Lessons", "Practical Riding", "NTSA PDL Booking", "Exam Fee", "Road Signs Training"],
    icon: "PersonSimpleBike",
  },
  {
    id: "class-b1",
    title: "Light Vehicle (Automatic)",
    category: "Class B1",
    licenseClass: "B1",
    duration: "3 - 4 Weeks",
    priceKES: 12000,
    installments: "4 payments of KES 3,200",
    requirements: ["Valid National ID", "KRA PIN", "2 Passport Photos", "Medical Fitness Report"],
    includes: ["Theory Lessons", "Automatic Car Training", "NTSA PDL Booking", "Exam Fee", "Highway Driving"],
    icon: "Car",
  },
  {
    id: "class-b2",
    title: "Light Vehicle (Manual)",
    category: "Class B2",
    licenseClass: "B2",
    duration: "4 - 5 Weeks",
    priceKES: 15000,
    installments: "5 payments of KES 3,200",
    requirements: ["Valid National ID", "KRA PIN", "2 Passport Photos", "Medical Fitness Report"],
    includes: ["Theory Lessons", "Manual Car Training", "NTSA PDL Booking", "Exam Fee", "Hill Driving", "Night Driving"],
    icon: "Car",
    popular: true,
  },
  {
    id: "class-c1",
    title: "Commercial Goods Vehicle",
    category: "Class C1",
    licenseClass: "C1",
    duration: "5 - 6 Weeks",
    priceKES: 22000,
    installments: "6 payments of KES 3,800",
    requirements: ["Valid National ID", "KRA PIN", "2 Passport Photos", "Medical Fitness Report", "Class B License (min 1 year)"],
    includes: ["Heavy Vehicle Theory", "Truck/Lorry Practical", "NTSA PDL Booking", "Exam Fee", "Load Management"],
    icon: "Truck",
  },
  {
    id: "class-d-psv",
    title: "PSV / Matatu / Bus",
    category: "Class D (PSV)",
    licenseClass: "D + PSV",
    duration: "6 - 8 Weeks",
    priceKES: 28000,
    installments: "8 payments of KES 3,600",
    requirements: ["Valid National ID", "KRA PIN", "2 Passport Photos", "Medical Fitness Report", "Class C License", "Good Conduct"],
    includes: ["Passenger Safety", "PSV Theory", "Bus/Minibus Practical", "NTSA PDL + PSV Booking", "Exam Fee", "First Aid"],
    icon: "Bus",
  },
  {
    id: "refresher",
    title: "Refresher & Defensive Driving",
    category: "Refresher",
    licenseClass: "Any",
    duration: "1 - 2 Weeks",
    priceKES: 7500,
    installments: "2 payments of KES 4,000",
    requirements: ["Valid Driving License", "Own or School Vehicle"],
    includes: ["Confidence Building", "Defensive Techniques", "Parking Mastery", "Highway Confidence", "Night Driving"],
    icon: "ShieldCheck",
  },
];

export const COMPUTER_COURSES: ComputerCourse[] = [
  {
    id: "intro-computers",
    title: "Introduction to Computers & OS Basics",
    level: "Beginner",
    duration: "2 - 3 Weeks",
    priceKES: 3500,
    topics: ["Hardware Basics", "Windows OS", "File Management", "Typing Speed", "Mouse & Keyboard Skills"],
    icon: "Monitor",
    description: "Start from zero. Learn how computers work, navigate Windows confidently, manage files, and build typing speed for everyday productivity.",
    category: "essentials",
    badge: "No Experience Needed",
    installments: "2 payments of KES 1,800",
  },
  {
    id: "ms-office-suite",
    title: "Microsoft Office Suite (Word, Excel, PowerPoint)",
    level: "Beginner to Intermediate",
    duration: "4 - 6 Weeks",
    priceKES: 5500,
    topics: ["MS Word", "MS Excel", "MS PowerPoint", "Document Formatting", "Presentations", "Basic Formulas"],
    icon: "Presentation",
    description: "Master the three tools every employer expects. Create professional documents, spreadsheets with formulas, and polished presentations.",
    category: "office",
    badge: "Most Popular",
    installments: "3 payments of KES 1,900",
  },
  {
    id: "internet-email",
    title: "Internet, Email & Digital Safety",
    level: "Beginner",
    duration: "2 Weeks",
    priceKES: 2500,
    topics: ["Web Browsing", "Professional Email", "Cyber Safety", "Online Research", "Search Tools", "Digital Communication"],
    icon: "Globe",
    description: "Navigate the internet safely, set up professional email, protect your accounts, and use online tools for job searching and research.",
    category: "essentials",
    badge: "Quick Start",
    installments: "2 payments of KES 1,300",
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Desktop Publishing",
    level: "Beginner Friendly",
    duration: "4 - 6 Weeks",
    priceKES: 8000,
    topics: ["Adobe Photoshop", "Canva Pro", "CorelDRAW", "Digital Flyers", "Branding Basics", "Print Production"],
    icon: "Palette",
    description: "Design eye-catching flyers, social media posts, logos, and marketing materials using industry-standard tools. Perfect for side hustles.",
    category: "design",
    badge: "Creative Track",
    installments: "4 payments of KES 2,100",
  },
  {
    id: "databases-spreadsheets",
    title: "Databases & Advanced Spreadsheets",
    level: "Intermediate",
    duration: "4 Weeks",
    priceKES: 6000,
    topics: ["Advanced Excel", "MS Access", "Data Entry", "Inventory Formulas", "Pivot Tables", "Reports"],
    icon: "Database",
    description: "Go beyond basics. Build databases, manage inventory with formulas, create pivot tables, and generate professional reports for any business.",
    category: "data",
    badge: "Career Boost",
    installments: "3 payments of KES 2,100",
  },
  {
    id: "ultimate-combo",
    title: "Ultimate Career Combo (Driving + Computer Skills)",
    level: "Bundle Deal",
    duration: "8 - 10 Weeks",
    priceKES: 17500,
    topics: ["Full Class B2 Driving", "MS Office Suite", "Internet & Email", "Certificate of Completion", "Free CV Formatting", "15% Combo Discount"],
    icon: "GraduationCap",
    description: "Get your driving license AND digital skills in one package. Save 15% compared to separate enrolments. Includes free CV formatting.",
    category: "combo",
    badge: "Save 15%",
    installments: "5 payments of KES 3,600",
  },
];

export const BRANCHES: Branch[] = [
  { id: "dune-plaza", name: "Dune Plaza (Main HQ)", town: "Nairobi", region: "Kangundo Road", landmark: "Dune Plaza, Kangundo Road, Nairobi", phone: "+254 721 563933", whatsapp: "254721563933", hours: "Mon - Sun: 8:00 AM - 5:00 PM", isHQ: true, contactPerson: "Georgeal Head Office", mapQuery: "Dune Plaza, Kangundo Road, Nairobi" },
  { id: "donholm", name: "Donholm", town: "Nairobi", region: "Eastlands", landmark: "Donholm Stage, opposite Donholm Shopping Centre", phone: "+254 721 563933", whatsapp: "254721563933", hours: "Mon - Sun: 8:00 AM - 5:00 PM", contactPerson: "Capt. James Mwangi", mapQuery: "Donholm Shopping Centre, Nairobi" },
  { id: "buruburu", name: "Buruburu", town: "Nairobi", region: "Eastlands", landmark: "Buruburu Shopping Centre, Phase 5", phone: "+254722000002", whatsapp: "254722000002", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "Sarah Wanjiku", mapQuery: "Buruburu Shopping Centre, Nairobi" },
  { id: "kayole", name: "Kayole Masimba", town: "Nairobi", region: "Eastlands", landmark: "Masimba Estate, near Kayole Stage", phone: "+254722000003", whatsapp: "254722000003", hours: "Mon - Sat: 7:30 AM - 6:00 PM", contactPerson: "Peter Otieno", mapQuery: "Masimba Estate, Kayole, Nairobi" },
  { id: "umoja", name: "Umoja Innercore", town: "Nairobi", region: "Eastlands", landmark: "Innercore Road, next to Umoja Police Station", phone: "+254722000004", whatsapp: "254722000004", hours: "Mon - Sat: 7:00 AM - 6:30 PM", contactPerson: "Grace Njeri", mapQuery: "Umoja Innercore, Nairobi" },
  { id: "pipeline", name: "Pipeline Outering", town: "Nairobi", region: "Eastlands", landmark: "Outering Road, opposite Pipeline Shopping Mall", phone: "+254722000005", whatsapp: "254722000005", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "David Kiptoo", mapQuery: "Pipeline Shopping Mall, Outering Road, Nairobi" },
  { id: "komarock", name: "Komarock", town: "Nairobi", region: "Eastlands", landmark: "Komarock Road, near Komarock Shopping Centre", phone: "+254722000006", whatsapp: "254722000006", hours: "Mon - Sat: 7:30 AM - 6:00 PM", contactPerson: "Anne Mutua", mapQuery: "Komarock Shopping Centre, Nairobi" },
  { id: "fedha", name: "Fedha Estate", town: "Nairobi", region: "Eastlands", landmark: "Fedha Estate, off Outer Ring Road", phone: "+254722000007", whatsapp: "254722000007", hours: "Mon - Sat: 8:00 AM - 6:00 PM", contactPerson: "Brian Kamande", mapQuery: "Fedha Estate, Nyayo Embakasi, Nairobi" },
  { id: "embakasi", name: "Embakasi", town: "Nairobi", region: "Eastlands", landmark: "Embakasi Shopping Centre, along Joska Road", phone: "+254722000008", whatsapp: "254722000008", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "Lucy Auma", mapQuery: "Embakasi Shopping Centre, Nairobi" },
  { id: "chokaa", name: "Chokaa", town: "Nairobi", region: "Kangundo Road", landmark: "Chokaa, main stage along Kangundo Road", phone: "+254722000009", whatsapp: "254722000009", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "Joseph Kariuki", mapQuery: "Chokaa Stage, Kangundo Road, Nairobi" },
  { id: "ruai", name: "Ruai", town: "Nairobi", region: "Kangundo Road", landmark: "Ruai Town, along Kangundo Road", phone: "+254722000010", whatsapp: "254722000010", hours: "Mon - Sat: 7:30 AM - 6:00 PM", contactPerson: "Esther Wambui", mapQuery: "Ruai Town, Kangundo Road, Nairobi" },
  { id: "cbd", name: "Nairobi CBD", town: "Nairobi", region: "CBD & Central", landmark: "Tom Mboya Street, near Moi Avenue", phone: "+254722000011", whatsapp: "254722000011", hours: "Mon - Fri: 8:00 AM - 5:30 PM", contactPerson: "Mary Achieng", mapQuery: "Tom Mboya Street, Nairobi CBD" },
  { id: "jogoo", name: "Jogoo Road", town: "Nairobi", region: "CBD & Central", landmark: "Jogoo Road, near Muthurwa Market", phone: "+254722000012", whatsapp: "254722000012", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "Dennis Mwangi", mapQuery: "Muthurwa Market, Jogoo Road, Nairobi" },
  { id: "kasarani", name: "Kasarani", town: "Nairobi", region: "North", landmark: "Kasarani Town, near Kasarani Stadium Road", phone: "+254722000013", whatsapp: "254722000013", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "John Kamau", mapQuery: "Kasarani Stadium, Nairobi" },
  { id: "thika", name: "Thika Town", town: "Thika", region: "North", landmark: "Thika Town, opposite KFAO Grounds", phone: "+254722000014", whatsapp: "254722000014", hours: "Mon - Sat: 7:00 AM - 6:00 PM", contactPerson: "Rose Mueni", mapQuery: "Thika Town, Kiambu" },
  { id: "ngong", name: "Ngong Road", town: "Nairobi", region: "South", landmark: "Georgeal House, Ngong Road, near Prestige Plaza", phone: "+254722000015", whatsapp: "254722000015", hours: "Mon - Sat: 7:30 AM - 6:00 PM", contactPerson: "Patrick Omondi", mapQuery: "Ngong Road, Prestige Plaza, Nairobi" },
  { id: "langata", name: "Langata", town: "Nairobi", region: "South", landmark: "Langata Road, near Galleria Mall", phone: "+254722000016", whatsapp: "254722000016", hours: "Mon - Sat: 8:00 AM - 6:00 PM", contactPerson: "Cynthia Adhiambo", mapQuery: "Galleria Mall, Langata Road, Nairobi" },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Kevin Otieno", course: "Class B2 (Manual)", branch: "Buruburu Phase 4", rating: 5, text: "First try pass at NTSA! The instructor was so patient with me on clutch control. Now I drive daily from Buruburu to CBD without fear.", passedDate: "Feb 2025" },
  { id: "t2", name: "Faith Wanjiru", course: "Class B1 (Automatic)", branch: "Donholm Caltex", rating: 5, text: "The M-Pesa lipa polepole plan made it possible for me to learn while working at the market. 4 weeks and my license was ready!", passedDate: "Jan 2025" },
  { id: "t3", name: "Dennis Mwangi", course: "Class A (Motorcycle)", branch: "Pipeline Estate", rating: 5, text: "Did my boda license here. The road signs training and practical riding on Pipeline Road prepared me well for the NTSA test.", passedDate: "Dec 2024" },
  { id: "t4", name: "Grace Achieng", course: "Refresher Course", branch: "Umoja Innercore", rating: 5, text: "I had a license for 6 years but never drove alone. After 8 sessions at Georgeal, I now drive my kids to school every morning.", passedDate: "Feb 2025" },
  { id: "t5", name: "Samuel Kiptoo", course: "Class C1 (Truck)", branch: "Embakasi", rating: 5, text: "The dual-pedal truck training near Embakasi gave me real confidence. Passed my NTSA test on the first attempt.", passedDate: "Nov 2024" },
  { id: "t6", name: "Mercy Njeri", course: "PSV Class D", branch: "Jogoo Road", rating: 5, text: "Now driving a matatu on Jogoo route. The passenger safety and first aid modules were exactly what I needed for my PSV.", passedDate: "Oct 2024" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Practical Training Session", category: "Training", type: "photo" },
  { id: "g2", title: "NTSA Test Day Success", category: "Achievements", type: "photo" },
  { id: "g3", title: "Simulator Training Lab", category: "Facilities", type: "photo" },
  { id: "g4", title: "Graduation Ceremony", category: "Achievements", type: "photo" },
  { id: "g5", title: "Highway Driving Practice", category: "Training", type: "photo" },
  { id: "g6", title: "Student Testimonial Video", category: "Stories", type: "video" },
  { id: "g7", title: "New Fleet Inspection", category: "Facilities", type: "photo" },
  { id: "g8", title: "Night Driving Session", category: "Training", type: "photo" },
];

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}?text=Hello%20Georgeal%20Driving%20School!%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;

export const WHATSAPP_LINK_ALT = `https://wa.me/${CONTACT.altWhatsapp}?text=Hello%20Georgeal%20Driving%20School!%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;

export function waLinkTo(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function whatsAppLink(course?: string, branch?: string): string {
  let msg = "Hello Georgeal Driving School!";
  if (course) msg += ` I am interested in the ${course} course.`;
  if (branch) msg += ` My preferred branch is ${branch}.`;
  if (!course && !branch) msg += " I would like to enquire about your courses.";
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function telLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/* ========== FAQ DATA ========== */
export type FaqCategory = "driving" | "payments" | "schedule" | "computer" | "requirements";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

// Homepage shows only school-wide (general) questions.
// Driving & NTSA FAQs live on the Driving Courses page (DRIVING_FAQS in coursesData.ts);
// Computer & lab FAQs live on the Computer Courses page (FAQS in ComputerCoursesView.tsx).
export const FAQ_CATEGORIES: { key: FaqCategory | "all"; label: string }[] = [
  { key: "all", label: "All Questions" },
  { key: "payments", label: "Fees & M-Pesa" },
  { key: "schedule", label: "Class Schedule & Transfers" },
  { key: "requirements", label: "General Requirements" },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-5",
    category: "payments",
    question: "How do M-Pesa installment payments work?",
    answer: "We use the 'Lipa Polepole' M-Pesa plan. Pay your bill number 400100, account name GEORGEAL, and your registration number as the reference. Each installment is a fixed amount spread over the course duration. For example, Class B2 (KES 15,000) can be paid in 5 installments of KES 3,200. Your training starts after the first payment.",
  },
  {
    id: "faq-7",
    category: "payments",
    question: "Can I get a refund if I withdraw mid-course?",
    answer: "We offer a 50% refund on unused lessons if you withdraw before completing 50% of your training hours. After 50% completion, we can transfer your remaining balance to another course or a family member. Refund requests must be made in writing at your branch office.",
  },
  {
    id: "faq-8",
    category: "schedule",
    question: "What are the class times? Can I learn while working?",
    answer: "Absolutely! We offer early morning (6:00-8:00 AM), afternoon (12:00-2:00 PM), and evening (5:00-7:00 PM) slots specifically for working professionals. Weekend classes (Saturday 7:00 AM - 2:00 PM) are also available. You choose your schedule during enrollment.",
  },
  {
    id: "faq-10",
    category: "schedule",
    question: "Can I switch branches during my training?",
    answer: "Yes! If you move or your schedule changes, you can transfer to any of our 17 Nairobi branches. Simply inform your current instructor and the new branch. There is no transfer fee, and your training records carry over seamlessly.",
  },
  {
    id: "faq-14",
    category: "requirements",
    question: "What documents do I need to enroll?",
    answer: "For driving courses: (1) Valid National ID or Passport, (2) KRA PIN certificate, (3) 2 passport-size photos, (4) Medical fitness report from NTSA-approved clinic. For computer courses: just your National ID and a passport photo. Foreign nationals need a valid passport and work permit.",
  },
];