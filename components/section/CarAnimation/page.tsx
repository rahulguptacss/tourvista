import Image from "next/image";

export default function CarAnimation() {
  return (
    <div className="relative w-full overflow-hidden border-b-[3px] md:border-b-[4px] border-primary-orange h-[88px] sm:h-[110px] md:h-[150px]">
      <div className="absolute left-0 bottom-0 z-10 w-full">
        <div className="animate-marquee-car relative w-[140px] h-[76px] sm:w-[180px] sm:h-[98px] md:w-[248px] md:h-[135px]">
          <Image
            className="absolute left-0 bottom-0 z-10 object-contain"
            src="/car-runing/Left-Car.webp"
            alt="Running Car"
            fill
            sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 248px"
          />
          <span className="absolute bottom-0 left-[12.9%] z-20 w-[15%]">
            <Image
              src="/car-runing/Left-Car-tyre.png"
              alt="Tyre 1"
              width={37}
              height={37}
              className="h-auto w-full animate-[spin_2.4s_linear_infinite]"
            />
          </span>
          <span className="absolute bottom-0 right-[10.8%] z-20 w-[15%]">
            <Image
              src="/car-runing/Left-Car-tyre.png"
              alt="Tyre 2"
              width={37}
              height={37}
              className="h-auto w-full animate-[spin_2.4s_linear_infinite]"
            />
          </span>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-0 w-[108px] sm:w-[150px] md:w-[220px] pointer-events-none">
        <Image
          src="/car-runing/Righttreepic.webp"
          alt="Island"
          width={220}
          height={150}
          className="h-auto w-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}
