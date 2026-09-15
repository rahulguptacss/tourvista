"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../../utils/animations";
const Facebook = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Youtube = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const iconMap: Record<string, any> = {
  Facebook,
  Instagram,
  Linkedin,
  Youtube
};

export default function TeamDetail({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className={`py-12 md:py-20 bg-white ${poppins.className}`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Profile Card */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#faf8f5] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-24 shadow-sm"
        >
          {/* Image */}
          <motion.div variants={fadeInLeft} className="w-full md:w-[40%] lg:w-[32%] flex-shrink-0">
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden">
              <Image 
                src={data.member.image} 
                alt={data.member.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div variants={fadeInRight} className="w-full md:w-[60%] lg:w-[68%] flex flex-col">
            <div className="mb-6">
              <h2 className="text-[#214358] text-[28px] md:text-[32px] font-semibold leading-tight">
                {data.member.name}
              </h2>
              <p className="text-[#ff7a00] text-[16px] md:text-[18px] font-medium mt-1">
                {data.member.role}
              </p>
            </div>

            <div className="flex flex-col gap-3 text-[15px] md:text-[16px]">
              <div className="flex items-center">
                <span className="text-[#214358] font-semibold w-[120px]">Phone:</span>
                <span className="text-[#7a8b9c]">{data.member.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#214358] font-semibold w-[120px]">Email:</span>
                <span className="text-[#7a8b9c]">{data.member.email}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#214358] font-semibold w-[120px]">Speciality:</span>
                <span className="text-[#7a8b9c]">{data.member.speciality}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#214358] font-semibold w-[120px]">Experience:</span>
                <span className="text-[#7a8b9c]">{data.member.experience}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#214358] font-semibold w-[120px]">University:</span>
                <span className="text-[#7a8b9c]">{data.member.university}</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-gray-200 my-6"></div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {data.member.socials?.map((social: any, idx: number) => {
                const Icon = iconMap[social.icon];
                return (
                  <a 
                    key={idx} 
                    href={social.url}
                    className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-[#214358] hover:bg-[#ff7a00] hover:text-white hover:border-[#ff7a00] transition-colors"
                  >
                    {social.icon === 'Twitter' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    ) : Icon ? (
                      <Icon className="w-4 h-4" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Biography Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
        >
          {/* Biography Text */}
          <motion.div variants={fadeInLeft} className="w-full md:w-1/2 flex flex-col gap-6">
            <h3 className="text-[#051036] text-[24px] font-semibold">
              {data.biography.title}
            </h3>
            <div className="flex flex-col gap-5 text-slate-500 leading-relaxed text-[15px]">
              {data.biography.paragraphs?.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Biography Image */}
          <motion.div variants={fadeInRight} className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3] rounded-[32px] overflow-hidden">
              <Image 
                src={data.biography.image}
                alt="Biography Image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
