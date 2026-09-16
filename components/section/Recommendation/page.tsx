"use client";

import Image from "next/image";
import Link from "next/link";
import { Plane, ArrowRight, UserCircle, Mountain, Award } from "lucide-react";
import { RecommendationData, FeatureItem } from "@/components/types";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";

export default function Recommendation({
  data,
  isAboutPage,
}: {
  data: RecommendationData;
  isAboutPage?: boolean;
}) {
  const recommendation = data;

  const features = recommendation.features || [
    {
      title: "Trusted Travel Guide",
      description:
        "We provide reliable information and expert advice to help you plan your trips confidently and safely.",
      icon: "UserCircle",
    },
    {
      title: "Our Mission & Vision",
      description:
        "Our mission is to inspire and connect people through travel and create positive experiences that open minds and enrich lives.",
      icon: "Mountain",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-2 md:pt-4 pb-4 md:pb-6">
      {/* ================= DECORATIVE ELEMENTS ================= */}

      {/* Top left dotted pattern */}
      <div className="pointer-events-none absolute left-10 top-10 hidden opacity-40 lg:block">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <pattern
            id="recommend-dots-top"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
          </pattern>
          <rect width="90" height="90" fill="url(#recommend-dots-top)" />
        </svg>
      </div>

      {/* Bottom left dotted pattern */}
      <div className="pointer-events-none absolute bottom-12 left-12 hidden opacity-40 lg:block">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <pattern
            id="recommend-dots-bottom"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
          </pattern>
          <rect width="90" height="90" fill="url(#recommend-dots-bottom)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16"
        >
          {/* =====================================================
              LEFT IMAGE COLLAGE
          ===================================================== */}

          <motion.div variants={fadeInLeft} className="relative mx-auto h-[330px] w-full max-w-[520px] sm:h-[430px] lg:h-[570px] lg:max-w-none">
            {/* Left tall image */}
            <div
              className="
                absolute
                left-0
                top-[5%]
                z-10
                h-[80%]
                w-[46%]
                overflow-hidden
                rounded-[24px]
                shadow-lg
                sm:rounded-[30px]
                lg:rounded-[32px]
              "
            >
              <Image
                src={recommendation.images?.[0] || "/Recommend/left.png"}
                alt="Traveler"
                fill
                sizes="(max-width: 768px) 46vw, 320px"
                className="object-cover"
              />
            </div>

            {/* Right bottom image */}
            <div
              className="
                absolute
                bottom-0
                right-0
                z-10
                h-[68%]
                w-[46%]
                overflow-hidden
                rounded-[24px]
                shadow-lg
                sm:rounded-[30px]
                lg:rounded-[32px]
              "
            >
              <Image
                src={recommendation.images?.[2] || "/Recommend/right.png"}
                alt="Beautiful destination"
                fill
                sizes="(max-width: 768px) 46vw, 320px"
                className="object-cover"
              />
            </div>

            {/* Center circular image */}
            <div
              className="
                absolute
                left-[50%]
                top-[50%]
                z-20
                aspect-square
                w-[56%]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-full
                border-[8px]
                border-white
                shadow-xl
                sm:border-[11px]
                lg:border-[12px]
              "
            >
              <Image
                src={recommendation.images?.[1] || "/Recommend/center.png"}
                alt="Destination"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
              />
            </div>

            {/* Plane */}
            <div
              className="
                absolute
                right-[8%]
                top-[1%]
                z-30
                rotate-[12deg]
              "
            >
              <Plane
                className="
                  h-10
                  w-10
                  fill-[#ff7a00]
                  text-[#ff7a00]
                  drop-shadow-md
                  sm:h-12
                  sm:w-12
                  lg:h-14
                  lg:w-14
                "
              />
            </div>

            {/* Dashed flight path */}
            <svg
              className="
                pointer-events-none
                absolute
                right-[24%]
                top-[-2%]
                hidden
                h-[100px]
                w-[150px]
                opacity-40
                sm:block
              "
              viewBox="0 0 150 100"
              fill="none"
            >
              <path
                d="M0 75 C35 20, 80 90, 145 15"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5 6"
                fill="none"
              />
            </svg>

            {/* Mobile decorative airplane */}
            <div className="absolute left-[47%] top-[1%] hidden sm:block lg:hidden">
              <Plane className="h-7 w-7 rotate-[-15deg] text-[#0a2a65]" />
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <motion.div variants={fadeInRight} className="w-full">
            {/* Subtitle */}
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <div className="hidden h-px w-12 bg-orange-200 sm:block" />

              <div className="flex items-center gap-2">
                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ff7a00]
                  "
                >
                  <Plane className="h-3.5 w-3.5 text-[#ff7a00]" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#ff7a00] sm:text-xs">
                  {recommendation.subtitle || "WHY TRAVEL WITH US?"}
                </span>
              </div>

              <div className="hidden h-px w-12 bg-orange-200 sm:block" />
            </div>

            {/* Title */}
            <h2
              className="
                mx-auto
                max-w-[550px]
                text-center
                text-[32px]
                font-[700]
                leading-[1.2]
                tracking-tight
                text-[#0b163f]
                sm:text-[38px]
                lg:mx-0
                lg:max-w-[600px]
                lg:text-left
                lg:text-[46px]
              "
            >
              {recommendation.titlePrefix || "We"}{" "}
              <span className="text-[#ff7a00]">
                {recommendation.titleHighlight || "Recommend"}
              </span>{" "}
              {recommendation.titleSuffix}
            </h2>

            {isAboutPage ? (
              <div className="mt-5 flex flex-col gap-3 text-[14px] leading-relaxed text-[#374151] lg:mx-0 lg:text-left text-center">
                {/* Description Paragraphs for About Page */}
                {recommendation.aboutDescriptions?.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
            ) : (
              <>
                {/* Description */}
                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-[580px]
                    text-center
                    text-[12px]
                    leading-[1.7]
                    text-[#697386]
                    sm:text-sm
                    lg:mx-0
                    lg:text-left
                  "
                >
                  {recommendation.description ||
                    "We bring you handpicked destinations, expert travel tips and unforgettable experiences to make every journey special. Let's explore the world together!"}
                </p>

                {/* =================================================
                    FEATURES + YEARS
                ================================================= */}

                <div className="mt-6 flex gap-5">
                  {/* Feature cards */}
                  <div className="flex-1 space-y-4">
                    {features
                      .slice(0, 2)
                      .map((feature: FeatureItem, idx: number) => (
                        <div
                          key={idx}
                          className="
                          flex
                          h-[115px]
                          items-center
                          gap-5
                          rounded-[22px]
                          border
                          border-gray-50
                          bg-white
                          px-5
                          shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                          transition-all
                          hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                          sm:h-[120px]
                          sm:px-6
                        "
                        >
                          {/* Icon */}
                          <div
                            className="
                            flex
                            h-16
                            w-16
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border-[5px]
                            border-[#f8f9fb]
                            bg-white
                          "
                          >
                            {feature.icon === "UserCircle" ? (
                              <svg
                                className="h-[36px] w-[36px] text-[#ff7a00]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="10" cy="8" r="3" />
                                <path d="M5 6h10" />
                                <path d="M7 6c0-2 1-3 3-3s3 1 3 3" />
                                <path d="M4 21v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 3.8 2.5" />
                                <path d="M8 14l2 3 2-3" />
                                <path d="M10 17v4" />
                                <path d="M18 9v12" />
                                <path d="M18 9h4l-1 2 1 2h-4" />
                              </svg>
                            ) : (
                              <svg
                                className="h-[36px] w-[36px] text-[#ff7a00]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 6l-5 13h10Z" />
                                <path d="M12 6V2h4l-1.5 2 1.5 2h-4" />
                                <path d="M7 11l-4 8h5" />
                                <path d="M17 11l4 8h-5" />
                                <path d="M10 11.5c1 1 3 1 4 0" />
                                <path d="M5 15.5c.8.8 2.2.8 3 0" />
                                <path d="M16 15.5c.8.8 2.2.8 3 0" />
                                <path d="M2 19h20" />
                              </svg>
                            )}
                          </div>

                          {/* Content */}
                          <div className="min-w-0">
                            <h4 className="text-[16px] font-[600] text-[#0b163f] sm:text-[17.5px]">
                              {feature.title}
                            </h4>
                            <div className="my-2.5 h-[2.5px] w-6 rounded-full bg-[#ff7a00]" />
                            <p className="max-w-[340px] text-[10px] leading-relaxed text-[#697386] sm:text-[11px]">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}

                    {/* MOBILE ONLY THIRD EXPERIENCE CARD */}
                    <div
                      className="
                        flex
                        min-h-[82px]
                        items-center
                        gap-4
                        rounded-[18px]
                        border
                        border-[#edf0f5]
                        bg-white
                        px-4
                        py-3
                        shadow-[0_5px_25px_rgba(0,0,0,0.035)]
                        lg:hidden
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#edf0f5]
                          bg-[#fffdfa]
                        "
                      >
                        <Award
                          className="h-6 w-6 text-[#ff7a00]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#051036]">
                          25 Years of Experience
                        </h4>
                        <p className="mt-1 text-[10px] leading-[1.5] text-[#697386]">
                          Creating unforgettable journeys for over two decades.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP YEARS EXPERIENCE */}
                  <div
                    className="
                      hidden
                      w-[85px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[24px]
                      bg-white
                      lg:flex
                    "
                  >
                    <div className="flex -rotate-90 origin-center items-center gap-4 whitespace-nowrap">
                      <div className="text-[82px] font-[900] leading-none tracking-[-0.04em] text-[#ff7a00]">
                        {recommendation.yearsOfExperience || "25"}
                      </div>
                      <div className="w-[42px] border-t-2 border-dashed border-blue-200/70" />
                      <div className="flex flex-col text-left">
                        <span className="text-[18px] font-extrabold leading-[1.15] tracking-[0.02em] text-[#0b163f]">
                          Years of
                        </span>
                        <span className="text-[18px] font-extrabold leading-[1.15] tracking-[0.02em] text-[#0b163f]">
                          Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION ROW */}
                <div
                  className="
                    mt-3
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  {/* Button */}
                  <Link href="/about"
                    className="
                      cursor-pointer
                      flex
                      w-fit
                      shrink-0
                      items-center
                      justify-center
                      gap-2.5
                      whitespace-nowrap
                      rounded-full
                      bg-[#0a46b5]
                      px-6
                      py-3
                      text-[14px]
                      font-bold
                      text-white
                      shadow-[0_8px_20px_rgba(10,70,181,0.2)]
                      transition-all
                      hover:bg-[#083896]
                      hover:shadow-[0_10px_25px_rgba(10,70,181,0.3)]
                      sm:px-7
                    "
                  >
                    Discover More
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>

                  {/* Customers & Balloon */}
                  <div className="mt-6 flex w-full flex-1 items-center justify-between gap-4 sm:ml-4 sm:mt-0 sm:w-auto lg:gap-6">
                    <div className="flex items-center gap-3.5">
                      {/* Avatars */}
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="
                              relative
                              h-10
                              w-10
                              overflow-hidden
                              rounded-full
                              border-2
                              border-white
                              bg-gray-100
                              shadow-sm
                            "
                          >
                            <Image
                              src={`https://i.pravatar.cc/100?img=${i + 10}`}
                              alt="Happy customer"
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col text-left">
                        <div className="text-[22px] font-[900] leading-none tracking-tight text-[#0b163f]">
                          {recommendation.happyCustomers || "3.5k+"}
                        </div>
                        <div className="mt-1 text-[12px] font-semibold text-[#697386]">
                          Happy Customers
                        </div>
                      </div>
                    </div>

                    {/* Hot Air Balloon SVG */}
                    <div className="ml-auto hidden sm:block opacity-90 pr-4">
                      <svg
                        width="65"
                        height="75"
                        viewBox="0 0 70 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46 54.5C46 51.5 48.5 49 51.5 49C52 49 52.5 49.1 53 49.3C53.7 46.8 56 45 58.7 45C61.8 45 64.3 47.3 64.6 50.3C66.5 50.8 68 52.6 68 54.7C68 57.1 66.1 59 63.7 59H51.5C48.5 59 46 56.5 46 54.5Z"
                          fill="#D3E0F5"
                        />
                        <path
                          d="M2 61.5C2 59.5 3.5 58 5.5 58C5.8 58 6.1 58.1 6.3 58.2C6.8 56.7 8.2 55.6 9.8 55.6C11.7 55.6 13.3 57 13.5 58.8C14.7 59.1 15.6 60.2 15.6 61.5C15.6 62.9 14.4 64 13 64H5.5C3.5 64 2 62.5 2 61.5Z"
                          fill="#D3E0F5"
                        />
                        <path
                          d="M29 55L31 64M41 55L39 64"
                          stroke="#8F7866"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M30 64H40V69C40 70.1 39.1 71 38 71H32C30.9 71 30 70.1 30 69V64Z"
                          fill="#935E37"
                        />
                        <path
                          d="M35 5C17.5 5 15.5 28 27.5 50C29 52 30.5 55 35 55C39.5 55 41 52 42.5 50C54.5 28 52.5 5 35 5Z"
                          fill="#0E4BB2"
                        />
                        <path
                          d="M35 5C27 12 28 41 31.5 55H38.5C42 41 43 12 35 5Z"
                          fill="#F87902"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
