"use client";

import { Poppins } from "next/font/google";
import { Handshake, Plane } from "lucide-react";
import Image from "next/image";
import type { PartnersData } from "../../types";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function Partners({ data }: { data: PartnersData }) {
  return (
    <section className={`w-full bg-white pt-12 pb-2 sm:pt-16 sm:pb-4 ${poppins.className}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#cce0ff]"></div>
            <div className="flex items-center gap-2 text-[#0d6efd] font-bold tracking-widest uppercase text-[16px] sm:text-[18px]">
              <Handshake className="w-6 h-6" />
              {data.subtitle}
            </div>
            <div className="h-[2px] w-12 bg-[#cce0ff]"></div>
          </div>

          <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-semibold text-[#051036] mb-3 leading-[1.2] tracking-tight">
            {data.titlePrefix} <span className="text-[#0d6efd]">{data.titleHighlight}</span>
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-[#cce0ff]"></div>
            <Plane className="w-6 h-6 text-[#0d6efd] fill-[#0d6efd]" />
            <div className="h-[2px] w-12 bg-[#cce0ff]"></div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {data.brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-[5/3] sm:aspect-[2/1] border border-gray-200 rounded-[12px] bg-white flex items-center justify-center p-2 sm:p-4 mb-3 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-100">
                <div className="relative w-full h-full max-w-[220px]">
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    fill 
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </div>
              <span className="text-[15px] sm:text-[16px] font-[500] text-[#051036]">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
