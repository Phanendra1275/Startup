export interface Testimonial {
  id: string;
  clientName: string;
  serviceUsed: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Rohan M.",
    serviceUsed: "Website Development",
    quote: "Nova completely transformed our digital presence. The attention to detail and cinematic feel of the website exceeded our expectations.",
  },
  {
    id: "t2",
    clientName: "Aarti & Vikram",
    serviceUsed: "AI Wedding Video",
    quote: "We wanted something unique for our wedding memories. The AI video was magical, capturing the exact royal aesthetic we described.",
  },
  {
    id: "t3",
    clientName: "Kavya S.",
    serviceUsed: "Branding",
    quote: "They understood our brand's heritage and translated it perfectly into a modern, minimal design language. Highly recommended.",
  },
];
