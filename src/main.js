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
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1563/innergigabyteimages/mainpage.jpg"
      },
      { 
        name: 'SSD Hard Drive', 
        description: 'Fast and reliable solid-state drive',
        img: "data:image/jpeg;base64,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"
      },
      { 
        name: 'Graphic Card', 
        description: 'High-performance graphics for gaming and design',
        img: "https://skymil-informatique.com/27613-large_default/gigabyte-rtx-4090-gaming-24g.jpg"
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
        img: '150 TND'
      },
      { 
        name: 'Disque Dur SSD', 
        description: 'Disque solide rapide et fiable',
        img: '300 TND'
      },
      { 
        name: 'Carte Graphique', 
        description: 'Graphiques haute performance pour jeux et design',
        img: '500 TND'
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
        img: '150 دينار تونسي'
      },
      { 
        name: 'محرك أقراص SSD', 
        description: 'محرك أقراص صلب سريع وموثوق',
        img: '300 دينار تونسي'
      },
      { 
        name: 'بطاقة رسومات', 
        description: 'رسومات عالية الأداء للألعاب والتصميم',
        img: '500 دينار تونسي'
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
                  src={(part.img)} 
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

