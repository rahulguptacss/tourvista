
import MissionVision from "@/components/section/MissionVision/page";
import VideoBanner from "@/components/section/VideoBanner/page";
import Stats from "@/components/section/Stats/page";
import fs from 'fs';
import path from 'path';

export default function MissionVisionPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents);
  

  const missionVisionData = fullData.sections.MissionVision.variants["variant-1"];
  const videoBannerData = fullData.sections.VideoBanner.variants["variant-1"];
  const statsData = fullData.sections.Stats.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Main Content Sections */}
      <div className="flex flex-col pt-0 pb-0 bg-white">
        <MissionVision data={missionVisionData} />
        <VideoBanner data={videoBannerData} />
        <Stats data={statsData} />
      </div>
    </div>
  );
}
