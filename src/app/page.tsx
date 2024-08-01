import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

import TestimonialCards from "@/components/TestimonialCards";
import UpCominWebinar from "@/components/UpCominWebinar";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-black dark:text-white">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <FeaturedCourses />
      <WhyChoose />
      <TestimonialCards />
      <UpCominWebinar />
      
  </div>
  );
}
