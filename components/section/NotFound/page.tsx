import { Poppins } from "next/font/google";
import Link from "next/link";
import { Home, Globe, Plane, Headphones, ShieldCheck } from "lucide-react";
import type { NotFoundData } from "../../types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const iconMap: Record<string, React.ElementType> = {
  Globe, Plane, Headphones, ShieldCheck
};

export default function NotFound({ data }: { data: NotFoundData }) {
  if (!data) return null;

  return (
    <div className={`w-full bg-[#051036] flex flex-col ${poppins.className}`}>
      {/* Hero Section with BG */}
      <section 
        className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center min-h-[600px]"
        style={{ 
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1280px] relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white text-center lg:text-left max-w-xl">
            {/* 404 text is huge */}
            <h1 className="text-[100px] md:text-[150px] font-bold leading-none mb-0 tracking-wider flex items-center justify-center lg:justify-start gap-1 drop-shadow-lg">
              <span>4</span>
              {/* The balloon is in the middle of 404, we'll leave a space for it if it's baked into the bg, or render a 0 if not */}
              <span className="text-[#0d6efd] drop-shadow-2xl">0</span>
              <span>4</span>
            </h1>
            
            <h2 className="text-[28px] md:text-[36px] font-bold mb-4 drop-shadow-md -mt-4 md:-mt-8">
              <span className="text-[#ff7a00]">{data.titlePrefix}</span> {data.titleHighlight}
            </h2>
            
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#ff7a00] to-[#0d6efd] mx-auto lg:mx-0 mb-5 rounded-full"></div>
            
            <p className="text-[15px] md:text-[16px] text-gray-200 mb-2 drop-shadow-sm">
              {data.descriptionLine1}
            </p>
            <p className="text-[15px] md:text-[16px] text-gray-200 mb-8 drop-shadow-sm">
              {data.descriptionLine2}
            </p>
            
            <Link href={data.buttonLink} className="inline-flex items-center gap-2 bg-[#ff7a00] hover:bg-[#e66a00] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg">
              <Home className="w-5 h-5" />
              {data.buttonText}
            </Link>
          </div>
          
          <div className="hidden lg:block w-1/2">
            {/* Empty space for the boy illustration in the background image */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-[#030b26] py-16 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {data.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Globe;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-[#1a254d] bg-[#0b143a] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#0d6efd]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[17px] mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-[14px] leading-relaxed pr-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
