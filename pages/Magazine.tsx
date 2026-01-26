
import React from 'react';
import { TOP_PRODUCTS } from '../constants';
import MagazineCard from '../components/MagazineCard';

const Magazine: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Magazine Header */}
      <div className="bg-white border-b border-slate-200 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Online Katalógus</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Top 10 Termékünk <br />
            <span className="text-indigo-600 font-light italic brand-font">Szezonális Kedvencek</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Válogasson a legnépszerűbb termékeink közül. Kínálatunkat folyamatosan frissítjük, hogy Ön mindig a legjobb minőséget kapja.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TOP_PRODUCTS.map((product, index) => (
            <div key={product.id} className="animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
              <MagazineCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Facebook Feed Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <i className="fab fa-facebook text-indigo-600"></i>
            Kövess minket Facebookon!
          </h2>
          <div className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden max-w-full">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FONDER-Pap%25C3%25ADr-100063292235639%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="700"
              style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Magazine "Paper" feel footer */}
      <div className="max-w-4xl mx-auto mt-24 text-center px-4">
        <div className="p-8 border-2 border-dashed border-slate-300 rounded-3xl bg-white/50">
          <p className="text-slate-500 italic mb-4">"A fenti árak és termékelérhetőségek tájékoztató jellegűek. Pontos információkért kérjük, látogasson el üzletünkbe!"</p>
          <div className="flex justify-center items-center gap-6">
            <div className="h-px w-20 bg-slate-300"></div>
            <span className="brand-font text-2xl text-slate-400">Onder Papír</span>
            <div className="h-px w-20 bg-slate-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
