import fs from 'fs';
import path from 'path';

import TeamDetail from '@/components/section/TeamDetail/page';
import CTABanner from '@/components/section/CTABanner/page';

import { notFound } from 'next/navigation';

const componentMap: Record<string, any> = {

  "TeamDetail": TeamDetail,
  "CTABanner": CTABanner
};

export default async function TeamDetailPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents);

  const components = fullData.pages.team_detail.components;
  const sections = fullData.sections;

  // Look up the specific member
  const allMembers = sections.TeamDetail.variants["variant-1"].members;
  const memberData = allMembers.find((m: any) => m.id === id);

  if (!memberData) {
    notFound();
  }

  // To preserve compatibility with the child component, we map memberData back to expected structure.
  const teamDetailData = {
    member: {
      name: memberData.name,
      role: memberData.role,
      phone: memberData.phone,
      email: memberData.email,
      speciality: memberData.speciality,
      experience: memberData.experience,
      university: memberData.university,
      image: memberData.image,
      socials: memberData.socials
    },
    biography: memberData.biography
  };

  return (
    <main className="min-h-screen bg-white">
      {components.map((comp: any, index: number) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;

        const sectionData = sections[comp.key]?.variants[comp.component];
        if (!sectionData) return null;


        if (comp.key === "TeamDetail") {
          return <Component key={index} data={teamDetailData} />;
        }

        return <Component key={index} data={sectionData} />;
      })}
    </main>
  );
}
