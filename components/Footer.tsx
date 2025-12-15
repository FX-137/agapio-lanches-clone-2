import React from 'react';
import { BusinessInfo } from '../types';
import { WhatsappIcon } from './Icons';

interface FooterProps {
  businessInfo: BusinessInfo;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ businessInfo, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();
  const devMessage = encodeURIComponent("Olá Fernando. Gostaria de saber mais sobre criação de sites.");

  return (
    <footer className="w-full py-8 mt-auto flex flex-col items-center justify-center gap-4 border-t-4 border-[#E7252A] bg-[#EED117]">
        
        {/* Legal Links */}
        <div className="flex gap-6 text-[#E7252A] font-bold text-sm">
             <button onClick={() => onOpenLegal('terms')} className="hover:underline">Termos de Uso</button>
             <button onClick={() => onOpenLegal('privacy')} className="hover:underline">Política de Privacidade</button>
        </div>

        {/* Copyright Year */}
        <div className="text-[#E7252A] font-bold text-sm">
            &copy; {currentYear} {businessInfo.name}
        </div>

        {/* Dev Info */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#E7252A] font-semibold text-sm">Criado por FCL</span>
          <a 
            href={`https://wa.me/${businessInfo.devWhatsapp}?text=${devMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-sm"
          >
            <WhatsappIcon className="w-4 h-4" />
            Contato
          </a>
        </div>

    </footer>
  );
};