"use client";

import type { ReactElement } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../../utils/animations";
import type { NotFoundData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

function BalloonZero() {
  return (
    <svg
      viewBox="0 0 140 180"
      className="h-[110px] w-[86px] sm:h-[150px] sm:w-[116px] md:h-[188px] md:w-[146px] drop-shadow-[0_12px_24px_rgba(20,80,220,0.45)]"
      aria-hidden
    >
      <defs>
        <linearGradient id="balloonBody" x1="30" y1="8" x2="110" y2="130">
          <stop offset="0%" stopColor="#7ec8ff" />
          <stop offset="45%" stopColor="#2f7dff" />
          <stop offset="100%" stopColor="#0b4fe0" />
        </linearGradient>
        <linearGradient id="balloonShine" x1="40" y1="20" x2="70" y2="90">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="68" rx="52" ry="64" fill="url(#balloonBody)" />
      <path d="M38 55c8-22 28-36 48-34" stroke="url(#balloonShine)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M48 118c6 10 14 16 22 16s16-6 22-16" fill="#1d5fe8" />
      <path d="M58 132h24l-4 10H62l-4-10Z" fill="#c9853a" />
      <rect x="60" y="142" width="20" height="14" rx="2" fill="#d9a24a" />
      <path d="M62 142h16v4H62Z" fill="#b57a2e" />
      <line x1="64" y1="134" x2="62" y2="142" stroke="#8a5a22" strokeWidth="1.5" />
      <line x1="76" y1="134" x2="78" y2="142" stroke="#8a5a22" strokeWidth="1.5" />
    </svg>
  );
}

function GlobePinIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-[30px] w-[30px]" fill="none">
      <circle cx="22" cy="22" r="13.5" stroke="#3d8bff" strokeWidth="2.2" />
      <ellipse cx="22" cy="22" rx="6" ry="13.5" stroke="#3d8bff" strokeWidth="2.2" />
      <path d="M9.5 22h25M12.5 15.5h19M12.5 28.5h19" stroke="#3d8bff" strokeWidth="2" />
      <path d="M31 24.5c0 5.2 5.2 10.8 5.2 10.8S41.4 29.7 41.4 24.5a5.2 5.2 0 1 0-10.4 0Z" fill="#ff7a00" />
      <circle cx="36.2" cy="24.2" r="2" fill="#fff" />
    </svg>
  );
}

function PlanePinIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-[30px] w-[30px]" fill="none">
      <path
        d="M8 27.5 21 22.5 39 14.5c.9-.4 1.7.5 1.3 1.4L31.5 34 26 28.5 16.5 32.5 14 30.5 20.5 25.5 14.5 22.5 8 27.5Z"
        stroke="#3d8bff"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path d="M31 26.5c0 5.2 5.2 10.8 5.2 10.8S41.4 31.7 41.4 26.5a5.2 5.2 0 1 0-10.4 0Z" fill="#ff7a00" />
      <circle cx="36.2" cy="26.2" r="2" fill="#fff" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-[30px] w-[30px]" fill="none">
      <path
        d="M12 24v-1a12 12 0 1 1 24 0v7"
        stroke="#4ea2ff"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <rect x="8.5" y="22" width="8" height="11" rx="3.5" stroke="#4ea2ff" strokeWidth="2.2" />
      <rect x="31.5" y="22" width="8" height="11" rx="3.5" stroke="#4ea2ff" strokeWidth="2.2" />
      <path d="M36 33v2.5a5 5 0 0 1-5 5h-5" stroke="#4ea2ff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ShieldSecureIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-[30px] w-[30px]" fill="none">
      <path
        d="M24 8 12 13v11c0 8.2 5.2 15.2 12 17.5 6.8-2.3 12-9.3 12-17.5V13L24 8Z"
        stroke="#3d8bff"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="m18.5 24 4.2 4.2 7.8-8.4" stroke="#ff7a00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap: Record<string, () => ReactElement> = {
  Globe: GlobePinIcon,
  Plane: PlanePinIcon,
  Headphones: HeadsetIcon,
  ShieldCheck: ShieldSecureIcon,
};

export default function NotFound({ data }: { data: NotFoundData }) {
  if (!data) return null;

  return (
    <div className={`w-full bg-[#051036] flex flex-col ${poppins.className}`}>
      <section
        className="relative flex w-full items-center overflow-hidden pt-24 min-h-[560px] sm:min-h-[620px] lg:min-h-[760px]"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#04102c]/45 sm:bg-[#04102c]/25 lg:bg-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-4 sm:px-8 py-10 sm:py-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[640px] text-center mx-auto lg:mx-0 lg:ml-4"
          >
            <div className="mb-2 flex items-end justify-center gap-0.5 sm:mb-3 sm:gap-2 md:gap-3">
              <motion.span
                variants={fadeInLeft}
                className="text-[72px] font-extrabold leading-none text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:text-[120px] md:text-[168px]"
              >
                4
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="mb-1 sm:mb-2"
              >
                <BalloonZero />
              </motion.div>
              <motion.span
                variants={fadeInRight}
                className="text-[72px] font-extrabold leading-none text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:text-[120px] md:text-[168px]"
              >
                4
              </motion.span>
            </div>

            <motion.h2
              variants={fadeInUp}
              className="text-[24px] font-extrabold leading-tight sm:text-[34px] md:text-[42px]"
            >
              <span className="text-[#ff7a00]">{data.titlePrefix}</span>{" "}
              <span className="text-white">{data.titleHighlight}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 max-w-[420px] px-2 text-[14px] font-normal leading-[1.7] text-[#c8d4ea] sm:mt-4 sm:max-w-[460px] sm:text-[16px]"
            >
              {data.descriptionLine1}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {data.descriptionLine2}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href={data.buttonLink}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff7a00] px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(255,122,0,0.35)] transition-transform hover:scale-[1.04] hover:bg-[#e66a00] sm:mt-7 sm:px-8 sm:py-3 sm:text-[16px]"
              >
                <Home className="h-4 w-4" strokeWidth={2.5} />
                {data.buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#020b22] py-6 sm:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
          >
            {data.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || GlobePinIcon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className={`flex items-center gap-3 py-4 sm:gap-4 sm:px-3 lg:px-6 ${
                    idx < data.features.length - 1 ? "border-b border-white/10 lg:border-r lg:border-white/15" : ""
                  } ${idx < 2 ? "sm:border-b" : "sm:border-b-0"} lg:border-b-0`}
                >
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#16357a] bg-[#071433] sm:h-[62px] sm:w-[62px]">
                    <span className="scale-90 sm:scale-100">
                      <Icon />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-0.5 text-[14px] font-semibold leading-tight text-white sm:text-[15px]">
                      {feature.title}
                    </h3>
                    <p className="text-[12px] font-normal leading-[1.45] text-[#8ea0bd] sm:text-[13px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

