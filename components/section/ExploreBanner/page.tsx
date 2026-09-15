"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { Globe2, Plane, Mountain, Camera, ArrowDown } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

const IconMap: any = {
  Globe2: Globe2,
  Plane: Plane,
  Mountain: Mountain,
  Camera: Camera
};

export default function ExploreBanner({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={`relative pt-4 pb-4 bg-white ${poppins.className}`}>
      <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">
        
        {/* Banner Container */}
        <div 
          className="relative w-full h-[480px] sm:h-[550px] md:h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-cover bg-center flex flex-col items-center justify-start pt-6 md:pt-6"
          style={{ backgroundImage: `url('${data.backgroundImage}')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 w-full flex flex-col items-center text-center"
          >
            {/* Title */}
            <motion.h2 variants={fadeInUp} className="text-white text-[1.4rem] md:text-[2.25rem] font-[500] leading-[1.2] max-w-2xl px-4 whitespace-pre-line">
              {data.title}
            </motion.h2>

            {/* Central Seal */}
            <motion.div variants={fadeInUp} className="relative mt-8 md:mt-12 flex items-center justify-center rounded-full bg-black/10 backdrop-blur-sm">
              {/* Rotating Text */}
              <div className="w-[120px] h-[120px] animate-[spin_10s_linear_infinite] opacity-90">
                <svg viewBox="0 0 100 100" width="120" height="120">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="11" fill="white" fontWeight="600" letterSpacing="3">
                    <textPath href="#circle">
                      {data.sealText}
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Arrow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowDown className="text-white w-6 h-6 opacity-90" strokeWidth={2} />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Overlapping Cards */}
          <div className="absolute bottom-6 md:bottom-12 left-0 w-full translate-y-0 px-3 md:px-12 lg:px-24 z-20 flex justify-center">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full max-w-[1000px]"
            >
              {data.cards?.map((card: any, index: number) => {
                const Icon = IconMap[card.icon] || Globe2;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-[1rem] md:rounded-[1.5rem] py-4 md:py-8 px-2 md:px-4 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 group"
                  >
                    <Icon className="w-9 h-9 md:w-14 md:h-14 text-[#00b4d8] mb-2 md:mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                    <h3 className="text-[#051036] font-medium text-[13px] md:text-[17px] leading-tight">
                      {card.title}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
