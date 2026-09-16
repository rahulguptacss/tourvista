import { getAppData } from "@/components/lib/getAppData";
import NotFoundComponent from "@/components/section/NotFound/page";

export default function NotFound() {
  const fullData = getAppData();
  
  return <NotFoundComponent data={fullData.sections.NotFound.variants["variant-1"]} />;
}
