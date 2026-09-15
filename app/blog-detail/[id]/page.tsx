import BlogDetail from "@/components/section/BlogDetail/page";
import { getAppData } from "@/components/lib/getAppData";
import type { BlogDetailViewData } from "@/components/types";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fullData = getAppData();
  const blogPage = fullData.sections.BlogPage.variants["variant-1"];
  const detail = fullData.sections.BlogDetail.variants["variant-1"];
  const post = blogPage.posts.find((item) => String(item.id) === String(id));

  if (!post) {
    notFound();
  }

  const data: BlogDetailViewData = {
    ...post,
    ...detail,
    recentTitle: blogPage.recentTitle,
    recentPosts: blogPage.recentPosts,
    destinationsTitle: blogPage.destinationsTitle,
    destinations: blogPage.destinations,
    galleryTitle: blogPage.galleryTitle,
    galleries: blogPage.galleries,
  };

  return (
    <main className="min-h-screen bg-white">
      <BlogDetail data={data} />
    </main>
  );
}
