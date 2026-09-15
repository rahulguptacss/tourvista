import fs from 'fs';
import path from 'path';

import ServicesList from "@/components/section/ServicesList/page";

export default function ServicesPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents);
  

  const listData = fullData.sections.ServicesList.variants["variant-1"];
  
  return (
    <main className="min-h-screen bg-white">

      
      <ServicesList data={listData} />
    </main>
  );
}
