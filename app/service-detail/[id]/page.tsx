import ServiceDetail from "@/components/section/ServiceDetail/page";
import CTABanner from "@/components/section/CTABanner/page";

import fs from 'fs';
import path from 'path';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents);
  
  const baseDetailData = fullData.sections.ServiceDetail.variants["variant-1"];
  const servicesList = fullData.sections.ServicesList.variants["variant-1"].services;
  
  const currentService = servicesList.find((s: any) => s.id === resolvedParams.id) || servicesList[0];
  
  const formatTitle = (str: string) => {
    if (!str) return str;
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };

  const detailData = {
    ...baseDetailData,
    tagline: baseDetailData.tagline || "Our Services",
    title: formatTitle(currentService.tagline) || baseDetailData.title,
    subtitle: currentService.title || baseDetailData.subtitle,
    description: currentService.description || baseDetailData.description,
    sidebar: {
      ...baseDetailData.sidebar,
      image: currentService.image || baseDetailData.sidebar?.image
    }
  };
  
  return (
    <main className="min-h-screen bg-white">
      <ServiceDetail data={detailData} />
      
      <CTABanner data={detailData.cta} />

    </main>
  );
}
