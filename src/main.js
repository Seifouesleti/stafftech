import React, { useState } from 'react';

// Localization Content
const translations = {
  en: {
    title: 'STAFF TECH',
    tagline: 'Your Trusted Computer Repair and Spare Parts Partner in Tunisia',
    nav: {
      services: 'Services',
      spareParts: 'Spare Parts',
      bookAppointment: 'Book Appointment'
    },
    services: [
      {
        name: 'Computer Repair',
        description: 'Comprehensive diagnostic and repair services for all computer types'
      },
      {
        name: 'Hardware Upgrade',
        description: 'Upgrade your computer with the latest components and improve performance'
      },
      {
        name: 'Maintenance',
        description: 'Regular maintenance to keep your computer running smoothly'
      }
    ],
    spareParts: [
      { 
        name: 'RAM Memory', 
        description: 'High-performance RAM for faster computing',
        price: '150 TND'
      },
      { 
        name: 'SSD Hard Drive', 
        description: 'Fast and reliable solid-state drive',
        price: '300 TND'
      },
      { 
        name: 'Graphic Card', 
        description: 'High-performance graphics for gaming and design',
        price: '500 TND'
      }
    ],
    appointmentForm: {
      title: 'Book Appointment',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      service: 'Select a Service',
      date: 'Preferred Date',
      message: 'Additional Message',
      submit: 'Book Appointment'
    },
    contactInfo: {
      phone: '+216 51365295',
      email: 'mr.seifeddineouesleti@gmail.com',
      location: 'Tunisia'
    },
    footer: '© 2024 STAFF TECH. All Rights Reserved.'
  },
  fr: {
    title: 'STAFF TECH',
    tagline: 'Votre Partenaire de Réparation et Pièces Détachées pour Ordinateurs en Tunisie',
    nav: {
      services: 'Services',
      spareParts: 'Pièces Détachées',
      bookAppointment: 'Réserver un Rendez-vous'
    },
    services: [
      {
        name: 'Réparation d\'Ordinateur',
        description: 'Services complets de diagnostic et de réparation pour tous types d\'ordinateurs'
      },
      {
        name: 'Mise à Niveau du Matériel',
        description: 'Améliorez votre ordinateur avec les derniers composants et augmentez ses performances'
      },
      {
        name: 'Maintenance',
        description: 'Maintenance régulière pour maintenir votre ordinateur en parfait état'
      }
    ],
    spareParts: [
      { 
        name: 'Mémoire RAM', 
        description: 'RAM haute performance pour un calcul plus rapide',
        price: '150 TND'
      },
      { 
        name: 'Disque Dur SSD', 
        description: 'Disque solide rapide et fiable',
        price: '300 TND'
      },
      { 
        name: 'Carte Graphique', 
        description: 'Graphiques haute performance pour jeux et design',
        price: '500 TND'
      }
    ],
    appointmentForm: {
      title: 'Réserver un Rendez-vous',
      name: 'Nom',
      phone: 'Téléphone',
      email: 'Email',
      service: 'Sélectionnez un Service',
      date: 'Date Préférée',
      message: 'Message Supplémentaire',
      submit: 'Réserver'
    },
    contactInfo: {
      phone: '+216 51365295',
      email: 'mr.seifeddineouesleti@gmail.com',
      location: 'Tunisie'
    },
    footer: '© 2024 STAFF TECH. Tous droits réservés.'
  },
  ar: {
    title: 'STAFF TECH',
    tagline: 'شريكك الموثوق في إصلاح أجهزة الكمبيوتر وقطع الغيار في تونس',
    nav: {
      services: 'الخدمات',
      spareParts: 'قطع الغيار',
      bookAppointment: 'حجز موعد'
    },
    services: [
      {
        name: 'إصلاح الكمبيوتر',
        description: 'خدمات تشخيص وإصلاح شاملة لجميع أنواع أجهزة الكمبيوتر'
      },
      {
        name: 'ترقية الأجهزة',
        description: 'قم بترقية جهاز الكمبيوتر الخاص بك مع أحدث المكونات وتحسين الأداء'
      },
      {
        name: 'الصيانة',
        description: 'صيانة منتظمة للحفاظ على تشغيل جهاز الكمبيوتر بسلاسة'
      }
    ],
    spareParts: [
      { 
        name: 'ذاكرة RAM', 
        description: 'ذاكرة RAM عالية الأداء لحوسبة أسرع',
        price: '150 دينار تونسي'
      },
      { 
        name: 'محرك أقراص SSD', 
        description: 'محرك أقراص صلب سريع وموثوق',
        price: '300 دينار تونسي'
      },
      { 
        name: 'بطاقة رسومات', 
        description: 'رسومات عالية الأداء للألعاب والتصميم',
        price: '500 دينار تونسي'
      }
    ],
    appointmentForm: {
      title: 'حجز موعد',
      name: 'الاسم',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      service: 'اختر خدمة',
      date: 'التاريخ المفضل',
      message: 'رسالة إضافية',
      submit: 'حجز الموعد'
    },
    contactInfo: {
      phone: '+216 51365295',
      email: 'mr.seifeddineouesleti@gmail.com',
      location: 'تونس'
    },
    footer: '© 2024 STAFF TECH. جميع الحقوق محفوظة.'
  }
};

