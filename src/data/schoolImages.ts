// Centralized contextual photography for the Georgeal site.
// URLs point to generated photorealistic imagery used across hero,
// course cards, computer lab, branches and about sections.

export const IMAGES = {
  heroDriving:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/hero-driving-1cd02a53-1793036777313.webp",
  courseManual:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/course-manual-9cc06718-1793036776642.webp",
  courseAutomatic:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/course-automatic-e0461c85-1793036778083.webp",
  courseTruck:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/course-truck-5e0ee9e1-1793036778021.webp",
  courseMotorcycle:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/course-motorcycle-86b2ebeb-1793036777389.webp",
  branchClassroom:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/branch-classroom-c5ad7db5-1793036780204.webp",
  aboutFleet:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/about-fleet-0d64346e-1793036776888.webp",
  graduates:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/graduates-66b6f156-1793036776673.webp",
  computerLab:
    "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/3fd47dba-546b-4c7d-b055-562edf9b9f1d/computer-lab-137ca1bb-1793036777262.webp",
};

// CoursesAndBenefits uses schoolData ids (b1-manual, b2-auto, c1, a2, refresher)
export const courseImageById: Record<string, string> = {
  "b1-manual": IMAGES.courseManual,
  "b2-auto": IMAGES.courseAutomatic,
  c1: IMAGES.courseTruck,
  a2: IMAGES.courseMotorcycle,
  refresher: IMAGES.heroDriving,
};

// DrivingCoursesView uses coursesData icon keys (car, truck, motorcycle, shield)
export const courseImageByIcon: Record<string, string> = {
  car: IMAGES.courseManual,
  truck: IMAGES.courseTruck,
  motorcycle: IMAGES.courseMotorcycle,
  shield: IMAGES.heroDriving,
};
