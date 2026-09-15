"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { Backpack, ArrowRight } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function OurTeam({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={`py-8 md:py-12 bg-white overflow-hidden ${poppins.className}`}>
      <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-8 md:mb-10"
        >
          {/* Tagline Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border-[1px] border-[#ff7a00] rounded-full pl-1.5 pr-5 py-1 bg-white mb-4">
            <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
              <Backpack className="w-4 h-4 text-white" />
            </div>
            <span className={`text-[#ff7a00] text-[15px] font-medium tracking-wide`}>
              {data.tagline}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 variants={fadeInUp} className="text-[#214358] text-[2rem] md:text-[2.5rem] font-bold leading-[1.2] tracking-tighter max-w-[650px] font-sans">
            {data.title}
          </motion.h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {data.members?.map((member: any, index: number) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
            >
              <Link href={`/team-detail/${member.id}`} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/4.5] mb-2">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay Cutout and Button */}
                <div className="absolute -bottom-1 -right-1 w-[90px] h-[90px] bg-white rounded-full z-10 flex items-center justify-center border-b-[1px] border-r-[1px] border-gray-200">
                  <div className="w-[60px] h-[60px] bg-[#1a56db] rounded-full flex items-center justify-center transition-colors shadow-sm">
                    <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-1 mt-1">
                <h3 className="text-[#1a56db] text-[20px] font-medium transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#ff7a00] text-[14px] font-medium">
                  {member.role}
                </p>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
