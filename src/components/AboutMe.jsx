import React from 'react';
import { useTranslation } from 'react-i18next';
// USUŃ import jaImg i zastąp ścieżką względną

export function AboutMe() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('about.features.communication.title'),
      desc: t('about.features.communication.desc')
    },
    {
      title: t('about.features.experience.title'),
      desc: t('about.features.experience.desc')
    },
    {
      title: t('about.features.projects.title'),
      desc: t('about.features.projects.desc')
    },
    {
      title: t('about.features.flexibility.title'),
      desc: t('about.features.flexibility.desc')
    }
  ];

  return (
    <section id="o-mnie" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      {/* Dekoracyjne świecące tła */}
      <div className="absolute -left-40 top-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-blue-500" />
      <div className="absolute -right-32 top-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 bg-yellow-500" />
      <div className="absolute left-1/2 -bottom-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 bg-purple-600" />

      {/* Dekoracyjna siatka */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mt-8 text-white">{t('about.title')}</h2>
        </div>

        {/* Zdjęcie + treść - flex z 200px gap */}
        <div className="flex flex-col lg:flex-row gap-[200px] items-center mb-16">
          
          {/* Lewa kolumna - Zdjęcie w kółku */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Zdjęcie w kółku */}
              <div className="relative w-[576px] h-[576px] md:w-[640px] md:h-[640px] lg:w-[768px] lg:h-[768px]">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/20 shadow-2xl ring-4 ring-white/10">
                  <img 
                    src="/ja.png"  
                    alt="Davko - Hydraulik" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Dekoracyjne tło za zdjęciem */}
                <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-full bg-gradient-to-br from-blue-500/30 to-yellow-500/30 blur-3xl"></div>
                
                {/* Badge 5+ lat */}
                <div className="absolute bottom-8 -right-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-8 shadow-2xl border-4 border-white/20">
                  <div className="text-center">
                    <div className="text-5xl font-black text-gray-900">5</div>
                    <div className="text-base font-bold text-gray-800">{t('hero.stats.experience')}</div>
                  </div>
                </div>

                {/* Badge NL/PL */}
                <div className="absolute top-8 -right-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-6 shadow-2xl border-4 border-white/20">
                  <div className="text-2xl font-black text-white">NL/PL/ENG</div>
                </div>
              </div>
            </div>
          </div>

          {/* Prawa kolumna - Treść */}
          <div className="flex-1 flex flex-col justify-between gap-6">
            
            {/* Górna sekcja - opis */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md text-white rounded-2xl p-8 shadow-xl border border-white/10">
                <h3 className="text-3xl font-extrabold mb-4 text-blue-400">{t('about.whoAmI')}</h3>
                <p className="text-lg font-medium leading-relaxed mb-4 text-gray-300">
                  {t('about.description1')}
                </p>
                <p className="text-lg font-medium leading-relaxed text-gray-300">
                  {t('about.description2')}
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-yellow-400/30">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-sm font-bold text-yellow-100">{t('about.b2b.label')}</div>
                    <h3 className="font-black text-2xl text-white mt-1 mb-2">
                      {t('about.b2b.title')}
                    </h3>
                    <p className="text-base text-yellow-50 font-semibold">
                      {t('about.b2b.description')}
                    </p>
                  </div>
                  <a 
                    href="#kontakt" 
                    className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 
                               hover:text-white transition-colors shadow-lg whitespace-nowrap"
                  >
                    {t('about.b2b.cta')}
                  </a>
                </div>
              </div>

              {/* Przyciski */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#kontakt" 
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 
                             text-white font-bold text-lg text-center
                             hover:text-white hover:from-blue-600 hover:to-blue-700 
                             transition-all shadow-lg"
                >
                  {t('about.contactBtn')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cechy - 4 kolumny na pełnej szerokości */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/10 transition-all border border-white/10">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md mb-4 ${
                idx % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-yellow-400 to-yellow-500'
              }`}>
                {idx + 1}
              </div>
              <h3 className="font-extrabold text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-base text-gray-300 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;