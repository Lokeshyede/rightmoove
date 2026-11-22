import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | RIGHTMOVE",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 sm:px-12 bg-[#070B12] text-white">
      <div className="max-w-xl mx-auto text-center py-24">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#009DFF] mb-3 block">
          ERROR 404 // ROUTE NOT FOUND
        </span>

        <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight mb-6">
          LOST IN{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087BFF] via-[#009DFF] to-white glow-text">
            TRANSIT.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#A7B0C0] font-sans leading-relaxed mb-10 max-w-md mx-auto">
          The requested URL does not exist or may have been relocated. Return to our flagship
          platform or explore our digital growth disciplines below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase btn-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Flagship Home</span>
          </Link>
          <Link
            href="/services/digital-marketing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold tracking-wider uppercase btn-secondary"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-8 border-t border-white/[0.08]">
          <p className="text-xs font-mono text-white/50 mb-3 uppercase tracking-wider">
            Popular Destinations
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono">
            <Link href="/services/meta-ads" className="text-[#009DFF] hover:underline">
              Meta Ads
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/services/google-ads" className="text-[#009DFF] hover:underline">
              Google Ads
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/services/performance-marketing" className="text-[#009DFF] hover:underline">
              Performance Marketing
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/#contact" className="text-[#009DFF] hover:underline">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
