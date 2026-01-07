import React from 'react';
import { BusinessInfo } from '../types';

interface FooterProps {
  businessInfo: BusinessInfo;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ businessInfo, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();
  const devMessage = encodeURIComponent("Olá Fernando. Gostaria de saber mais sobre criação de sites.");

  return (
    <>
      {/* ================= SUB-FOOTER (Copyright & Legal) ================= */}
      <div className="bg-[#EED117] border-t-2 border-[#E7252A] py-6 text-sm text-[#E7252A]">
        <div className="max-w-[1600px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="font-bold">
            &copy; {currentYear} {businessInfo.name}. Todos os direitos reservados.
          </div>

          <div className="flex gap-4 font-bold uppercase tracking-widest text-[10px]">
            <button onClick={() => onOpenLegal('terms')} className="hover:text-[#C01E22] transition-colors">Termos de Uso</button>
            <span className="text-[#C01E22]">|</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-[#C01E22] transition-colors">Politica de Privacidade</button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER (Dev & Contato) ================= */}
      <footer className="bg-[#EED117] text-[#E7252A] py-3 border-t border-[#E7252A]/30">
        <div className="max-w-[1600px] mx-auto px-4 flex flex-row items-center justify-center gap-2">
          <div className="text-[#E7252A] font-bold text-[9px] uppercase tracking-wide">
            Criado por <span className="text-[#C01E22]">FCL</span>
          </div>

          <a 
            href={`https://wa.me/${businessInfo.devWhatsapp}?text=${devMessage}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 transition-all duration-300 hover:scale-110 group ml-2" 
            title="Contato Desenvolvedor"
          >
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDjkkz_vlntJDY40iwAVZC60A5F5b6IwN5GpInCRMUiOo-kZ6ANNWSX1GG6sN7bYDKQmiD7P6n2fWaMBMlnSOOYLd3vItbVV4MJYff8ly1_P9mhagS_vdRYHBh5mrwYQdOrn0Yb5866Dz3uzghrVw3dOuk00FdKJHjBXVUaNLQoW7hJmy79HNkh6DVqmc/s1600/whatsapp1.png" 
              alt="WhatsApp" 
              className="w-4 h-4" 
            />
            <span className="text-[9px] font-bold text-[#E7252A] group-hover:text-[#25D366] uppercase tracking-wide">Contato</span>
          </a>
        </div>
      </footer>
    </>
  );
};
