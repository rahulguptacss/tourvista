import AwardsRecognition from "../../components/section/AwardsRecognition/page";
import VideoBanner from "../../components/section/VideoBanner/page";
import Stats from "../../components/section/Stats/page";
import { getAppData } from "@/components/lib/getAppData";

export default function AwardsPage() {
  const fullData = getAppData();
  const awardsRecognitionData = fullData.sections.AwardsRecognition.variants["variant-1"];
  const videoBannerData = fullData.sections.VideoBanner.variants["variant-1"];
  const statsData = fullData.sections.Stats.variants["variant-1"];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <AwardsRecognition data={awardsRecognitionData} />
      <div className="pt-2 md:pt-8 relative z-20">
        <VideoBanner data={videoBannerData} />
      </div>
      <Stats data={statsData} />
    </main>
  );
}
