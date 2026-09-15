"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Poppins } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import type { GalleryItem, GalleryPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function GalleryList({ data }: { data: GalleryPageData }) {
  const [page, setPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const activeItem = activeIndex !== null ? visibleItems[activeIndex] : null;

  const closePopup = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + visibleItems.length) % visibleItems.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % visibleItems.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, visibleItems.length]);

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
        >
          {visibleItems.map((item: GalleryItem, index: number) => (
            <motion.button
              key={item.id}
              type="button"
              variants={fadeInUp}
              onClick={() => setActiveIndex(index)}
              className="relative w-full h-[240px] sm:h-[260px] lg:h-[280px] rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.06)] cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title || "Gallery image"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        {totalPages > 1 && (
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
        )}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/75 flex items-center justify-center p-4 sm:p-8"
            onClick={closePopup}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={closePopup}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white text-[#0b1b36] flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {visibleItems.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 sm:left-8 w-10 h-10 rounded-full bg-white text-[#0b1b36] flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-5xl h-[70vh] sm:h-[78vh] rounded-[18px] overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title || "Gallery image"}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            {visibleItems.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 sm:right-8 w-10 h-10 rounded-full bg-white text-[#0b1b36] flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
