import React from 'react';
import { BusinessInfo } from '../types';
import { NavigationIcon } from './Icons';

interface LocationSectionProps {
  info: BusinessInfo;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ info }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${info.googleMapsQuery}`;

  return (
    <div className="w-full max-w-[1600px] mx-auto mt-8">
      {/* Header Bar */}
      <div className="bg-[#E7252A] rounded-t-lg py-2 px-4 text-center">
        <h2 className="text-xl font-black text-[#EED117] uppercase tracking-wider">
          NOSSA LOCALIZAÇÃO
        </h2>
      </div>

      <div className="border-x-2 border-b-2 border-[#E7252A] bg-[#EED117] p-4 rounded-b-lg">
        {/* Map Container with Red Border */}
        <div className="w-full h-64 border-2 border-[#E7252A] rounded bg-gray-200 mb-4 overflow-hidden">
           <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${info.googleMapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            title="Map Location"
          ></iframe>
        </div>

        <div className="flex justify-center">
            <a 
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#E7252A] hover:bg-[#C01E22] text-[#EED117] font-bold py-3 px-8 rounded shadow-md transition-transform active:scale-95"
            >
            <NavigationIcon className="w-5 h-5" />
            Como chegar
            </a>
        </div>
      </div>
    </div>
  );
};
