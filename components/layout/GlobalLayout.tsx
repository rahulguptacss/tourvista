import Header from "../section/Header/page";
import Topbar from "../section/Topbar/page";
import Footer from "../section/Footer/page";
import PageChrome from "./PageChrome";
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
  return (
    <>
      <header>
        <Topbar data={topbarData} />
        <Header data={headerData} />
      </header>
      <PageChrome banners={banners}>{children}</PageChrome>
      <Footer data={{ footer: footerData, header: headerData }} />
    </>
  );
}
