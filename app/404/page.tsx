import { getAppData } from "@/components/lib/getAppData";
import NotFoundComponent from "@/components/section/NotFound/page";

export default function Error404Page() {
  const data = getAppData().sections.NotFound.variants["variant-1"];

  return <NotFoundComponent data={data} />;
}
