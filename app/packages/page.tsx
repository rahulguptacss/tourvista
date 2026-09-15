import PackagesList from "@/components/section/PackagesList/page";
import CTABanner from "@/components/section/CTABanner/page";
import { getAppData } from "@/components/lib/getAppData";

export default function PackagesPage() {
  const fullData = getAppData();
  const packagesListData = fullData.sections.PackagesList.variants["variant-1"];
  const ctaBannerData = fullData.sections.CTABanner.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col bg-white">
        <PackagesList data={packagesListData} />
        <CTABanner data={ctaBannerData} className="!pt-0 !pb-4 md:!pb-6" />
      </div>
    </div>
  );
}
