import ServicesList from "@/components/section/ServicesList/page";
import { getAppData } from "@/components/lib/getAppData";

export default function ServicesPage() {
  const fullData = getAppData();
  const listData = fullData.sections.ServicesList.variants["variant-1"];

  return (
    <main className="min-h-screen bg-white">
      <ServicesList data={listData} />
    </main>
  );
}
