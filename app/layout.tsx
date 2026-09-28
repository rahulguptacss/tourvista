import type { Metadata, Viewport } from "next";
import "./globals.css";
import { dancingScript, kaushan, poppins } from "./fonts";
import GlobalLayout from "@/components/layout/GlobalLayout";
import { getAppData } from "@/components/lib/getAppData";

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
        >
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
