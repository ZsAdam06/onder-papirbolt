
import React from 'react';
import { CONTACT_DATA } from '../constants';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Egyedi Megrendelések",
      icon: "fa-star",
      items: [
        "Speciális termékek egyedi igény szerint",
        "Nehezen beszerezhető papíráruk felkutatása",
        "Céges és intézményi megrendelések - kiszállítás megegyezés szerint",
        "Személyes tanácsadás a megfelelő termék megtalálásához"
      ]
    },
    {
      title: "Bélyegzők",
      icon: "fa-stamp",
      items: [
        "Egyedi bélyegzők kizárólag előre leadott megrendelés alapján",
        "Az igényelt szöveg és méret megbeszélése személyesen vagy e-mailben",
        "Érdeklődjön elérhetőségeinken a részletekért"
      ]
    },
    {
      title: "Iskolakezdési Füzetcsomagok",
      icon: "fa-school",
      items: [
        "Osztályonként összeállított füzetcsomagok",
        "Időt és energiát spórol a szülőknek"
      ]
    },
    {
      title: "Fejlesztő Játékok és Foglalkoztatók",
      icon: "fa-puzzle-piece",
      items: [
        "Készségfejlesztő és logikai játékok",
        "Foglalkoztató füzetek korosztályonként",
        "Kifestők és kreatív színezők",
        "Oktatási segédanyagok gyerekeknek"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 italic brand-font">Szolgáltatásaink</h1>
          <p className="text-slate-500 text-base sm:text-xl max-w-2xl mx-auto font-light">
            Személyre szabott megoldások, egyedi rendelések és gondosan összeállított csomagok — mindez egy helyen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto border-t border-slate-200">
          {serviceCategories.map((cat, idx) => {
            const accent = idx % 2 === 0 ? 'teal' : 'orange';
            return (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-6 sm:gap-16 items-start py-12 sm:py-14 border-b border-slate-200`}
              >
                <div className="sm:w-64 shrink-0 flex items-center gap-4 sm:flex-col sm:items-center sm:text-center">
                  <i className={`fas ${cat.icon} text-3xl ${accent === 'teal' ? 'text-teal-600' : 'text-orange-500'}`} aria-hidden="true"></i>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 brand-font italic sm:mt-4">{cat.title}</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4 flex-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${accent === 'teal' ? 'bg-teal-400' : 'bg-orange-400'}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-24 bg-white rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 text-center border-4 border-teal-50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Árajánlatot kérne?</h2>
          <p className="text-slate-500 text-sm sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Speciális igény, egyedi csomag vagy bélyegző rendelés esetén keressen minket e-mailben vagy telefonon — szívesen segítünk!
          </p>
          <a href={`mailto:${CONTACT_DATA.email}`} className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 sm:px-10 py-4 rounded-full font-bold hover:bg-teal-700 transition-colors shadow-lg text-sm sm:text-base">
            <i className="fas fa-paper-plane"></i>
            E-mail küldése
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
