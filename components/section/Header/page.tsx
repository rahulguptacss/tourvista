"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ data }: { data: any }) {
  const header = data;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'top-2 md:top-4 bg-transparent' : 'top-4 md:top-14 bg-transparent'}`}
      >
        <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">
          <div className={`bg-white rounded-full flex items-center justify-between transition-all duration-300 ${isScrolled ? 'px-6 md:px-8 py-2 shadow-md border border-gray-100' : 'px-6 md:px-8 py-3.5 shadow-lg'}`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-50">
              <Image src="/logo/logo.png" alt="TourVista Logo" width={180} height={58} className="w-auto h-10 md:h-14" priority />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {header.links?.map((link: any, index: number) => {
                const isActive = link.label === "Home";
                return (
                  <div key={index} className="flex items-center gap-1.5 group cursor-pointer relative">
                    <Link 
                      href={link.href} 
                      className={`text-[16px] font-bold transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-800'}`}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <>
                        <ChevronDown className="w-4 h-4 text-slate-800 group-hover:text-blue-600 mt-0.5 transition-transform group-hover:rotate-180 duration-300" strokeWidth={2.5} />
                        {link.dropdown && (
                          <div className="absolute top-full mt-6 left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 before:content-[''] before:absolute before:top-[-15px] before:left-0 before:w-full before:h-[20px]">
                            {link.dropdown.map((sublink: any, subIndex: number) => (
                              <Link 
                                key={subIndex} 
                                href={sublink.href}
                                className="px-5 py-2.5 text-[15px] font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Enquiry Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {header.button && (
                <Link 
                  href={header.button.href || "#"} 
                  className="cursor-pointer hidden lg:flex items-center gap-3 bg-blue-600 text-white pl-6 pr-1.5 py-1.5 rounded-full text-[16px] font-bold hover:shadow-lg transition-all hover:bg-blue-700 hover:scale-[1.02]"
                >
                  <span className="mt-0.5">{header.button.label}</span>
                  <div className="bg-white text-blue-600 rounded-full w-9 h-9 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </Link>
              )}

              {/* Mobile Menu Toggle Button */}
              <button 
                className="cursor-pointer lg:hidden p-2 text-slate-800 relative z-50 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" strokeWidth={2} />
                ) : (
                  <Menu className="w-7 h-7" strokeWidth={2} />
                )}
              </button>
            </div>
            
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col pt-28 pb-8 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 overflow-y-auto">
                {header.links?.map((link: any, index: number) => {
                  const isActive = link.label === "Home";
                  const isDropdownOpen = openDropdown === link.label;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="border-b border-gray-100 pb-4"
                    >
                      <div className="flex items-center justify-between">
                        {link.hasDropdown ? (
                          <button
                            onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                            className={`text-xl font-bold flex items-center justify-between w-full ${isActive ? 'text-blue-600' : 'text-slate-800'}`}
                          >
                            {link.label}
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                          </button>
                        ) : (
                          <Link 
                            href={link.href} 
                            className={`text-xl font-bold ${isActive ? 'text-blue-600' : 'text-slate-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )}
                      </div>
                      <AnimatePresence>
                        {link.dropdown && isDropdownOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 mt-4 pl-4 border-l-2 border-gray-100">
                              {link.dropdown.map((sublink: any, subIndex: number) => (
                                <Link 
                                  key={subIndex} 
                                  href={sublink.href}
                                  className="text-lg font-medium text-slate-600 hover:text-blue-600"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sublink.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {header.button && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4"
                  >
                    <Link 
                      href={header.button.href || "#"} 
                      className="cursor-pointer flex items-center justify-center gap-3 bg-blue-600 text-white p-4 rounded-xl text-lg font-bold shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{header.button.label}</span>
                      <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
