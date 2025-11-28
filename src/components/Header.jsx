import React, { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// ❌ USUNIĘTO WSZYSTKIE IMPORTY OBRAZKÓW

// ✅ ZMIANA: Używamy ścieżek tekstowych do plików w folderze public
const languages = [
  { code: 'pl', name: 'Polski', flag: '/pl.png' },
  { code: 'nl', name: 'Nederlands', flag: '/nl.png' },
  { code: 'en', name: 'English', flag: '/gb.png' }
];

export default function Header({ compact = false }) {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('nav.start'), href: '#start' },
    { label: t('nav.services'), href: '#usługi' },
    { label: t('nav.about'), href: '#o-mnie' },
    { label: t('nav.contact'), href: '#kontakt' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, href) => {
    scrollToSection(e, href);
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${compact ? 'py-2' : 'py-4'} bg-white/80 backdrop-blur-sm border-b border-gray-200 transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#start" onClick={(e) => handleLinkClick(e, '#start')} className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white border border-gray-200/80">
            {/* ✅ ZMIANA: Bezpośrednia ścieżka do logo */}
            <img src="/logo.png" alt="Logo Davko" className="w-8 h-8 object-contain" />
          </div>
          <div className="hidden sm:block">
            <div className="font-extrabold text-lg text-gray-900">Davko Werk</div>
            <div className="text-xs text-gray-500">Hydraulik ZZP</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className={`p-2 rounded-lg transition-all ${
                  i18n.language === lng.code ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                title={lng.name}
              >
                {/* Tutaj nic nie zmieniamy w JSX, bo dane są już poprawione w tablicy 'languages' */}
                <img src={lng.flag} alt={lng.name} className="w-6 h-6 rounded-sm" />
              </button>
            ))}
          </div>

          <a
            href="tel:+31647210802"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow bg-yellow-400 text-gray-900"
          >
            <Phone className="w-4 h-4" />
            {t('hero.callNow')}
          </a>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 px-3 rounded-md hover:bg-gray-100 font-medium text-left"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  className={`p-2 rounded-lg transition-all ${
                    i18n.language === lng.code ? 'bg-blue-100' : 'hover:bg-gray-100'
                  }`}
                >
                  <img src={lng.flag} alt={lng.name} className="w-6 h-6 rounded-sm" />
                </button>
              ))}
            </div>
            <a
              href="tel:+31647210802"
              className="mt-2 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-yellow-400 font-bold justify-center"
            >
              <Phone className="w-4 h-4" />
              {t('hero.callNow')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}