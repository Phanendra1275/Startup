export interface Occasion {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "personal" | "festival" | "corporate";
  styles: string[];
}

export const occasions: Occasion[] = [
  {
    id: "wedding",
    slug: "wedding",
    title: "Wedding",
    description: "Cinematic memories for your special day.",
    category: "personal",
    styles: ["Cinematic", "Traditional", "Royal", "Modern"],
  },
  {
    id: "diwali",
    slug: "diwali",
    title: "Diwali",
    description: "Bright and festive campaigns for the festival of lights.",
    category: "festival",
    styles: ["Traditional", "Glowing", "Animated"],
  },
  {
    id: "birthday",
    slug: "birthday",
    title: "Birthday",
    description: "Fun, vibrant, and personalized birthday stories.",
    category: "personal",
    styles: ["Playful", "Minimal", "Cinematic"],
  },
  {
    id: "corporate",
    slug: "corporate-events",
    title: "Corporate Events",
    description: "Professional and sleek recaps and promos.",
    category: "corporate",
    styles: ["Modern", "Premium", "Bold"],
  },
  {
    id: "ganesh-chaturthi",
    slug: "ganesh-chaturthi",
    title: "Ganesh Chaturthi",
    description: "Grand and divine visuals for the festive season.",
    category: "festival",
    styles: ["Traditional", "Royal"],
  },
];
