"use client";

import Link from "next/link";
import {
  Briefcase,
  CalendarCheck,
  FileText,
  Globe,
  Handshake,
  Headphones,
  Home,
  Images,
  MapPin,
  Network,
  Package,
  Phone,
  Plane,
  Plus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import type { SitemapGroup, SitemapPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const iconMap: Record<string, LucideIcon> = {
  Users,
  Briefcase,
  Package,
  MapPin,
  Images,
  FileText,
  CalendarCheck,
  Headphones,
  Handshake,
  Phone,
  Globe,
};

const toneClass: Record<SitemapGroup["tone"], string> = {
  navy: "text-[#0b1b3f]",
  orange: "text-[#ff7a00]",
  blue: "text-[#1d4ed8]",
};

function GroupCard({ group }: { group: SitemapGroup }) {
  const Icon = iconMap[group.icon] || Globe;
  return (
    <div className="h-full rounded-[16px] border border-[#e8edf3] bg-white px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className={`mb-3 flex items-center gap-2 ${toneClass[group.tone]}`}>
        <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
        <h3 className="text-[13px] font-extrabold tracking-wide">{group.title}</h3>
      </div>
      <ul className="space-y-2">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-start gap-1.5 text-[13px] leading-[1.45] text-[#6b7785] transition-colors hover:text-[#1d4ed8]"
            >
              <Plus className="mt-[3px] h-3 w-3 shrink-0 text-[#9aa6b4]" strokeWidth={2.5} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sitemap({ data }: { data: SitemapPageData }) {
  const OtherIcon = iconMap[data.otherIcon] || Globe;

  return (
    <section className={`w-full bg-white ${poppins.className}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-2 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-3 flex items-center justify-center gap-2 text-[#ff7a00]">
            <Network className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
            <span className="text-[16px] font-bold tracking-[0.22em] sm:text-[18px]">{data.subtitle}</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-[40px] font-semibold leading-[1.15] text-[#0b2158] sm:text-[52px] md:text-[64px]"
          >
            {data.titlePrefix}
            {data.titleHighlight}
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-14 bg-[#ff7a00] sm:w-16" />
            <Plane className="h-4 w-4 text-[#ff7a00]" strokeWidth={2.2} />
            <span className="h-px w-14 bg-[#ff7a00] sm:w-16" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-3 max-w-[560px] text-[15px] font-normal leading-[1.7] text-[#8a949c] sm:text-[16px]"
          >
            {data.description}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-4">
            <Link
              href={data.homeHref}
              className="relative z-10 inline-flex min-w-[200px] items-center justify-center gap-2.5 rounded-[10px] bg-[#0d47a1] px-10 py-[13px] text-[15px] font-bold tracking-[0.14em] text-white sm:min-w-[220px] sm:text-[16px]"
            >
              <Home className="h-5 w-5 fill-white" strokeWidth={0} />
              {data.homeLabel}
            </Link>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center">

          <div className="hidden h-8 w-px bg-[#d5dee8] lg:block" />

          <div className="relative hidden w-full lg:block">
            <div className="absolute left-[8.3%] right-[8.3%] top-0 h-px bg-[#d5dee8]" />
            <div className="grid grid-cols-6">
              {data.topGroups.map((group) => (
                <div key={group.title} className="flex justify-center">
                  <div className="h-8 w-px bg-[#d5dee8]" />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3"
          >
            {data.topGroups.map((group) => (
              <motion.div key={group.title} variants={fadeInUp}>
                <GroupCard group={group} />
              </motion.div>
            ))}
          </motion.div>

          <div className="relative mt-2 hidden w-full lg:block">
            <div className="mx-auto h-10 w-px bg-[#d5dee8]" />
            <div className="absolute left-[8.3%] right-[8.3%] bottom-0 h-px bg-[#d5dee8]" />
            <div className="grid grid-cols-5">
              {data.midGroups.map((group) => (
                <div key={group.title} className="flex justify-center">
                  <div className="h-8 w-px bg-[#d5dee8]" />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3"
          >
            {data.midGroups.map((group) => (
              <motion.div key={group.title} variants={fadeInUp}>
                <GroupCard group={group} />
              </motion.div>
            ))}
          </motion.div>

          <div className="hidden h-8 w-px bg-[#d5dee8] lg:block" />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[420px] rounded-[16px] border border-[#e8edf3] bg-white px-6 py-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
          >
            <div className="mb-3 flex items-center justify-center gap-2 text-[#1d4ed8]">
              <OtherIcon className="h-[18px] w-[18px]" />
              <h3 className="text-[13px] font-extrabold tracking-wide">{data.otherTitle}</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {data.otherLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-[13px] text-[#6b7785] hover:text-[#1d4ed8]"
                >
                  <Plus className="h-3 w-3 text-[#9aa6b4]" strokeWidth={2.5} />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
