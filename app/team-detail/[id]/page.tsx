import TeamDetail from "@/components/section/TeamDetail/page";
import CTABanner from "@/components/section/CTABanner/page";
import { getAppData } from "@/components/lib/getAppData";
import type { TeamDetailViewData } from "@/components/types";
import { notFound } from "next/navigation";

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fullData = getAppData();
  const components = fullData.pages.team_detail?.components ?? [];
  const memberData = fullData.sections.TeamDetail.variants["variant-1"].members.find(
    (m) => m.id === id
  );

  if (!memberData) {
    notFound();
  }

  const teamDetailData: TeamDetailViewData = {
    member: {
      name: memberData.name,
      role: memberData.role,
      phone: memberData.phone,
      email: memberData.email,
      speciality: memberData.speciality,
      experience: memberData.experience,
      university: memberData.university,
      image: memberData.image,
      socials: memberData.socials,
    },
    biography: memberData.biography,
  };

  const ctaBannerData = fullData.sections.CTABanner.variants["variant-1"];

  return (
    <main className="min-h-screen bg-white">
      {components.map((comp, index) => {
        if (comp.key === "TeamDetail") {
          return <TeamDetail key={index} data={teamDetailData} />;
        }
        if (comp.key === "CTABanner") {
          return <CTABanner key={index} data={ctaBannerData} />;
        }
        return null;
      })}
    </main>
  );
}
