export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  service: string;
  year: string;
  deliverables: string[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "royal-wedding",
    slug: "royal-wedding-film",
    title: "Royal Wedding Film",
    client: "Priya & Rahul",
    service: "AI Video",
    year: "2023",
    deliverables: ["1 Min Teaser", "5 Min Cinematic Highlight"],
    thumbnail: "/placeholders/project-1.jpg",
  },
  {
    id: "restaurant-launch",
    slug: "restaurant-brand-launch",
    title: "Restaurant Brand Launch",
    client: "Spice Route",
    service: "Branding / Social Media",
    year: "2024",
    deliverables: ["Logo Design", "Menu Design", "Social Media Launch Kit"],
    thumbnail: "/placeholders/project-2.jpg",
  },
  {
    id: "startup-website",
    slug: "startup-website",
    title: "Fintech Startup Website",
    client: "Aura Finance",
    service: "UI/UX / Development",
    year: "2024",
    deliverables: ["UX Research", "Figma Prototype", "Next.js Development"],
    thumbnail: "/placeholders/project-3.jpg",
  },
  {
    id: "festival-campaign",
    slug: "diwali-festival-campaign",
    title: "Diwali Festival Campaign",
    client: "Lumina",
    service: "Design / Motion",
    year: "2023",
    deliverables: ["3x Motion Posters", "Instagram Grid Campaign"],
    thumbnail: "/placeholders/project-4.jpg",
  },
];
