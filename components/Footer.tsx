
import React from 'react';
import { CONTACT_DATA, OPENING_HOURS, SHOP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-teal-100 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <div className="bg-white rounded-xl px-4 py-2 inline-block mb-6">
            <img src="/logo_szoveggel.png" alt="Onder Papírbolt" className="h-14 w-auto" />
          </div>
          <p className="mb-6 leading-relaxed">
            Tiszaújváros szívében várunk minden kedves vásárlót széles papír-írószer választékkal és professzionális irodai szolgáltatásokkal.
          </p>
          <div className="flex space-x-4">
            <a href={CONTACT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>

          </div>
        </div>

        {/* Links / Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Elérhetőség</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt mt-1 text-teal-400"></i>
              <span>{CONTACT_DATA.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-phone text-teal-400"></i>
              <span>{CONTACT_DATA.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-envelope text-teal-400"></i>
              <span>{CONTACT_DATA.email}</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nyitvatartás</h4>
          <ul className="space-y-3">
            {OPENING_HOURS.map((oh) => (
              <li key={oh.day} className="border-b border-teal-800 pb-2">
                <div className="flex justify-between">
                  <span className="text-teal-300">{oh.day}</span>
                  <span className="text-white">{oh.hours}</span>
                </div>
                {oh.lunchBreak && (
                  <div className="flex justify-end mt-0.5">
                    <span className="text-teal-400 text-xs">Ebédszünet: {oh.lunchBreak}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-teal-800 text-center text-sm space-y-3">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="#/impresszum" className="text-teal-300 hover:text-white transition-colors">Impresszum</a>
          <a href="#/adatvedelem" className="text-teal-300 hover:text-white transition-colors">Adatvédelmi tájékoztató</a>
        </div>
        <p className="text-teal-400">&copy; {new Date().getFullYear()} {SHOP_NAME}. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
};

export default Footer;
