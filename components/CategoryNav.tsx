
import React, { useRef } from 'react';
import { MenuCategory } from '../types';

interface CategoryNavProps {
  categories: MenuCategory[];
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of nav + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 200;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-[#EED117] shadow-md border-b-2 border-[#E7252A] w-full flex items-center group">
      {/* Left Arrow Button (Visible mainly on Desktop hover or context) */}
      <button 
        onClick={() => scroll('left')}
        className="hidden md:flex items-center justify-center h-full px-2 bg-gradient-to-r from-[#EED117] to-transparent text-[#E7252A] hover:scale-110 transition-transform z-10"
        aria-label="Rolar para esquerda"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="flex px-4 py-3 gap-3 overflow-x-auto no-scrollbar scroll-smooth flex-grow"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className="px-4 py-1.5 rounded-full border-2 border-[#E7252A] text-[#E7252A] font-bold text-sm uppercase whitespace-nowrap bg-white/50 hover:bg-[#E7252A] hover:text-[#EED117] transition-colors shadow-sm active:scale-95"
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button 
        onClick={() => scroll('right')}
        className="hidden md:flex items-center justify-center h-full px-2 bg-gradient-to-l from-[#EED117] to-transparent text-[#E7252A] hover:scale-110 transition-transform z-10"
        aria-label="Rolar para direita"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
};
