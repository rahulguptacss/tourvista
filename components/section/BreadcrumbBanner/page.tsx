"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export interface BreadcrumbBannerProps {
  title: string;
  backgroundImage: string;
  showBreadcrumb?: boolean;
}

export default function BreadcrumbBanner({ title, backgroundImage, showBreadcrumb = true }: BreadcrumbBannerProps) {
  return (
    <section className={`relative h-[320px] md:h-[450px] flex items-center justify-center -mb-4 md:-mb-8 z-20 ${poppins.className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 text-center px-4 mt-4 md:mt-6"
      >
        <motion.h1 variants={fadeInUp} className={`text-4xl md:text-[64px] font-extrabold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${showBreadcrumb ? "mb-4" : ""}`}>
          {title}
        </motion.h1>
        {showBreadcrumb && (
        <motion.nav variants={fadeInUp} aria-label="breadcrumb" className="flex justify-center">
          <ol className="flex items-center space-x-2 text-[15px] md:text-[16px] font-medium text-white">
            <li>
              <Link href="/" className="hover:text-[#ffaa0d] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/80 mx-1">/</li>
            <li className="text-white">{title}</li>
          </ol>
        </motion.nav>
        )}
      </motion.div>

      {/* Torn Paper Edge Bottom */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <Image
          src="/breadcrumb/download.png"
          alt="torn edge"
          width={1920}
          height={120}
          className="w-full h-auto object-cover object-bottom translate-y-[1px]"
        />
      </div>
      
    </section>
  );
}
