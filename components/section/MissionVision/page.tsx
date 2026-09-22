"use client";

import Image from "next/image";
import { Target, Eye, Navigation, Plane, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { Dancing_Script, Poppins } from "next/font/google";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import type { MissionVisionData } from "../../types";

export default function MissionVision({ data }: { data: MissionVisionData }) {
  if (!data) return null;

  return (
    <section className={`pt-10 md:pt-16 pb-8 md:pb-10 bg-white overflow-hidden ${poppins.className}`}>
      <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center md:block md:text-center mb-4 md:mb-4"
          >
            <div className="inline-flex items-center gap-2 border-[1.5px] border-[#ff7a00] rounded-full px-1.5 py-1.5 pr-5 bg-white">
              <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className={`text-[#ff7a00] text-[15px] font-medium tracking-wide mt-0.5`}>
                {data.subtitle || "Tour Guide"}
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
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-[700] mb-1 text-[#051036] tracking-tight leading-tight text-center md:whitespace-nowrap">
              {data.titlePrefix || "Mission &"} {data.titleSuffix || "Vision"}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-2 opacity-80"
          >
            <div className="w-12 h-px bg-gray-300"></div>
            <Plane className="w-5 h-5 text-[#ff7a00] rotate-45" fill="#ff7a00" />
            <div className="w-12 h-px bg-gray-300"></div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-gray-600 max-w-xl text-center text-[15px] md:text-[16px] leading-relaxed font-medium"
          >
            {data.description}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8 md:gap-14"
        >
          {/* Mission Card */}
          <motion.div variants={fadeInLeft} className="relative flex flex-col md:flex-row bg-white rounded-[22px] md:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden md:min-h-[280px]">
            <div className="absolute top-0 right-0 w-[65%] h-full z-0 hidden md:block">
              <Image
                src={data.mission?.image || "/mission-vision/mission.png"}
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 w-full md:w-[50%] flex flex-col bg-white md:bg-[#051036] md:[clip-path:polygon(0_0,calc(100%-40px)_0,100%_50%,calc(100%-40px)_100%,0_100%)] md:pr-[6px]">
              <div className="w-full flex-1 bg-white md:[clip-path:polygon(0_0,calc(100%-40px)_0,100%_50%,calc(100%-40px)_100%,0_100%)] flex flex-col justify-center p-5 sm:p-6 md:p-8 md:pr-16">
                <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] relative flex items-center justify-center mt-1">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                      <polygon
                        points="28,12 72,12 94,50 72,88 28,88 6,50"
                        fill="#051036"
                        stroke="#051036"
                        strokeWidth="10"
                        strokeLinejoin="round"
                      />
                      <circle cx="45" cy="55" r="14" stroke="white" strokeWidth="4.5" fill="none" />
                      <circle cx="45" cy="55" r="25" stroke="white" strokeWidth="4.5" fill="none" />
                      <circle cx="45" cy="55" r="4.5" fill="white" />
                      <path d="M 45 55 L 75 25" stroke="#ff7a00" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M 61 25 L 75 25 L 75 39" stroke="#ff7a00" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 52 34 L 66 34 L 66 48" stroke="#ff7a00" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="pt-0.5 min-w-0">
                    <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#051036] mb-2 sm:mb-3 tracking-tight">
                      {data.mission?.title || "Our Mission"}
                    </h3>
                    <div className="w-12 h-[3px] bg-[#ff7a00] mb-3 sm:mb-4"></div>
                    <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                      {data.mission?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[200px] sm:h-[240px] w-full md:hidden">
              <Image
                src={data.mission?.image || "/mission-vision/mission.png"}
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeInRight} className="relative flex flex-col md:flex-row bg-white rounded-[22px] md:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden md:min-h-[280px]">
            <div className="absolute top-0 left-0 w-[65%] h-full z-0 hidden md:block">
              <Image
                src={data.vision?.image || "/mission-vision/vision.png"}
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[200px] sm:h-[240px] w-full md:hidden">
              <Image
                src={data.vision?.image || "/mission-vision/vision.png"}
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 w-full md:w-[50%] flex flex-col bg-white md:bg-[#ff7a00] md:[clip-path:polygon(40px_0,100%_0,100%_100%,40px_100%,0_50%)] md:pl-[6px] md:ml-auto">
              <div className="w-full flex-1 bg-white md:[clip-path:polygon(40px_0,100%_0,100%_100%,40px_100%,0_50%)] flex flex-col justify-center p-5 sm:p-6 md:p-8 md:pl-16 relative">
                <div className="absolute top-8 right-8 opacity-20 pointer-events-none hidden md:block w-32 h-16">
                  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 50 C 20 20, 50 10, 80 40 M 80 40 L 90 45" stroke="#ff7a00" strokeWidth="1.5" strokeDasharray="3 3" />
                    <g transform="translate(80, 35) rotate(45)">
                      <Plane className="w-4 h-4 text-[#ff7a00]" />
                    </g>
                  </svg>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 md:gap-8 relative z-10">
                  <div className="flex-shrink-0 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] relative flex items-center justify-center mt-1">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                      <polygon
                        points="28,12 72,12 94,50 72,88 28,88 6,50"
                        fill="#ff7a00"
                        stroke="#ff7a00"
                        strokeWidth="10"
                        strokeLinejoin="round"
                      />
                      <path d="M 50 30 L 50 20" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M 38 34 L 32 25" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M 62 34 L 68 25" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M 22 56 Q 50 33 78 56 Q 50 79 22 56 Z" stroke="white" strokeWidth="6" fill="none" strokeLinejoin="round" />
                      <circle cx="50" cy="56" r="10" fill="white" />
                      <circle cx="52" cy="54" r="3" fill="#ff7a00" />
                    </svg>
                  </div>
                  <div className="pt-0.5 min-w-0">
                    <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#051036] mb-2 sm:mb-3 tracking-tight">
                      {data.vision?.title || "Our Vision"}
                    </h3>
                    <div className="w-12 h-[3px] bg-[#051036] mb-3 sm:mb-4"></div>
                    <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                      {data.vision?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
