// src/components/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t, ready } = useTranslation(); // <- gotowe tłumaczenia?

  //   ─────────── 1. Poczekaj, aż i18next wczyta zasoby ───────────
  if (!ready) return null;               // możesz wstawić spinner

  //   ─────────── 2. Dane usług ───────────
  const services = [
    {
      icon: '🔧',
      title: t('services.servicesList.installations.title'),
      bullets: t('services.servicesList.installations.bullets', { returnObjects: true }),
      price:  t('services.servicesList.installations.price'),
      color:  'blue'
    },
    {
      icon: '🚨',
      title: t('services.servicesList.repairs.title'),
      bullets: t('services.servicesList.repairs.bullets', { returnObjects: true }),
      price:  t('services.servicesList.repairs.price'),
      color:  'red'
    },
    {
      icon: '🚿',
      title: t('services.servicesList.bathrooms.title'),
      bullets: t('services.servicesList.bathrooms.bullets', { returnObjects: true }),
      price:  t('services.servicesList.bathrooms.price'),
      color:  'green'
    },
    {
      icon: '⚙️',
      title: t('services.servicesList.modernization.title'),
      bullets: t('services.servicesList.modernization.bullets', { returnObjects: true }),
      price:  t('services.servicesList.modernization.price'),
      color:  'yellow'
    }
  ];

  const colorClasses = {
    blue:   'bg-gradient-to-br from-blue-500 to-blue-600',
    red:    'bg-gradient-to-br from-red-500 to-red-600',
    green:  'bg-gradient-to-br from-green-500 to-green-600',
    yellow: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
  };

  return (
    <section
      id="usługi"
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden"
    >
      {/* dekoracje... */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            {t('services.title')}
          </h2>
          <h3 className="text-2xl font-bold text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </h3>
          <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/*  ───── 3. map z bezpiecznikiem Array.isArray ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-xl
                         hover:shadow-2xl hover:bg-white/10 transition-all border border-white/10
                         opacity-0 group-hover:opacity-100"
              style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s forwards` }}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg
                            transition-transform duration-300 group-hover:scale-110
                            ${colorClasses[service.color]}`}
              >
                {service.icon}
              </div>

              <h3 className="font-extrabold text-lg text-white mb-4">{service.title}</h3>

              <ul className="text-base text-gray-300 space-y-2 mb-6">
                {Array.isArray(service.bullets) &&
                  service.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-center gap-2 font-medium
                                 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <span className="text-yellow-400 text-xl">•</span> {bullet}
                    </li>
                  ))}
              </ul>

              <div className="pt-4 border-t-2 border-white/10 flex justify-between items-center">
                <span className="text-base font-bold text-gray-400">
                  {t('services.priceFrom')}
                </span>
                <span className="font-black text-2xl text-white">{service.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
                       bg-gradient-to-r from-blue-500 to-blue-600
                       text-white font-extrabold text-lg shadow-xl
                       hover:text-white hover:from-blue-600 hover:to-blue-700
                       hover:scale-105 transition-all"
          >
            {t('services.quoteCta')}
          </a>
        </div>
      </div>

      {/* Style bez atrybutu jsx */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up   { animation: fadeInUp   0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
}