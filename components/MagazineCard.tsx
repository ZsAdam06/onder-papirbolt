
import React from 'react';
import { Product } from '../types';

interface MagazineCardProps {
  product: Product;
}

const MagazineCard: React.FC<MagazineCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full border border-slate-100">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-md px-3 py-1 rounded-full text-xs font-bold text-teal-600 uppercase tracking-widest">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 flex-grow italic">
          "{product.description}"
        </p>
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
          <span className="text-2xl font-black text-slate-900">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MagazineCard;
