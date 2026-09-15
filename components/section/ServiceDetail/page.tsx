"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { 
  Building2, Percent, ShieldCheck, UserRound, 
  Ticket, Headset, ArrowRight, CheckCircle2, 
  Phone, Mail, MessageCircle 
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import type { LucideIcon } from "lucide-react";
import type { ServiceDetailData, ServiceFeature } from "../../types";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Percent,
  ShieldCheck,
  UserRound,
  Ticket,
  Headset,
};

export default function ServiceDetail({ data }: { data: ServiceDetailData }) {
  if (!data) return null;

  return (
    <section className={`py-12 md:py-20 bg-white ${poppins.className}`}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header / Intro */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 border-[1px] border-[#1d62f0]/30 rounded-full pl-1.5 pr-6 py-1.5 bg-white mb-6">
                <div className="bg-[#1d62f0] rounded-full w-[34px] h-[34px] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#1d62f0] text-[16px] font-bold tracking-wide">
                  {data.tagline}
                </span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-[#051036] text-[36px] md:text-[46px] font-[800] leading-[1.1] tracking-tight mb-3">
                {data.title}
              </motion.h2>

              <motion.div variants={fadeInUp} className="w-[50px] h-[3px] bg-[#ff7a00] mb-5"></motion.div>

              <motion.h3 variants={fadeInUp} className="text-[#051036] text-[20px] md:text-[22px] font-[600] tracking-tight mb-3">
                {data.subtitle}
              </motion.h3>

              <motion.p variants={fadeInUp} className="text-[#5b6478] text-[15px] leading-[1.6] mb-8 pr-4">
                {data.description}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 mb-8 pr-4">
                {data.mainFeatures?.map((feature: ServiceFeature, index: number) => {
                  const Icon = iconMap[feature.icon] || Building2;
                  return (
                    <motion.div variants={fadeInUp} key={index} className="flex gap-4 items-center">
                      <div className="w-[45px] h-[45px] rounded-full bg-[#f4f7fb] flex items-center justify-center shrink-0">
                        <Icon className="w-[18px] h-[18px] text-[#1d62f0]" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[#051036] text-[14px] font-[700] mb-0.5">{feature.title}</h4>
                        <p className="text-[#5b6478] text-[12px] leading-[1.5]">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enquire Button */}
              <motion.div variants={fadeInUp} className="mb-8">
                <Link href={data.enquireLink || "/contact"}>
                  <button className="bg-[#1d62f0] hover:bg-[#051036] text-white px-6 py-2.5 rounded-[6px] font-medium text-[14px] transition-colors flex items-center gap-2 cursor-pointer">
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <div className="w-full h-[1px] bg-slate-200 mb-8"></div>

            {/* Why Choose Us */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              <motion.h3 variants={fadeInUp} className="text-[#051036] text-[20px] font-[800] mb-1.5 tracking-tight">
                {data.whyChooseUs.title}
              </motion.h3>
              
              <motion.div variants={fadeInUp} className="w-[30px] h-[3px] bg-[#ff7a00] mb-5"></motion.div>
              
              <motion.p variants={fadeInUp} className="text-[#5b6478] text-[14px] font-[500] mb-7">
                {data.whyChooseUs.description}
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4 mb-0">
                {data.whyChooseUs.features?.map((feature: ServiceFeature, index: number) => {
                  const Icon = iconMap[feature.icon] || Building2;
                  return (
                    <motion.div variants={fadeInUp} key={index} className="border border-slate-200 rounded-[12px] p-4 text-center hover:border-[#1d62f0]/30 transition-colors bg-white">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-[36px] h-[36px] text-[#1d62f0]" strokeWidth={1.2} />
                      </div>
                      <h4 className="text-[#051036] text-[13px] font-[700] mb-2">{feature.title}</h4>
                      <p className="text-[#5b6478] text-[11px] leading-[1.6]">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            {/* Main Sidebar Image */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full aspect-[1.5/1] lg:aspect-[1.1/1] rounded-[24px] overflow-hidden relative shadow-md">
              <Image src={data.sidebar.image} alt="Service detail" fill className="object-cover" />
            </motion.div>

            {/* Combined Sidebar Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[24px] p-6 lg:p-7 shadow-[0_15px_60px_rgba(0,0,0,0.08)] relative z-10 w-[92%] mx-auto lg:w-[95%] lg:ml-auto lg:mr-0 -mt-[40px] lg:-mt-[30px]">
              
              {/* Service Highlights */}
              <div className="mb-6">
                <h3 className="text-[#051036] text-[20px] font-[700] mb-4">Service Highlights</h3>
                <div className="w-[35px] h-[2px] bg-[#1d62f0] mb-6"></div>
                
                <ul className="flex flex-col gap-[12px]">
                  {data.sidebar.highlights?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#ff7a00] shrink-0" strokeWidth={2} />
                      <span className="text-[#051036] text-[14px] font-[500]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-slate-200 my-5"></div>

              {/* Need Help */}
              <div>
                <h3 className="text-[#051036] text-[20px] font-[700] mb-4">Need Help?</h3>
                
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1d62f0] flex items-center justify-center shrink-0">
                      <Phone className="w-[16px] h-[16px] text-white" />
                    </div>
                    <span className="text-[#051036] text-[15px] font-[600]">{data.sidebar.needHelp.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1d62f0] flex items-center justify-center shrink-0">
                      <Mail className="w-[16px] h-[16px] text-white" />
                    </div>
                    <span className="text-[#051036] text-[15px] font-[600]">{data.sidebar.needHelp.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1d62f0] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-[16px] h-[16px] text-white" />
                    </div>
                    <span className="text-[#051036] text-[15px] font-[600]">{data.sidebar.needHelp.liveChat}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Experience Comfort - Full Width */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center mt-12 pt-10 border-t border-slate-100">
          <div className="w-full md:w-[48%] relative aspect-[1.5/1] rounded-[24px] overflow-hidden">
            <Image src={data.experienceComfort.image} alt={data.experienceComfort.title} fill className="object-cover" />
          </div>
          <div className="w-full md:w-[52%] pl-0 lg:pl-4">
            <h3 className="text-[#051036] text-[22px] font-[800] mb-2">{data.experienceComfort.title}</h3>
            <div className="w-[35px] h-[3px] bg-[#ff7a00] mb-5"></div>
            <p className="text-[#5b6478] text-[15px] leading-[1.8] mb-6 pr-4">{data.experienceComfort.description}</p>
            <ul className="flex flex-col gap-[12px]">
              {data.experienceComfort.checklist?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3.5">
                  <CheckCircle2 className="w-[20px] h-[20px] text-[#ff7a00] shrink-0" strokeWidth={2} />
                  <span className="text-[#051036] text-[15px] font-[500]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
