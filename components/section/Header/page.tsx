"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import type { HeaderData, NavLink } from "../../types";

export default function Header({ data }: { data: HeaderData }) {
  const header = data;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/packages") {
      return pathname === "/packages" || pathname.startsWith("/package-detail");
    }
    if (href === "/blog") {
      return pathname === "/blog" || pathname.startsWith("/blog-detail");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
      window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        aria-label="Main"
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "top-2 md:top-4 bg-transparent" : "top-3 md:top-14 bg-transparent"}`}
      >
        <div className="max-w-[1320px] w-full mx-auto px-3 sm:px-4 md:px-8">
          <div
            className={`bg-white rounded-full flex items-center justify-between gap-3 transition-all duration-300 ${
              isScrolled
                ? "px-4 sm:px-6 md:px-8 py-2 shadow-md border border-gray-100"
                : "px-4 sm:px-6 md:px-8 py-2.5 md:py-3.5 shadow-lg"
            }`}
          >
            <Link href="/" className="flex items-center gap-2 relative z-50 min-w-0">
              <Image
                src="/logo/logo.png"
                alt="TourVista Logo"
                width={180}
                height={58}
                className="h-8 w-auto sm:h-10 md:h-14"
                sizes="180px"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              {header.links?.map((link: NavLink, index: number) => {
                const isActive = isLinkActive(link.href);
                return (
                  <div key={index} className="flex items-center gap-1.5 group cursor-pointer relative">
                    <Link
                      href={link.href}
                      className={`text-[16px] font-bold transition-colors hover:text-blue-600 ${isActive ? "text-blue-600" : "text-slate-800"}`}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <>
                        <ChevronDown className="w-4 h-4 text-slate-800 group-hover:text-blue-600 mt-0.5 transition-transform group-hover:rotate-180 duration-300" strokeWidth={2.5} />
                        {link.dropdown && (
                          <div className="absolute top-full mt-6 left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 before:content-[''] before:absolute before:top-[-15px] before:left-0 before:w-full before:h-[20px]">
                            {link.dropdown.map((sublink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={sublink.href}
                                className="px-5 py-2.5 text-[15px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
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

              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="cursor-pointer lg:hidden -mr-1 p-2 text-slate-800 relative z-50 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={2.4} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2.4} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="absolute right-0 top-0 bottom-0 flex w-[86%] max-w-[340px] flex-col overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hide-scrollbar mt-[88px] flex-1 overflow-y-auto overscroll-contain px-5 pb-8">
                <div className="flex flex-col">
                  {header.links?.map((link: NavLink, index: number) => {
                    const isActive = isLinkActive(link.href);
                    const isDropdownOpen = openDropdown === link.label;
                    return (
                      <div key={index} className="border-b border-gray-100 py-3.5">
                        {link.hasDropdown ? (
                          <button
                            type="button"
                            onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                            className={`flex w-full items-center justify-between text-left text-[17px] font-bold ${
                              isActive || isDropdownOpen ? "text-blue-600" : "text-slate-800"
                            }`}
                          >
                            {link.label}
                            <ChevronDown
                              className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                                isDropdownOpen ? "rotate-180 text-blue-600" : ""
                              }`}
                              strokeWidth={2.4}
                            />
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            className={`block text-[17px] font-bold ${isActive ? "text-blue-600" : "text-slate-800"}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )}

                          {link.dropdown && isDropdownOpen && (
                            <div className="overflow-hidden">
                              <div className="mt-3 rounded-xl bg-[#f4f7fb] px-2 py-2">
                                {link.dropdown.map((sublink, subIndex) => {
                                  const subActive = isLinkActive(sublink.href);
                                  return (
                                    <Link
                                      key={subIndex}
                                      href={sublink.href}
                                      className={`block rounded-lg px-3 py-2.5 text-[14px] font-medium ${
                                        subActive
                                          ? "bg-white text-blue-600 shadow-sm"
                                          : "text-slate-600 hover:bg-white hover:text-blue-600"
                                      }`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {sublink.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>

                {header.button && (
                  <Link
                    href={header.button.href || "#"}
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#ff7a00] px-5 py-3.5 text-[15px] font-bold text-white shadow-md shadow-[#ff7a00]/25"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{header.button.label}</span>
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
    </>
  );
}
