"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";
import { Building2, ShieldCheck, PlaneTakeoff, Car, ArrowRight, Backpack } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const iconMap: Record<string, any> = {
  Building2,
  ShieldCheck,
  PlaneTakeoff,
  Car
};

const DotPattern = ({ className }: { className?: string }) => (
  <svg width="40" height="40" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle fill="#1a56db" cx="2" cy="2" r="2"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>
);

import { ServicesListData } from "../../types";

export default function ServicesList({ data }: { data: ServicesListData }) {
  if (!data) return null;

  return (
    <section className={`pt-10 md:pt-12 pb-6 md:pb-10 bg-white overflow-hidden ${poppins.className}`}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-10 md:mb-14"
        >
          {/* Tagline Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border-[1px] border-[#ff7a00] rounded-full pl-1.5 pr-5 py-1 bg-white mb-4">
            <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className={`text-[#ff7a00] text-[15px] font-medium tracking-wide`}>
              {data.tagline}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 variants={fadeInUp} className="text-[#051036] text-[32px] md:text-[45px] font-bold leading-[1.2] max-w-[700px] mb-4">
            {data.title}
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="w-[60px] h-[3px] bg-[#ff7a00] mb-5"></motion.div>

          <motion.p variants={fadeInUp} className="text-slate-500 text-[16px] max-w-[650px] leading-relaxed">
            {data.description}
          </motion.p>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col">
          {data.services?.map((service: any, index: number) => {
            const Icon = iconMap[service.icon];
            const isImageRight = service.imagePosition === 'right';
            
            return (
              <React.Fragment key={index}>
                <motion.div 
                  variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col ${isImageRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center relative ${index !== data.services.length - 1 ? 'pb-12 md:pb-14 mb-12 md:mb-16' : ''}`}
              >
                {/* Text Content */}
                <motion.div variants={isImageRight ? fadeInLeft : fadeInRight} className="w-full md:w-1/2 flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#1d62f0] flex items-center justify-center shrink-0">
                      {Icon && <Icon className="w-[22px] h-[22px] text-white" strokeWidth={2.5} />}
                    </div>
                    <span className="text-[#ff7a00] text-[14px] font-semibold uppercase tracking-[1px]">
                      {service.tagline}
                    </span>
                  </div>
                  
                  <h3 className="text-[#051036] text-[24px] md:text-[32px] font-[700] leading-[1.25] mb-5 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <div className="w-[45px] h-[3px] bg-[#ff7a00] mb-6"></div>
                  
                  <p className="text-[#5b6478] text-[16px] leading-[1.8] mb-8 max-w-[480px]">
                    {service.description}
                  </p>
                  
                  <Link href={service.link}>
                    <button className="bg-[#1d62f0] hover:bg-[#051036] text-white px-7 py-3 rounded-[6px] font-medium text-[15.5px] transition-colors flex items-center gap-2 cursor-pointer">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>

                {/* Image Content */}
                <motion.div variants={isImageRight ? fadeInRight : fadeInLeft} className="w-full md:w-[48%] relative">
                  {/* Decorative Elements */}
                  <DotPattern className={`absolute -top-6 ${isImageRight ? '-left-6' : '-right-6'} z-0 text-[#1d62f0] opacity-90 w-[80px] h-[80px]`} />
                  
                  {/* Blue Circle Decoration */}
                  <div className={`absolute -bottom-10 ${isImageRight ? '-right-10' : '-left-10'} w-[180px] h-[180px] bg-[#1d62f0] rounded-full z-0 hidden md:block`}></div>

                  {/* Main Image */}
                  <div className="relative w-full aspect-[1.45] rounded-[24px] overflow-hidden z-10 bg-white">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Full Width Separator Line */}
                {index !== data.services.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[100vw] h-[1px] bg-slate-200"></div>
                )}
              </motion.div>
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
