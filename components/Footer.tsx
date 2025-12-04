import React from 'react';
import { BusinessInfo } from '../types';
import { WhatsappIcon } from './Icons';

interface FooterProps {
  businessInfo: BusinessInfo;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ businessInfo, onOpenLegal }) => {
  const handleDevContact = () => {
    const message = "Olá Fernando. Gostaria de saber mais sobre criação de sites.";
    window.open(`https://wa.me/${businessInfo.devWhatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="w-full py-8 mt-auto flex flex-col items-center justify-center gap-4 border-t-4 border-[#E7252A]">
        
        {/* Legal Links */}
        <div className="flex gap-6 text-[#E7252A] font-bold text-sm">
             <button onClick={() => onOpenLegal('terms')} className="hover:underline">Termos de Uso</button>
             <button onClick={() => onOpenLegal('privacy')} className="hover:underline">Política de Privacidade</button>
        </div>

        {/* Dev Info */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#E7252A] font-semibold text-sm">Criado por FCL</span>
          <button 
            onClick={handleDevContact}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-sm"
          >
            <WhatsappIcon className="w-4 h-4" />
            Contato
          </button>
        </div>

    </footer>
  );
};