import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <PricingTeaser />
      <Testimonials />
    </>
  );
}

