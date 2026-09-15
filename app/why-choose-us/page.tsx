import WhyChooseUsV2 from "@/components/section/WhyChooseUsV2/page";
import ExploreBanner from "@/components/section/ExploreBanner/page";
import { getAppData } from "@/components/lib/getAppData";

export default function WhyChooseUsPage() {
  const fullData = getAppData();
  const whyChooseUsData = fullData.sections.WhyChooseUsV2.variants["variant-1"];
  const exploreBannerData = fullData.sections.ExploreBanner.variants["variant-1"];

  return (
    <main className="min-h-screen">
      <WhyChooseUsV2 data={whyChooseUsData} />
      <ExploreBanner data={exploreBannerData} />
    </main>
  );
}
