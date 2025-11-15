import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Imię jest wymagane';
    if (!form.email.trim()) newErrors.email = 'Email jest wymagany';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Nieprawidłowy email';
    }
    if (!form.message.trim()) newErrors.message = 'Wiadomość jest wymagana';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSending(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      alert('Wiadomość wysłana! Odpowiem w ciągu 24h.');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      alert('Błąd wysyłki — spróbuj ponownie lub zadzwoń.');
    } finally {
      setSending(false);
    }
  };

  return (
    // ZMIANA: Ciemne tło sekcji
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ZMIANA: Panel kontaktowy w stylu "glassmorphism" */}
        <div className="lg:col-span-1 rounded-3xl p-8 bg-white/5 backdrop-blur-md shadow-2xl border-2 border-white/10">
          <div className="mb-8">
            <h3 className="font-extrabold text-3xl text-white">Davko Werk</h3>
            <div className="text-lg font-semibold text-blue-400 mt-2">Hydraulik ZZP</div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10 shadow-md">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400">Telefon</div>
                <a href="tel:+31647210802" className="font-extrabold text-lg text-white hover:text-yellow-400 transition-colors">
                  +31 647 210 802
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10 shadow-md">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400">Email</div>
                <a href="mailto:davkowerk@gmail.com" className="font-extrabold text-lg text-white hover:text-yellow-400 transition-colors break-all">
                  davkowerk@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10 shadow-md">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400">Obszar działania</div>
                <div className="font-extrabold text-lg text-white">Den Haag i okolice</div>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-white/10 shadow-md">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-bold text-gray-400">Godziny pracy</div>
                  <div className="font-extrabold text-lg text-white">Pon–Pt: 7:00–16:00</div>
                  <div className="text-base font-bold text-yellow-400 mt-1">
                    Elastyczne godziny dla firm
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-yellow-400 shadow-lg mt-6">
              <div className="text-sm font-bold text-gray-800">Języki komunikacji:</div>
              {/* POPRAWIONY UKŁAD JĘZYKÓW */}
              <div className="font-black text-xl text-gray-900 mt-1 flex flex-col">
                <span>🇳🇱 Nederlands</span>
                <span>🇵🇱 Polski</span>
                <span>🇬🇧 English</span>
              </div>
            </div>
          </div>
        </div>

        {/* ZMIANA: Formularz w stylu "glassmorphism" */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/10">
          <h2 className="text-3xl font-extrabold mb-4 text-white">Wyślij zapytanie</h2>
          <h3 className="text-lg font-bold text-gray-300 mb-6">
            Opisz krótko zlecenie — odpowiem z wyceną. Mogę też rozmawiać po holendersku.
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label className="text-base font-bold text-gray-300">Imię i nazwisko / Naam *</label>
              <input 
                value={form.name} 
                onChange={handleChange('name')}
                className={`mt-2 w-full p-4 rounded-xl border-2 text-base text-white font-medium bg-white/5 ${
                  errors.name ? 'border-red-500/50' : 'border-white/10'
                } focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors`}
                placeholder="Jan Kowalski"
              />
              {errors.name && <p className="text-red-400 text-sm font-semibold mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-base font-bold text-gray-300">Email *</label>
              <input 
                value={form.email} 
                onChange={handleChange('email')} 
                type="email"
                className={`mt-2 w-full p-4 rounded-xl border-2 text-base text-white font-medium bg-white/5 ${
                  errors.email ? 'border-red-500/50' : 'border-white/10'
                } focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors`}
                placeholder="jan@example.com"
              />
              {errors.email && <p className="text-red-400 text-sm font-semibold mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-base font-bold text-gray-300">Telefon / Telefoon</label>
              <input 
                value={form.phone} 
                onChange={handleChange('phone')}
                type="tel"
                className="mt-2 w-full p-4 rounded-xl border-2 border-white/10 text-base text-white font-medium bg-white/5 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                placeholder="+31 6 123 456 78"
              />
            </div>

            <div>
              <label className="text-base font-bold text-gray-300">Rodzaj usługi / Dienst</label>
              <select 
                value={form.service} 
                onChange={handleChange('service')}
                className="mt-2 w-full p-4 rounded-xl border-2 border-white/10 text-base text-white font-medium bg-gray-800 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
              >
                <option value="">Wybierz...</option>
                <option>Instalacja / Installatie</option>
                <option>Renowacja / Renovatie</option>
                <option>Współpraca B2B / Samenwerking</option>
                <option>Inne / Anders</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label className="text-base font-bold text-gray-300">Opis zlecenia / Omschrijving *</label>
              <textarea 
                value={form.message} 
                onChange={handleChange('message')}
                rows={6}
                className={`mt-2 w-full p-4 rounded-xl border-2 text-base text-white font-medium bg-white/5 ${
                  errors.message ? 'border-red-500/50' : 'border-white/10'
                } focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors resize-none`}
                placeholder="Opisz czego potrzebujesz... / Beschrijf wat u nodig heeft..."
              />
              {errors.message && <p className="text-red-400 text-sm font-semibold mt-1">{errors.message}</p>}
            </div>

            <div className="lg:col-span-2 flex items-center gap-4 flex-wrap">
              <button 
                type="submit" 
                disabled={sending}
                className={`px-8 py-4 rounded-full font-extrabold text-lg shadow-xl transition-all ${
                  sending 
                    ? 'bg-gray-600 cursor-not-allowed text-gray-400' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-2xl'
                }`}
              >
                {sending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
              <span className="text-base font-semibold text-gray-400">
                Odpowiem w ciągu 24h w języku polskim lub holenderskim.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}