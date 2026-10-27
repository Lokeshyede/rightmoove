import { HeroSection } from "@/components/sections/HeroSection";
import { BrandAdvertisingSection } from "@/components/sections/BrandAdvertisingSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { WebDevelopmentSection } from "@/components/sections/WebDevelopmentSection";
import { VideoProductionSection } from "@/components/sections/VideoProductionSection";
import { BusinessTransformationSection } from "@/components/sections/BusinessTransformationSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-[#070B12]">
      {/* 1. Existing Hero and Cinematic Video Sections (Scenes 01 - 07) */}
      <HeroSection />
      <BrandAdvertisingSection />
      <SocialMediaSection />
      <WebDevelopmentSection />
      <VideoProductionSection />
      <BusinessTransformationSection />
      <FinalCtaSection />

      {/* 2. OUR WORK — Two Full-Width Cinematic Video Showcases */}
      <OurWorkSection />

      {/* 3. DISCIPLINES / SERVICES */}
      <ServicesOverview />

      {/* 4. Remaining Existing Sections */}
      <PortfolioGallery />
      <ContactSection />
    </div>
  );
}

