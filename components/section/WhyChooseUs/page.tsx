"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Kaushan_Script, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

import { WhyChooseUsData } from "@/components/types";

export default function WhyChooseUs({ data }: { data: WhyChooseUsData }) {
  const whyChooseUs = data;

  return (
    <section className={`relative bg-white px-4 pb-6 md:px-8 ${poppins.className}`}>
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-b-[50px] bg-[#136260] md:rounded-b-[80px]">
        <Image
          src="/step/w-cho-top.webp"
          alt=""
          width={1600}
          height={220}
          className="pointer-events-none absolute left-0 top-0 z-20 w-full"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 flex flex-col items-center justify-between gap-10 px-6 pb-10 pt-28 md:px-16 md:pb-12 md:pt-32 lg:flex-row lg:items-center lg:px-24"
        >
          <motion.div variants={fadeInLeft} className="w-full max-w-[520px] text-white">
            <h2 className={`${kaushan.className} mb-8 text-[28px] leading-tight md:text-[34px]`}>
              {whyChooseUs.title}
            </h2>

            <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              {whyChooseUs.reasons.map((reason: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#ffaa0d]">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-medium leading-6 md:text-[16px]">{reason}</span>
                </div>
              ))}
            </div>

            <a
              href={whyChooseUs.buttonHref || "#"}
              className="inline-flex items-center rounded-full bg-[#85d200] px-8 py-3 text-[15px] font-bold text-[#066168] transition-colors hover:bg-[#76bb00]"
            >
              {whyChooseUs.button || "Discover More"}
            </a>
          </motion.div>

          <motion.div variants={fadeInRight} className="w-full max-w-[360px] text-center lg:text-left">
            <Image
              src="/step/24-Image.webp"
              alt="24 Hours Service"
              width={280}
              height={180}
              className="mx-auto mb-3 w-[110px] md:w-[130px] lg:mx-0"
            />
            <p className="mb-1 text-[28px] font-black uppercase leading-none text-white md:text-[36px]">
              {whyChooseUs.callLabel || "Call Us"}
            </p>
            <a
              href={`tel:${String(whyChooseUs.contactNumber || "").replace(/[^\d+]/g, "")}`}
              className="block text-[20px] font-bold uppercase leading-tight text-[#85d200] md:text-[26px]"
            >
              {whyChooseUs.contactNumber}
            </a>
          </motion.div>
        </motion.div>

        <Image
          src="/whychoose/w-cho-btm.png"
          alt=""
          width={1600}
          height={280}
          className="pointer-events-none absolute bottom-0 left-0 z-0 w-full opacity-35"
        />
      </div>
    </section>
  );
}
