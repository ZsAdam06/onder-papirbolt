
import React from 'react';
import { CONTACT_DATA, OPENING_HOURS, MAP_EMBED_URL } from '../constants';

const Contact: React.FC = () => {
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
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shop Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-white/50">
              <p className="text-slate-800 font-bold mb-1">Tiszaújváros szívében!</p>
              <p className="text-slate-500 text-sm">A Barcsay Jenő térnél, könnyen megközelíthető helyen várjuk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
