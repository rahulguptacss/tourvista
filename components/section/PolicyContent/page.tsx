"use client";

import {
  CalendarDays,
  ClipboardCheck,
  Cookie,
  RefreshCw,
  Shield,
  User,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import type { PolicyPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const iconMap: Record<string, LucideIcon> = {
  User,
  ClipboardCheck,
  Users,
  Shield,
  UserCheck,
  Cookie,
  RefreshCw,
  CalendarDays,
};

export default function PolicyContent({ data }: { data: PolicyPageData }) {
  const NoteIcon = iconMap[data.noteIcon] || CalendarDays;

  return (
    <section className={`w-full bg-white ${poppins.className}`}>
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[36px] font-bold leading-tight sm:text-[46px] md:text-[52px]"
          >
            <span className="text-[#0b3d91]">{data.titlePrefix}</span>
            <span className="text-[#ff7a00]">{data.titleHighlight}</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 flex items-center justify-center gap-1.5">
            <span className="h-[2px] w-10 bg-[#0b3d91]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a00]" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-[720px] text-[16px] leading-[1.7] text-[#8a949c] sm:text-[17px]"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="space-y-4"
        >
          {data.items.map((item) => {
            const Icon = iconMap[item.icon] || User;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="flex items-center gap-5 rounded-[20px] border border-[#e6eaf0] bg-white px-6 py-6 sm:gap-6 sm:px-8 sm:py-7"
              >
                <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#2f6bdc] sm:h-[80px] sm:w-[80px]">
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.6} />
                </span>
                <div className="min-w-0 flex-1 border-l border-[#dbe4f0] pl-5 sm:pl-7">
                  <h3 className="mb-1.5 text-[18px] font-bold text-[#0b1b36] sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-[#8a949c] sm:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5 flex items-start gap-4 rounded-[16px] border border-[#ffd7b0] bg-[#fff4ea] px-5 py-5 sm:px-6"
        >
          <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] bg-[#ff7a00] text-white">
            <NoteIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="mb-1 text-[16px] font-semibold text-[#ff7a00]">{data.noteTitle}</p>
            <p className="text-[15px] leading-[1.7] text-[#8a949c]">{data.noteText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
