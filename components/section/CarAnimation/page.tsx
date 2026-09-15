import Image from 'next/image';

export default function CarAnimation() {
  return (
    <div className="relative w-full overflow-hidden border-b-[4px] border-primary-orange" style={{ height: '150px' }}>
      <div className="absolute left-0 bottom-0 z-10 w-full">
        <div className="animate-marquee-car relative w-[248px] h-[135px]">
          <Image 
            className="absolute left-0 bottom-0 z-10" 
            src="/car-runing/Left-Car.webp" 
            alt="Running Car" 
            width={248} 
            height={135} 
          />
          <span className="absolute bottom-[0%] left-[12.9%] w-[15%] z-20">
            <Image 
              src="/car-runing/Left-Car-tyre.png" 
              alt="Tyre 1" 
              width={37} 
              height={37} 
              className="w-full h-auto animate-[spin_2.4s_linear_infinite]"
            />
          </span>
          <span className="absolute bottom-[0%] right-[10.8%] w-[15%] z-20">
            <Image 
              src="/car-runing/Left-Car-tyre.png" 
              alt="Tyre 2" 
              width={37} 
              height={37} 
              className="w-full h-auto animate-[spin_2.4s_linear_infinite]"
            />
          </span>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 z-0 w-[220px]">
        <Image 
          src="/car-runing/Righttreepic.webp" 
          alt="Tree" 
          width={220} 
          height={150} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
