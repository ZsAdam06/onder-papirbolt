
import React from 'react';

const Impresszum: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4 italic brand-font">Impresszum</h1>
          <p className="text-slate-500">A 2001. évi CVIII. törvény (Eker. tv.) 4. § alapján kötelezően közlendő adatok</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <i className="fas fa-building text-teal-500"></i> Szolgáltató adatai
            </h2>
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Cégnév</dt>
                <dd className="text-slate-800 font-medium">Onder Trade Kft.</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Székhely</dt>
                <dd className="text-slate-800 font-medium">3580 Tiszaújváros, Barcsay Jenő tér 4.</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Adószám</dt>
                <dd className="text-slate-800 font-medium">28764474-2-05</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Cégjegyzékszám</dt>
                <dd className="text-slate-800 font-medium">05-09-033211</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Nyilvántartó bíróság</dt>
                <dd className="text-slate-800 font-medium">Miskolci Törvényszék Cégbírósága</dd>
              </div>
            </dl>
          </section>

          <div className="border-t border-slate-100" />

          <section>
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <i className="fas fa-envelope text-teal-500"></i> Elérhetőség
            </h2>
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">E-mail</dt>
                <dd className="text-slate-800 font-medium">
                  <a href="mailto:onder.trade2020@gmail.com" className="text-teal-600 hover:underline">
                    onder.trade2020@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Telefon</dt>
                <dd className="text-slate-800 font-medium">+36 20 252 4031</dd>
              </div>
            </dl>
          </section>

          <div className="border-t border-slate-100" />

          <section>
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <i className="fas fa-server text-teal-500"></i> Tárhelyszolgáltató
            </h2>
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Cégnév</dt>
                <dd className="text-slate-800 font-medium">Render Services, Inc.</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Székhely</dt>
                <dd className="text-slate-800 font-medium">340 S Lemon Ave #4133, Walnut, CA 91789, USA</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Weboldal</dt>
                <dd className="text-slate-800 font-medium">
                  <a href="https://render.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                    render.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <div className="border-t border-slate-100" />

          <section>
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <i className="fas fa-gavel text-teal-500"></i> Felügyeleti hatóság
            </h2>
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-slate-400 text-sm font-semibold uppercase tracking-wide w-48 flex-shrink-0">Hatóság</dt>
                <dd className="text-slate-800 font-medium">Borsod-Abaúj-Zemplén Vármegyei Kormányhivatal – Fogyasztóvédelmi Főosztály</dd>
              </div>
            </dl>
          </section>

          <div className="border-t border-slate-100" />

          <p className="text-slate-400 text-xs text-center">
            Az oldalon szereplő tartalmak szerzői jogi védelem alatt állnak. Minden jog fenntartva – Onder Trade Kft. © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impresszum;
