import React, { useState } from 'react';
import { MENU_DATA, BUSINESS_INFO } from './data';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { PaymentMethods } from './components/PaymentMethods';
import { CategoryNav } from './components/CategoryNav';

function App() {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-[var(--brand-yellow)]">
      
      {/* Hero Section */}
      <Hero info={BUSINESS_INFO} />

      {/* Sticky Navigation */}
      <CategoryNav categories={MENU_DATA} />

      <main className="w-full px-2 md:px-4 py-6 space-y-12 max-w-6xl mx-auto">
        
        <div className="space-y-16">
          {MENU_DATA.map((category) => (
            <MenuSection 
              key={category.id} 
              category={category} 
              businessInfo={BUSINESS_INFO} 
            />
          ))}
        </div>

        <PaymentMethods />
        <LocationSection info={BUSINESS_INFO} />
        
      </main>

      <Footer 
        businessInfo={BUSINESS_INFO} 
        onOpenLegal={(type) => setActiveLegal(type)} 
      />

      <LegalModal 
        isOpen={!!activeLegal} 
        onClose={() => setActiveLegal(null)} 
        type={activeLegal || 'privacy'} 
      />

    </div>
  );
}

export default App;