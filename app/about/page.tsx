import Recommendation from "@/components/section/Recommendation/page";
import Steps from "@/components/section/Steps/page";
import WhyChooseUs from "@/components/section/WhyChooseUs/page";
import { getAppData } from "@/components/lib/getAppData";

export default function AboutPage() {
  const fullData = getAppData();
  const recommendationData = fullData.sections.Recommendation.variants["variant-1"];
  const stepsData = fullData.sections.Steps.variants["variant-1"];
  const whyChooseUsData = fullData.sections.WhyChooseUs.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col gap-10 md:gap-20 pt-0 pb-0 bg-white">
        <Recommendation data={recommendationData} isAboutPage={true} />
        <Steps data={stepsData} />
        <WhyChooseUs data={whyChooseUsData} />
      </div>
    </div>
  );
}
