
import React from 'react';
import { CONTACT_DATA, OPENING_HOURS, SHOP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-white text-2xl brand-font mb-6">{SHOP_NAME}</h3>
          <p className="mb-6 leading-relaxed">
            Tiszaújváros szívében várunk minden kedves vásárlót széles papír-írószer választékkal és professzionális irodai szolgáltatásokkal.
          </p>
          <div className="flex space-x-4">
            <a href={CONTACT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>

          </div>
        </div>

        {/* Links / Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Elérhetőség</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt mt-1 text-indigo-400"></i>
              <span>{CONTACT_DATA.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-phone text-indigo-400"></i>
              <span>{CONTACT_DATA.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-envelope text-indigo-400"></i>
              <span>{CONTACT_DATA.email}</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Nyitvatartás</h4>
          <ul className="space-y-3">
            {OPENING_HOURS.map((oh) => (
              <li key={oh.day} className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">{oh.day}</span>
                <span className="text-slate-200">{oh.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {SHOP_NAME}. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
};

export default Footer;
