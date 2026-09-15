
import OurTeam from "@/components/section/OurTeam/page";
import CTABanner from "@/components/section/CTABanner/page";
import fs from 'fs';
import path from 'path';

export default function OurTeamPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents);
  
  const ourTeamData = fullData.sections.OurTeam.variants["variant-1"];

  const ctaBannerData = fullData.sections?.CTABanner?.variants["variant-1"] || {
    "backgroundImage": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2000",
    "subtitle": "Book Your First Trip",
    "titleLine1": "With Us Your Journey",
    "titleLine2": "Secured And",
    "titleHighlight": "Seamless",
    "buttonText": "Contact Us",
    "buttonHref": "/contact"
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">


      <div className="flex flex-col bg-white">
        <OurTeam data={ourTeamData} />
        <CTABanner data={ctaBannerData} />
      </div>
    </div>
  );
}
