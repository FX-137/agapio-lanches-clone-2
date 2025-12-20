import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('agapio-cookie-consent-v3');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('agapio-cookie-consent-v3', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] animate-slide-up">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] border-2 border-[#E7252A] rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Cookie SVG Icon */}
        <div className="flex-shrink-0">
          <svg className="w-12 h-12 text-[#EED117]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <circle cx="8" cy="8.5" r="1.5"/>
            <circle cx="12" cy="7" r="1.5"/>
            <circle cx="15.5" cy="8.5" r="1.5"/>
            <circle cx="10" cy="12" r="1.5"/>
            <circle cx="14.5" cy="13.5" r="1.5"/>
            <circle cx="9" cy="16" r="1.5"/>
          </svg>
        </div>
        
        {/* Text Content */}
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-[#EED117] font-black uppercase tracking-wider mb-1">
            Privacidade & Cookies
          </h4>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Utilizamos cookies para garantir a melhor experiência no nosso cardápio digital. 
            Ao continuar, você concorda com nossos termos.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="px-6 py-2 rounded-xl border-2 border-[#E7252A] text-[#E7252A] font-bold text-sm uppercase transition-all"
          >
            Recusar
          </button>
          <button 
            onClick={handleAccept}
            className="px-8 py-2 rounded-xl bg-[#E7252A] text-[#1a1a1a] font-black text-sm uppercase border-2 border-[#E7252A] transition-all"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};