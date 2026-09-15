import OurTeam from "@/components/section/OurTeam/page";
import CTABanner from "@/components/section/CTABanner/page";
import { getAppData } from "@/components/lib/getAppData";

export default function OurTeamPage() {
  const fullData = getAppData();
  const ourTeamData = fullData.sections.OurTeam.variants["variant-1"];
  const ctaBannerData = fullData.sections.CTABanner.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col bg-white">
        <OurTeam data={ourTeamData} />
        <CTABanner data={ctaBannerData} />
      </div>
    </div>
  );
}
