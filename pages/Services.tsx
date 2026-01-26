
import React from 'react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Nyomtatás és Másolás",
      icon: "fa-print",
      items: [
        "Fekete-fehér és színes nyomtatás (A4, A3)",
        "Fénymásolás nagy tételben is",
        "Szkennelés e-mailbe vagy pendrive-ra",
        "Fotónyomtatás minőségi papírra"
      ]
    },
    {
      title: "Kötészet és Védelem",
      icon: "fa-book",
      items: [
        "Műanyag spirálozás (több színben)",
        "Fém spirálozás professzionális megjelenéshez",
        "Laminálás névjegykártyától A3-as méretig",
        "Szakdolgozat kötés"
      ]
    },
    {
      title: "Irodai Adminisztráció",
      icon: "fa-stamp",
      items: [
        "Bélyegző készítés (Colop, Trodat)",
        "Névjegykártya tervezés és nyomás",
        "Meghívók és üdvözlőkártyák készítése",
        "Dokumentum szerkesztés"
      ]
    },
    {
      title: "Egyedi Megrendelések",
      icon: "fa-gift",
      items: [
        "Speciális papíráruk beszerzése",
        "Művészellátó eszközök rendelésre",
        "Iskolai csomagok összeállítása",
        "Céges irodaszer ellátás"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic brand-font">Szolgáltatásaink</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
            Nemcsak termékekkel, hanem szaktudással és modern gépparkkal is segítjük munkáját és tanulmányait.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex gap-8 items-start">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg shadow-indigo-200">
                <i className={`fas ${cat.icon}`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-[3rem] p-12 text-center border-4 border-indigo-50">
            <h2 className="text-3xl font-bold mb-6">Árajánlatot kérne?</h2>
            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Nagyobb mennyiségű nyomtatás vagy speciális irodaszer igény esetén kérjen egyedi árajánlatot e-mailben vagy telefonon!
            </p>
            <a href="mailto:onderpapir@gmail.com" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg">
                <i className="fas fa-paper-plane"></i>
                E-mail küldése
            </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
