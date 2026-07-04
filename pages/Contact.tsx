
import React, { useState } from 'react';
import { CONTACT_DATA, OPENING_HOURS } from '../constants';

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=ONDER+Pap%C3%ADr+Tiszaújváros";

const Contact: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic brand-font">Kapcsolat</h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
            Kérdése van? Keressen minket bizalommal vagy látogasson el tiszaújvárosi üzletünkbe!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Details */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm">
                  <i className="fas fa-info"></i>
                </div>
                Elérhetőségek
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-teal-600 text-xl flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Címünk</h4>
                    <p className="text-lg font-medium text-slate-800">{CONTACT_DATA.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-teal-600 text-xl flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Telefonszám</h4>
                    <p className="text-lg font-medium text-slate-800">{CONTACT_DATA.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-teal-600 text-xl flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail cím</h4>
                    <p className="text-lg font-medium text-slate-800">{CONTACT_DATA.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm">
                  <i className="fas fa-clock"></i>
                </div>
                Nyitvatartás
              </h3>
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                {OPENING_HOURS.map((oh) => (
                  <div key={oh.day} className="flex justify-between items-center">
                    <span className="font-semibold text-slate-600">{oh.day}</span>
                    <span className="text-slate-800 bg-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                      {oh.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-[600px] lg:h-full rounded-[2rem] overflow-hidden shadow-2xl relative">
            {mapLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.9878272525652!2d21.03365732973571!3d47.93082600886604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740ae785cacd12b%3A0xf45da16884906507!2sONDER%20Pap%C3%ADr!5e0!3m2!1shu!2sus!4v1769468688790!5m2!1shu!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Onder Papírbolt helyszíne"
              />
            ) : (
              <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center gap-6 p-8">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-teal-600 text-3xl"></i>
                </div>
                <div className="text-center">
                  <p className="text-slate-800 font-bold text-lg mb-1">3580 Tiszaújváros</p>
                  <p className="text-slate-500">Barcsay Jenő tér 4.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setMapLoaded(true)}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    <i className="fas fa-map mr-2"></i>Térkép betöltése
                  </button>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-colors text-sm text-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Megnyitás Google Maps-ben
                  </a>
                </div>
                <p className="text-slate-400 text-xs text-center max-w-xs">
                  A térkép betöltésekor a Google adatait is elfogadja. Részletek az{' '}
                  <a href="#/adatvedelem" className="underline hover:text-slate-600">Adatvédelmi tájékoztatóban</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
