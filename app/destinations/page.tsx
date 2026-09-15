import DestinationsList from "@/components/section/DestinationsList/page";
import { getAppData } from "@/components/lib/getAppData";

export default function DestinationsPage() {
  const destinationsPageData =
    getAppData().sections.DestinationsPage.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-[#f4fbfb]">
      <DestinationsList data={destinationsPageData} />
    </div>
  );
}
