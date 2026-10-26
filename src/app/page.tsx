import { HeroSection } from "@/components/sections/HeroSection";
import { BrandAdvertisingSection } from "@/components/sections/BrandAdvertisingSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { WebDevelopmentSection } from "@/components/sections/WebDevelopmentSection";
import { VideoProductionSection } from "@/components/sections/VideoProductionSection";
import { BusinessTransformationSection } from "@/components/sections/BusinessTransformationSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-[#070B12]">
      {/* 01. Scene 1 — Brand Introduction (Full-Screen hero.mp4) */}
      <HeroSection />

      {/* 02. Scene 2 — Brand Advertising (Full-Screen brand-advertising.mp4) */}
      <BrandAdvertisingSection />

      {/* 03. Scene 3 — Social Media & Performance (Full-Screen social-media.mp4) */}
      <SocialMediaSection />

      {/* 04. Scene 4 — Digital Experiences (Full-Screen web-development.mp4) */}
      <WebDevelopmentSection />

      {/* 05. Scene 5 — Video Production (Full-Screen video-production.mp4) */}
      <VideoProductionSection />

      {/* 06. Scene 6 — Business Transformation (Full-Screen business-transformation.mp4) */}
      <BusinessTransformationSection />

      {/* 07. Scene 7 — Final Contact Scene (Full-Screen final-cta.mp4) */}
      <FinalCtaSection />

      {/* 08. Compact Editorial Portfolio Gallery */}
      <PortfolioGallery />

      {/* 09. Short List of Disciplines / Services */}
      <ServicesOverview />

      {/* 10. Minimal Contact Form */}
      <ContactSection />
    </div>
  );
}
