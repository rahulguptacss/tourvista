import PolicyContent from "@/components/section/PolicyContent/page";
import { getAppData } from "@/components/lib/getAppData";

export default function TermsConditionsPage() {
  const data = getAppData().sections.TermsConditions.variants["variant-1"];

  return (
    <div className="bg-white">
      <PolicyContent data={data} />
    </div>
  );
}
