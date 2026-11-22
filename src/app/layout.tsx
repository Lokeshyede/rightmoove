
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
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
  title: "RIGHTMOVE | Performance Marketing & Strategy",
  description:
    "RIGHTMOVE is a creative performance marketing agency helping brands grow through digital advertising, brand strategy, creative campaigns, and technology.",
  metadataBase: new URL(SITE_CONFIG.url),
  applicationName: "RIGHTMOVE",
  keywords: [
    "RIGHTMOVE",
    "Performance Marketing",
    "Brand Strategy",
    "Creative Agency",
    "Digital Advertising",
    "Meta Ads",
    "Google Ads",
    "Website Development",
    "Video Production"
  ],
  authors: [{ name: "RIGHTMOVE Creative Studio" }],
  creator: "RIGHTMOVE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "RIGHTMOVE | Performance Marketing & Strategy",
    description:
      "RIGHTMOVE is a creative performance marketing agency helping brands grow through digital advertising, brand strategy, creative campaigns, and technology.",
    siteName: "RIGHTMOVE",
    images: [
      {
        url: SITE_CONFIG.logo,
        width: 1200,
        height: 630,
        alt: "RIGHTMOVE Performance Marketing & Strategy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGHTMOVE | Performance Marketing & Strategy",
    description:
      "RIGHTMOVE is a creative performance marketing agency helping brands grow through digital advertising, brand strategy, creative campaigns, and technology.",
    images: [SITE_CONFIG.logo]
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
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
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
