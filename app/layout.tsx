import type { Metadata, Viewport } from "next";
import "./globals.css";
import { dancingScript, kaushan, poppins } from "./fonts";
import GlobalLayout from "@/components/layout/GlobalLayout";
import { getAppData } from "@/components/lib/getAppData";
import type { PackagesHeroData } from "@/components/types";

export const metadata: Metadata = {
  metadataBase: new URL("https://tourvista-rust.vercel.app"),
  title: "TourVista | Explore The World",
  description:
    "Discover breathtaking destinations, unforgettable experiences, and the joy of travel with TourVista.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "TourVista | Explore The World",
    description:
      "Discover breathtaking destinations, unforgettable experiences, and the joy of travel with TourVista.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fullData = getAppData();
  const headerData = fullData.common.Header;
  const topbarData = fullData.common.Topbar;
  const footerData = fullData.common.Footer;
  const { sections } = fullData;

  const banners: Record<string, PackagesHeroData> = {
    about: sections.AboutHero.variants["variant-1"],
    awards: sections.AwardsHero.variants["variant-1"],
    "mission-vision": sections.MissionVisionHero.variants["variant-1"],
    "why-choose-us": sections.WhyChooseUsHero.variants["variant-1"],
    "our-team": sections.OurTeamHero.variants["variant-1"],
    "team-detail": sections.TeamDetailHero.variants["variant-1"],
    services: sections.ServicesHero.variants["variant-1"],
    "service-detail": sections.ServiceDetail.variants["variant-1"].hero,
    packages: sections.PackagesHero.variants["variant-1"],
    destinations: sections.DestinationsHero.variants["variant-1"],
    gallery: sections.GalleryHero.variants["variant-1"],
    testimonials: sections.TestimonialsHero.variants["variant-1"],
    faqs: sections.FaqHero.variants["variant-1"],
    blog: sections.BlogHero.variants["variant-1"],
    "blog-detail": sections.BlogDetailHero.variants["variant-1"],
    "package-detail": sections.PackageDetailHero.variants["variant-1"],
    contact: sections.ContactHero.variants["variant-1"],
    partners: sections.PartnersHero.variants["variant-1"],
    enquiry: sections.EnquiryHero.variants["variant-1"],
    "privacy-policy": sections.PrivacyPolicyHero.variants["variant-1"],
    terms: sections.TermsConditionsHero.variants["variant-1"],
    "terms-conditions": sections.TermsConditionsHero.variants["variant-1"],
    "terms-and-conditions": sections.TermsConditionsHero.variants["variant-1"],
    refund: sections.RefundPolicyHero.variants["variant-1"],
    "refund-policy": sections.RefundPolicyHero.variants["variant-1"],
    payment: sections.PaymentPolicyHero.variants["variant-1"],
    "payment-policy": sections.PaymentPolicyHero.variants["variant-1"],
    sitemap: sections.SitemapHero.variants["variant-1"],
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dancingScript.variable} ${kaushan.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#051036] focus:shadow-lg"
        >
          Skip to main content
        </a>
        <GlobalLayout
          headerData={headerData}
          topbarData={topbarData}
          footerData={footerData}
          banners={banners}
        >
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
