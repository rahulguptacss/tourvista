"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, Star, Camera, Plane } from "lucide-react";
import { Dancing_Script, Poppins } from "next/font/google";
import { PackagesData } from "../../types";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function Packages({ data }: { data: PackagesData }) {
  const packages = data;
  return (
    <section className={`py-8 md:py-12 bg-gray-50 relative ${poppins.className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto mb-10 relative"
        >
          
          <div className="flex justify-center md:block md:text-center mb-4 md:mb-4">
            <div className="inline-flex items-center gap-2 border-[1.5px] border-[#ff7a00] rounded-full px-1.5 py-1.5 pr-5 bg-white">
              <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className={`text-[#ff7a00] text-[15px] font-medium tracking-wide mt-0.5`}>
                {packages.subtitle}
              </span>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-[700] mb-1 text-[#051036] tracking-tight leading-tight text-left md:text-center max-w-[280px] md:max-w-full md:whitespace-nowrap">
              {packages.title}
            </h2>
            {/* Mobile Plane SVG */}
            <div className="absolute top-2 right-4 md:hidden opacity-80 pointer-events-none">
              <div className="relative w-[70px] h-[70px]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M10 80 C 40 100, 90 60, 60 30 C 40 10, 10 30, 20 60 C 30 90, 70 80, 90 40" 
                    stroke="#cbd5e1" 
                    strokeWidth="3" 
                    strokeDasharray="6 6" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                </svg>
                <Plane className="absolute -top-2 -right-2 w-8 h-8 text-[#0055ff] fill-[#0055ff] transform rotate-[30deg]" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-3 mb-2 opacity-80">
            <div className="w-12 h-px bg-gray-300"></div>
            <Plane className="w-5 h-5 text-[#ff7a00] rotate-45" fill="#ff7a00" />
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          <p className="text-[#4b5563] max-w-full mx-auto text-[0.9rem] md:text-[1rem] font-[400] leading-relaxed text-left md:text-center mt-3 md:mt-0 pr-4 md:pr-0 md:whitespace-nowrap">
            {packages.description}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-12 max-w-7xl mx-auto"
        >
          {packages.items.slice(0, 4).map((pkg) => {
            const Icon = pkg.title.toLowerCase().includes('mountain') || pkg.title.toLowerCase().includes('swiss') || pkg.title.toLowerCase().includes('cappadocia') ? Plane : Plane; // We will just import Palmtree and Mountain from lucide react if needed, for now use Plane as fallback if we don't have others imported yet. Wait, I should import Palmtree and Mountain at the top. Let me use MapPin as fallback for icon. Let's assume we render based on a condition or just use a generic orange icon. The screenshot has Palm tree and Mountain. I will import them.
            return (
              <motion.div variants={fadeInUp} key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col sm:flex-row group h-full">
                {/* Left: Image */}
                <div className="relative w-full sm:w-[35%] h-64 sm:h-auto overflow-hidden shrink-0">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Middle: Content */}
                <div className="p-6 sm:w-[42%] flex flex-col justify-between bg-white shrink-0">
                  <div>
                    <div className="flex items-start gap-4 mb-2">
                      <div className="w-11 h-11 rounded-full border-[1.5px] border-[#ff7a00] flex items-center justify-center shrink-0">
                        {pkg.title.toLowerCase().includes('swiss') ? (
                          <svg className="w-[22px] h-[22px] text-[#ff7a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                        ) : pkg.title.toLowerCase().includes('cappadocia') ? (
                          <svg className="w-[22px] h-[22px] text-[#ff7a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-3.3 0-6 2.7-6 6 0 3.8 6 12 6 12s6-8.2 6-12c0-3.3-2.7-6-6-6Z"/><path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z"/></svg>
                        ) : pkg.title.toLowerCase().includes('greece') ? (
                          <svg className="w-[22px] h-[22px] text-[#ff7a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-3"/><path d="M21 22v-3"/><path d="M3 19h18"/><path d="M5 19v-9"/><path d="M9 19v-9"/><path d="M15 19v-9"/><path d="M19 19v-9"/><path d="M3 10V8l9-5 9 5v2H3z"/></svg>
                        ) : (
                          <svg className="w-[22px] h-[22px] text-[#ff7a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1.92L6.16 8H13z"/><path d="M13 14c0-2.76-2.46-5-5.5-5S2 11.24 2 14h2l1-1.92L6.16 14H13z"/><path d="M13 20c0-2.76-2.46-5-5.5-5S2 17.24 2 20h2l1-1.92L6.16 20H13z"/><path d="M22 20c0-2.76-2.46-5-5.5-5s-5.5 2.24-5.5 5h2l1-1.92L15.16 20H22z"/><path d="M22 14c0-2.76-2.46-5-5.5-5s-5.5 2.24-5.5 5h2l1-1.92L15.16 14H22z"/><path d="M11 22V8"/></svg>
                        )}
                      </div>
                      <h3 className="font-bold text-[#091f40] text-[1.15rem] leading-[1.25] uppercase mt-0.5 tracking-wide">
                        <Link href={`/package-detail/${pkg.id}`} className="hover:text-[#2563eb] transition-colors">
                          {pkg.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-[#5a6473] text-[0.9rem] font-[500] mb-1 leading-[1.6] line-clamp-3 pr-2">
                      {pkg.description || `Experience the breathtaking ${pkg.location}, charming villages, and scenic landscapes that ${pkg.location} is famous for.`}
                    </p>
                  </div>

                  <div>
                    <div className="w-full border-t border-dotted border-gray-300 mb-2"></div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-[18px] h-[18px] text-[#3474d4]" />
                        <span className="text-[#4b5563] text-[0.95rem] font-[500]">{pkg.days}</span>
                      </div>
                      <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
                      <div className="flex items-center gap-2">
                        <Users className="w-[18px] h-[18px] text-[#3474d4]" />
                        <span className="text-[#4b5563] text-[0.95rem] font-[500]">{pkg.people}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-[18px] h-[18px] text-[#3474d4]" />
                      <span className="text-[#4b5563] text-[0.95rem] font-[500]">{pkg.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Pricing */}
                <div className="bg-[#3474d4] text-white p-6 sm:w-[23%] flex flex-col items-center justify-center text-center shrink-0 rounded-r-2xl sm:rounded-r-2xl rounded-b-2xl sm:rounded-bl-none">
                  <div className="text-[0.9rem] font-[500] mb-2">({pkg.reviews} reviews)</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-[14px] h-[14px] fill-[#facc15] text-[#facc15]" />
                    ))}
                  </div>
                  
                  <div className="w-[85%] border-t border-dotted border-white/40 mb-4"></div>
                  
                  <div className="font-bold text-[2.5rem] tracking-tight leading-none mb-1.5">${pkg.price}</div>
                  <div className="text-[0.9rem] font-[500] mb-6">/ per person</div>
                  
                  <Link href={`/package-detail/${pkg.id}`} className="bg-white text-[#3474d4] font-bold text-[11px] px-4 py-[10px] rounded-full flex items-center justify-center gap-2 w-full hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    BOOK NOW
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center">
          <Link
            href={packages.buttonLink || "/packages"}
            className="cursor-pointer inline-flex items-center justify-center gap-2 border-[1.5px] border-[#3474d4] text-[#3474d4] hover:bg-[#3474d4] hover:text-white px-8 py-2.5 rounded-full font-semibold text-[0.95rem] tracking-wide uppercase transition-all"
          >
            {packages.buttonText || "View All Packages"}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
