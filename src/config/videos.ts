export interface VideoAsset {
  id: string;
  role: string;
  src: string;
  fallbackSrc?: string;
  poster: string;
  title: string;
  subtitle: string;
  description: string;
}

export const VIDEOS: Record<string, VideoAsset> = {
  hero: {
    id: "hero",
    role: "Cinematic Hero",
    src: "/videos/hero.mp4",
    fallbackSrc: "/videos/hero.mp4.mp4",
    poster: "/videos/posters/hero.jpg",
    title: "WE MAKE BRANDS IMPOSSIBLE TO IGNORE.",
    subtitle: "PERFORMANCE MARKETING & STRATEGY",
    description: "We combine creativity, strategy, and technology to build brands that stand out and businesses that grow."
  },
  brandAdvertising: {
    id: "brand-advertising",
    role: "Brand Advertising Showcase",
    src: "/videos/brand-advertising.mp4",
    fallbackSrc: "/videos/brand-advertising.mp4.mp4",
    poster: "/videos/posters/brand-advertising.jpg",
    title: "WE DON'T JUST CREATE ADS. WE CREATE IMPACT.",
    subtitle: "BRAND ADVERTISING & COMMERCE",
    description: "High-production brand campaigns designed to capture market dominance, evoke desire, and command premium pricing."
  },
  socialMedia: {
    id: "social-media",
    role: "Social Media & Performance Marketing",
    src: "/videos/social-media.mp4",
    fallbackSrc: "/videos/social-media.mp4.mp4",
    poster: "/videos/posters/social-media.jpg",
    title: "CREATIVE THAT CAPTURES ATTENTION. STRATEGY THAT DRIVES RESULTS.",
    subtitle: "PERFORMANCE MARKETING & MEDIA BUYING",
    description: "Engineered content architectures and multi-channel media deployment designed for sustainable customer acquisition."
  },
  webDevelopment: {
    id: "web-development",
    role: "Website & App Development",
    src: "/videos/web-development.mp4",
    fallbackSrc: "/videos/web-development.mp4.mp4",
    poster: "/videos/posters/web-development.jpg",
    title: "DIGITAL EXPERIENCES BUILT TO PERFORM.",
    subtitle: "FLAGSHIP WEB & APP ENGINEERING",
    description: "Bespoke digital platforms, high-conversion interfaces, and seamless applications engineered with bleeding-edge technology."
  },
  videoProduction: {
    id: "video-production",
    role: "Video Production & Reels",
    src: "/videos/video-production.mp4",
    fallbackSrc: "/videos/video-production.mp4.mp4",
    poster: "/videos/posters/video-production.jpg",
    title: "EVERY FRAME TELLS A STORY.",
    subtitle: "CINEMATIC PRODUCTION & MOTION",
    description: "From high-end commercial films to scroll-stopping vertical storytelling, we create visuals designed to leave an unforgettable impression."
  },
  businessTransformation: {
    id: "business-transformation",
    role: "Business Transformation & Case Studies",
    src: "/videos/business-transformation.mp4",
    fallbackSrc: "/videos/business-transformation.mp4.mp4",
    poster: "/videos/posters/business-transformation.jpg",
    title: "YOUR BUSINESS. OUR NEXT BIG MOVE.",
    subtitle: "STRATEGIC SCALE & COMMERCE TRANSFORMATION",
    description: "Synthesizing market positioning, full-funnel digital infrastructure, and creative execution into measurable business acceleration."
  },
  finalCta: {
    id: "final-cta",
    role: "Final Cinematic Call To Action",
    src: "/videos/final-cta.mp4",
    fallbackSrc: "/videos/hero.mp4",
    poster: "/videos/posters/final-cta.jpg",
    title: "YOUR NEXT MOVE STARTS HERE.",
    subtitle: "LET'S BUILD SOMETHING EXTRAORDINARY",
    description: "Partner with a dedicated multidisciplinary creative & growth team. Let's make the right move for your brand."
  }
};
