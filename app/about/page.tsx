import Recommendation from "@/components/section/Recommendation/page";
import Steps from "@/components/section/Steps/page";
import WhyChooseUs from "@/components/section/WhyChooseUs/page";

import fs from 'fs';
import path from 'path';
import { Poppins } from "next/font/google";
import { AppData } from "@/components/types";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function AboutPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData: AppData = JSON.parse(fileContents);
  

  const recommendationData = fullData.sections.Recommendation.variants["variant-1"];
  const stepsData = fullData.sections.Steps.variants["variant-1"];
  const whyChooseUsData = fullData.sections.WhyChooseUs.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">


      {/* Main Content Sections */}
      <div className="flex flex-col gap-10 md:gap-20 pt-0 pb-0 bg-white">
        <Recommendation data={recommendationData} isAboutPage={true} />
        <Steps data={stepsData} />
        <WhyChooseUs data={whyChooseUsData} />
      </div>
    </div>
  );
}

