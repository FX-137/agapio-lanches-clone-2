import React from 'react';
import { PhoneIcon, WhatsappIcon, MapPinIcon } from './Icons';
import { BusinessInfo } from '../types';

interface HeroProps {
  info: BusinessInfo;
}

export const Hero: React.FC<HeroProps> = ({ info }) => {
  const mainWppMsg = encodeURIComponent("Olá, eu gostaria de fazer um pedido");

  return (
    <div className="w-full pt-10 pb-6 px-4 flex flex-col items-center justify-center text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-black text-[#E7252A] mb-2 uppercase tracking-tight leading-none drop-shadow-sm">
        {info.name}<span className="text-2xl align-top">®</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-[#E7252A] text-lg font-bold mb-6">Desde 1982</p>
      
      {/* Phone Buttons Row */}
      <div className="flex flex-wrap justify-center gap-3 mb-4 w-full">
        <a 
          href={`tel:${info.phone.replace(/\D/g, '')}`}
          className="flex items-center gap-2 bg-[#E7252A] hover:bg-[#C01E22] text-[#EED117] font-bold text-sm md:text-base py-2 px-5 rounded shadow-sm border border-[#C01E22]"
        >
          <PhoneIcon className="w-4 h-4" />
          {info.phone}
        </a>
        {info.secondaryPhone && (
           <a 
           href={`tel:${info.secondaryPhone.replace(/\D/g, '')}`}
           className="flex items-center gap-2 bg-[#E7252A] hover:bg-[#C01E22] text-[#EED117] font-bold text-sm md:text-base py-2 px-5 rounded shadow-sm border border-[#C01E22]"
         >
           <PhoneIcon className="w-4 h-4" />
           {info.secondaryPhone}
         </a>
        )}
      </div>

      {/* WhatsApp Main Button - With Pulse Animation */}
      <a 
        href={`https://wa.me/${info.whatsapp}?text=${mainWppMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-sm bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-lg py-3 px-6 rounded shadow-md mb-6 flex items-center justify-center gap-2 animate-pulse-green"
      >
        <WhatsappIcon className="w-6 h-6" />
        Pedir pelo WhatsApp
      </a>

      {/* Address & Hours */}
      <div className="flex flex-col items-center gap-1 text-[#E7252A] font-bold text-sm md:text-base">
        <div className="flex items-start justify-center gap-2 px-4 text-center">
            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">
                <MapPinIcon className="w-full h-full" />
            </div>
            <span className="text-center leading-tight">{info.address}</span>
        </div>
        <div className="uppercase mt-1 text-[#E7252A]">
          {info.openingHours.map((hour, idx) => (
            <div key={idx}>{hour}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
