"use client";

import { useMemo, useState, type ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  UsersRound,
  Star,
  Camera,
  Plane,
  LayoutGrid,
  Briefcase,
  Globe,
  RotateCcw,
} from "lucide-react";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { PackagesListData } from "../../types";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const filterIconMap: Record<string, ElementType> = {
  LayoutGrid,
  Users,
  UsersRound,
  Briefcase,
  Globe,
};

const categoryIconMap: Record<string, ElementType> = {
  family: Users,
  group: UsersRound,
  corporate: Briefcase,
  international: Globe,
};

export default function PackagesList({
  data,
  hideFilters = false,
}: {
  data: PackagesListData;
  hideFilters?: boolean;
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages = useMemo(() => {
    if (hideFilters || activeFilter === "all") return data.items;
    return data.items.filter((pkg) => pkg.categoryId === activeFilter);
  }, [activeFilter, data.items, hideFilters]);

  return (
    <section className={`pt-8 md:pt-12 pb-8 bg-white relative ${poppins.className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto mb-8 md:mb-10 relative"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 border-[1.5px] border-[#ff7a00] rounded-full px-1.5 py-1.5 pr-5 bg-white">
              <div className="bg-[#ff7a00] rounded-full w-8 h-8 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#ff7a00] text-[15px] font-medium tracking-wide mt-0.5">
                {data.subtitle}
              </span>
            </div>
          </div>

          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-[700] mb-1 text-[#051036] tracking-tight leading-tight text-center">
            {data.title}
          </h2>

          <p className="text-[#4b5563] max-w-3xl mx-auto text-[0.9rem] md:text-[1rem] font-[400] leading-relaxed text-center mt-2">
            {data.description}
          </p>

          <div className="flex items-center justify-center mt-3">
            <Plane className="w-5 h-5 text-[#ff7a00] rotate-45" fill="#ff7a00" />
          </div>
        </motion.div>

        {!hideFilters && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center gap-3 rounded-[16px] border border-[#e5e7eb] bg-white px-4 md:px-5 py-3.5 md:py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] overflow-x-auto">
            <span className="text-[#0f172a] text-[14px] md:text-[15px] font-bold whitespace-nowrap shrink-0">
              Filter by Type:
            </span>

            <div className="flex items-center gap-2">
              {data.filters?.map((filter) => {
                const Icon = filterIconMap[filter.icon] || LayoutGrid;
                const isActive = activeFilter === filter.id;
                const showIcon = filter.id !== "all";

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`cursor-pointer inline-flex items-center gap-1.5 rounded-[10px] px-4 md:px-5 py-2.5 text-[13px] md:text-[14px] font-semibold whitespace-nowrap transition-all border ${
                      isActive
                        ? "bg-[#2563eb] text-white border-[#2563eb] shadow-sm"
                        : "bg-white text-[#1e293b] border-[#e5e7eb] hover:border-[#2563eb]/40"
                    }`}
                  >
                    {showIcon && (
                      <Icon
                        className={`w-[16px] h-[16px] ${isActive ? "text-white" : "text-[#2563eb]"}`}
                        strokeWidth={2.2}
                      />
                    )}
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="cursor-pointer ml-auto inline-flex items-center gap-1.5 pr-1 text-[14px] md:text-[15px] font-semibold text-[#ff7a00] whitespace-nowrap hover:opacity-80 transition-opacity shrink-0"
            >
              <RotateCcw className="w-[15px] h-[15px]" strokeWidth={2.4} />
              Clear Filter
            </button>
          </div>
        </div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => {
              const CategoryIcon = categoryIconMap[pkg.categoryId || ""] || Camera;

              return (
                <motion.div
                  layout
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-xl transition-shadow flex flex-col sm:flex-row group h-full border border-gray-100"
                >
                  <div className="relative w-full sm:w-[35%] h-64 sm:h-auto overflow-hidden shrink-0 min-h-[220px]">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-5 sm:p-6 sm:w-[42%] flex flex-col justify-between bg-white shrink-0">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <CategoryIcon className="w-[14px] h-[14px] text-[#ff7a00]" strokeWidth={2.4} />
                        <span className="text-[#ff7a00] text-[11px] font-semibold tracking-[0.12em] uppercase">
                          {pkg.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#091f40] text-[1.15rem] leading-[1.25] uppercase mb-2 tracking-wide">
                        <Link href={`/package-detail/${pkg.id}`} className="hover:text-[#2563eb] transition-colors">
                          {pkg.title}
                        </Link>
                      </h3>
                      <p className="text-[#5a6473] text-[0.9rem] font-[500] mb-1 leading-[1.6] line-clamp-3 pr-2">
                        {pkg.description}
                      </p>
                    </div>

                    <div>
                      <div className="w-full border-t border-dotted border-gray-300 mb-2.5 mt-3"></div>
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

                  <div className="bg-[#3474d4] text-white p-6 sm:w-[23%] flex flex-col items-center justify-center text-center shrink-0 rounded-r-2xl rounded-b-2xl sm:rounded-bl-none">
                    <div className="text-[0.9rem] font-[500] mb-2">({pkg.reviews} reviews)</div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(pkg.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-[14px] h-[14px] fill-[#facc15] text-[#facc15]" />
                      ))}
                    </div>

                    <div className="w-[85%] border-t border-dotted border-white/40 mb-4"></div>

                    <div className="font-bold text-[2.5rem] tracking-tight leading-none mb-1.5">${pkg.price}</div>
                    <div className="text-[0.9rem] font-[500] mb-6">/ per person</div>

                    <Link
                      href={`/package-detail/${pkg.id}`}
                      className="bg-white text-[#3474d4] font-bold text-[11px] px-4 py-[10px] rounded-full flex items-center justify-center gap-2 w-full hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-300 whitespace-nowrap cursor-pointer"
                    >
                      BOOK NOW
                      <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredPackages.length === 0 && (
          <p className="text-center text-slate-500 mb-5">
            {hideFilters ? "No packages found for this destination." : "No packages found for this filter."}
          </p>
        )}
      </div>
    </section>
  );
}
