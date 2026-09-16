"use client";

import type { ContactMapData } from "../../types";

export default function ContactMap({ data }: { data: ContactMapData }) {
  return (
    <section className="w-full relative h-[240px] sm:h-[280px] md:h-[320px] border-t border-gray-200">
      <iframe 
        src={data.embedUrl} 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="absolute inset-0 w-full h-full grayscale-[20%] opacity-90 contrast-[1.1] hue-rotate-[-5deg]"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"></div>
    </section>
  );
}
