export interface PortfolioVideoProject {
  id: string;
  title?: string;
  client?: string;
  category?: string;
  src: string;
  fallbackSrc?: string;
  poster?: string;
  aspectRatio?: "16/9" | "21/9" | "auto";
  transitionType: "curtain-reveal" | "scale-parallax" | "mask-zoom" | "shutter";
  description?: string;
}

export const PORTFOLIO_VIDEOS: PortfolioVideoProject[] = [
  {
    id: "portfolio-01",
    title: "COMMERCIAL DIRECTION & FILM",
    client: "GLOBAL LUXURY CAMPAIGN",
    category: "Commercial Film // Direction",
    src: "/videos/our-work-01.mp4",
    poster: "/videos/posters/our-work-01.jpg",
    aspectRatio: "21/9",
    transitionType: "curtain-reveal",
    description: "High-production brand commercial designed to capture market dominance, evoke desire, and command premium authority."
  },
  {
    id: "portfolio-02",
    title: "HIGH-RETENTION BRAND MOTION",
    client: "PERFORMANCE MOTION SUITE",
    category: "Brand Motion // Creative Testing",
    src: "/videos/our-work-02.mp4",
    poster: "/videos/posters/our-work-02.jpg",
    aspectRatio: "16/9",
    transitionType: "scale-parallax",
    description: "Dynamic motion identity and cinematic advertising assets engineered for maximum retention and brand recall."
  }
];
