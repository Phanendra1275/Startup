export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "ai-video",
    slug: "ai-generated-videos",
    title: "AI Generated Videos",
    description: "Cinematic, concept-driven films generated completely through advanced AI, perfect for occasions and brand storytelling.",
    icon: "Sparkles",
    features: ["Custom visual style", "Voiceover & Sound Design", "4K Output", "Fast turnaround"],
  },
  {
    id: "video-editing",
    slug: "video-editing",
    title: "Premium Video Editing",
    description: "We take your raw footage and craft it into a compelling narrative with professional color grading and sound design.",
    icon: "Film",
    features: ["Color Grading", "Sound Mixing", "Motion Graphics", "Reels & Shorts"],
  },
  {
    id: "branding",
    slug: "branding",
    title: "Brand Identity",
    description: "Complete visual identities that reflect your core values. Logos, typography, color systems, and brand guidelines.",
    icon: "PenTool",
    features: ["Logo Design", "Brand Guidelines", "Social Kits", "Typography Selection"],
  },
  {
    id: "web-dev",
    slug: "website-development",
    title: "Website Development",
    description: "High-performance, beautifully animated web experiences built on modern frameworks like Next.js.",
    icon: "Globe",
    features: ["Responsive Design", "Custom Animations", "SEO Optimization", "CMS Integration"],
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Intuitive and stunning digital interfaces that provide seamless user experiences.",
    icon: "Layout",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Poster & Graphic Design",
    description: "Striking visuals for events, campaigns, and digital marketing that capture attention instantly.",
    icon: "Image",
    features: ["Event Posters", "Social Media Creatives", "Print Ready", "Custom Illustrations"],
  },
];
