"use client";

import Image from "next/image";
import { Poppins, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";
import { Briefcase, CalendarCheck, Plane, Check, ArrowRight, UserCheck, ClipboardList } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const IconMap: any = {
  UserCheck: UserCheck,
  CalendarCheck: CalendarCheck,
  Briefcase: Briefcase
};

export default function WhyChooseUsV2({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={`relative pt-8 md:pt-12 pb-6 md:pb-10 bg-white overflow-hidden ${poppins.className}`}>
      <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 border-[1.5px] border-[#ff7a00] rounded-full pl-1.5 pr-5 py-1.5 bg-white mb-5">
              <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
                <ClipboardList className="w-4 h-4 text-white" />
              </div>
              <span className={`text-[#ff7a00] text-[15px] font-medium tracking-wide`}>
                {data.tagline}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={fadeInUp} className="text-[#051036] text-[1.4rem] md:text-[2.75rem] font-bold leading-[1.2] tracking-tight whitespace-normal md:whitespace-pre-line mb-3">
              <span dangerouslySetInnerHTML={{ __html: data.title }}></span>
            </motion.h2>

            {/* Divider */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
              <div className="w-16 h-[4px] bg-[#3b82f6] rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-[#ff7a00]"></div>
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-[#4F5B73] text-[14px] md:text-[16px] leading-relaxed max-w-xl font-medium mb-2">
              {data.description}
            </motion.p>

            {/* Features Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              {data.features?.map((feature: any, index: number) => {
                const Icon = IconMap[feature.icon] || Check;
                const isFirst = index === 0;
                
                return (
                  <div key={index} className="bg-white rounded-[1.25rem] p-7 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_5px_25px_rgba(0,0,0,0.06)] transition-shadow">
                    
                    {/* Header: Icon & Number */}
                    <div className="flex justify-between items-start mb-5">
                      {/* Icon */}
                      <div className={`w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center text-white ${isFirst ? 'bg-[#1a56db]' : 'bg-[#ff7a00]'}`}>
                        <Icon className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      
                      {/* Number */}
                      <div className={`text-[3.5rem] font-bold leading-none tracking-tighter ${isFirst ? 'text-[#e6effe]' : 'text-[#fff1e5]'}`}>
                        {feature.id}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[#051036] font-bold text-[1.3rem] tracking-tight">{feature.title}</h3>
                    
                    {/* Divider */}
                    <div className={`w-12 h-[2px] mt-2 mb-4 rounded-full ${isFirst ? 'bg-[#1a56db]' : 'bg-[#ff7a00]'}`}></div>

                    {/* Description */}
                    <p className="text-[#4F5B73] text-[14px] leading-[1.6] font-normal">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Bottom Actions */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6">
              {/* Button */}
              <Link href={data.buttonLink} className="inline-flex items-center gap-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full pl-8 pr-2 py-2 transition-colors">
                <span className="font-semibold text-[16px]">{data.buttonText}</span>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#3b82f6]" strokeWidth={2.5} />
                </div>
              </Link>
              
              {/* Happy Travelers */}
              {data.happyTravelers && (
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {data.happyTravelers.avatars?.map((avatar: string, idx: number) => (
                      <div key={idx} className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden relative shadow-sm">
                        <Image src={avatar} alt="Traveler" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#ff7a00] font-[800] text-[18px] leading-tight">{data.happyTravelers.count}</span>
                    <span className="text-[#051036] font-medium text-[14px] leading-tight">{data.happyTravelers.text}</span>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Collage */}
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-[700px] mt-10 lg:mt-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[600px] mx-auto">
              
              {/* Decorative Airplane Path */}
              <div className="absolute top-[3%] left-[5%] w-[45%] h-[20%] z-0">
                <svg viewBox="0 0 150 100" fill="none" className="w-full h-full overflow-visible">
                  <circle cx="10" cy="80" r="4" fill="#ff7a00" />
                  <path d="M 12 76 C 25 40, 70 20, 115 25" stroke="#051036" strokeWidth="1.5" strokeDasharray="5 5" fill="none" className="opacity-70" />
                  <g transform="translate(122, 22) rotate(-15)">
                    <Plane className="text-[#1a56db] w-7 h-7" fill="currentColor" />
                  </g>
                </svg>
              </div>
              
              {/* Decorative Blue Waves */}
              <div className="absolute top-[43%] left-[35%] z-20 w-[22%]">
                <svg viewBox="0 0 100 40" fill="none" className="w-full h-auto text-[#1a56db]">
                  <path d="M 0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 0 30 Q 10 20, 20 30 T 40 30 T 60 30 T 80 30 T 100 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Decorative Dots Grid */}
              <div className="absolute bottom-[8%] right-[2%] grid grid-cols-4 gap-2.5 text-[#1a56db] z-0 opacity-80">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-[5px] h-[5px] rounded-full bg-current"></div>
                ))}
              </div>
              
              {/* Decorative Orange Check */}
              <div className="absolute bottom-[2%] right-[2%] z-20 w-[28%]">
                <svg viewBox="0 0 100 50" fill="none" className="w-full h-auto overflow-visible">
                  <path d="M 0 35 L 25 50 C 35 55, 55 20, 100 10" stroke="#ff7a00" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Top Right Circle (Hot Air Balloon) */}
              <div className="absolute top-[5%] right-[0%] w-[55%] aspect-square rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-10 hover:scale-105 transition-transform duration-500">
                <Image src={data.images.topRight} alt="Hot Air Balloon" fill className="object-cover" />
              </div>

              {/* Middle Left Circle (Cityscape) */}
              <div className="absolute top-[22%] left-[8%] w-[32%] aspect-square rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10 hover:scale-105 transition-transform duration-500">
                <Image src={data.images.main} alt="Cityscape" fill className="object-cover" />
              </div>

              {/* Bottom Left Circle (Couple) */}
              <div className="absolute bottom-[0%] left-[0%] w-[52%] aspect-square rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-20 hover:scale-105 transition-transform duration-500">
                <Image src={data.images.bottomLeft} alt="Couple" fill className="object-cover object-top" />
              </div>

              {/* Bottom Right Circle (Hikers) */}
              <div className="absolute bottom-[18%] right-[10%] w-[33%] aspect-square rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10 hover:scale-105 transition-transform duration-500">
                <Image src={data.images.bottomRight} alt="Hikers" fill className="object-cover" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
