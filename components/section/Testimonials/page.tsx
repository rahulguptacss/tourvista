"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

type TestimonialItem = {
  title: string;
  text: string;
  image: string;
  travelersCount?: string;
  avatars?: string[];
};

export default function Testimonials({ data }: { data: any }) {
  const testimonials = data;
  const items: TestimonialItem[] = testimonials.items?.length
    ? testimonials.items
    : (testimonials.images || []).map((image: string, i: number) => ({
        title: testimonials.review?.title || "Travel Tour",
        text: testimonials.review?.text || "",
        image,
        travelersCount: testimonials.review?.travelersCount || "3+",
        avatars: testimonials.review?.avatars,
        key: i,
      }));

  const [active, setActive] = useState(0);

  return (
    <section className={`bg-white py-8 md:py-12 ${poppins.className}`}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ff7a00] px-3 py-[5px] text-[13px] font-medium text-[#ff7a00]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ff7a00]">
              <Quote className="h-2.5 w-2.5" />
            </span>
            {testimonials.subtitle}
          </div>
          <h2 className="mx-auto max-w-[640px] text-[28px] font-bold leading-[1.25] text-[#0b1b3f] sm:text-[34px] md:text-[40px]">
            {testimonials.title}
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:h-[420px] lg:flex-row lg:gap-[15px]">
          {items.map((item, i) => {
            const isActive = active === i;
            const avatars = item.avatars || testimonials.review?.avatars || [
              "https://i.pravatar.cc/100?img=5",
              "https://i.pravatar.cc/100?img=12",
            ];

            return (
              <article
                key={`${item.title}-${i}`}
                onMouseEnter={() => setActive(i)}
                className={`group relative overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,36,84,0.04),0_20px_60px_rgba(15,36,84,0.06)] transition-[flex] duration-700 ease-out lg:h-full ${
                  isActive ? "lg:flex-[2]" : "lg:flex-[1]"
                }`}
              >
                <div className="flex h-[320px] flex-col lg:h-full lg:flex-row">
                  <div
                    className={`relative overflow-hidden transition-all duration-700 ease-out ${
                      isActive ? "h-[200px] lg:h-full lg:w-1/2" : "h-full lg:w-full"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center overflow-hidden bg-white px-6 py-6 transition-all duration-700 ease-out lg:h-full ${
                      isActive
                        ? "max-h-[280px] opacity-100 lg:w-1/2 lg:max-h-none lg:px-8"
                        : "max-h-0 py-0 opacity-0 lg:w-0 lg:px-0"
                    }`}
                  >
                    <div className={isActive ? "animate-[testimonialFade_0.8s_ease]" : ""}>
                      <span className="mb-3 block text-[48px] leading-none text-[#0f4c5c]">&ldquo;</span>
                      <h3 className="mb-2 text-[22px] font-bold leading-tight text-[#0b1b3f] md:text-[24px]">
                        {item.title}
                      </h3>
                      <div className="mb-3 flex gap-0.5 text-[#f5b301]">
                        {Array.from({ length: 5 }).map((_, star) => (
                          <Star key={star} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mb-6 text-[14px] leading-[1.7] text-[#6b7280]">{item.text}</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {avatars.slice(0, 2).map((src: string, ai: number) => (
                            <span
                              key={ai}
                              className="relative -ml-3 h-9 w-9 overflow-hidden rounded-full border-[3px] border-white first:ml-0"
                            >
                              <Image src={src} alt="" fill sizes="36px" className="object-cover" />
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
      </div>
    </section>
  );
}
