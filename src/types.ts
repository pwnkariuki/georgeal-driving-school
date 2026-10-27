export type PageKey = "home" | "about" | "driving-courses" | "computer-courses" | "branches" | "contact" | "terms" | "pledge";

export interface NavItem {
  key: PageKey;
  label: string;
  icon: string;
  badge?: string;
}

export interface DrivingCourse {
  id: string;
  title: string;
  category: string;
  licenseClass: string;
  duration: string;
  priceKES: number;
  installments: string;
  requirements: string[];
  includes: string[];
  icon: string;
  popular?: boolean;
}

export interface ComputerCourse {
  id: string;
  title: string;
  level: string;
  duration: string;
  priceKES: number;
  topics: string[];
  icon: string;
  description: string;
  category: "essentials" | "office" | "design" | "data" | "combo";
  badge?: string;
  installments?: string;
}

export interface Branch {
  id: string;
  name: string;
  town?: string;
  area?: string;
  region: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  hours: string;
  isHQ?: boolean;
  contactPerson?: string;
  mapQuery?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course?: string;
  branch: string;
  rating: number;
  text?: string;
  quote?: string;
  passedDate?: string;
  verified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  type: "photo" | "video";
}

export interface ContactInfo {
  phone: string;
  altPhone: string;
  whatsapp: string;
  altWhatsapp: string;
  email: string;
  address: string;
  hours: string;
  mpesaPaybill: string;
  mpesaAccount: string;
}

export interface CoursePackage {
  id: string;
  category: string;
  label: string;
  vehicleType: string;
  duration: string;
  priceKES: number;
  instalments: string;
  features: string[];
  recommended?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ComputerPackage {
  id: string;
  title: string;
  description: string;
  icon: string;
  comboDiscount?: string;
}

export interface TrustMetric {
  label: string;
  value: string;
}