/**
 * ============================================================
 *  TDM SITE CONTENT â€” edit this file to update the website.
 *  Text, team members and projects all live here.
 *  To add a photo: put the image in /public/team or /public/projects
 *  and set `photo: "/team/name.jpg"` (leave "" to show initials).
 * ============================================================
 */
import villa from "@/assets/tdm-villa.jpg";
import interior from "@/assets/tdm-interior.jpg";
import commercial from "@/assets/tdm-commercial.jpg";
import hero from "@/assets/tdm-hero.jpg";

export const company = {
  story: [
    "TDM Architect & Engineering began with a simple belief: a home should be designed around the people who live in it. What started as a small design studio has grown into a multidisciplinary practice offering architecture, 3D visualization and construction under one roof.",
    "Today we work with families and businesses across Sri Lanka, turning ideas into considered, buildable spaces â€” balancing aesthetics, budget and the realities of the tropical climate.",
  ],
  vision: "To shape places that feel as good as they function, and make quality architecture accessible to every Sri Lankan.",
  mission: "Deliver honest, design-led solutions from the first sketch to the final brick â€” on time, on budget and built to last.",
  stats: [
    { value: "10+", label: "Years of practice" },
    { value: "150+", label: "Projects designed" },
    { value: "25", label: "Districts served" },
  ],
};

export const principal = {
  name: "Principal Architect",
  role: "Founder Â· TDM Architect & Engineering",
  photo: "",
  message:
    "Every project we take on is personal. We listen first, design with intention, and stay with our clients until the keys are in their hands. That commitment is what TDM stands for.",
};

export type TeamMember = { name: string; role: string; photo: string };

export const team: TeamMember[] = [
  { name: "Team Member", role: "Civil Engineer", photo: "" },
  { name: "Team Member", role: "Structural Engineer", photo: "" },
  { name: "Team Member", role: "Architectural Designer", photo: "" },
  { name: "Team Member", role: "3D Visualizer", photo: "" },
  { name: "Team Member", role: "3D Visualizer", photo: "" },
  { name: "Team Member", role: "Interior Designer", photo: "" },
  { name: "Team Member", role: "Quantity Surveyor", photo: "" },
  { name: "Team Member", role: "Site Supervisor", photo: "" },
  { name: "Team Member", role: "Client Relations", photo: "" },
];

export type Project = { slug: string; title: string; category: string; location: string; year: string; image: string };

export const projects: Project[] = [
  { slug: "modern-villa", title: "Modern Villa", category: "Residential", location: "Kandy", year: "2025", image: villa },
  { slug: "luxury-interior", title: "Luxury Interior", category: "Interior", location: "Colombo", year: "2025", image: interior },
  { slug: "commercial-space", title: "Commercial Space", category: "Commercial", location: "Kurunegala", year: "2024", image: commercial },
  { slug: "tropical-residence", title: "Tropical Residence", category: "Residential", location: "Galle", year: "2024", image: hero },
];

export type Service = { slug: string; number: string; title: string; summary: string; includes: string[] };

export const services: Service[] = [
  { slug: "architectural-design", number: "01", title: "Architectural Design", summary: "Modern, functional house plans tailored to your land, lifestyle and budget â€” from concept sketches to approval-ready drawings.", includes: ["Site analysis & concept design", "Floor plans & elevations", "Local authority approval drawings", "Working drawings"] },
  { slug: "3d-visualization", number: "02", title: "3D Visualization", summary: "Photorealistic exterior and interior renders and walkthroughs that let you experience your space before a single brick is laid.", includes: ["Exterior 3D renders", "Interior 3D renders", "Video walkthroughs", "Material & colour options"] },
  { slug: "structural-engineering", number: "03", title: "Structural Engineering", summary: "Safe, efficient structural design that balances strength, cost and the architectural vision.", includes: ["Structural analysis & design", "Foundation design", "Reinforcement detailing", "Engineer certification"] },
  { slug: "interior-design", number: "04", title: "Interior Design", summary: "Interiors that feel considered and personal â€” layouts, finishes, lighting and joinery designed together.", includes: ["Space planning", "Furniture & joinery design", "Lighting design", "Finishes selection"] },
  { slug: "construction", number: "05", title: "Construction", summary: "Full project management and construction with quality materials, transparent costing and on-time delivery.", includes: ["Cost estimation & BOQ", "Project management", "Quality-controlled construction", "Handover & aftercare"] },
  { slug: "renovation", number: "06", title: "Renovation & Extensions", summary: "Breathe new life into existing homes with thoughtful upgrades, extensions and modernization.", includes: ["Condition assessment", "Redesign & extension plans", "Phased construction", "Modern upgrades"] },
];

export const workProcess = [
  { step: "01", title: "Consultation", text: "We listen to your needs, visit the site and understand your budget." },
  { step: "02", title: "Concept & Design", text: "Sketches, plans and 3D views refined together with you." },
  { step: "03", title: "Approvals & Engineering", text: "Structural design and drawings ready for authority approval." },
  { step: "04", title: "Build & Handover", text: "Managed construction through to the final key handover." },
];
