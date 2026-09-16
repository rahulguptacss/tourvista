import PolicyContent from "@/components/section/PolicyContent/page";
import { getAppData } from "@/components/lib/getAppData";

export default function RefundPolicyPage() {
  const data = getAppData().sections.RefundPolicy.variants["variant-1"];

  return (
    <div className="bg-white">
      <PolicyContent data={data} />
    </div>
  );
}
