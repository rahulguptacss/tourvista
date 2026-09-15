"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Calendar, Headset } from "lucide-react";
import { Dancing_Script, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft } from "../../utils/animations";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import type { HeroData } from "../../types";

export default function Hero({ data }: { data: HeroData }) {
  const hero = data;
  return (
    <section className={`relative min-h-[80dvh] lg:min-h-[100dvh] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-0 ${poppins.className}`}>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${hero?.backgroundImage || '/hero/hero.png'}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#01253a]/95 via-[#01253a]/80 md:via-[#01253a]/70 to-[#01253a]/40 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl text-white"
        >
          <motion.p variants={fadeInUp} className={`${dancingScript.className} text-[1.75rem] md:text-[2.25rem] text-[#ffb800] mb-2 leading-none drop-shadow-md`}>
            {hero?.subtitle || "Welcome To TourVista!"}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-[3.25rem] md:text-[5rem] font-[700] mb-4 leading-[1.05] tracking-tight drop-shadow-lg">
            {hero?.titleLine1 || "Explore The"} <br />
            {hero?.titleLine2 || "Whole"} <span className={`${dancingScript.className} font-normal text-[#2b8aee] text-[4.25rem] md:text-[6.5rem] ml-1 align-bottom leading-[0.5]`}>{hero?.titleLine3 || "World"}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[0.95rem] md:text-[1.15rem] font-[400] text-white/90 mb-10 max-w-[32rem] leading-relaxed drop-shadow-md pr-4 md:pr-0">
            {hero?.description || "Discover breathtaking destinations, unforgettable experiences, and the joy of travel with TourVista."}
          </motion.p>


          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-row items-center gap-3 md:gap-5 w-full">
            <Link href="#" className="cursor-pointer flex-1 md:flex-none flex items-center justify-between md:justify-start gap-2 bg-[#ff7a00] text-white pl-5 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full text-[14px] md:text-[1.05rem] font-[600] hover:bg-[#e66e00] transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
              <span className="whitespace-nowrap">{hero?.button1 || "Discover More"}</span>
              <div className="bg-white text-[#ff7a00] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </Link>

            <Link href="#" className="cursor-pointer flex-1 md:flex-none flex items-center justify-between md:justify-start gap-2 bg-transparent border-[1.5px] border-white/60 text-white pl-5 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full text-[14px] md:text-[1.05rem] font-[500] hover:bg-white/10 transition-all hover:scale-105">
              <span className="whitespace-nowrap">{hero?.button2 || "View Packages"}</span>
              <div className="bg-white text-slate-900 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
