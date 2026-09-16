import { getAppData } from "@/components/lib/getAppData";
import Enquiry from "@/components/section/Enquiry/page";
import EnquirySteps from "@/components/section/EnquirySteps/page";

export default function EnquiryPage() {
  const fullData = getAppData();
  const enquiryPageData = fullData.sections.EnquiryPage.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col pt-0 pb-0 bg-white">
        <Enquiry data={enquiryPageData} />
        <EnquirySteps data={enquiryPageData} />
      </div>
    </div>
  );
}
