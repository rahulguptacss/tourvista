"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BreadcrumbBanner from "../section/BreadcrumbBanner/page";
import CarAnimation from "../section/CarAnimation/page";
import type { PackagesHeroData } from "../types";

export default function PageChrome({
  children,
  banners,
}: {
  children: React.ReactNode;
  banners: Record<string, PackagesHeroData>;
}) {
  const pathname = usePathname();
  const currentRoute = pathname === "/" ? "home" : pathname.replace(/^\//, "");
  const baseRoute = currentRoute.split("/")[0];
  const isHome = currentRoute === "home";

  let currentBanner = banners[currentRoute] || banners[baseRoute];

  if (currentBanner && baseRoute) {
    if (baseRoute === "team-detail" && currentRoute !== "team-detail") {
      currentBanner = { ...currentBanner, title: "Team Detail" };
    } else if (baseRoute === "service-detail" && currentRoute !== "service-detail") {
      currentBanner = { ...currentBanner, title: "Service Detail" };
    } else if (baseRoute === "package-detail" && currentRoute !== "package-detail") {
      currentBanner = { ...currentBanner, title: "Package Detail" };
    } else if (baseRoute === "blog-detail" && currentRoute !== "blog-detail") {
      currentBanner = { ...currentBanner, title: "Blog Detail" };
    } else if (baseRoute === "destinations" && currentRoute !== "destinations") {
      const slug = currentRoute.split("/")[1] || "";
      const title = decodeURIComponent(slug)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
      currentBanner = { ...currentBanner, title };
    }
  }

  const [showCar, setShowCar] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowCar(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      {!isHome && currentBanner && (
        <BreadcrumbBanner
          title={currentBanner.title}
          backgroundImage={currentBanner.backgroundImage}
          showBreadcrumb={currentBanner.showBreadcrumb !== false}
        />
      )}
      <main id="main-content">{children}</main>
      {showCar && (isHome || currentBanner) && <CarAnimation />}
    </>
  );
}
