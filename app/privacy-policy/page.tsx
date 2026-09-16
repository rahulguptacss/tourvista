import PolicyContent from "@/components/section/PolicyContent/page";
import { getAppData } from "@/components/lib/getAppData";

export default function PrivacyPolicyPage() {
  const data = getAppData().sections.PrivacyPolicy.variants["variant-1"];

  return (
    <div className="bg-white">
      <PolicyContent data={data} />
    </div>
  );
}
