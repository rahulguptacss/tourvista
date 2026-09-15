"use client";

import Image from "next/image";
import { Home } from "lucide-react";
import { Poppins } from "next/font/google";
import { TravelBlogData, BlogItem } from "../../types";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

function splitDate(date: string) {
  const [day, ...rest] = date.split(" ");
  return { day, month: rest.join(" ") };
}

function DateBadge({ date, light = false }: { date: string; light?: boolean }) {
  const { day, month } = splitDate(date);
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[8px] leading-none ${
        light
          ? "h-[52px] min-w-[52px] bg-white px-2 text-[#0b1b3f]"
          : "h-[40px] min-w-[40px] bg-[#0959e1] px-1.5 text-white"
      }`}
    >
      <span className={`font-extrabold ${light ? "text-[18px]" : "text-[15px]"}`}>{day}</span>
      <span className={`mt-0.5 font-semibold uppercase ${light ? "text-[9px]" : "text-[9px]"}`}>
        {month}
      </span>
    </div>
  );
}

function SmallBlogCard({ blog }: { blog: BlogItem }) {
  return (
    <article className="relative flex h-full items-center gap-4 rounded-[20px] bg-[#f3f5f8] p-3 pr-[58px]">
      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full">
        <Image src={blog.image} alt={blog.title} fill sizes="72px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-[13px] font-medium text-[#8b92a0]">{blog.author}</p>
        <h4 className="text-[15px] font-semibold leading-[1.35] text-[#0b1b3f]">{blog.title}</h4>
      </div>
      <div className="absolute right-3 top-3">
        <DateBadge date={blog.date} />
      </div>
    </article>
  );
}

function MediumBlogCard({ blog }: { blog: BlogItem }) {
  return (
    <article className="relative">
      <div className="relative overflow-hidden rounded-[20px]">
        <Image
          src={blog.image}
          alt={blog.title}
          width={420}
          height={210}
          className="h-[210px] w-full object-cover object-center"
        />
        <div className="absolute right-3 top-3">
          <DateBadge date={blog.date} />
        </div>
      </div>
      <div className="relative z-[1] mx-4 -mt-[48px] rounded-[16px] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <p className="mb-1 text-[13px] font-medium text-[#8b92a0]">{blog.author}</p>
        <h4 className="text-[16px] font-semibold leading-[1.35] text-[#0b1b3f]">{blog.title}</h4>
      </div>
    </article>
  );
}

function LargeBlogCard({ blog }: { blog: BlogItem }) {
  const author = blog.author?.startsWith("By ") ? blog.author : `By ${blog.author}`;

  return (
    <article className="relative h-full min-h-[420px] overflow-hidden rounded-[20px]">
      <Image src={blog.image} alt={blog.title} fill sizes="420px" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute right-4 top-4">
        <DateBadge date={blog.date} light />
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <p className="mb-2 text-[13px] font-medium text-white/90">{author}</p>
        <h3 className="text-[26px] font-bold leading-[1.25] text-white">{blog.title}</h3>
      </div>
    </article>
  );
}

export default function TravelExperience({ data }: { data: TravelBlogData }) {
  const travelExperience = data;
  const smallBlogs = travelExperience.blogs.filter((b: BlogItem) => b.type === "small");
  const mediumBlogs = travelExperience.blogs.filter((b: BlogItem) => b.type === "medium");
  const largeBlogs = travelExperience.blogs.filter((b: BlogItem) => b.type === "large");
  const leftSmall = smallBlogs.slice(0, 3);
  const midSmall = smallBlogs.slice(3, 4);

  return (
    <section className={`bg-white py-8 md:py-12 ${poppins.className}`}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ff7a00] px-3 py-[5px] text-[13px] font-medium text-[#ff7a00]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ff7a00]">
              <Home className="h-2.5 w-2.5" />
            </span>
            {travelExperience.subtitle}
          </div>
          <h2 className="text-[32px] font-bold leading-tight text-[#0b1b3f] md:text-[40px]">
            {travelExperience.title}
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex flex-col gap-5">
            {leftSmall.map((blog, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="flex-1">
                <SmallBlogCard blog={blog} />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            {midSmall.map((blog, idx) => (
              <motion.div variants={fadeInUp} key={idx}>
                <SmallBlogCard blog={blog} />
              </motion.div>
            ))}
            <motion.div variants={fadeInUp} className="flex-1">
              {mediumBlogs.map((blog, idx) => (
                <MediumBlogCard key={idx} blog={blog} />
              ))}
            </motion.div>
          </div>

          <div className="min-h-[420px]">
            {largeBlogs.map((blog, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="h-full">
                <LargeBlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
