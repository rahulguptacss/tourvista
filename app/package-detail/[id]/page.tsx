import PackageDetail from "@/components/section/PackageDetail/page";
import { getAppData } from "@/components/lib/getAppData";
import type { PackageDetailViewData } from "@/components/types";
import { notFound } from "next/navigation";

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fullData = getAppData();
  const listItems = fullData.sections.PackagesList.variants["variant-1"].items;
  const detailSection = fullData.sections.PackageDetail.variants["variant-1"];
  const listItem = listItems.find((item) => String(item.id) === String(id));
  const extra = detailSection.details[String(id)];

  if (!listItem || !extra) {
    notFound();
  }

  const data: PackageDetailViewData = {
    ...listItem,
    ...extra,
    tabs: detailSection.tabs,
    bookText: detailSection.bookText,
    fromLabel: detailSection.fromLabel,
    labels: detailSection.labels,
    includes: detailSection.includes,
    inclusions: detailSection.inclusions,
    exclusions: detailSection.exclusions,
    terms: detailSection.terms,
  };

  return (
    <main className="min-h-screen bg-[#f4fbfb]">
      <PackageDetail data={data} />
    </main>
  );
}
