import React from 'react';
import { MenuCategory } from '../types';

interface CategoryNavProps {
  categories: MenuCategory[];
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
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

  return (
    <div className="sticky top-0 z-40 bg-[#EED117] shadow-md border-b-2 border-[#E7252A] w-full overflow-x-auto no-scrollbar">
      <div className="flex px-4 py-3 gap-3 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className="px-4 py-1.5 rounded-full border-2 border-[#E7252A] text-[#E7252A] font-bold text-sm uppercase whitespace-nowrap bg-white/50 hover:bg-[#E7252A] hover:text-[#EED117] transition-colors shadow-sm"
          >
            {cat.title}
          </button>
        ))}
      </div>
    </div>
  );
};