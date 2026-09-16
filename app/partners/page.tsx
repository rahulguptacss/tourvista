import { getAppData } from "@/components/lib/getAppData";


import Partners from "@/components/section/Partners/page";

export default function PartnersPage() {
  const fullData = getAppData();
  const partnersData = fullData.sections.Partners.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Partners data={partnersData} />
    </div>
  );
}
