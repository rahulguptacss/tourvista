"use client";

import { usePathname } from "next/navigation";
import Header from "../section/Header/page";
import Topbar from "../section/Topbar/page";
import Footer from "../section/Footer/page";
import CarAnimation from "../section/CarAnimation/page";
import BreadcrumbBanner from "../section/BreadcrumbBanner/page";

interface GlobalLayoutProps {
  children: React.ReactNode;
  headerData: any;
  topbarData: any;
  footerData: any;
  banners: Record<string, { title: string; backgroundImage: string }>;
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
        />
      )}
      
      <main className="flex-grow">{children}</main>
      
      <CarAnimation />
      <Footer data={{ footer: footerData, header: headerData }} />
    </>
  );
}
