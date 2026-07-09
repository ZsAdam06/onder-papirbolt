
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_DATA } from '../constants';
import { getOpenStatus, getTodayHours } from '../lib/openingStatus';

const Home: React.FC = () => {
  const status = getOpenStatus();

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Színes ceruzák háttér"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-teal-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center sm:text-left">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 backdrop-blur-md border ${
              status.isOpen
                ? 'bg-emerald-400/15 border-emerald-300/30 text-emerald-200'
                : 'bg-white/10 border-white/20 text-white/80'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                {status.isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.isOpen ? 'bg-emerald-400' : 'bg-slate-400'}`}></span>
              </span>
              {status.label}
            </div>

            <span className="text-orange-300 font-bold uppercase tracking-widest text-sm mb-4 block">
              Tiszaújváros papírboltja évtizedek óta
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight font-black">
              Mindig <span className="text-orange-300 italic">számíthat</span> ránk.
            </h1>
            <p className="text-xl text-white/85 mb-10 leading-relaxed font-light">
              Ahol személyesen segítenek, nem csak kiszolgálnak. Egy igazi helyi bolt, ahogy régen volt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link
                to="/ujsag"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-400 transition-all shadow-xl shadow-orange-950/30 hover:scale-105 active:scale-95 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                Aktuális Termékújság
              </Link>
              <Link
                to="/szolgaltatasok"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Szolgáltatásaink
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-10">
          <i className="fas fa-chevron-down text-white/50 text-2xl" aria-hidden="true"></i>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden">
          <a
            href="https://www.google.com/maps/search/?api=1&query=ONDER+Pap%C3%ADr+Tiszaújváros"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg shrink-0">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Címünk</p>
              <p className="font-semibold text-slate-800 text-sm truncate">Barcsay Jenő tér 4.</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-6">
            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-lg shrink-0">
              <i className="fas fa-clock" aria-hidden="true"></i>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Nyitvatartás</p>
              <p className="font-semibold text-slate-800 text-sm truncate">{getTodayHours()}</p>
            </div>
          </div>
          <a href={`tel:${CONTACT_DATA.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg shrink-0">
              <i className="fas fa-phone" aria-hidden="true"></i>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Telefon</p>
              <p className="font-semibold text-slate-800 text-sm truncate">{CONTACT_DATA.phone}</p>
            </div>
          </a>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-orange-50 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="/IMG_2452.jpg"
              alt="Onder Papírbolt bejárat"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Helyi vállalkozás, szívvel-lélekkel</span>
            <h2 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Tiszaújváros papírboltja<br /><span className="text-teal-600">évtizedek óta</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Az Onder Papírbolt nem csupán egy üzlet, hanem egy pont a város térképén, ahol mindig számíthat a minőségre és a szakértő kiszolgálásra. Legyen szó iskolakezdésről, irodai beszerzésről vagy csak egy apró figyelmességről, nálunk megtalálja amit keres.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <i className="fas fa-check-circle text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Széles választék</h4>
                  <p className="text-sm text-slate-500">Több ezer termék raktáron.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <i className="fas fa-print text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Irodai szolgáltatás</h4>
                  <p className="text-sm text-slate-500">Egyedi megrendelések és irodai szolgáltatások.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Mini */}
      <section className="bg-slate-100 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Szolgáltatások</span>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Miben segíthetünk?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Termékeinken túl számos szolgáltatással várjuk üzletünkben.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: 'fa-star', title: 'Egyedi Megrendelések', desc: 'Céges és intézményi rendelések, nehezen beszerezhető termékek felkutatása.' },
            { icon: 'fa-stamp', title: 'Bélyegzők', desc: 'Egyedi bélyegzők kizárólag előre leadott megrendelés alapján.' },
            { icon: 'fa-school', title: 'Iskolakezdési Csomagok', desc: 'Osztályonként összeállított füzetcsomagok, időt és energiát spórolva a szülőknek.' },
            { icon: 'fa-puzzle-piece', title: 'Fejlesztő Játékok', desc: 'Készségfejlesztő játékok, foglalkoztató füzetek és kreatív színezők.' },
          ].map((s, idx) => (
            <Link
              to="/szolgaltatasok"
              key={idx}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 block"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg shadow-teal-200 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${s.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Discounts teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <Link
          to="/kedvezmenyek"
          className="group flex flex-col sm:flex-row items-center gap-6 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
            <i className="fas fa-percent" aria-hidden="true"></i>
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-2xl font-bold text-slate-800 mb-1">10% kedvezmény helyi vállalatok dolgozóinak</h3>
            <p className="text-slate-500">A MOL, a Jabil és a Birla Carbon munkatársait kedvezménnyel várjuk — érvényes belépőkártyával.</p>
          </div>
          <span className="text-teal-600 font-bold whitespace-nowrap flex items-center gap-2 group-hover:gap-3 transition-all">
            Részletek <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </span>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Látogasson el hozzánk még ma!</h2>
          <p className="text-white/85 text-xl mb-10 max-w-3xl mx-auto relative z-10 font-light">
            Profi kiszolgálás és barátságos környezet várja Tiszaújváros szívében.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
            <Link
              to="/kapcsolat"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <i className="fas fa-map-marked-alt mr-2" aria-hidden="true"></i>
              Kapcsolat és térkép
            </Link>
            <div className="flex items-center gap-2 bg-white/15 px-6 py-4 rounded-full backdrop-blur border border-white/20">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Barcsay Jenő tér 4.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
