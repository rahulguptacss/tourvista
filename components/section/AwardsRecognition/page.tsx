"use client";

import Image from "next/image";
import { Award, Trophy, ShieldCheck, Globe, Medal, Users } from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import type { LucideIcon } from "lucide-react";
import type { AwardItem, AwardsRecognitionData } from "../../types";

const IconMap: Record<string, LucideIcon> = {
  Award,
  Trophy,
  ShieldCheck,
  Globe,
  Medal,
  Users,
};

export default function AwardsRecognition({ data }: { data: AwardsRecognitionData }) {
  if (!data) return null;

  return (
    <section className={`pt-12 md:pt-20 pb-6 md:pb-8 bg-white overflow-hidden ${poppins.className}`}>
      <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center md:block md:text-center mb-4 md:mb-4"
          >
            <div className="inline-flex items-center gap-2 border-[1.5px] border-[#ff7a00] rounded-full px-4 py-1.5 bg-white">
              <div className="bg-[#ff7a00] rounded-full w-6 h-6 flex items-center justify-center">
                <Award className="w-3.5 h-3.5 text-white" />
              </div>
              <span className={`text-[#ff7a00] text-[1rem] leading-none font-medium`}>
                {data.subtitle || "Awards & Recognition"}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-[600] mb-1 text-[#051036] tracking-tight leading-tight text-center max-w-3xl mx-auto whitespace-pre-line">
              {data.title || "Celebrating Excellence & Achievements in Every Journey"}
            </h2>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-stretch">
          
          {/* Left: Awards Grid */}
          <div className="w-full lg:w-[65%] order-2 lg:order-1">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full"
            >
              {data.awardsList?.map((award: AwardItem, index: number) => {
                const IconComponent = IconMap[award.icon] || Award;
                
                return (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-4 px-3 md:py-5 md:px-4 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 group"
                  >
                    <div className="relative w-24 h-24 mb-2 flex items-center justify-center mx-auto">
                      {award.icon && award.icon.includes('/') ? (
                        <Image src={award.icon} alt={award.title} width={90} height={90} className="object-contain" />
                      ) : (
                        <>
                          <IconComponent className="w-16 h-16 text-[#3b82f6] stroke-[1.5]" />
                          <div className="absolute top-1 right-1 bg-white rounded-full border border-white">
                            <svg className="w-6 h-6 text-[#ff7a00] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>

                    <h3 className="text-[#051036] font-semibold text-[15px] md:text-[16px] leading-snug mb-3 min-h-[40px] flex items-center justify-center whitespace-pre-line tracking-tight">
                      {award.title}
                    </h3>
                    
                    <div className="w-8 h-[2px] bg-[#ff7a00] mb-3 mx-auto rounded-full"></div>
                    
                    <p className="text-[#4F5B73] text-[12px] font-normal leading-[1.6] whitespace-pre-line">
                      {award.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Trophy Image */}
          <div className="w-full lg:w-[35%] order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative w-full h-[400px] lg:h-full rounded-[30px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={data.trophyImage || "/awards/trophy.png"}
                alt="Trophy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
