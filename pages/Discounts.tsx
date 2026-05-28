
import React from 'react';

const companies = [
  { name: 'MOL', icon: 'fa-gas-pump', color: 'bg-red-500 shadow-red-200' },
  { name: 'Jabil', icon: 'fa-microchip', color: 'bg-blue-600 shadow-blue-200' },
  { name: 'Birla Carbon', icon: 'fa-industry', color: 'bg-slate-700 shadow-slate-200' },
];

const Discounts: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic brand-font">Kedvezmények</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
            Tiszaújváros meghatározó vállalatainak dolgozóit különleges kedvezménnyel várjuk.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-teal-200">
              <i className="fas fa-percent"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">10% kedvezmény munkavállalóknak</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Az alábbi helyi vállalatok dolgozói <span className="font-semibold text-teal-600">10%-os kedvezményt</span> vehetnek igénybe üzletünkben,
            fényképes belépőkártyájuk felmutatásával. A kedvezményt a <span className="font-semibold">számla végösszegéből</span> vonjuk le.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {companies.map((company) => (
            <div key={company.name} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center gap-6">
              <div className={`w-20 h-20 ${company.color} text-white rounded-3xl flex items-center justify-center text-4xl shadow-lg`}>
                <i className={`fas ${company.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{company.name}</h3>
              <p className="text-slate-500 text-sm">Érvényes fényképes belépőkártyával</p>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-[2.5rem] p-10 md:p-14">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <i className="fas fa-circle-info text-teal-600"></i>
            Tudnivalók a kedvezmény igénybevételéhez
          </h3>
          <ul className="space-y-4">
            {[
              'A kedvezmény igénybevételéhez kérjük, vásárlás előtt jelezze szándékát — visszamenőleg nem tudjuk érvényesíteni.',
              'A kedvezmény más akciókkal, kedvezményekkel nem vonható össze.',
              'Érvényes, fényképes belépőkártya felmutatása kötelező.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Discounts;
