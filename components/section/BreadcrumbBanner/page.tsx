import Image from "next/image";
import Link from "next/link";

export interface BreadcrumbBannerProps {
  title: string;
  backgroundImage: string;
  showBreadcrumb?: boolean;
}

export default function BreadcrumbBanner({ title, backgroundImage, showBreadcrumb = true }: BreadcrumbBannerProps) {
  return (
    <section className="relative h-[320px] md:h-[450px] flex items-center justify-center -mb-4 md:-mb-8 z-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 mt-4 md:mt-6">
        <h1 className={`text-4xl md:text-[64px] font-extrabold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${showBreadcrumb ? "mb-4" : ""}`}>
          {title}
        </h1>
        {showBreadcrumb && (
        <nav aria-label="breadcrumb" className="flex justify-center">
          <ol className="flex items-center space-x-2 text-[15px] md:text-[16px] font-medium text-white">
            <li>
              <Link href="/" className="hover:text-[#ffaa0d] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/80 mx-1">/</li>
            <li className="text-white">{title}</li>
          </ol>
        </nav>
        )}
      </div>

      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <Image
          src="/breadcrumb/download.png"
          alt=""
          width={1920}
          height={120}
          className="w-full h-auto object-cover object-bottom translate-y-[1px]"
        />
      </div>
    </section>
  );
}
