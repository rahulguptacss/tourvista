"use client";

import { Poppins } from "next/font/google";
import { FileEdit, Headphones, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { EnquiryPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const icons: Record<string, React.ReactNode> = {
  Edit: <FileEdit className="w-8 h-8 text-[#ff7a00]" strokeWidth={1.5} />,
  Headphones: <Headphones className="w-8 h-8 text-[#0d6efd]" strokeWidth={1.5} />,
  MapPin: <MapPin className="w-8 h-8 text-[#ff7a00]" strokeWidth={1.5} />,
  Suitcase: <Briefcase className="w-8 h-8 text-[#0d6efd]" strokeWidth={1.5} />,
};

export default function EnquirySteps({ data }: { data: EnquiryPageData }) {
  if (!data || !data.steps) return null;

  return (
    <section className={`w-full bg-[#f8f9fa] pt-8 pb-8 sm:pt-10 sm:pb-10 ${poppins.className}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="border border-gray-200 rounded-[24px] shadow-sm bg-white pt-6 pb-6 px-4 sm:px-8"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-4">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#051036]">
              {data.steps.title}
            </h2>
            <div className="w-12 h-[3px] bg-[#ff7a00] mx-auto mt-2 rounded-full"></div>
          </div>

          {/* Steps */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
              {data.steps.items.map((item, idx) => {
                const isEven = idx % 2 !== 0;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    key={idx} 
                    className="flex flex-col items-center text-center group relative"
                  >
                    
                    {/* Connecting Arrow */}
                    {idx < data.steps.items.length - 1 && (
                      <div className="hidden md:flex absolute top-[44px] left-[calc(50%+54px)] w-[calc(100%-92px)] items-center text-gray-300 z-[-1]">
                        <div className="flex-grow border-t-2 border-dashed border-gray-300"></div>
                        <svg className="w-5 h-5 -ml-1 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}

                    <div className="relative mb-4">
                      <div className={`w-[88px] h-[88px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${isEven ? 'bg-[#f0f6ff]' : 'bg-[#fff5eb]'}`}>
                        {icons[item.icon] || <FileEdit className={`w-8 h-8 ${isEven ? 'text-[#0d6efd]' : 'text-[#ff7a00]'}`} />}
                      </div>
                      <div className="absolute bottom-0 -left-2 w-[30px] h-[30px] rounded-full text-white font-bold text-[14px] flex items-center justify-center border-[3px] border-white bg-[#0d6efd] shadow-sm">
                        {item.step}
                      </div>
                    </div>
                    
                    <h3 className="text-[17px] font-semibold text-[#051036] mb-1">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 max-w-[240px] leading-snug">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