// SVG Icons
const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2463eb" strokeWidth="2" className="w-12 h-12">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ToolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2463eb" strokeWidth="2" className="w-12 h-12">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const StaffTechWebsite = () => {
  // Language state
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  // Appointment form state
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you soon.');
    console.log(appointmentForm);
  };

// Language Selector Component
const LanguageSelector = () => (
    <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        className={`p-2 border rounded bg-white text-black 
          ${language === 'ar' ? 'ml-4' : 'mr-4'}`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ar">🇹🇳 العربية</option>
      </select>
    </div>
  );
  
  // Navigation Section Modification
//   <nav className={`bg-blue-600 text-white p-4 shadow-md ${language === 'ar' ? 'rtl' : 'ltr'}`}>
//     <div className="container mx-auto flex justify-between items-center">
//       <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
//         <h1 className={`text-2xl font-bold ${language === 'ar' ? 'ml-8' : 'mr-8'}`}>{t.title}</h1>
//         <div className={`space-x-4 ${language === 'ar' ? 'flex flex-row-reverse' : ''}`}>
//           <a href="#services" className="hover:text-blue-200">{t.nav.services}</a>
//           <a href="#spare-parts" className="hover:text-blue-200">{t.nav.spareParts}</a>
//           <a href="#appointment" className="hover:text-blue-200">{t.nav.bookAppointment}</a>
//         </div>
//       </div>
      
//       <LanguageSelector />
//     </div>
//   </nav>
  return (
    <div 
      className={`bg-gray-50 min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`} 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Language Selector */}
      {/* <LanguageSelector /> */}
{/* Navigation */}
<nav className="bg-blue-600 text-white p-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold mr-8">{t.title}</h1>
      <div className="space-x-4">
        <a href="#services" className="hover:text-blue-200">{t.nav.services}</a>
        <a href="#spare-parts" className="hover:text-blue-200">{t.nav.spareParts}</a>
        <a href="#appointment" className="hover:text-blue-200">{t.nav.bookAppointment}</a>
      </div>
    </div>
    
    {/* Language Selector in Navigation */}
    <select 
      value={language} 
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border rounded bg-white text-black"
    >
      <option value="en">🇬🇧 English</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="ar">🇹🇳 العربية</option>
    </select>
  </div>
</nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl">{t.tagline}</p>
      </header>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.nav.services}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4"><ToolIcon /></div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spare Parts Section */}
      <section id="spare-parts" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.nav.spareParts}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.spareParts.map((part, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={`/api/placeholder/300/200?text=${encodeURIComponent(part.name)}`} 
                  alt={part.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{part.name}</h3>
                  <p className="text-gray-600 mb-2">{part.description}</p>
                  <p className="text-blue-600 font-bold">{part.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section id="appointment" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.appointmentForm.title}</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">{t.appointmentForm.name}</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border rounded"
                value={appointmentForm.name}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">{t.appointmentForm.phone}</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-2 border rounded"
                value={appointmentForm.phone}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">{t.appointmentForm.email}</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border rounded"
                value={appointmentForm.email}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">{t.appointmentForm.service}</label>
              <select
                name="service"
                required
                className="w-full p-2 border rounded"
                value={appointmentForm.service}
                onChange={handleFormChange}
              >
                <option value="">{t.appointmentForm.service}</option>
                {t.services.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">{t.appointmentForm.date}</label>
              <input
                type="date"
                name="date"
                required
                className="w-full p-2 border rounded"
                value={appointmentForm.date}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">{t.appointmentForm.message}</label>
              <textarea
                name="message"
                className="w-full p-2 border rounded"
                rows={4}
                value={appointmentForm.message}
                onChange={handleFormChange}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              {t.appointmentForm.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 text-center">
        <div className="container mx-auto">
          <div className="mb-4">
            <p>{t.contactInfo.phone}</p>
            <p>{t.contactInfo.email}</p>
            <p>{t.contactInfo.location}</p>
          </div>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default StaffTechWebsite;

