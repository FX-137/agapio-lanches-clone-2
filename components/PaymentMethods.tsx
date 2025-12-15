
import React from 'react';

export const PaymentMethods: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 flex justify-center items-center">
      {/* Applied classes to match .cartoes-fixo behavior: max-w-[280px] on mobile, max-w-[600px] on desktop */}
      <img 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin2r0kT4FAtOeGB7XCV0nSHYOj0rBHIxkryrP0Jc70iuSP028aXlAYkPhtfr5GopTpIdO2w5rKYfwe0lMuWLNz6rTL3fNsmctbl3OMX7EaeqNVK3KWLYohJ1K79ywC5qtCUw-m0jCaPgAcbMZZDL8382Y0TU-gEXxwgK3NKyrCdqu3fgw9Mnxnx7sMbxY/s1084/Tarja%20pronta.png" 
        alt="Formas de Pagamento" 
        className="w-full max-w-[280px] md:max-w-[600px] h-auto object-contain drop-shadow-sm mx-auto block"
      />
    </div>
  );
};