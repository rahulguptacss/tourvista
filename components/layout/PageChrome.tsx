"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BreadcrumbBanner from "../section/BreadcrumbBanner/page";
import CarAnimation from "../section/CarAnimation/page";

// Helper to format slug to Title Case
function formatTitle(slug: string) {
  if (!slug) return "";
  
  // Custom overrides for specific routes
  if (slug.toLowerCase() === "faqs") return "FAQs";
  if (slug.toLowerCase() === "our-team") return "Our Team";
  
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function PageChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentRoute = pathname === "/" ? "home" : pathname.replace(/^\//, "");
  const baseRoute = currentRoute.split("/")[0];
  const isHome = currentRoute === "home";

  const [showCar, setShowCar] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowCar(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Generic background image for all breadcrumbs
  const defaultBg = "/breadcrumb/inner-banner.jpg";
  const title = formatTitle(baseRoute);

  return (
    <>
      {!isHome && title && (
        <BreadcrumbBanner
          title={title}
          backgroundImage={defaultBg}
          showBreadcrumb={true}
        />
      )}
      <main id="main-content">{children}</main>
      {showCar && <CarAnimation />}
    </>
  );
}
