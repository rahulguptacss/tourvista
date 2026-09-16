"use client";

import { Poppins } from "next/font/google";
import { User, Mail, Phone, MapPin, Calendar, Send, Headset, Tag, Clock, Shield, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { EnquiryPageData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const iconMap: Record<string, React.ElementType> = {
  User, Mail, Phone, MapPin, Calendar, Send, Headset, Tag, Clock, Shield, MessageCircle
};

const icons: Record<string, React.ReactNode> = {
  Headset: <Headset className="w-6 h-6 text-[#ff7a00]" strokeWidth={2} />,
  Tag: <Tag className="w-6 h-6 text-[#0d6efd]" strokeWidth={2} />,
  Clock: <Clock className="w-6 h-6 text-[#ff7a00]" strokeWidth={2} />,
  Shield: <Shield className="w-6 h-6 text-[#0d6efd]" strokeWidth={2} />,
};

export default function Enquiry({ data }: { data: EnquiryPageData }) {
  return (
    <section className={`w-full bg-white pt-6 pb-8 sm:pt-8 sm:pb-12 ${poppins.className}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-10 relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff7a00] text-[#ff7a00] font-semibold text-sm sm:text-base uppercase mb-4 shadow-sm bg-orange-50/30">
            <Send className="w-4 h-4" />
            <span>{data.subtitle}</span>
          </div>

          <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-bold text-[#051036] mb-3 leading-[1.2] tracking-tight">
            {data.titlePrefix} <span className="text-[#0d6efd]">{data.titleHighlight}</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[2px] w-12 bg-[#cce0ff]"></div>
            <div className="text-[#ff7a00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            <div className="h-[2px] w-12 bg-[#cce0ff]"></div>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-[15px] sm:text-[16px]">
            {data.description}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[65%] border border-gray-200 rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-sm bg-white"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                {(() => {
                  const Icon = iconMap[data.form.icon] || Mail;
                  return <Icon className="w-6 h-6" />;
                })()}
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#051036]">{data.form.title}</h3>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.form.fields.map((field, idx) => {
                const IconComponent = field.icon ? iconMap[field.icon] : null;
                
                return (
                  <div key={idx} className={`space-y-2 ${field.fullWidth ? 'md:col-span-2' : ''}`}>
                    <label className="text-[14px] font-semibold text-[#051036]">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <div className="relative">
                      {field.type === 'textarea' ? (
                        <>
                          <textarea rows={4} placeholder={field.placeholder} className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px] resize-none"></textarea>
                          <span className="absolute bottom-3 right-4 text-[12px] text-gray-400">0 / 500</span>
                        </>
                      ) : field.type === 'select' ? (
                        <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:12px_12px] bg-[position:right_16px_center] pr-10 text-gray-500 bg-white">
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      ) : (
                        <>
                          {IconComponent && (
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                              <IconComponent className="w-5 h-5" />
                            </div>
                          )}
                          <input 
                            type={field.type === 'date' ? 'text' : field.type} 
                            placeholder={field.placeholder} 
                            onFocus={field.type === 'date' ? (e) => { e.target.type = 'date'; } : undefined} 
                            onBlur={field.type === 'date' ? (e) => { if(!e.target.value) e.target.type = 'text'; } : undefined} 
                            className={`w-full ${IconComponent ? 'pl-11' : 'pl-4'} pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-[15px] ${field.type === 'date' ? 'text-gray-500' : ''}`} 
                          />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="md:col-span-2 mt-2">
                <button type="button" className="w-full bg-[#0d6efd] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md text-[16px]">
                  <Send className="w-5 h-5" />
                  {data.form.submitText}
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-[13px] text-gray-500">
                  <Shield className="w-4 h-4 text-gray-400" />
                  {data.form.secureText}
                </div>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-gray-100 rounded-[24px] p-6 sm:p-8 bg-white shadow-sm"
            >
              <h3 className="text-[22px] font-semibold text-[#051036] mb-3">
                {data.whyEnquire.title}
              </h3>
              <div className="w-10 h-[3px] bg-[#ff7a00] rounded-full mb-6"></div>
              <div className="space-y-6">
                {data.whyEnquire.items.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isEven ? 'bg-[#fff5eb]' : 'bg-[#f0f6ff]'}`}>
                        {icons[item.icon] || <Shield className={`w-6 h-6 ${isEven ? 'text-[#ff7a00]' : 'text-[#0d6efd]'}`} />}
                      </div>
                      <div>
                        <h4 className="text-[16px] font-bold text-[#051036] mb-1">{item.title}</h4>
                        <p className="text-[14px] font-medium text-[#4b5563] leading-snug">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-gray-100 rounded-[24px] p-6 sm:p-8 bg-white shadow-sm"
            >
              <h3 className="text-[22px] font-semibold text-[#051036] mb-3">
                {data.assistance.title}
              </h3>
              <div className="w-10 h-[3px] bg-[#ff7a00] rounded-full mb-6"></div>
              <p className="text-[15px] font-medium text-[#4b5563] mb-8 leading-relaxed pr-4">
                {data.assistance.description}
              </p>
              
              <div className="space-y-5">
                {data.assistance.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${idx === 1 ? 'border-[#0d6efd] text-[#0d6efd]' : 'border-[#ff7a00] text-[#ff7a00]'}`}>
                      {idx === 1 ? <MessageCircle className="w-5 h-5" strokeWidth={2.5} /> : <Phone className="w-5 h-5" strokeWidth={2.5} />}
                    </div>
                    <span className="text-[16px] font-semibold text-[#051036]">{phone}</span>
                  </div>
                ))}
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#ff7a00] flex items-center justify-center shrink-0 text-[#ff7a00]">
                    <Mail className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="text-[16px] font-semibold text-[#051036]">{data.assistance.email}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
