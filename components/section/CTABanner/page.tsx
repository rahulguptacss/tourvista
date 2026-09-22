import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

import type { CTABannerData } from "../../types";

export default function CTABanner({ data, className = "" }: { data: CTABannerData; className?: string }) {
  const ctaBanner = data;

  return (
    <section className={`bg-white py-4 md:py-6 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="relative isolate min-h-[340px] md:min-h-0 md:h-[300px] overflow-hidden rounded-[28px] md:rounded-[40px] py-10 md:py-0 flex flex-col justify-center">
          <Image
            src={ctaBanner.backgroundImage}
            alt={ctaBanner.titleLine1}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={55}
            className="object-cover object-[70%_35%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #020b1a 0%, #020b1a 38%, rgba(2,11,26,0.65) 58%, rgba(2,11,26,0.1) 78%, transparent 100%)",
            }}
          />

          <div
            className="relative z-10 flex flex-col justify-center gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16 w-full"
          >
            <div className="max-w-xl">
              <div className="mb-4 md:mb-5 inline-flex items-center gap-2.5 rounded-full border border-blue-500 bg-transparent pr-4 pl-1.5 py-1.5 text-[13px] md:text-[15px] font-medium text-white">
                <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-[#ff7a00]">
                  <Briefcase className="h-[14px] w-[14px] md:h-[15px] md:w-[15px] text-white" strokeWidth={2.5} />
                </span>
                {ctaBanner.subtitle}
              </div>
              <h2 className="text-[30px] md:text-[44px] font-bold leading-[1.2] text-white">
                {ctaBanner.titleLine1}
                <br />
                {ctaBanner.titleLine2}{" "}
                <span className="text-[#ffb35c] font-normal font-kaushan">{ctaBanner.titleHighlight}</span>
              </h2>
            </div>

            <div className="mt-2 md:mt-0">
              <Link
                href={ctaBanner.buttonHref || "/contact"}
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#c2410c] pl-6 pr-2 py-1.5 md:py-2 text-[16px] md:text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(194,65,12,0.3)] transition-transform hover:scale-[1.03]"
              >
                {ctaBanner.buttonText || "Contact Us"}
                <span className="flex h-[38px] w-[38px] md:h-[42px] md:w-[42px] items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="h-[18px] w-[18px] md:h-[20px] md:w-[20px] text-[#ff7a00]" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
