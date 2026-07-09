
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'onder_cookie_notice_accepted';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <i className="fas fa-cookie-bite text-teal-400 mt-0.5 flex-shrink-0"></i>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ez az oldal kizárólag alapvető működési sütiket használ.
            A Google Maps térkép és a Facebook idővonal csak az Ön kérésére töltődik be.{' '}
            <a href="#/adatvedelem" className="text-teal-400 hover:text-teal-300 underline">
              Adatvédelmi tájékoztató
            </a>
          </p>
        </div>
        <button
          onClick={accept}
          className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0 whitespace-nowrap"
        >
          Rendben
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
