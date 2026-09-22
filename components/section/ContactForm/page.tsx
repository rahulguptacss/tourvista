"use client";

import { Poppins } from "next/font/google";
import { User, Mail, Phone, Edit2, MessageSquare, Send, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { ContactFormData } from "../../types";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ContactForm({ data }: { data: ContactFormData }) {
  return (
    <section className={`relative w-full bg-[#f8f9fa] pb-16 sm:pb-24 ${poppins.className}`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* Left Column: Chat Box */}
          <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
            <div className="bg-[#051036] rounded-[24px] p-8 sm:p-10 h-full flex flex-col relative overflow-hidden text-white shadow-[0_15px_40px_rgba(5,16,54,0.15)]">
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 opacity-10">
                <svg width="120" height="120" viewBox="0 0 200 150" fill="none">
                  <path d="M20 130 C 50 80, 150 120, 180 20" stroke="white" strokeWidth="3" strokeDasharray="6 6" fill="none" />
                </svg>
              </div>

              <div className="relative w-full h-[250px] sm:h-[300px] mb-8 rounded-[16px] overflow-hidden">
                <Image
                  src={data.chatImage}
                  alt="Chat with Expert"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051036] to-transparent"></div>
                <div className="absolute bottom-[-10px] right-4 bg-[#ff7a00] p-3 rounded-full border-4 border-[#051036]">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-[28px] sm:text-[34px] font-bold leading-[1.2] mb-4">
                {data.chatTitle1} <br />
                <span className="text-[#ff7a00]">{data.chatTitleHighlight}</span>
              </h3>

              <p className="text-gray-300 text-[15px] leading-relaxed mt-auto">
                {data.chatDescription}
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full bg-white rounded-[24px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50">
            <h3 className="text-[28px] font-bold text-[#051036] mb-8 relative pb-4">
              {data.formTitle}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ff7a00]"></span>
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="relative">
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-white border border-gray-200 rounded-[12px] py-3.5 pl-12 pr-4 text-[#051036] placeholder:text-gray-400 focus:outline-none focus:border-[#0057ff] focus:ring-1 focus:ring-[#0057ff] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white border border-gray-200 rounded-[12px] py-3.5 pl-12 pr-4 text-[#051036] placeholder:text-gray-400 focus:outline-none focus:border-[#0057ff] focus:ring-1 focus:ring-[#0057ff] transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={15}
                  placeholder="Phone Number"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                  }}
                  className="w-full bg-white border border-gray-200 rounded-[12px] py-3.5 pl-12 pr-4 text-[#051036] placeholder:text-gray-400 focus:outline-none focus:border-[#0057ff] focus:ring-1 focus:ring-[#0057ff] transition-all"
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                  <Edit2 className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white border border-gray-200 rounded-[12px] py-3.5 pl-12 pr-4 text-[#051036] placeholder:text-gray-400 focus:outline-none focus:border-[#0057ff] focus:ring-1 focus:ring-[#0057ff] transition-all"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute top-5 left-4 text-gray-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  placeholder="Your Message Here..."
                  rows={6}
                  className="w-full bg-white border border-gray-200 rounded-[12px] py-4 pl-12 pr-4 text-[#051036] placeholder:text-gray-400 focus:outline-none focus:border-[#0057ff] focus:ring-1 focus:ring-[#0057ff] transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-[#ff7a00] hover:bg-[#e66e00] text-white rounded-full px-8 py-3.5 font-bold text-[15px] transition-colors shadow-[0_8px_25px_rgba(255,122,0,0.35)] shrink-0 cursor-pointer"
                >
                  {data.submitText}
                  <Send className="w-5 h-5 text-white -mt-0.5" strokeWidth={2} />
                </button>

                <div className="flex items-start gap-2 text-gray-500 text-[13px] leading-snug">
                  <ShieldCheck className="w-5 h-5 text-gray-400 shrink-0" />
                  <p>{data.disclaimer}</p>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
