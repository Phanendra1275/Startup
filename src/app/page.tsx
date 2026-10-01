import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { OccasionStudioTeaser } from "@/components/sections/OccasionStudioTeaser";
import { SelectedWorkTeaser } from "@/components/sections/SelectedWorkTeaser";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <OccasionStudioTeaser />
      <SelectedWorkTeaser />
      <BeforeAfter />
      <HowItWorks />
      <PricingTeaser />
      <Testimonials />
    </>
  );
}
