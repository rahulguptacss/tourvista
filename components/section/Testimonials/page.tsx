"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import type { TestimonialItem, TestimonialsData } from "../../types";

function TestimonialRow({
  items,
  fallbackAvatars,
}: {
  items: TestimonialItem[];
  fallbackAvatars?: string[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-5 md:h-[380px] md:flex-row md:gap-[15px] lg:h-[420px]">
      {items.map((item, i) => {
        const isActive = active === i;
        const avatars = item.avatars || fallbackAvatars || [
          "https://i.pravatar.cc/100?img=5",
          "https://i.pravatar.cc/100?img=12",
        ];

        return (
          <article
            key={`${item.title}-${i}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,36,84,0.04),0_20px_60px_rgba(15,36,84,0.06)] transition-[flex] duration-700 ease-out md:h-full ${
              isActive ? "md:flex-[2]" : "md:flex-[1]"
            }`}
          >
            <div className="flex h-auto flex-col md:h-full md:flex-row">
              <div
                className={`relative h-[220px] w-full shrink-0 overflow-hidden transition-all duration-700 ease-out sm:h-[240px] md:h-full ${
                  isActive ? "md:w-1/2" : "md:w-full"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div
                className={`flex flex-col justify-center bg-white px-5 py-5 sm:px-6 md:h-full md:overflow-hidden md:transition-all md:duration-700 md:ease-out ${
                  isActive
                    ? "md:w-1/2 md:px-8 md:opacity-100"
                    : "md:w-0 md:px-0 md:opacity-0"
                }`}
              >
                <div className={isActive ? "md:animate-[testimonialFade_0.8s_ease]" : ""}>
                  <span className="mb-2 block text-[40px] leading-none text-[#0f4c5c] md:mb-3 md:text-[48px]">&ldquo;</span>
                  <h3 className="mb-2 text-[18px] font-bold leading-tight text-[#0b1b3f] sm:text-[20px] md:text-[24px]">
                    {item.title}
                  </h3>
                  <div className="mb-3 flex gap-0.5 text-[#f5b301]">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-5 text-[13px] leading-[1.7] text-[#6b7280] sm:text-[14px] md:mb-6">{item.text}</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {avatars.slice(0, 2).map((src: string, ai: number) => (
                        <span
                          key={ai}
                          className="relative -ml-3 h-9 w-9 overflow-hidden rounded-full border-[3px] border-white first:ml-0"
                        >
                          <Image src={src} alt="Traveler" fill sizes="36px" className="object-cover" />
                        </span>
                      ))}
                      <span className="relative -ml-3 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-[#0f4c5c] text-[11px] font-semibold text-white">
                        {item.travelersCount || "3+"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function Testimonials({ data }: { data: TestimonialsData }) {
  const items: TestimonialItem[] = data.items?.length
    ? data.items
    : (data.images || []).map((image: string) => ({
        title: data.review?.title || "Travel Tour",
        text: data.review?.text || "",
        image,
        travelersCount: data.review?.travelersCount || "3+",
        avatars: data.review?.avatars,
      }));

  const visibleItems = data.limit ? items.slice(0, data.limit) : items;
  const rows: TestimonialItem[][] = [];

  for (let i = 0; i < visibleItems.length; i += 3) {
    rows.push(visibleItems.slice(i, i + 3));
  }

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-[#c2410c] px-3 py-[5px] text-[13px] font-semibold uppercase tracking-wide text-[#c2410c]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ff7a00]">
                <Quote className="h-2.5 w-2.5" />
              </span>
              {data.subtitle}
            </span>
            <span className="hidden h-px w-10 bg-[#ff7a00] sm:block" />
          </div>

          {data.titleHighlight ? (
            <h2 className="mx-auto max-w-[720px] text-[28px] font-bold leading-[1.25] text-[#0b1b3f] sm:text-[34px] md:text-[40px]">
              {data.titlePrefix}
              <span className="text-[#c2410c]">{data.titleHighlight}</span>
              {data.titleSuffix}
            </h2>
          ) : (
            <h2 className="mx-auto max-w-[640px] text-[28px] font-bold leading-[1.25] text-[#0b1b3f] sm:text-[34px] md:text-[40px]">
              {data.title}
            </h2>
          )}

          {data.description && (
            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.7] text-[#6b7280] sm:text-[16px]">
              {data.description}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-5 md:gap-6">
          {rows.map((row, index) => (
            <TestimonialRow
              key={index}
              items={row}
              fallbackAvatars={data.review?.avatars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
