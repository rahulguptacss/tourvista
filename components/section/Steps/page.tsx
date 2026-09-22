"use client";

import type { LucideIcon } from "lucide-react";
import { CreditCard, Luggage, MapPin } from "lucide-react";
import Image from "next/image";
import { Kaushan_Script, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const stepIcons: Record<string, LucideIcon> = {
  Search: MapPin,
  CreditCard,
  PlaneTakeoff: Luggage,
};

import { StepsData } from "@/components/types";

export default function Steps({ data }: { data: StepsData }) {
  const steps = data;
  const [titleLine1, titleLine2] = String(steps.titleSuffix || "").split("\n");

  return (
    <section id="booking-steps" className={`relative overflow-hidden bg-gradient-to-r from-[#fdf6ec] via-[#fdfbf6] to-[#edf9f8] py-8 md:py-12 ${poppins.className}`}>
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center gap-10 xl:flex-row xl:items-start xl:gap-6"
        >
          <motion.div variants={fadeInLeft} className="w-full xl:w-[54%]">
            <h2 className="mb-7 text-[26px] font-bold leading-[1.2] text-[#0b1b3f] sm:text-[30px] md:mb-9 md:text-[32px]">
              <span className="text-[#ff7a00]">{steps.titlePrefix} </span>
              {titleLine1}
              {titleLine2 ? (
                <>
                  <br />
                  {titleLine2}
                </>
              ) : null}
            </h2>

            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch sm:gap-5">
              <div className="w-[220px] shrink-0 overflow-hidden rounded-[20px] sm:w-[228px]">
                <div className="relative h-[210px] w-full">
                  <Image
                    src={steps.smallImage}
                    alt="Special offer"
                    fill
                    sizes="228px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="bg-[#ff7a00] px-5 py-5 text-white">
                  <p className="mb-1 text-[15px] font-medium leading-none">Get Special Offer</p>
                  <div className="flex items-end">
                    <span className="text-[64px] font-black leading-[0.8]">{steps.discount}</span>
                    <div className="mb-1 ml-0.5 flex flex-col text-[16px] font-extrabold uppercase leading-[1.05]">
                      <span>%</span>
                      <span>Off</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full max-w-[500px] flex-1 flex-col gap-2">
                {steps.items.map((item, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 rounded-[100px] bg-white py-2.5 pl-2.5 pr-3 shadow-[0_10px_28px_rgba(20,30,60,0.08)]"
                  >
                    <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[16px] bg-[#0066ff] text-[26px] font-extrabold text-white">
                      {item.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[16px] font-semibold leading-tight text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="mt-1 max-w-[240px] text-[13px] leading-[1.4] text-[#9ca3af]">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[1.6px] border-[#ff7a00] text-[#ff7a00]">
                      {(() => {
                        const Icon = stepIcons[item.icon] || MapPin;
                        return <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />;
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} className="relative w-full max-w-[720px] xl:w-[50%]">
            <div className="relative mx-auto h-[500px] w-full sm:h-[620px]">
              <Image
                src="/step/hotballon-right.png"
                alt=""
                width={120}
                height={150}
                className="absolute right-[16%] top-[-4%] z-[1] w-[76px] sm:w-[100px] steps-slide-balloon"
              />
              <Image
                src="/step/cloud-2.png"
                alt=""
                width={160}
                height={80}
                className="absolute right-[20%] top-[2%] z-[2] w-[28%] max-w-[140px] steps-float-slow"
              />
              <Image
                src="/step/cloud-1.png"
                alt=""
                width={180}
                height={90}
                className="absolute left-[4%] top-[16%] z-[2] w-[34%] max-w-[160px] opacity-90 steps-float-fast"
              />
              <Image
                src="/step/hotballon-left.png"
                alt=""
                width={68}
                height={90}
                className="absolute bottom-[36%] left-[4%] z-[1] w-[44px] sm:w-[54px] steps-slide-balloon"
              />

              <div className="absolute left-[46%] top-[56%] z-0 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff7ec] sm:h-[480px] sm:w-[480px]" />

              <div className="absolute left-[46%] top-0 z-[5] w-[92%] max-w-[500px] -translate-x-1/2">
                <Image
                  src={steps.mainImage}
                  alt="Traveler ready for summer"
                  width={560}
                  height={720}
                  sizes="500px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              <div className="pointer-events-none absolute right-[-4px] top-[8%] bottom-[8%] z-20 flex items-end sm:right-0">
                <div
                  className={`${kaushan.className} flex items-baseline text-[#1638c0]`}
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  <span className="text-[22px] leading-none sm:text-[34px]">For</span>
                  <span className="text-[54px] leading-[0.82] sm:text-[86px]">Summer!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
