import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Start', href: '#start' },
    { label: 'Usługi', href: '#usługi' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'O mnie', href: '#o-mnie' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
              <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="font-extrabold">Davko Werk</div>
              <div className="text-sm text-gray-300">Hydraulik ZZP - Podwykonawca</div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            5+ lat doświadczenia w Holandii. Współpracuję z firmami hydraulicznymi jako podwykonawca. 
            Rozmawiam po holendersku i polsku.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-yellow-400">Nawigacja</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-yellow-400">Kontakt</h4>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400" />
              <a href="tel:+31612345678" className="text-gray-300 hover:text-white transition-colors">
                +31 6 123 456 78
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:davko.werk@example.com" className="text-gray-300 hover:text-white transition-colors">
                davko.werk@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">Den Haag i okolice</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <span className="text-xs text-gray-400">Języki:</span>
              <div className="text-sm text-gray-300 font-semibold">Nederlands • Polski</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 border-t border-gray-700 pt-6 flex items-center justify-between flex-wrap gap-4">
        <div className="text-sm text-gray-400">
          © {currentYear} Davko Werk. Wszystkie prawa zastrzeżone.
        </div>
        <button 
          onClick={scrollToTop}
          className="p-2 rounded-md bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors"
          aria-label="Przewiń do góry"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;