import FaqList from "@/components/section/FaqList/page";
import { getAppData } from "@/components/lib/getAppData";

export default function FaqsPage() {
  const faqPageData = getAppData().sections.FaqPage.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <FaqList data={faqPageData} />
    </div>
  );
}
