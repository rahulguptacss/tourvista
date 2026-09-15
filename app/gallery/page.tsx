import GalleryList from "@/components/section/GalleryList/page";
import { getAppData } from "@/components/lib/getAppData";

export default function GalleryPage() {
  const galleryPageData = getAppData().sections.GalleryPage.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-[#f4fbfb]">
      <GalleryList data={galleryPageData} />
    </div>
  );
}
