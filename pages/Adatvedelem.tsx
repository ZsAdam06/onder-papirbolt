
import React from 'react';

const Section: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <section>
    <h2 className="text-base font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
      <i className={`${icon} text-teal-500`}></i> {title}
    </h2>
    <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
  </section>
);

const Adatvedelem: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4 italic brand-font">Adatvédelmi tájékoztató</h1>
          <p className="text-slate-500">Hatályos: 2025. január 1-től</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm p-8 md:p-12 space-y-10">

          <Section icon="fas fa-user-shield" title="1. Az adatkezelő">
            <p>
              <strong>Neve:</strong> Onder Trade Kft.<br />
              <strong>Székhelye:</strong> 3580 Tiszaújváros, Barcsay Jenő tér 4.<br />
              <strong>Adószáma:</strong> 28764474-2-05<br />
              <strong>E-mail:</strong>{' '}
              <a href="mailto:onder.trade2020@gmail.com" className="text-teal-600 hover:underline">
                onder.trade2020@gmail.com
              </a><br />
              <strong>Telefon:</strong> +36 20 252 4031
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <Section icon="fas fa-info-circle" title="2. Az oldal jellege">
            <p>
              Ez a weboldal kizárólag tájékoztató célú – nem működik webáruházként,
              nem kezel regisztrációt, nem gyűjt személyes adatokat kapcsolatfelvételi
              űrlapon keresztül, és nem folytat marketing-célú adatkezelést.
            </p>
            <p>
              Az oldalon megadott elérhetőségeinken (e-mail, telefon) érkező megkeresések
              esetén az Ön által önkéntesen megadott adatokat (név, e-mail cím, telefonszám)
              kizárólag a megkeresés megválaszolására használjuk fel, és azt követően töröljük.
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <Section icon="fas fa-globe" title="3. Harmadik fél szolgáltatások">
            <p>
              Az oldal az alábbi külső szolgáltatásokat használja, amelyek a látogató
              IP-címét technikailag érinthetik:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Szolgáltatás</th>
                    <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Cél</th>
                    <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Megjegyzés</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200">Google Maps</td>
                    <td className="p-3 border border-slate-200">Térkép megjelenítése</td>
                    <td className="p-3 border border-slate-200">Csak kifejezett kattintás után töltődik be; a Google saját adatvédelmi szabályzata érvényes</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200">Facebook (Meta)</td>
                    <td className="p-3 border border-slate-200">Facebook-idővonal megjelenítése</td>
                    <td className="p-3 border border-slate-200">Csak kifejezett kattintás után töltődik be; a Meta saját adatvédelmi szabályzata érvényes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500">
              A Google Maps adatvédelmi szabályzata:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                policies.google.com/privacy
              </a>
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <Section icon="fas fa-cookie-bite" title="4. Sütik (cookie-k)">
            <p>
              Ez a weboldal <strong>nem használ saját nyomkövető vagy marketing sütiket</strong>.
              A Google Maps térkép és a Facebook-idővonal – amelyek csak az Ön kifejezett
              kérésére töltődnek be – a Google, illetve a Meta saját sütijeit helyezhetik el.
              Ezek az adott szolgáltató adatvédelmi szabályzata alapján kezelendők.
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <Section icon="fas fa-balance-scale" title="5. Jogalap és célok">
            <p>
              Az esetleges e-mailes kapcsolatfelvételkor keletkező adatkezelés jogalapja
              a GDPR 6. cikk (1) bekezdés b) pontja (szerződés teljesítése / szerződéskötést
              megelőző lépések) vagy f) pontja (jogos érdek a megkeresés megválaszolásához).
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <Section icon="fas fa-user-check" title="6. Az érintett jogai">
            <p>Ön jogosult:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>tájékoztatást kérni az Önről kezelt adatokról (hozzáférési jog),</li>
              <li>adatai helyesbítését kérni,</li>
              <li>adatai törlését kérni („elfeledtetéshez való jog"),</li>
              <li>az adatkezelés korlátozását kérni,</li>
              <li>az adatkezelés ellen tiltakozni,</li>
              <li>adatai hordozhatóságát kérni.</li>
            </ul>
            <p>
              Kérelmét az <a href="mailto:onder.trade2020@gmail.com" className="text-teal-600 hover:underline">onder.trade2020@gmail.com</a> e-mail
              címre küldheti. A kérelemre 30 napon belül válaszolunk.
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <Section icon="fas fa-landmark" title="7. Jogorvoslat">
            <p>
              Panasszal a <strong>Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH)</strong> fordulhat:
            </p>
            <p>
              Cím: 1055 Budapest, Falk Miksa utca 9–11.<br />
              E-mail: <a href="mailto:ugyfelszolgalat@naih.hu" className="text-teal-600 hover:underline">ugyfelszolgalat@naih.hu</a><br />
              Weboldal: <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.naih.hu</a>
            </p>
          </Section>

          <div className="border-t border-slate-100" />

          <p className="text-slate-400 text-xs text-center">
            Onder Trade Kft. – Utoljára módosítva: 2025. január
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adatvedelem;
