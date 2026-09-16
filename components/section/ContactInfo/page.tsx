"use client";

import { Poppins } from "next/font/google";
import { Send, MapPin, Phone, Mail, Clock, Plane } from "lucide-react";
import type { ContactInfoData } from "../../types";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ContactInfo({ data }: { data: ContactInfoData }) {
  const IconMap: Record<string, React.ElementType> = {
    MapPin,
    Phone,
    Mail,
    Clock,
  };

  return (
    <section className={`relative w-full bg-white pt-12 pb-12 sm:pt-16 sm:pb-16 ${poppins.className}`}>

      {/* Background Dotted Map Pattern (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#051036 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      {/* Decorative Planes & Paths */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left Looping Plane */}
        <div className="absolute top-[10%] left-[5%] lg:left-[15%] opacity-60 hidden md:block">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" className="relative">
            <path d="M 10 140 C 30 90, 80 140, 100 90 C 120 40, 70 20, 130 10" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
            <Plane className="absolute top-[0px] right-[10px] w-6 h-6 text-[#94a3b8] fill-[#94a3b8] transform rotate-[45deg]" />
          </svg>
        </div>
        {/* Right Plane */}
        <div className="absolute top-[35%] right-[5%] lg:right-[15%] opacity-60 hidden md:block">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="relative">
            <path d="M 110 90 Q 60 50 10 10" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
            <Plane className="absolute top-[0px] left-[0px] w-6 h-6 text-[#94a3b8] fill-[#94a3b8] transform -rotate-[135deg]" />
          </svg>
        </div>

        {/* Bottom Left Mountain & Map Pin */}
        <div className="absolute bottom-[-5px] left-[2%] lg:left-[8%] opacity-80 hidden md:block">
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
            {/* Snow caps */}
            <path d="M 60 30 L 75 50 L 60 60 L 45 50 Z" fill="white" />
            <path d="M 140 10 L 155 40 L 140 50 L 125 40 Z" fill="white" />
            
            {/* Mountains */}
            <path d="M 0 120 L 60 30 L 100 90 L 140 10 L 220 120 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 60 30 L 75 55 L 100 90" stroke="#e2e8f0" strokeWidth="2" />
            <path d="M 140 10 L 160 50 L 180 120" stroke="#e2e8f0" strokeWidth="2" />
          </svg>
          <div className="absolute top-[-10px] left-[45px] text-[#ff7a00]">
            <MapPin className="w-8 h-8 fill-white drop-shadow-md" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1280px]">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative">
          
          <div className="inline-flex items-center justify-center gap-2 bg-[#ff7a00] text-white rounded-full px-6 py-2.5 mb-6 shadow-md">
            <Send className="w-[16px] h-[16px] -rotate-45" />
            <span className="text-[13px] font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#051036] mb-6 leading-[1.1] tracking-tight">
            {data.titlePrefix} <span className="text-[#ff7a00]">{data.titleHighlight}</span>
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#6b7280] max-w-[700px] mx-auto mb-5 leading-relaxed font-medium">
            Have questions or ready to plan your next adventure? We're here for you. <br className="hidden sm:block" />
            Reach out to us and our travel experts will get back to you shortly.
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-10 bg-[#ff7a00]"></div>
            <Plane className="w-6 h-6 text-[#051036] fill-[#051036]" />
            <div className="h-[2px] w-10 bg-[#3b82f6]"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.cards.map((card, index) => {
            const Icon = IconMap[card.icon];
            return (
              <div 
                key={index}
                className="bg-white rounded-[16px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100/80"
              >
                {/* Concentric circles for icon */}
                <div className="mx-auto w-[84px] h-[84px] rounded-full border-[1.5px] border-[#3b82f6]/40 flex items-center justify-center mb-6">
                  <div className="w-[66px] h-[66px] bg-[#0d6efd] rounded-full flex items-center justify-center">
                    {Icon && <Icon className="w-[26px] h-[26px] text-white" strokeWidth={2} />}
                  </div>
                </div>
                
                <h3 className="text-[19px] font-[800] text-[#051036] mb-1.5">{card.title}</h3>
                
                <p className="text-[#ff7a00] font-[500] text-[14px] mb-3">
                  {card.subtitle}
                </p>

                <div className="mx-auto w-5 h-[2px] bg-[#0d6efd] mb-4"></div>
                
                <div className="space-y-1.5">
                  {card.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-[#051036] font-[500] text-[14px] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
