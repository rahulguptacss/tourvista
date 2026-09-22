import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroData } from "../../types";

export default function Hero({ data }: { data: HeroData }) {
  const hero = data;
  const backgroundImage = hero?.backgroundImage || "/hero/hero.png";

  return (
    <section className="relative min-h-[80dvh] lg:min-h-[100dvh] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-0">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Travel destinations around the world"
          fill
          priority
          quality={60}
          sizes="(max-width: 768px) 100vw, 1400px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#01253a]/95 via-[#01253a]/80 md:via-[#01253a]/70 to-[#01253a]/40 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        <div className="max-w-3xl text-white">
          <p className="font-dancing text-[1.75rem] md:text-[2.25rem] text-[#ffd54a] mb-2 leading-none drop-shadow-md">
            {hero?.subtitle || "Welcome To TourVista!"}
          </p>
          <h1 className="text-[3.25rem] md:text-[5rem] font-[700] mb-4 leading-[1.05] tracking-tight drop-shadow-lg">
            {hero?.titleLine1 || "Explore The"} <br />
            {hero?.titleLine2 || "Whole"}{" "}
            <span className="font-dancing font-normal text-[#7eb6ff] text-[4.25rem] md:text-[6.5rem] ml-1 align-bottom leading-[0.5]">
              {hero?.titleLine3 || "World"}
            </span>
          </h1>
          <p className="text-[0.95rem] md:text-[1.15rem] font-[400] text-white mb-10 max-w-[32rem] leading-relaxed drop-shadow-md pr-4 md:pr-0">
            {hero?.description || "Discover breathtaking destinations, unforgettable experiences, and the joy of travel with TourVista."}
          </p>

          <div className="flex flex-row items-center gap-3 md:gap-5 w-full">
            <Link href="/services" className="cursor-pointer flex-1 md:flex-none flex items-center justify-between md:justify-start gap-2 bg-[#c2410c] text-white pl-5 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full text-[16px] md:text-[1.05rem] font-[700] hover:bg-[#9a3412] transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
              <span className="whitespace-nowrap">{hero?.button1 || "Discover More"}</span>
              <div className="bg-white text-[#c2410c] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </Link>

            <Link href="/packages" className="cursor-pointer flex-1 md:flex-none flex items-center justify-between md:justify-start gap-2 bg-transparent border-[1.5px] border-white text-white pl-5 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full text-[16px] md:text-[1.05rem] font-[600] hover:bg-white/10 transition-all hover:scale-105">
              <span className="whitespace-nowrap">{hero?.button2 || "View Packages"}</span>
              <div className="bg-white text-slate-900 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
