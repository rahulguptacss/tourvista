import Sitemap from "@/components/section/Sitemap/page";
import { getAppData } from "@/components/lib/getAppData";

export default function SitemapPage() {
  const data = getAppData().sections.Sitemap.variants["variant-1"];

  return (
    <div className="bg-white">
      <Sitemap data={data} />
    </div>
  );
}
