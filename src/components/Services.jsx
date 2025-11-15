import React from 'react';

export function Services() {
  const services = [
    { 
      icon: '🔧', 
      title: 'Instalacje wodno-kanalizacyjne', 
      bullets: ['Nowe instalacje', 'Renowacje', 'Zgodność z NEN'],
      price: '€43/h',
      color: 'blue'
    },
    { 
      icon: '🚨', 
      title: 'Naprawy awaryjne', 
      bullets: ['Dostępność po godzinach', 'Szybka diagnoza', 'Mobilny serwis'],
      price: '€43/h',
      color: 'red'
    },
    { 
      icon: '🚿', 
      title: 'Montaż łazienek', 
      bullets: ['Projekty & montaż', 'Wykończenia premium', 'Gwarancja'],
      price: 'Wycena',
      color: 'green'
    },
    { 
      icon: '⚙️', 
      title: 'Modernizacje instalacji', 
      bullets: ['Optymalizacja', 'Wymiana części', 'Testy ciśnieniowe'],
      price: 'Wycena',
      color: 'yellow'
    }
  ];

  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
    red: 'bg-gradient-to-br from-red-500 to-red-600',
    green: 'bg-gradient-to-br from-green-500 to-green-600',
    yellow: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
  };

  return (
    <section id="usługi" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      {/* Dekoracyjne świecące tła */}
      <div className="absolute -right-40 top-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-green-500" />
      <div className="absolute -left-32 top-2/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 bg-red-500" />
      <div className="absolute right-1/3 bottom-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 bg-yellow-500" />

      {/* Dekoracyjna siatka */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">Usługi</h2>
          <h3 className="text-2xl font-bold text-gray-300 mt-6 max-w-2xl mx-auto">
            Kompleksowe wsparcie: od instalacji po serwis
          </h3>
          <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
            Wszystko w jednym miejscu — profesjonalnie i na czas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {services.map((service, idx) => (
            <article 
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all border border-white/10 opacity-0 group-hover:opacity-100"
              style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s forwards` }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 ${colorClasses[service.color]}`}>
                {service.icon}
              </div>
              
              <h3 className="font-extrabold text-lg text-white mb-4">{service.title}</h3>
              
              <ul className="text-base text-gray-300 space-y-2 mb-6">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 font-medium transition-transform duration-300 group-hover:translate-x-1">
                    <span className="text-yellow-400 text-xl">•</span> {bullet}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t-2 border-white/10 flex justify-between items-center">
                <span className="text-base font-bold text-gray-400">Cena od</span>
                <span className="font-black text-2xl text-white">{service.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a href="#kontakt" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-extrabold text-lg shadow-xl hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all">
            Zapytaj o wycenę
          </a>
        </div>
      </div>

      {/* Style dla custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Services;