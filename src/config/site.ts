export interface ServiceItem {
  name: string;
  slug: string;
  path: string;
  description: string;
}

export interface LocationItem {
  city: string;
  state: string;
  slug: string;
  path: string;
  focus: string;
}

export const SITE_CONFIG = {
  name: "RIGHTMOVE",
  legalName: "RIGHTMOVE Performance Marketing & Strategy",
  tagline: "Digital Marketing & Meta Ads Agency",
  title: "RIGHTMOVE | Digital Marketing & Meta Ads Agency",
  description:
    "RIGHTMOVE helps businesses grow through performance marketing, Meta Ads, Google Ads, social media marketing, creative campaigns and website development. Explore our digital growth solutions.",
  url: "https://www.rightmovemarketing.in",
  logo: "/logo/Screenshot 2026-10-26 132522.png",
  logoAlt: "RIGHTMOVE — Digital Marketing & Meta Ads Agency",
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#our-work" },
    { label: "Services", href: "/#services-overview" },
    { label: "Contact", href: "/#contact" }
  ],

  services: [
    "Digital Marketing",
    "Meta Ads",
    "Google Ads",
    "Social Media Marketing",
    "Performance Marketing",
    "Website Development"
  ],

  servicePages: [
    {
      name: "Digital Marketing",
      slug: "digital-marketing",
      path: "/services/digital-marketing",
      description: "Full-funnel digital marketing strategies engineered to scale brand visibility, acquire customers, and maximize ROI."
    },
    {
      name: "Meta Ads",
      slug: "meta-ads",
      path: "/services/meta-ads",
      description: "High-ROAS Facebook & Instagram Ads campaigns using dynamic creative testing and algorithmic audience targeting."
    },
    {
      name: "Google Ads",
      slug: "google-ads",
      path: "/services/google-ads",
      description: "Intent-driven Google Search, Performance Max, and Display campaigns designed to capture immediate buyer demand."
    },
    {
      name: "Social Media Marketing",
      slug: "social-media-marketing",
      path: "/services/social-media-marketing",
      description: "Engaging social media campaigns, high-retention vertical reels, and brand narrative architectures that drive loyalty."
    },
    {
      name: "Performance Marketing",
      slug: "performance-marketing",
      path: "/services/performance-marketing",
      description: "Revenue-focused media buying, conversion rate optimization (CRO), analytics telemetry, and scalable acquisition funnels."
    },
    {
      name: "Website Development",
      slug: "website-development",
      path: "/services/website-development",
      description: "Fast, modern Next.js websites and high-converting landing pages built with bleeding-edge technology."
    }
  ] as ServiceItem[],

  targetLocations: [
    {
      city: "Gondia",
      state: "Maharashtra",
      slug: "digital-marketing-gondia",
      path: "/locations/digital-marketing-gondia",
      focus: "Agro-commerce, local enterprise, healthcare & retail digital transformation"
    },
    {
      city: "Nagpur",
      state: "Maharashtra",
      slug: "digital-marketing-nagpur",
      path: "/locations/digital-marketing-nagpur",
      focus: "Logistics, healthcare, coaching institutes, real estate & B2B manufacturing"
    },
    {
      city: "Balaghat",
      state: "Madhya Pradesh",
      slug: "digital-marketing-balaghat",
      path: "/locations/digital-marketing-balaghat",
      focus: "Regional SMEs, mining, retail merchants & multi-channel local growth"
    },
    {
      city: "Bhopal",
      state: "Madhya Pradesh",
      slug: "digital-marketing-bhopal",
      path: "/locations/digital-marketing-bhopal",
      focus: "Higher education, administrative commerce, manufacturing & healthcare"
    },
    {
      city: "Indore",
      state: "Madhya Pradesh",
      slug: "digital-marketing-indore",
      path: "/locations/digital-marketing-indore",
      focus: "D2C brands, tech startups, pharma, commercial retail & hospitality"
    },
    {
      city: "Raipur",
      state: "Chhattisgarh",
      slug: "digital-marketing-raipur",
      path: "/locations/digital-marketing-raipur",
      focus: "Industrial enterprises, steel & mineral commerce, luxury retail & real estate"
    }
  ] as LocationItem[],

  contacts: {
    email: "contact@rightmovemarketing.in",
    phone: "+91 98765 43210", // Owner can replace with verified line
    whatsappNumber: "919876543210",
    whatsapp: "https://wa.me/?text=Hello%20RIGHTMOVE%20team,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      youtube: "https://youtube.com"
    }
  }
};
