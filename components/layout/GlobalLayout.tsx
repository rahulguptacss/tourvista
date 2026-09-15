"use client";

import { usePathname } from "next/navigation";
import Header from "../section/Header/page";
import Topbar from "../section/Topbar/page";
import Footer from "../section/Footer/page";
import CarAnimation from "../section/CarAnimation/page";
import BreadcrumbBanner from "../section/BreadcrumbBanner/page";

import type { FooterData, HeaderData, PackagesHeroData, TopbarData } from "../types";

interface GlobalLayoutProps {
  children: React.ReactNode;
  headerData: HeaderData;
  topbarData: TopbarData;
  footerData: FooterData;
  banners: Record<string, PackagesHeroData>;
}

export default function GlobalLayout({
  children,
  headerData,
  topbarData,
  footerData,
  banners,
}: GlobalLayoutProps) {
  const pathname = usePathname();

  const currentRoute = pathname === "/" ? "home" : pathname.replace(/^\//, "");
  const baseRoute = currentRoute.split("/")[0];

  const isHome = currentRoute === "home";

  let currentBanner = banners[currentRoute] || banners[baseRoute];

  if (currentBanner && baseRoute) {
    if (baseRoute === "team-detail" && currentRoute !== "team-detail") {
      currentBanner = {
        ...currentBanner,
        title: "Team Detail",
      };
    } else if (baseRoute === "service-detail" && currentRoute !== "service-detail") {
      currentBanner = {
        ...currentBanner,
        title: "Service Detail",
      };
    } else if (baseRoute === "package-detail" && currentRoute !== "package-detail") {
      currentBanner = {
        ...currentBanner,
        title: "Package Detail",
      };
    } else if (baseRoute === "blog-detail" && currentRoute !== "blog-detail") {
      currentBanner = {
        ...currentBanner,
        title: "Blog Detail",
      };
    }
  }

  return (
    <>
      <Topbar data={topbarData} />
      <Header data={headerData} />
      
      {!isHome && currentBanner && (
        <BreadcrumbBanner
          title={currentBanner.title}
          backgroundImage={currentBanner.backgroundImage}
          showBreadcrumb={currentBanner.showBreadcrumb !== false}
        />
      )}
      
      <main className="flex-grow">{children}</main>
      
      <CarAnimation />
      <Footer data={{ footer: footerData, header: headerData }} />
    </>
  );
}
