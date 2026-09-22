"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  Headphones,
  UserRound,
  Luggage,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../../utils/animations";
import type { FaqPageData, FaqStat } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const statIcons: Record<string, LucideIcon> = {
  Users: UserRound,
  UserRound,
  Briefcase: Luggage,
  Luggage,
};

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const numericMatch = value.match(/[\d.]+/);
  const suffixMatch = value.match(/[^\d.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const percentage = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - percentage, 4);
      setCount(targetNumber * easeProgress);

      if (percentage < 1) requestAnimationFrame(animate);
      else setCount(targetNumber);
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function FaqList({ data }: { data: FaqPageData }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`w-full bg-white ${poppins.className}`}>
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-10 sm:pt-14 pb-14 sm:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.div variants={fadeInUp} className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ff7a00]" />
            <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[#ff7a00]">
              {data.subtitle}
            </span>
            <span className="h-px w-8 bg-[#ff7a00]" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#0b1b3f] leading-tight"
          >
            {data.titlePrefix}
            <span className="text-[#ff7a00]">{data.titleHighlight}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-3 text-[14px] sm:text-[15px] text-[#6b7280] max-w-[560px] mx-auto"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="space-y-2.5"
          >
            {data.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  variants={fadeInLeft}
                  key={item.question}
                  className={`rounded-[16px] border ${
                    isOpen
                      ? "bg-[#fff8f1] border-[#f5b301]"
                      : "bg-white border-[#e8edf2] shadow-[0_1px_0_rgba(15,23,42,0.02)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center gap-3 px-4 sm:px-5 py-[15px] text-left"
                  >
                    <span
                      className={`w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 text-white transition-all ${
                        isOpen ? "bg-[#ff7a00]" : "bg-[#ff7a00]"
                      }`}
                    >
                      {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                    </span>
                    <span className="flex-1 text-[14px] sm:text-[15px] font-semibold text-[#0b1b3f]">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={20} className="text-[#ff7a00] shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-[#0b1b3f] shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-4 sm:px-5 pb-4 pl-[50px] sm:pl-[54px] text-[13px] sm:text-[14px] leading-[1.75] text-[#8a9aa3]"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="lg:pl-2 lg:sticky lg:top-28 self-start"
          >
            <div className="rounded-[32px] bg-[#eaf3fb] p-3 pb-5">
              <div className="relative mb-12">
                <div className="relative w-full h-[250px] sm:h-[280px] rounded-[24px] overflow-hidden">
                  <Image
                    src={data.image}
                    alt="FAQ"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-3 right-3 -bottom-8 grid grid-cols-2 gap-3">
                  {data.stats.map((stat: FaqStat, index: number) => {
                    const Icon = statIcons[stat.icon] || UserRound;
                    const circle = index === 0 ? "bg-[#3b82f6]" : "bg-[#ff7a00]";
                    const line = index === 0 ? "bg-[#3b82f6]" : "bg-[#ff7a00]";

                    return (
                      <div
                        key={stat.label}
                        className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(15,23,42,0.10)] px-3 py-3.5 flex items-center gap-2.5"
                      >
                        <span className={`w-11 h-11 rounded-full ${circle} flex items-center justify-center shrink-0`}>
                          <Icon size={22} className="text-white" strokeWidth={2} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[18px] font-bold text-[#0b1b3f] leading-none mb-1">
                            <AnimatedCounter value={stat.value} />
                          </p>
                          <p className="text-[11px] text-[#6b7280] leading-none mb-1.5">{stat.label}</p>
                          <span className={`block w-7 h-[2px] rounded-full ${line}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[18px] bg-white px-5 py-5">
                <div className="flex items-start gap-4 mb-5">
                  <span className="w-[58px] h-[58px] rounded-full bg-[#ff7a00]/10 flex items-center justify-center shrink-0">
                    <Headphones size={28} className="text-[#ff7a00]" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0b1b3f] leading-tight mb-1.5">
                      {data.helpTitle}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[#6b7c8a]">
                      {data.helpText}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    href={data.helpLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4d8ef7] hover:bg-[#3b7de8] text-white text-[14px] font-medium px-6 py-2.5"
                  >
                    {data.helpButton}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
