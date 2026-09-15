import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Home } from "lucide-react";
import { Poppins, Kaushan_Script } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Pinterest = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.178c-.046.19-.152.232-.35.139-1.305-.615-2.122-2.545-2.122-4.103 0-3.342 2.428-6.406 6.996-6.406 3.67 0 6.529 2.617 6.529 6.108 0 3.65-2.298 6.589-5.491 6.589-1.073 0-2.083-.558-2.431-1.22l-.663 2.528c-.24 .913-.889 2.054-1.328 2.753 1.059.324 2.181.503 3.341.503 6.62 0 11.988-5.368 11.988-11.987C24.004 5.367 18.637 0 12.017 0z"/></svg>
);

import type { FooterLayoutData } from "../../types";

export default function Footer({ data }: { data: FooterLayoutData }) {
  const exploreLinks = [
    { label: "About us", href: "/about" },
    { label: "FAQ's", href: "/faqs" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "News & Articles", href: "/news" },
  ];

  const destinations = [
    { label: "Tokyo", href: "/destinations/tokyo" },
    { label: "France", href: "/destinations/france" },
    { label: "Dubai", href: "/destinations/dubai" },
    { label: "Kenya", href: "/destinations/kenya" },
    { label: "Vietnam", href: "/destinations/vietnam" },
  ];

  const legalLinks = [
    { label: "Terms & Condition", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Help", href: "/help" },
  ];

  return (
    <footer className={`relative bg-[#222222] text-white pt-10 md:pt-12 ${poppins.className} overflow-hidden`}>
      {/* Background Image Overlay for Footer */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom opacity-15 pointer-events-none" 
        style={{ backgroundImage: "url('/whychoose/w-cho-btm.png')" }} 
      />

      <div className="w-full mx-auto px-5 md:px-10 lg:px-16 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-6 md:pb-8">
          
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo/white-logo.png" alt="TourVista" width={260} height={75} className="h-auto w-[200px] md:w-[260px] object-contain" />
            </Link>
            <p className="text-white font-medium text-[14.5px] leading-[1.65] mb-8 max-w-[310px]">
              {data.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-[46px] h-[46px] rounded-full bg-white border-[3px] border-[#ff7a00] flex items-center justify-center hover:bg-[#ff7a00] text-[#ff7a00] hover:text-white transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full bg-white border-[3px] border-[#ff7a00] flex items-center justify-center hover:bg-[#ff7a00] text-[#ff7a00] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full bg-white border-[3px] border-[#ff7a00] flex items-center justify-center hover:bg-[#ff7a00] text-[#ff7a00] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-[46px] h-[46px] rounded-full bg-white border-[3px] border-[#ff7a00] flex items-center justify-center hover:bg-[#ff7a00] text-[#ff7a00] hover:text-white transition-colors">
                <Pinterest className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-[#ff7a00] text-[20px] font-semibold mb-6 lg:mb-8">Explore</h4>
            <ul className="space-y-4">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white hover:text-[#ff7a00] font-medium text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="lg:col-span-2">
            <h4 className="text-[#ff7a00] text-[20px] font-semibold mb-6 lg:mb-8">Destinations</h4>
            <ul className="space-y-4">
              {destinations.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white hover:text-[#ff7a00] font-medium text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-[#ff7a00] text-[20px] font-semibold mb-6 lg:mb-8">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white hover:text-[#ff7a00] font-medium text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#ff7a00] flex items-center justify-center">
                  <Phone className="w-[22px] h-[22px] text-white" />
                </div>
                <div className={`${kaushan.className} text-[26px] tracking-wide text-white leading-none whitespace-nowrap`}>
                  123 654 0214
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#ff7a00] flex items-center justify-center">
                  <Mail className="w-[22px] h-[22px] text-white" />
                </div>
                <div className="text-[15px] font-medium text-white leading-tight">
                  travllainfo@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-[#ff7a00] flex items-center justify-center">
                  <Home className="w-[22px] h-[22px] text-white" />
                </div>
                <div className="text-[15px] font-medium text-white leading-tight">
                  55/11 ronin tower New York
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-5 md:px-8 py-3 flex items-center justify-center text-center text-[15px] font-medium text-gray-300">
          Copyright &copy; 2026. All rights reserved. Powered by Lestow
        </div>
      </div>
    </footer>
  );
}
