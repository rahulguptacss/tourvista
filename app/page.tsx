import fs from 'fs';
import path from 'path';
import Hero from '../components/section/Hero/page';
import Destinations from '../components/section/Destinations/page';
import Recommendation from '../components/section/Recommendation/page';
import Packages from '../components/section/Packages/page';
import VideoBanner from '../components/section/VideoBanner/page';
import Stats from '../components/section/Stats/page';
import Steps from '../components/section/Steps/page';
import WhyChooseUs from '../components/section/WhyChooseUs/page';
import Testimonials from '../components/section/Testimonials/page';
import TravelExperience from '../components/section/TravelExperience/page';
import CTABanner from '../components/section/CTABanner/page';

const componentMap: Record<string, any> = {
  "Hero": Hero,
  "Destinations": Destinations,
  "Recommendation": Recommendation,
  "Packages": Packages,
  "VideoBanner": VideoBanner,
  "Stats": Stats,
  "Steps": Steps,
  "WhyChooseUs": WhyChooseUs,
  "Testimonials": Testimonials,
  "TravelExperience": TravelExperience,
  "CTABanner": CTABanner
};

export default async function Home() {
  // Read data from data.json
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents);

  const pages = fullData.pages;
  const sections = fullData.sections;
  const components = pages.home.components;

  return (
    <main className="min-h-screen">
      {components.map((comp: any, index: number) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;

        // Resolve the actual data from the sections -> variants map
        const sectionData = sections[comp.key]?.variants[comp.component];
        if (!sectionData) return null;

        return (
          <Component key={index} data={sectionData} />
        );
      })}
    </main>
  );
}
