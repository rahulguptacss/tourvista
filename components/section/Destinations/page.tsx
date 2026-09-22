"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Plane, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { Dancing_Script, Poppins } from "next/font/google";
import { useRef, useState, useEffect } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import type { DestinationItem, DestinationsData } from "../../types";

export default function Destinations({ data }: { data: DestinationsData }) {
  const destinations = data;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / destinations.items.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / destinations.items.length;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Auto-slide effect for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-slide on mobile
      if (window.innerWidth < 768) {
        const nextIndex = (activeIndex + 1) % destinations.items.length;
        scrollToIndex(nextIndex);
      }
    }, 3000); // 3 seconds
    
    return () => clearInterval(interval);
  }, [activeIndex, destinations.items.length]);

  return (
    <section className={`py-8 md:py-12 bg-gray-50 relative overflow-hidden ${poppins.className}`}>
      {/* Decorative Dashed Plane Path - Desktop Only */}
      <div className="absolute top-16 right-[5%] lg:right-[15%] pointer-events-none hidden md:block z-0 opacity-80">
        <div className="relative w-[280px] h-[160px]">
          <svg width="100%" height="100%" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M10 140 C 60 160, 120 110, 90 60 C 60 10, 20 40, 30 90 C 40 140, 120 150, 190 100 C 230 70, 260 40, 270 20" 
              stroke="#cbd5e1" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
          <Plane className="absolute -top-3 -right-3 w-12 h-12 text-[#dbeafe] fill-[#dbeafe] transform rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10 relative">
          
          <div className="flex justify-center md:block md:text-center mb-4 md:mb-4">
            <div className="inline-flex items-center gap-2 border-[1.5px] border-[#ff7a00] rounded-full px-1.5 py-1.5 pr-5 bg-white">
              <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className={`text-[#ff7a00] text-[15px] font-medium tracking-wide mt-0.5`}>
                {destinations.subtitle}
              </span>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-[2.25rem] md:text-[3.5rem] lg:text-[3.75rem] font-[800] mb-3 text-[#051036] tracking-tight leading-tight text-left md:text-center max-w-[280px] md:max-w-full">
              {destinations.title}
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

          <div className="hidden md:flex items-center justify-center gap-3 mb-5 opacity-80">
            <div className="w-12 h-px bg-gray-300"></div>
            <Plane className="w-5 h-5 text-[#ff7a00] rotate-45" fill="#ff7a00" />
            <div className="w-12 h-px bg-gray-300"></div>
          </div>

          <p className="text-[#4b5563] max-w-2xl mx-auto text-[1rem] md:text-[1.15rem] font-[500] leading-relaxed text-left md:text-center mt-3 md:mt-0 pr-4 md:pr-0">
            {destinations.description}
          </p>
        </div>

        {/* Grid / Mobile Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-6 md:mb-8 pb-4 md:pb-0"
        >
          {destinations.items.map((dest: DestinationItem) => (
            <Link
              key={dest.id}
              href={`/package-detail/${dest.packageId || dest.id}`}
              className="w-full min-w-[100%] md:w-auto md:min-w-0 snap-center shrink-0 bg-white rounded-[1.5rem] shadow-[0_4px_25px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col border border-gray-100/50"
            >
              
              <div className="relative h-[220px] w-full shrink-0">
                <div className="absolute inset-0 overflow-hidden rounded-t-[1.5rem]">
                  <Image 
                    src={dest.image} 
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Top Left Icon */}
                <div className="absolute top-4 left-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-10">
                  <MapPin className="w-5 h-5 text-[#ff7a00] fill-[#ff7a00]" />
                </div>
                {/* Country Badge */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0055ff] text-white px-5 py-[6px] rounded-full flex items-center justify-center gap-1.5 text-[13px] font-[700] border-4 border-white z-20 whitespace-nowrap shadow-sm tracking-wide">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3.1-3.2 3.2c-1.4-1.4-3.5-1.5-4.8-.2l-.6.6 3.6 1.8 1.8 3.6.6-.6c1.3-1.3 1.2-3.4-.2-4.8L9.4 12l3.1 6 1.2-.7.4-3.9.6-.2z"/></svg>
                  {dest.country}
                </div>
              </div>

              <div className="p-6 pt-10 pb-8 flex-1 flex flex-col bg-white rounded-b-[1.5rem]">
                <h3 className="font-[800] text-[1.4rem] md:text-[1.25rem] text-[#051036] mb-1.5 group-hover:text-[#0055ff] transition-colors">
                  {dest.title}
                </h3>

                <div className="hidden md:block w-8 h-[2.5px] bg-[#ff7a00] mb-3.5 mt-1 rounded-full"></div>
                
                <p className="text-[#4b5563] text-[14px] md:text-[13.5px] leading-[1.6] mb-5 flex-1 line-clamp-2 md:line-clamp-2">
                  {dest.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#0055ff] font-[700] text-[15px] md:text-[14.5px] group-hover:gap-2.5 transition-all mt-auto">
                  Explore Now <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </div>

            </Link>
          ))}
        </div>

        {/* Pagination indicators (Mobile Only) */}
        <div className="flex md:hidden items-center justify-center gap-5 mb-8">
          <button 
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className={`cursor-pointer w-8 h-8 rounded-full border flex items-center justify-center shadow-sm transition-all ${
              activeIndex === 0 ? "border-gray-200 text-gray-400 bg-white opacity-60" : "border-blue-200 text-blue-500 bg-white hover:bg-blue-50"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {destinations.items.map((_, idx: number) => (
              <div 
                key={idx} 
                onClick={() => scrollToIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? "bg-[#ff7a00]" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>

          <button 
            onClick={() => scrollToIndex(Math.min(destinations.items.length - 1, activeIndex + 1))}
            disabled={activeIndex === destinations.items.length - 1}
            className={`cursor-pointer w-8 h-8 rounded-full border flex items-center justify-center shadow-sm transition-all ${
              activeIndex === destinations.items.length - 1 ? "border-gray-200 text-gray-400 bg-white opacity-60" : "border-blue-200 text-blue-500 bg-white hover:bg-blue-50"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* View More Button */}
        <div className="text-center md:px-0">
          <Link href="/destinations" className="cursor-pointer w-full md:w-auto bg-[#0055ff] hover:bg-blue-700 text-white px-8 py-4 md:py-3.5 rounded-[2rem] md:rounded-full font-semibold transition-colors shadow-lg shadow-blue-500/30 inline-flex items-center justify-center gap-2 mx-auto">
            <svg className="md:hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3.1-3.2 3.2c-1.4-1.4-3.5-1.5-4.8-.2l-.6.6 3.6 1.8 1.8 3.6.6-.6c1.3-1.3 1.2-3.4-.2-4.8L9.4 12l3.1 6 1.2-.7.4-3.9.6-.2z"/></svg>
            <span className="md:hidden">More Destinations</span>
            <span className="hidden md:inline">See More Destinations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
