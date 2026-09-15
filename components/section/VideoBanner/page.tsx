"use client";

import { useState } from "react";
import { Play, Award, Users, Briefcase, Star, UserPlus, CalendarCheck, Smile, Plane, X } from "lucide-react";
import { Dancing_Script, Poppins } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function VideoBanner({ data }: { data: any }) {
  const videoBanner = data;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className={`pt-8 pb-0 bg-white ${poppins.className}`}>
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Top: Image Section */}
          <div 
            className="relative h-[300px] md:h-[450px] lg:h-[500px] bg-cover bg-center rounded-t-[2rem] shadow-2xl overflow-hidden"
            style={{ backgroundImage: `url('${videoBanner.backgroundImage}')` }}
          >
            {/* Inner White Frame */}
            <div className="absolute inset-4 md:inset-6 lg:inset-8 border-2 border-white/60 rounded-3xl pointer-events-none z-10"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center md:flex-row md:justify-end px-6 sm:px-10 md:px-20 lg:px-24 z-20">
              
              {/* Play Button (Perfectly Centered) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing ring animation */}
                  <div className="absolute inset-0 bg-white/40 rounded-full animate-ping opacity-75"></div>
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="cursor-pointer relative w-16 h-16 md:w-[72px] md:h-[72px] border-[2px] border-white bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group pointer-events-auto"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1.5 group-hover:text-[#facc15] transition-colors fill-white group-hover:fill-[#facc15]" />
                  </button>
                </div>
              </div>

              {/* Text Block */}
              <div className="flex-none flex justify-center mt-36 sm:mt-48 md:mt-0">
                <div className="relative group">
                  {/* Irregular Dark Blue Background Blob */}
                  <div className="absolute inset-[-15px] sm:inset-[-20px] md:inset-[-40px] bg-[#051036]/90 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform rotate-[-2deg] blur-[2px] transition-all duration-700 group-hover:rotate-0 group-hover:scale-105 -z-10"></div>
                  
                  <div className="text-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                    <div className="flex items-end justify-center gap-1.5 sm:gap-2 md:gap-3 mb-1">
                      <span className={`${dancingScript.className} text-white text-3xl sm:text-4xl md:text-5xl`}>
                        {videoBanner.titleLine1}
                      </span>
                      <span className={`${dancingScript.className} text-[#facc15] text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.8] mb-[-5px] md:mb-[-10px]`}>
                        {videoBanner.titleHighlight}
                      </span>
                    </div>
                    <div className={`${dancingScript.className} text-white text-2xl sm:text-3xl md:text-5xl mt-2`}>
                      {videoBanner.titleLine2}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 p-4">
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="cursor-pointer absolute top-4 right-4 text-white hover:text-[#facc15] z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
              title="Travel Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
