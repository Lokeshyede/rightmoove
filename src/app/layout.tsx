import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#070B12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "RIGHTMOVE | Digital Marketing & Meta Ads Agency",
    template: "%s | RIGHTMOVE"
  },
  description:
    "RIGHTMOVE helps businesses grow through performance marketing, Meta Ads, Google Ads, social media marketing, creative campaigns and website development. Explore our digital growth solutions.",
  applicationName: "RIGHTMOVE",
  authors: [{ name: "RIGHTMOVE Agency", url: SITE_CONFIG.url }],
  creator: "RIGHTMOVE",
  publisher: "RIGHTMOVE",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: "RIGHTMOVE",
    title: "RIGHTMOVE | Digital Marketing & Meta Ads Agency",
    description:
      "RIGHTMOVE helps businesses grow through performance marketing, Meta Ads, Google Ads, social media marketing, creative campaigns and website development. Explore our digital growth solutions.",
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
        width: 1200,
        height: 630,
        alt: "RIGHTMOVE — Digital Marketing & Meta Ads Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGHTMOVE | Digital Marketing & Meta Ads Agency",
    description:
      "RIGHTMOVE helps businesses grow through performance marketing, Meta Ads, Google Ads, social media marketing, creative campaigns and website development.",
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.logo}`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/logo/Screenshot 2026-10-26 132522.png",
    shortcut: "/logo/Screenshot 2026-10-26 132522.png",
    apple: "/logo/Screenshot 2026-10-26 132522.png"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global structured data: Organization and verified ServiceArea business
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
          caption: SITE_CONFIG.logoAlt
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: SITE_CONFIG.contacts.email,
          url: `${SITE_CONFIG.url}/#contact`,
          availableLanguage: ["English", "Hindi"]
        },
        sameAs: [
          SITE_CONFIG.contacts.socials.instagram,
          SITE_CONFIG.contacts.socials.linkedin,
          SITE_CONFIG.contacts.socials.twitter,
          SITE_CONFIG.contacts.socials.youtube
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_CONFIG.url}/#localbusiness`,
        name: "RIGHTMOVE Digital Marketing Agency",
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
        image: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
        description: SITE_CONFIG.description,
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Gondia" },
          { "@type": "City", name: "Nagpur" },
          { "@type": "City", name: "Balaghat" },
          { "@type": "City", name: "Bhopal" },
          { "@type": "City", name: "Indore" },
          { "@type": "City", name: "Raipur" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "State", name: "Madhya Pradesh" },
          { "@type": "State", name: "Chhattisgarh" },
          { "@type": "Country", name: "India" }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Marketing & Advertising Services",
          itemListElement: SITE_CONFIG.servicePages.map((svc) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: svc.name,
              url: `${SITE_CONFIG.url}${svc.path}`,
              description: svc.description
            }
          }))
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <head>
        <JsonLd data={organizationSchema} id="global-organization-schema" />
      </head>
      <body className="min-h-screen bg-[#070B12] text-white font-sans antialiased selection:bg-[#087BFF] selection:text-white flex flex-col justify-between">
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1674223914188469');
              fbq('track', 'PageView');
            `
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1674223914188469&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
