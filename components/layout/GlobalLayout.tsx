import Header from "../section/Header/page";
import Topbar from "../section/Topbar/page";
import Footer from "../section/Footer/page";
import PageChrome from "./PageChrome";
import BackToTop from "./BackToTop";
import type { FooterData, HeaderData, TopbarData } from "../types";

interface GlobalLayoutProps {
  children: React.ReactNode;
  headerData: HeaderData;
  topbarData: TopbarData;
  footerData: FooterData;
}

export default function GlobalLayout({
  children,
  headerData,
  topbarData,
  footerData,
}: GlobalLayoutProps) {
  return (
    <>
      <header>
        <Topbar data={topbarData} />
        <Header data={headerData} />
      </header>
      <PageChrome>{children}</PageChrome>
      <Footer data={{ footer: footerData, header: headerData }} />
      <BackToTop />
    </>
  );
}
