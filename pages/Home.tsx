
import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP_NAME, SHOP_LOCATION } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1920&auto=format&fit=crop"
            alt="Színes ceruzák háttér"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/shop/1920/1080';
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl md:text-7xl text-slate-900 mb-6 leading-tight font-black">
              Minden, ami a <span className="text-indigo-600">sikerhez</span> kell.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Tiszaújváros kedvenc papír-írószer üzlete, ahol a kreativitás és a praktikum találkozik. Irodaszerek, iskolaszerek és egyedi ajándékok egy helyen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to="/ujsag" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl hover:scale-105 active:scale-95 text-center">
                Aktuális Termékújság
              </Link>
              <Link to="/szolgaltatasok" className="bg-white/80 backdrop-blur-md text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all text-center shadow-sm">
                Szolgáltatásaink
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <i className="fas fa-chevron-down text-slate-400 text-2xl"></i>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="https://a6354edfd6.cbaul-cdnwnd.com/8baa0cec95f1703baf973dc7a74ffb19/200000058-7a8b57a8b8/IMG_2452.webp?ph=a6354edfd6"
              // src="https://lh3.googleusercontent.com/pw/AP1GczO_Qz_A6R_g_A6R_g_A6R_g_A6R_g_A6R_g_A6R_g_A6R_g_A6R_g_A6R_g" 
              alt="Onder Papírbolt bejárat"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/front/800/1000';
              }}
            />
          </div>
          <div>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Helyi vállalkozás, szívvel-lélekkel</span>
            <h2 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Már évtizedek óta Tiszaújvárosban
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Az Onder Papírbolt nem csupán egy üzlet, hanem egy pont a város térképén, ahol mindig számíthat a minőségre és a szakértő kiszolgálásra. Legyen szó iskolakezdésről, irodai beszerzésről vagy csak egy apró figyelmességről, nálunk megtalálja amit keres.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Széles választék</h4>
                  <p className="text-sm text-slate-500">Több ezer termék raktáron.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <i className="fas fa-print text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Irodai szolgáltatás</h4>
                  <p className="text-sm text-slate-500">Nyomtatás, spirálozás, laminálás.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Mini */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Miben segíthetünk?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Termékeinken túl számos szolgáltatással várjuk üzletünkben.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: 'fa-scroll', title: 'Spirálozás', desc: 'Füzetek, szakdolgozatok fém vagy műanyag spirállal.' },
            { icon: 'fa-copy', title: 'Fénymásolás', desc: 'Fekete-fehér és színes másolás, szkennelés.' },
            { icon: 'fa-shield-alt', title: 'Laminálás', desc: 'Fontos dokumentumok védelme minden méretben.' },
            { icon: 'fa-stamp', title: 'Bélyegzők', desc: 'Egyedi szöveges bélyegzők készítése rövid határidővel.' },
          ].map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Látogasson el hozzánk még ma!</h2>
          <p className="text-indigo-100 text-xl mb-12 max-w-3xl mx-auto relative z-10 font-light">
            Találjon meg minket {SHOP_LOCATION} alatt. Profi kiszolgálás és barátságos környezet várja.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur">
              <i className="fas fa-map-marked-alt"></i>
              <span>Barcsay Jenő tér 4.</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur">
              <i className="fas fa-clock"></i>
              <span>H-P: 08:00 - 17:00 • Szo: 08:00 - 12:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
