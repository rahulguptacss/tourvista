"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Award, CalendarCheck, Plane, Smile, Star, type LucideIcon } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const numericMatch = value.match(/[\d\.]+/);
  const suffixMatch = value.match(/[^\d\.]+/);
  
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const isFloat = numericMatch ? numericMatch[0].includes('.') : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2500; // slightly longer for smoother effect

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutQuart for a smoother, more natural deceleration
      const easeProgress = 1 - Math.pow(1 - percentage, 4);
      const currentCount = targetNumber * easeProgress;
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber]);

  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span ref={elementRef} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

import type { StatItem, StatsData } from "../../types";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Plane,
  CalendarCheck,
  Smile,
  Star,
};

export default function Stats({ data }: { data: StatsData }) {
  const stats = data.items || [];
  if (!stats || stats.length === 0) return null;

  return (
    <section className={`bg-white pt-0 pb-8 ${poppins.className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#0b1d3d] bg-gradient-to-r from-[#071736] via-[#0b2046] to-[#071736] px-4 sm:px-6 py-8 md:py-10 rounded-b-[2rem] shadow-2xl">
          <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto md:divide-x md:divide-white/10">
            {stats.map((stat: StatItem, idx: number) => {
              const IconComponent = iconMap[stat.icon] || Star;

              return (
                <div key={idx} className="flex flex-col items-center justify-center w-1/2 md:w-1/4 px-2 sm:px-4 py-4 md:py-0 group cursor-default">
                  <div className="mb-2 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                    <IconComponent className="h-10 w-10 text-[#ffc107] drop-shadow-[0_2px_4px_rgba(255,193,7,0.3)] sm:h-11 sm:w-11 md:h-12 md:w-12" strokeWidth={1.75} />
                  </div>
                  <p className="text-white/90 text-[0.8rem] sm:text-[0.9rem] md:text-[14px] font-medium mb-1 text-center whitespace-nowrap tracking-wide">
                    {stat.label}
                  </p>
                  <h3 className="text-white text-3xl sm:text-4xl md:text-[40px] font-bold transform transition-transform duration-500 group-hover:scale-105">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
