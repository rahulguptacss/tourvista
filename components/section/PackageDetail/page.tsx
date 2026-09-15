"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Check,
  X,
  Star,
  Clock3,
  Hotel,
  Binoculars,
  Car,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Poppins, Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../../utils/animations";
import type {
  PackageDelight,
  PackageDetailViewData,
  PackageIncludeItem,
  PackageItineraryDay,
  PackageTab,
  PackageTerm,
} from "../../types";

const includeIconMap: Record<string, LucideIcon> = {
  Hotel,
  Binoculars,
  Car,
  Utensils,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function PackageDetail({ data }: { data: PackageDetailViewData }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: string[] = Array.from(
    new Set(
      [data?.heroImage, data?.image, ...(data?.gallery || [])].filter(
        (src): src is string => Boolean(src)
      )
    )
  );

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setDirection(1);
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!data) return null;

  const durationText = (() => {
    if (data.durationFull) return data.durationFull;
    const match = String(data.days || "").match(/(\d+)\s*D\s*\/\s*(\d+)\s*N/i);
    if (match) return `${match[2]} Nights & ${match[1]} Days`;
    return data.durationLabel || data.days;
  })();

  const goToSlide = (index: number) => {
    setDirection(index > slide ? 1 : -1);
    setSlide(index);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);

    const el = document.getElementById(id);

    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - 90;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`w-full bg-[#f4fbfb] ${poppins.className}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-8 sm:px-10 lg:px-14 pt-10 sm:pt-14 lg:pt-16 pb-5 sm:pb-7 lg:pb-8">

        {/* =====================================================
            TOP PACKAGE AREA
        ===================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.85fr)_minmax(300px,0.72fr)] gap-5 lg:gap-6 items-start">

          <div className="min-w-0">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="min-w-0 bg-white rounded-[22px] p-4 sm:p-5 lg:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
          >

            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="text-[13px] sm:text-[14px] italic text-[#8aa3a8]">
                {data.ratingLabel || "(4.8 Review)"}
              </span>
              <span className="flex items-center gap-[3px]">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className="w-[15px] h-[15px] fill-[#f5b301] text-[#f5b301]"
                  />
                ))}
              </span>
            </div>

            <h1 className={`${playfair.className} text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.25] font-semibold text-[#0f5c63] mb-3`}>
              {data.headline}
            </h1>

            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-[#1a4d56] mb-5">
              {data.nightsLine || data.subtitle}
            </p>

            <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[420px] rounded-[18px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={slides[slide]}
                  custom={direction}
                  initial={{ x: direction >= 0 ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction >= 0 ? -80 : 80, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[slide] || data.image}
                    alt={data.headline || "Package image"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 780px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {slides.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      slide === i ? "bg-[#f5b301]" : "bg-[#d9e2e6] hover:bg-[#c5d0d4]"
                    }`}
                  />
                ))}
              </div>
            )}

          </motion.div>


        {/* =====================================================
            TABS
        ===================================================== */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5 mb-5 overflow-x-auto scrollbar-hide"
        >

          <div className="flex w-full items-center justify-evenly bg-[#4d8ef7] rounded-[10px] px-6 sm:px-10 py-4">

            {data.tabs?.map((tab: PackageTab) => {
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => scrollToSection(tab.id)}
                  className="cursor-pointer bg-white text-[#1a2f4a] rounded-full px-5 sm:px-7 py-2.5 text-[13px] sm:text-[14px] font-medium whitespace-nowrap"
                >
                  {tab.label}
                </button>
              );
            })}

          </div>

        </motion.div>


        {/* =====================================================
            CONTENT SECTIONS
        ===================================================== */}

        <div className="space-y-4 sm:space-y-5">


          {/* ================= OVERVIEW ================= */}

          <motion.section
            id="overview"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="bg-transparent pt-2"
          >

            <motion.h2
              variants={fadeInUp}
              className="text-[24px] sm:text-[28px] font-semibold text-[#0d4f56] mb-4"
            >
              {data.labels.overviewTitle}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-[13px] sm:text-[14px] leading-[1.75] text-[#6a7b82] mb-6"
            >
              {data.overviewText}
            </motion.p>

            <ul className="space-y-3.5 mb-8">

              {data.overview?.map(
                (item: string, i: number) => (
                  <motion.li
                    variants={fadeInUp}
                    key={i}
                    className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#1a4d56]"
                  >

                    <span className="mt-[2px] w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                      <Check
                        size={12}
                        className="text-white"
                        strokeWidth={3}
                      />
                    </span>

                    <span>{item}</span>

                  </motion.li>
                )
              )}

            </ul>


            <motion.h3
              variants={fadeInUp}
              className="text-[24px] sm:text-[28px] font-semibold text-[#0d4f56] mb-4"
            >
              {data.labels.delightsTitle}
            </motion.h3>

            <ul className="space-y-3.5">

              {data.delights?.map(
                (item: PackageDelight, i: number) => (
                  <motion.li
                    variants={fadeInUp}
                    key={i}
                    className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#1a4d56]"
                  >

                    <span className="mt-[2px] w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                      <Check
                        size={12}
                        className="text-white"
                        strokeWidth={3}
                      />
                    </span>

                    <span>
                      {item.title}
                    </span>

                  </motion.li>
                )
              )}

            </ul>

          </motion.section>


          {/* ================= ITINERARY ================= */}

          <motion.section
            id="itinerary"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.05,
            }}
          >

            <motion.h2
              variants={fadeInUp}
              className="text-[20px] sm:text-[22px] font-semibold text-[#0d4f56] mb-4"
            >
              {data.labels.itineraryTitle}
            </motion.h2>

            <div className={`${poppins.className} bg-[#fff8ee] rounded-[18px] p-5 sm:p-6 lg:px-8 lg:py-7 space-y-8`}>

              {data.itinerary?.map(
                (day: PackageItineraryDay, i: number) => (

                  <motion.div
                    variants={fadeInUp}
                    key={day.day || i}
                    className="flex items-start gap-5"
                  >

                    <div className="flex flex-col items-center shrink-0 w-[44px]">
                      <span className="w-[34px] h-[34px] rounded-full border-[2px] border-[#f5b301] text-[#f5b301] text-[13px] font-bold flex items-center justify-center bg-white leading-none">
                        {String(day.day).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] tracking-[0.14em] text-[#9aa4a8] mt-1 font-medium uppercase">
                        {data.labels.itineraryDayBadge}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0d4f56] leading-[1.35] mb-3.5">
                        {data.labels.itineraryDayPrefix} {Number(day.day)} {day.title}
                      </h3>

                      <ul className="space-y-2.5">
                        {day.points?.map((point: string, pi: number) => (
                          <li
                            key={pi}
                            className="flex items-start gap-2.5 text-[14px] sm:text-[15px] leading-[1.7] text-[#1a4d56] font-normal"
                          >
                            <span className="mt-[4px] w-[18px] h-[18px] rounded-full border-[1.6px] border-[#f5b301] flex items-center justify-center shrink-0">
                              <Check
                                size={10}
                                className="text-[#f5b301]"
                                strokeWidth={3}
                              />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {(day.images?.length ?? 0) > 0 && (
                        <div
                          className={`mt-3 grid gap-2.5 ${
                            (day.images?.length ?? 0) === 1
                              ? "grid-cols-1"
                              : "grid-cols-2 sm:grid-cols-3"
                          }`}
                        >
                          {(day.images ?? []).map((src: string, ii: number) => (
                            <div
                              key={src + ii}
                              className="relative w-full h-[110px] sm:h-[125px] md:h-[145px] rounded-[11px] overflow-hidden bg-slate-100"
                            >
                              <Image
                                src={src}
                                alt={day.title || "Itinerary image"}
                                fill
                                sizes="(max-width: 640px) 45vw, 30vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </motion.div>

                )
              )}

            </div>

          </motion.section>


          {/* ================= INCLUSION ================= */}

          <motion.section
            id="inclusion"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="bg-white rounded-[13px] p-4 sm:p-5 lg:p-6"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* Inclusion */}

              <div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-[20px] sm:text-[22px] font-semibold text-[#0d4f56] mb-4"
                >
                  {data.labels.inclusionTitle}
                </motion.h2>

                <ul className="space-y-3">

                  {data.inclusions?.map(
                    (item: string, i: number) => (

                      <motion.li
                        variants={fadeInUp}
                        key={i}
                        className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#1a4d56]"
                      >

                        <span className="mt-[2px] w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                          <Check
                            size={12}
                            className="text-white"
                            strokeWidth={3}
                          />
                        </span>

                        {item}

                      </motion.li>

                    )
                  )}

                </ul>

              </div>


              {/* Exclusion */}

              <div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-[20px] sm:text-[22px] font-semibold text-[#0d4f56] mb-4"
                >
                  {data.labels.exclusionTitle}
                </motion.h2>

                <ul className="space-y-3">

                  {data.exclusions?.map(
                    (item: string, i: number) => (

                      <motion.li
                        variants={fadeInUp}
                        key={i}
                        className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#1a4d56]"
                      >

                        <span className="mt-[2px] w-5 h-5 rounded-full bg-[#ef4444] flex items-center justify-center shrink-0">
                          <X
                            size={12}
                            className="text-white"
                            strokeWidth={3}
                          />
                        </span>

                        {item}

                      </motion.li>

                    )
                  )}

                </ul>

              </div>

            </div>

          </motion.section>


          {/* ================= TERMS ================= */}

          <motion.section
            id="terms"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
          >

            <motion.h2
              variants={fadeInUp}
              className="text-[20px] sm:text-[22px] font-semibold text-[#0d4f56] mb-4"
            >
              {data.labels.termsTitle}
            </motion.h2>

            <div className="bg-[#fff8ee] rounded-[16px] p-5 sm:p-6 lg:p-8 space-y-6">

              {data.terms?.map(
                (term: PackageTerm, i: number) => (

                  <motion.div
                    variants={fadeInUp}
                    key={i}
                  >

                    <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0d4f56] mb-1.5">
                      {term.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#6a7b82]">
                      {term.text}
                    </p>

                  </motion.div>

                )
              )}

            </div>

          </motion.section>

        </div>

          </div>

          <motion.aside
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="w-full lg:max-w-[320px] lg:justify-self-end lg:sticky lg:top-28 self-start space-y-4"
          >
            <div className="bg-white rounded-[28px] shadow-[0_10px_28px_rgba(15,23,42,0.06)] px-5 pt-7 pb-7">
              <p className="text-[12px] text-[#8a9aa3] mb-2">{data.labels.startingFrom}</p>

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-end flex-wrap gap-x-1.5">
                  <span className="text-[22px] font-medium text-[#f5b301] line-through leading-none">
                    ${data.oldPrice || Math.round(Number(data.price) * 1.25)}
                  </span>
                  <span className="text-[28px] font-bold text-[#0d4f56] leading-none">
                    ${data.price}
                  </span>
                  <span className="text-[12px] text-[#8a9aa3] pb-0.5">{data.labels.perPerson}</span>
                </div>
                <span className="w-[18px] h-[18px] mt-1 rounded-full border-[1.5px] border-[#1a2f4a] flex items-center justify-center shrink-0">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#1a2f4a]" />
                </span>
              </div>

              <label className="flex items-center gap-2 text-[12px] text-[#5b6b73] cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 rounded-[3px] accent-[#0d4f56]" />
                <span>{data.labels.emiPrefix} ${data.emiPrice || Math.round(Number(data.price) * 0.65)}</span>
              </label>

              <p className="text-[12px] text-[#0d4f56] mt-0.5 mb-4 pl-[22px]">{data.labels.seeOption}</p>

              <Link
                href={data.labels.enquireLink}
                className="inline-flex items-center justify-center rounded-full bg-[#7be33a] hover:bg-[#6ad12f] text-white font-semibold text-[14px] px-8 py-2"
              >
                {data.labels.enquireNow}
              </Link>
            </div>

            <div className="bg-white rounded-[26px] shadow-[0_8px_24px_rgba(15,23,42,0.05)] px-5 pt-6 pb-6">
              <div className="flex items-start gap-1.5 mb-1.5">
                <Clock3 size={14} className="text-[#0d4f56] shrink-0 mt-[2px]" strokeWidth={1.7} />
                <p className="text-[12px] leading-[1.45] text-[#0d4f56] font-normal">
                  <span className="font-semibold">{data.labels.durationLabel}</span>
                  {durationText}
                </p>
              </div>

              <div className="flex items-start gap-1.5 mb-5">
                <MapPin size={14} className="text-[#0d4f56] shrink-0 mt-[2px]" strokeWidth={1.7} />
                <p className="text-[12px] leading-[1.5] text-[#0d4f56] font-normal">
                  <span className="font-semibold">{data.labels.placesLabel}</span>
                  {data.nightsLine || data.location}
                </p>
              </div>

              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center justify-center rounded-full bg-[#4d8ef7] text-white text-[12px] font-medium px-[18px] py-[6px] leading-none">
                  {data.labels.packageIncludes}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-0">
                {data.includes.map((item: PackageIncludeItem) => {
                  const Icon = includeIconMap[item.icon] || Hotel;
                  return (
                    <div key={item.label} className="flex flex-col items-center text-center gap-[6px]">
                      <Icon size={22} className="text-[#0d4f56]" strokeWidth={1.4} />
                      <span className="text-[11px] leading-none text-[#6a7b82]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.aside>

        </div>

      </div>
    </section>
  );
}