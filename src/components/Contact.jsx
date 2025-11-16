import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = t('contact.validation.name');
    if (!form.email.trim()) newErrors.email = t('contact.validation.email');
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }
    if (!form.message.trim()) newErrors.message = t('contact.validation.message');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSending(true);

    try {
      const formData = new FormData();
      formData.append('access_key', 'b2e7425d-7a1b-44fc-96ae-c5740430ac4f');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('service', form.service);
      formData.append('message', form.message);
      formData.append('subject', 'Nowa wiadomość z formularza kontaktowego');
      formData.append('from_name', 'Dawid Web Studio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        console.error(result);
        alert('Wystąpił błąd podczas wysyłki formularza.');
      }
    } catch (err) {
      console.error(err);
      alert('Nie udało się wysłać formularza. Spróbuj ponownie.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Panel kontaktowy */}
        <div className="lg:col-span-1 rounded-3xl p-8 bg-white/5 backdrop-blur-md shadow-2xl border-2 border-white/10">
          <div className="mb-8">
            <h3 className="font-extrabold text-3xl text-white">{t('contact.company')}</h3>
            <div className="text-lg font-semibold text-blue-400 mt-2">{t('contact.position')}</div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/10 shadow-md">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400">{t('contact.phone')}</div>
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
                <div className="text-sm font-bold text-gray-400">{t('contact.email')}</div>
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
                <div className="text-sm font-bold text-gray-400">{t('contact.area')}</div>
                <div className="font-extrabold text-lg text-white">{t('contact.areaValue')}</div>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-white/10 shadow-md">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-bold text-gray-400">{t('contact.hours')}</div>
                  <div className="font-extrabold text-lg text-white">{t('contact.workHours')}</div>
                  <div className="text-base font-bold text-yellow-400 mt-1">
                    {t('contact.flexible')}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-yellow-400 shadow-lg mt-6">
              <div className="text-sm font-bold text-gray-800">{t('contact.languages')}</div>
              <div className="font-black text-xl text-gray-900 mt-1 flex flex-col">
                <span>🇳🇱 Dutch</span>
                <span>🇵🇱 Pools </span>
                <span>🇬🇧 Engels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formularz */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-white/10">
          <h2 className="text-3xl font-extrabold mb-4 text-white">{t('contact.title')}</h2>
          <h3 className="text-lg font-bold text-gray-300 mb-6">{t('contact.subtitle')}</h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label className="text-base font-bold text-gray-300">{t('contact.form.name')}</label>
              <input 
                value={form.name} 
                name="name"
                onChange={handleChange('name')}
                className={`mt-2 w-full p-4 rounded-xl border-2 text-base text-white font-medium bg-white/5 ${
                  errors.name ? 'border-red-500/50' : 'border-white/10'
                } focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors`}
                placeholder={t('contact.form.namePlaceholder')}
              />
              {errors.name && <p className="text-red-400 text-sm font-semibold mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-base font-bold text-gray-300">{t('contact.form.email')}</label>
              <input 
                value={form.email} 
                name="email"
                onChange={handleChange('email')} 
                type="email"
                className={`mt-2 w-full p-4 rounded-xl border-2 text-base text-white font-medium bg-white/5 ${
                  errors.email ? 'border-red-500/50' : 'border-white/10'
                } focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors`}
                placeholder={t('contact.form.emailPlaceholder')}
              />
              {errors.email && <p className="text-red-400 text-sm font-semibold mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-base font-bold text-gray-300">{t('contact.form.phone')}</label>
              <input 
                value={form.phone} 
                name="phone"
                onChange={handleChange('phone')}
                type="tel"
                className="mt-2 w-full p-4 rounded-xl border-2 border-white/10 text-base text-white font-medium bg-white/5 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
                placeholder={t('contact.form.phonePlaceholder')}
              />
            </div>

            <div>
              <label className="text-base font-bold text-gray-300">{t('contact.form.service')}</label>
              <select 
                value={form.service} 
                name="service"
                onChange={handleChange('service')}
                className="mt-2 w-full p-4 rounded-xl border-2 border-white/10 text-base text-white font-medium bg-gray-800 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors"
              >
                <option value="">{t('contact.form.servicePlaceholder')}</option>
                <option value="installation">{t('contact.form.serviceOptions.installation')}</option>
                <option value="renovation">{t('contact.form.serviceOptions.renovation')}</option>
                <option value="b2b">{t('contact.form.serviceOptions.b2b')}</option>
                <option value="other">{t('contact.form.serviceOptions.other')}</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label className="text-base font-bold text-gray-300">{t('contact.form.message')}</label>
              <textarea 
                value={form.message} 
                name="message"
                onChange={handleChange('message')}
                rows={6}
                className={`mt-2 w-full p-4 rounded-xl border-2 text-base text-white font-medium bg-white/5 ${
                  errors.message ? 'border-red-500/50' : 'border-white/10'
                } focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors resize-none`}
                placeholder={t('contact.form.messagePlaceholder')}
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
                {sending ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
              {sent && (
                <span className="text-base font-semibold text-green-400">
                  {t('contact.form.successMessage')}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
