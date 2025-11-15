// src/components/Header.jsx

import React, { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const navLinks = [
  { label: 'Start', href: '#start' }, // Zmienione z #home na #start
  { label: 'Usługi', href: '#usługi' }, // Zmienione z #services na #usługi
  { label: 'O mnie', href: '#o-mnie' }, // Zmienione z #about na #o-mnie
  { label: 'Kontakt', href: '#kontakt' } // Zmienione z #contact na #kontakt
];

export default function Header({ compact = false }) {
  const [open, setOpen] = useState(false);
  
  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${compact ? 'py-2' : 'py-4'} bg-white/80 backdrop-blur-sm border-b border-gray-200`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#start" className="flex items-center gap-3 no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white border border-gray-200/80">
            <img src={logoImg} alt="Logo Davko" className="w-8 h-8 object-contain" />
          </div>
          <div className="hidden sm:block">
            <div className="font-extrabold text-lg text-gray-900">Davko Werk</div>
            <div className="text-xs text-gray-500">Hydraulik ZZP</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* POPRAWIONY LINK TELEFONU */}
          <a 
            href="tel:+31612345678" 
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow bg-yellow-400 text-gray-900"
          >
            <Phone className="w-4 h-4" /> 
            Zadzwoń
          </a>

          <button 
            aria-expanded={open} 
            onClick={() => setOpen(v => !v)} 
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-gray-100 font-medium"
              >
                {link.label}
              </a>
            ))}
            {/* POPRAWIONY LINK TELEFONU W MENU MOBILNYM */}
            <a 
              href="tel:+31612345678" 
              className="mt-2 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-yellow-400 font-bold justify-center"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń teraz
            </a>
          </div>
        </div>
      )}
    </header>
  );
}