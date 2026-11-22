import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems: BreadcrumbItem[] = [
    { name: "Home", url: SITE_CONFIG.url },
    ...items
  ];

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`
    }))
  };

  return (
    <>
      <JsonLd data={breadcrumbListSchema} id="breadcrumb-schema" />
      <nav aria-label="Breadcrumb" className="w-full py-4 text-xs font-mono">
        <ol className="flex items-center flex-wrap gap-2 text-white/60">
          <li className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Link href="/" className="flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-[#009DFF]" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-white/30" />
                {isLast ? (
                  <span
                    className="text-[#009DFF] font-semibold truncate max-w-[240px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-white transition-colors truncate max-w-[180px] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
