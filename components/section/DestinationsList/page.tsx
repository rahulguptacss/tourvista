"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import type { DestinationItem, DestinationsPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DestinationsList({
  data,
}: {
  data: DestinationsPageData;
}) {
  const [page, setPage] = useState(1);
  const pageSize = data.pageSize || 8;
  const totalPages = Math.max(1, Math.ceil(data.items.length / pageSize));

  const visibleItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.items.slice(start, start + pageSize);
  }, [data.items, page, pageSize]);

  const goToPage = (next: number) => {
    const nextPage = Math.min(totalPages, Math.max(1, next));
    if (nextPage === page) return;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const start = Math.max(1, Math.min(page - 1, totalPages - 2));
    return [start, start + 1, start + 2];
  }, [page, totalPages]);

  return (
    <section className={`w-full bg-[#f4fbfb] ${poppins.className}`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
        <motion.div
          key={page}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 lg:gap-x-4 lg:gap-y-8"
        >
          {visibleItems.map((item: DestinationItem) => (
            <motion.article
              key={item.id}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative w-full h-[260px] sm:h-[290px] lg:h-[320px] rounded-[28px] overflow-hidden border border-[#edf2f5] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="relative z-10 -mt-8 mx-0 bg-white rounded-full text-center text-[16px] sm:text-[17px] font-medium text-[#0d4f56] py-[14px] shadow-[0_8px_22px_rgba(15,23,42,0.08)]">
                {item.title}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex items-center justify-center gap-2.5 mt-12 sm:mt-14">
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="w-10 h-10 rounded-[12px] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] flex items-center justify-center text-[#c5cdd3] disabled:opacity-40 hover:text-[#0b1b36] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {pageNumbers.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => goToPage(num)}
              className={`w-10 h-10 rounded-[12px] text-[15px] font-semibold flex items-center justify-center transition-colors ${
                page === num
                  ? "bg-[#0b1b36] text-white shadow-[0_6px_18px_rgba(11,27,54,0.25)]"
                  : "bg-white text-[#0b1b36] shadow-[0_6px_18px_rgba(15,23,42,0.08)] hover:bg-[#f7f9fb]"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            type="button"
            aria-label="Next page"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="w-10 h-10 rounded-[12px] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)] flex items-center justify-center text-[#c5cdd3] disabled:opacity-40 hover:text-[#0b1b36] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
