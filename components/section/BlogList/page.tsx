"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import type { BlogItem, BlogPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

function splitDate(date: string) {
  const [day, ...rest] = date.split(" ");
  return { day, month: rest.join(" ") };
}

function DateBadge({ date }: { date: string }) {
  const { day, month } = splitDate(date);
  return (
    <div className="flex h-[62px] min-w-[62px] flex-col items-center justify-center rounded-[10px] bg-[#0959e1] px-2 leading-none text-white">
      <span className="text-[20px] font-extrabold">{day}</span>
      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide">{month}</span>
    </div>
  );
}

function RecentDateBadge({ date }: { date: string }) {
  const { day, month } = splitDate(date);
  return (
    <div className="flex h-[42px] w-[42px] shrink-0 flex-col items-center justify-center rounded-[6px] bg-[#0959e1] leading-none text-white">
      <span className="text-[14px] font-bold">{day}</span>
      <span className="mt-[2px] text-[8px] font-medium capitalize">{month}</span>
    </div>
  );
}

export function BlogSidebar({ data }: { data: BlogPageData }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 self-start">
      <div>
        <div className="mb-3 inline-flex items-center border-l-[3px] border-[#ff7a00] bg-[#fff6ea] px-3 py-1.5">
          <h3 className="text-[16px] font-semibold text-[#0d4f56]">{data.recentTitle}</h3>
        </div>
        <div className="rounded-[18px] bg-white px-5 py-2 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
          {data.recentPosts.map((post, index) => (
            <Link
              key={post.title + post.date}
              href={post.id ? `/blog-detail/${post.id}` : "/blog"}
              className={`flex items-start gap-3 py-4 group ${index < data.recentPosts.length - 1 ? "border-b border-dashed border-[#d9e0e6]" : ""
                }`}
            >
              <RecentDateBadge date={post.date} />
              <div className="min-w-0">
                <p className="mb-1 text-[13px] font-medium text-[#ff7a00]">{post.author}</p>
                <p className="text-[14px] font-medium leading-[1.4] text-[#0d4f56] group-hover:text-[#ff7a00] transition-colors">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {data.galleries.map((images, gi) => (
        <div key={gi}>
          <div className="mb-3 inline-flex items-center border-l-[3px] border-[#ff7a00] bg-[#fff6ea] px-3 py-1.5">
            <h3 className="text-[16px] font-semibold text-[#0d4f56]">{data.galleryTitle}</h3>
          </div>
          <div className="rounded-[18px] bg-white p-5 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-3 gap-2.5">
              {images.map((src) => (
                <Link
                  key={src}
                  href="/gallery"
                  className="relative h-[72px] overflow-hidden rounded-[12px]"
                >
                  <Image src={src} alt="Gallery" fill sizes="90px" className="object-cover" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default function BlogList({ data }: { data: BlogPageData }) {
  const [page, setPage] = useState(1);
  const pageSize = data.pageSize || 6;
  const totalPages = Math.max(1, Math.ceil(data.posts.length / pageSize));

  const visiblePosts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.posts.slice(start, start + pageSize);
  }, [data.posts, page, pageSize]);

  const goToPage = (next: number) => {
    const nextPage = Math.min(totalPages, Math.max(1, next));
    if (nextPage === page) return;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  return (
    <section className={`w-full bg-white ${poppins.className}`}>
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ff7a00] px-3 py-[5px] text-[13px] font-medium text-[#ff7a00]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ff7a00]">
              <Home className="h-2.5 w-2.5" />
            </span>
            {data.subtitle}
          </div>
          <h2 className="text-[32px] font-bold leading-tight text-[#0b1b3f] md:text-[40px]">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.75fr)_minmax(270px,0.8fr)] items-start">
          <div>
            <motion.div
              key={page}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5"
            >
              {visiblePosts.map((post: BlogItem, index: number) => {
                const author = post.author?.startsWith("By ")
                  ? post.author
                  : `By ${post.author}`;
                const href = post.id ? `/blog-detail/${post.id}` : "/blog";

                return (
                  <motion.article
                    key={`${post.title}-${index}`}
                    variants={fadeInUp}
                  >
                    <Link
                      href={href}
                      className="relative block h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden rounded-[20px]"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute right-4 top-4">
                        <DateBadge date={post.date} />
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="mb-2 text-[14px] font-medium text-[#ff7a00]">{author}</p>
                        <h3 className="text-[20px] sm:text-[22px] font-semibold leading-[1.3] text-white">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2.5">
                <button
                  type="button"
                  aria-label="Previous page"
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white text-[#c5cdd3] shadow-[0_6px_18px_rgba(15,23,42,0.08)] disabled:opacity-40 hover:text-[#0b1b36]"
                >
                  <ChevronLeft size={16} />
                </button>
                {pageNumbers.map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => goToPage(num)}
                    className={`flex h-10 w-10 items-center justify-center rounded-[12px] text-[15px] font-semibold ${page === num
                        ? "bg-[#0b1b36] text-white shadow-[0_6px_18px_rgba(11,27,54,0.25)]"
                        : "bg-white text-[#0b1b36] shadow-[0_6px_18px_rgba(15,23,42,0.08)]"
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
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white text-[#c5cdd3] shadow-[0_6px_18px_rgba(15,23,42,0.08)] disabled:opacity-40 hover:text-[#0b1b36]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          <BlogSidebar data={data} />
        </div>
      </div>
    </section>
  );
}
