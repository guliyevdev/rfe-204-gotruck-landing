import { HeroSection } from "@/app/components/sections/main/hero";
import { FeaturesSection } from "@/app/components/sections/main/features";
import { ClientSection } from "@/app/components/sections/main/client";
import { TestimonialSection } from "@/app/components/sections/main/testimonial";
import { FaqSection } from "@/app/components/sections/main/faq";

export default function Home() {
  return (
    <>
      {/* =========== Hero Section Start =========== */}
      <HeroSection />
      {/* =========== Hero Section End =========== */}
      {/* =========== feature Section Start =========== */}
        <FeaturesSection />
      {/* =========== feature Section end =========== */}
      {/* =========== clients Section Start =========== */}
        {/* <ClientSection /> */}
      {/* =========== clients Section end =========== */}
      {/* =========== testimonial Section Start =========== */}
      {/* <TestimonialSection /> */}
      {/* =========== testimonial Section end =========== */}
      {/* =========== faq Section start =========== */}
       <FaqSection /> 
      {/* =========== faq Section end =========== */}
    </>

  );
}
