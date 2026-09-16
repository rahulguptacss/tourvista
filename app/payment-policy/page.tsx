import PolicyContent from "@/components/section/PolicyContent/page";
import { getAppData } from "@/components/lib/getAppData";

export default function PaymentPolicyPage() {
  const data = getAppData().sections.PaymentPolicy.variants["variant-1"];

  return (
    <div className="bg-white">
      <PolicyContent data={data} />
    </div>
  );
}
