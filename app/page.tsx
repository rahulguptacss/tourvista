import { getAppData } from "@/components/lib/getAppData";
import type { ComponentType } from "react";
import Hero from "../components/section/Hero/page";
import Destinations from "../components/section/Destinations/page";
import Recommendation from "../components/section/Recommendation/page";
import Packages from "../components/section/Packages/page";
import VideoBanner from "../components/section/VideoBanner/page";
import Stats from "../components/section/Stats/page";
import Steps from "../components/section/Steps/page";
import WhyChooseUs from "../components/section/WhyChooseUs/page";
import Testimonials from "../components/section/Testimonials/page";
import TravelExperience from "../components/section/TravelExperience/page";
import CTABanner from "../components/section/CTABanner/page";
import type { SectionsData } from "@/components/types";

const componentMap: Record<string, ComponentType<{ data: unknown }>> = {
  Hero: Hero as ComponentType<{ data: unknown }>,
  Destinations: Destinations as ComponentType<{ data: unknown }>,
  Recommendation: Recommendation as ComponentType<{ data: unknown }>,
  Packages: Packages as ComponentType<{ data: unknown }>,
  VideoBanner: VideoBanner as ComponentType<{ data: unknown }>,
  Stats: Stats as ComponentType<{ data: unknown }>,
  Steps: Steps as ComponentType<{ data: unknown }>,
  WhyChooseUs: WhyChooseUs as ComponentType<{ data: unknown }>,
  Testimonials: Testimonials as ComponentType<{ data: unknown }>,
  TravelExperience: TravelExperience as ComponentType<{ data: unknown }>,
  CTABanner: CTABanner as ComponentType<{ data: unknown }>,
};

export default async function Home() {
  const fullData = getAppData();
  const sections = fullData.sections;
  const components = fullData.pages.home.components;

  return (
    <main className="min-h-screen">
      {components.map((comp, index) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;

        const section = sections[comp.key as keyof SectionsData];
        const sectionData = section?.variants["variant-1"];
        if (!sectionData) return null;

        return <Component key={index} data={sectionData} />;
      })}
    </main>
  );
}
