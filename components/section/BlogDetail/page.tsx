"use client";

import Image from "next/image";
import { Check, Quote } from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import type { BlogDetailViewData, BlogPageData } from "../../types";
import { BlogSidebar } from "../BlogList/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function BlogDetail({ data }: { data: BlogDetailViewData }) {
  const author = data.author?.startsWith("By ") ? data.author : `By ${data.author}`;
  const sidebarData: BlogPageData = {
    subtitle: "",
    title: "",
    pageSize: 6,
    posts: [],
    recentTitle: data.recentTitle,
    recentPosts: data.recentPosts,
    destinationsTitle: data.destinationsTitle,
    destinations: data.destinations,
    galleryTitle: data.galleryTitle,
    galleries: data.galleries,
  };

  return (
    <section className={`w-full bg-[#f6f8fa] ${poppins.className}`}>
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(270px,0.8fr)] items-start">
          <div>
            <div className="relative mb-6 h-[280px] overflow-hidden rounded-[22px] sm:h-[340px] lg:h-[380px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <motion.article
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="rounded-[24px] bg-white px-5 py-7 sm:px-8 sm:py-9 shadow-[0_8px_20px_rgba(15,23,42,0.06),0_24px_60px_rgba(15,23,42,0.10)]"
            >
            <p className="mb-3 text-[14px] font-medium text-[#8a949c]">
              {author} / {data.date}
            </p>

            <h1 className="mb-4 text-[26px] font-semibold leading-[1.35] text-[#0b1b36] sm:text-[30px]">
              {data.title}
            </h1>

            <p className="mb-5 text-[15px] leading-[1.85] text-[#7a858d]">{data.intro}</p>

            <blockquote className="mb-3 flex items-start gap-3">
              <Quote
                className="mt-0.5 h-8 w-8 shrink-0 text-[#ff7a00]"
                strokeWidth={2.25}
              />
              <p className="text-[15px] leading-[1.85] text-[#0d4f56]">
                {data.quote}
              </p>
            </blockquote>
            <p className="mb-6 flex items-center gap-2 text-[14px] font-medium text-[#0d4f56]">
              <span className="inline-block h-[2px] w-7 bg-[#ff7a00]" />
              {data.quoteAuthor}
            </p>

            <p className="mb-7 text-[15px] leading-[1.85] text-[#7a858d]">{data.afterQuote}</p>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(data.contentImages?.length ? data.contentImages : [data.secondImage]).map((src) => (
                <div
                  key={src}
                  className="relative h-[180px] overflow-hidden rounded-[18px] sm:h-[210px]"
                >
                  <Image
                    src={src}
                    alt={data.secondTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>

            <h2 className="mb-3 text-[20px] font-semibold leading-[1.4] text-[#0d4f56] sm:text-[22px]">
              {data.secondTitle}
            </h2>
            <p className="mb-7 text-[15px] leading-[1.85] text-[#7a858d]">{data.secondText}</p>

            <h3 className="mb-4 text-[18px] font-semibold text-[#0d4f56]">{data.precautionsTitle}</h3>
            <ul className="space-y-3">
              {data.precautions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#7a858d]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff7a00] text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            </motion.article>
          </div>

          <BlogSidebar data={sidebarData} />
        </div>
      </div>
    </section>
  );
}
