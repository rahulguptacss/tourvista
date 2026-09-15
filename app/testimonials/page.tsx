import Testimonials from "@/components/section/Testimonials/page";
import { getAppData } from "@/components/lib/getAppData";

export default function TestimonialsPage() {
  const testimonialsPageData =
    getAppData().sections.TestimonialsPage.variants["variant-1"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Testimonials data={testimonialsPageData} />
    </div>
  );
}
