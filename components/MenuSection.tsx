import React from 'react';
import { MenuCategory, BusinessInfo } from '../types';
import { WhatsappIcon } from './Icons';

interface MenuSectionProps {
  category: MenuCategory;
  businessInfo: BusinessInfo;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category, businessInfo }) => {
  
  const handleOrder = (itemName: string) => {
    const message = `Olá! Gostaria de pedir um ${itemName}.`;
    const url = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full max-w-6xl mx-auto scroll-mt-24" id={category.id}>
      {/* Category Header Bar - Red with Yellow Text */}
      <div className="bg-[#E7252A] rounded-lg shadow-md mb-4 py-2 px-4 text-center border-2 border-[#C01E22]">
        <h2 className="text-2xl md:text-3xl font-black text-[#EED117] uppercase tracking-wider drop-shadow-sm">
          {category.title}
        </h2>
      </div>
      
      {/* Items Grid with items-stretch to match reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch">
        {category.items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleOrder(item.name)}
            className="flex flex-col h-full cursor-pointer group relative bg-[#EED117] border-2 border-[#E7252A] rounded-lg p-3 pt-4 shadow-[2px_2px_0px_rgba(231,37,42,0.2)] hover:shadow-[4px_4px_0px_rgba(231,37,42,0.4)] hover:bg-[#FEF08A] hover:-translate-y-1.5 transition-all duration-200"
          >
            {/* Optional Image with Badge - Fixed height classes ensure landscape/cenario look */}
            {item.image && (
              <div className="w-full h-64 md:h-96 mb-3 overflow-hidden rounded border-2 border-[#E7252A] relative">
                {category.id === 'mais_pedidos' && (
                  <div className="absolute top-2 right-2 bg-[#E7252A] text-[#EED117] text-[10px] font-black px-2 py-0.5 rounded shadow-md border border-[#EED117] z-10 uppercase tracking-wide">
                    Mais Pedido
                  </div>
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Title and Price */}
            <div className="flex justify-between items-baseline mb-2 pr-2">
              <h3 className="text-lg font-black text-[#E7252A] leading-tight uppercase">
                {item.name}
              </h3>
              <div className="flex-shrink-0 ml-2 bg-[#E7252A] text-[#EED117] px-2 py-0.5 rounded font-black text-lg shadow-sm">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </div>
            </div>
            
            {/* Description - Red #E7252A */}
            <p className="text-[#E7252A] text-sm leading-snug font-bold pr-2 flex-grow">
              {item.description}
            </p>

            {/* Click to order indicator - Static at bottom */}
            <div className="mt-3 flex justify-end items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] text-[#E7252A] font-black uppercase tracking-tighter">
                Clique para pedir
              </span>
              <div className="bg-[#22c55e] rounded-full p-1 shadow-sm">
                <WhatsappIcon className="w-3 h-3 text-white fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};