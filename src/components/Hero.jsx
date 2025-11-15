import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      id="start" 
      className="relative min-h-[90vh] flex items-center py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800"
    >
      {/* Dekoracyjne świecące tła - z animacją */}
      <div className="absolute -left-40 -top-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-blue-500 animate-pulse" />
      <div className="absolute -right-32 top-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 bg-yellow-500 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 -bottom-20 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 bg-purple-600 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Kontener gridu dla tekstu i logo */}
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Kolumna lewa - Tekst */}
        <div className="lg:pr-12">
          <div className="max-w-3xl">
            
            {/* Główny tytuł - ANIMOWANY */}
            <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white mb-6">
              <span className="block overflow-hidden">
                <span className="block animate-text-reveal">
                  {t('hero.title1')}
                </span>
              </span>
              <span className="block overflow-hidden mt-2">
                <span className="block text-blue-400 animate-text-reveal animation-delay-300">
                  {t('hero.title2')}
                </span>
              </span>
            </h1>

            {/* Motto po polsku - ANIMOWANE */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8 animate-fade-in-up animation-delay-400">
              {t('hero.motto')} <span className="text-yellow-400 inline-block animate-pulse">{t('hero.mottoHighlight')}</span>
            </h3>

            {/* Opis - ANIMOWANY */}
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
              {t('hero.description')}
            </p>

            {/* Przyciski CTA - ANIMOWANE */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up animation-delay-800">
              <a 
                href="tel:+31647210802"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl shadow-2xl 
                           bg-gradient-to-r from-blue-500 to-blue-600 
                           text-white hover:text-white 
                           hover:from-blue-600 hover:to-blue-700 
                           hover:scale-110 transition-all duration-300"
              >
                {t('hero.callNow')}
                <ChevronRight className="w-6 h-6 animate-bounce-x" />
              </a>
              <a 
                href="#usługi"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full 
                           border-2 border-white/30 backdrop-blur-sm font-bold text-xl 
                           text-white hover:text-[#ffcc00]
                           hover:bg-white/10 hover:border-white/50 
                           hover:scale-105 transition-all duration-300"
              >
                {t('hero.seeServices')}
              </a>
            </div>

            {/* Statystyki - ANIMOWANE */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-1000">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-black text-yellow-400 mb-2">25+</div>
                <div className="text-lg font-bold text-gray-300">{t('hero.stats.clients')}</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-black text-blue-400 mb-2">5+</div>
                <div className="text-lg font-bold text-gray-300">{t('hero.stats.experience')}</div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-white mb-2">NL/PL/ENG</div>
                <div className="text-lg font-bold text-gray-300">{t('hero.stats.location')}</div>
              </div>
            </div>

            {/* Dodatkowe info - ANIMOWANE */}
            <div className="mt-10 inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-lg border border-white/10 animate-fade-in-up animation-delay-1200 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-black text-gray-900 text-lg animate-pulse">
                ZZP
              </div>
              <div>
                <div className="font-black text-lg">{t('hero.badge.title')}</div>
                <div className="text-sm text-blue-100">{t('hero.badge.subtitle')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolumna prawa - Logo - ANIMOWANE ODDYCHANIE */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative animate-breathing scale-[2.0]">
            {/* Świecące tło za logo - z rotacją */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-spin-slow"></div>
            <img 
              src={logoImg} 
              alt="" 
              className="relative w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
      </div>

      {/* Dekoracyjna siatka */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Style dla custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounceX {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-breathing {
          animation: breathing 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-bounce-x {
          animation: bounceX 1s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}