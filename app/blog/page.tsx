import BlogList from "@/components/section/BlogList/page";
import { getAppData } from "@/components/lib/getAppData";

export default function BlogPage() {
  const blogPageData = getAppData().sections.BlogPage.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <BlogList data={blogPageData} />
    </div>
  );
}
