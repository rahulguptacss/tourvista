import PackagesList from "@/components/section/PackagesList/page";
import { getAppData } from "@/components/lib/getAppData";
import { matchesCountry, toCountrySlug } from "@/components/lib/country";
import { notFound } from "next/navigation";

export default async function DestinationCountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fullData = getAppData();
  const destinations = fullData.sections.DestinationsPage.variants["variant-1"].items;
  const packagesListData = fullData.sections.PackagesList.variants["variant-1"];

  const destination = destinations.find((item) => toCountrySlug(item.title) === slug);

  if (!destination) {
    notFound();
  }

  const countryPackages = packagesListData.items.filter((pkg) =>
    matchesCountry(pkg, destination.title)
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PackagesList
        data={{
          ...packagesListData,
          title: `${destination.title} Tour Packages`,
          description: `Explore all available packages for ${destination.title}.`,
          items: countryPackages,
        }}
        hideFilters
      />
    </div>
  );
}

export function generateStaticParams() {
  const destinations = getAppData().sections.DestinationsPage.variants["variant-1"].items;
  return destinations.map((item) => ({ slug: toCountrySlug(item.title) }));
}
