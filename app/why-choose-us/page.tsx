
import WhyChooseUsV2 from "@/components/section/WhyChooseUsV2/page";
import ExploreBanner from "@/components/section/ExploreBanner/page";
import data from "@/components/data/data.json";

export default function WhyChooseUsPage() {

  const whyChooseUsData = data.sections.WhyChooseUsV2.variants["variant-1"];
  const exploreBannerData = data.sections.ExploreBanner.variants["variant-1"];

  return (
    <main className="min-h-screen">

      
      <WhyChooseUsV2 data={whyChooseUsData} />
      
      <ExploreBanner data={exploreBannerData} />
    </main>
  );
}
