import React, { useState } from "react";
import { Star } from "lucide-react";
import emailjs from "emailjs-com";

// Localization Content
const translations = {
  en: {
    title: "STAFF TECH",
    tagline: "Your Trusted Computer Repair and Spare Parts Partner in Tunisia",
    nav: {
      services: "Services",
      spareParts: "Spare Parts",
      bookAppointment: "Book Appointment",
    },
    services: [
      {
        name: "Computer Repair",
        description:
          "Comprehensive diagnostic and repair services for all computer types",
      },
      {
        name: "Hardware Upgrade",
        description:
          "Upgrade your computer with the latest components and improve performance",
      },
      {
        name: "Maintenance",
        description:
          "Regular maintenance to keep your computer running smoothly",
      },
    ],
    spareParts: [
      {
        name: "RAM Memory",
        description: "High-performance RAM for faster computing",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1563/innergigabyteimages/mainpage.jpg",
      },
      {
        name: "SSD Hard Drive",
        description: "Fast and reliable solid-state drive",
        img: "https://hardwareand.co/images/actus/stockage/gigabyte/gigabyte-ai-top-ud-ssd.webp",
      },
      {
        name: "Graphic Card",
        description: "High-performance graphics for gaming and design",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1624/innergigabyteimages/eagle/03_s.jpg",
      },
      {
        name: "Motherboard",
        description:
          "Versatile motherboard ensuring seamless compatibility and superior performance",
        img: "https://media.ldlc.com/bo/images/fiches/carte-mere/Gigabyte/x670/gigabyte_x670_gaming_x_ax.jpg",
      },
      {
        name: "Processor",
        description:
          "High-speed processor for efficient multitasking and powerful computing",
        img: "https://cdn.wccftech.com/wp-content/uploads/2024/08/Intel-AMD-CPU-Market-Share-1456x918-1.png",
      },
      {
        name: "Power Supply",
        description:
          "Reliable power supply for consistent and efficient energy delivery",
        img: "https://www.vortez.net/news_file/24319_gigabyte-ud1300gm-pg5-psu-kv.jpg",
      },
    ],
    appointmentForm: {
      title: "Book Appointment",
      name: "Name",
      phone: "Phone",
      email: "Email",
      service: "Select a Service",
      date: "Preferred Date",
      message: "Additional Message",
      submit: "Book Appointment",
    },
    contactInfo: {
      phone: "+216 51365295",
      email: "mr.seifeddineouesleti@gmail.com",
      location: "Tunisia",
    },
    footer: "© 2024 STAFF TECH. All Rights Reserved.",
  },
  fr: {
    title: "STAFF TECH",
    tagline:
      "Votre Partenaire de Réparation et Pièces Détachées pour Ordinateurs en Tunisie",
    nav: {
      services: "Services",
      spareParts: "Pièces Détachées",
      bookAppointment: "Réserver un Rendez-vous",
    },
    services: [
      {
        name: "Réparation d'Ordinateur",
        description:
          "Services complets de diagnostic et de réparation pour tous types d'ordinateurs",
      },
      {
        name: "Mise à Niveau du Matériel",
        description:
          "Améliorez votre ordinateur avec les derniers composants et augmentez ses performances",
      },
      {
        name: "Entretein",
        description:
          "Entretein régulière pour maintenir votre ordinateur en parfait état",
      },
    ],
    spareParts: [
      {
        name: "RAM Memory",
        description:
          "Mémoire RAM haute performance pour une informatique plus rapide",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1563/innergigabyteimages/mainpage.jpg",
      },
      {
        name: "SSD Hard Drive",
        description: "Disque SSD rapide et fiable",
        img: "https://hardwareand.co/images/actus/stockage/gigabyte/gigabyte-ai-top-ud-ssd.webp",
      },
      {
        name: "Graphic Card",
        description:
          "Carte graphique haute performance pour le gaming et la conception",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1624/innergigabyteimages/eagle/03_s.jpg",
      },
      {
        name: "Motherboard",
        description:
          "Carte mère polyvalente assurant une compatibilité et des performances optimales",
        img: "https://media.ldlc.com/bo/images/fiches/carte-mere/Gigabyte/x670/gigabyte_x670_gaming_x_ax.jpg",
      },
      {
        name: "Processor",
        description:
          "Processeur rapide pour un multitâche efficace et une puissance de calcul",
        img: "https://cdn.wccftech.com/wp-content/uploads/2024/08/Intel-AMD-CPU-Market-Share-1456x918-1.png",
      },
      {
        name: "Power Supply",
        description:
          "Alimentation fiable offrant une distribution d'énergie continue et efficace",
        img: "https://www.vortez.net/news_file/24319_gigabyte-ud1300gm-pg5-psu-kv.jpg",
      },
    ],
    appointmentForm: {
      title: "Réserver un Rendez-vous",
      name: "Nom",
      phone: "Téléphone",
      email: "Email",
      service: "Sélectionnez un Service",
      date: "Date Préférée",
      message: "Message Supplémentaire",
      submit: "Réserver",
    },
    contactInfo: {
      phone: "+216 51365295",
      email: "mr.seifeddineouesleti@gmail.com",
      location: "Tunisie",
    },
    footer: "© 2024 STAFF TECH. Tous droits réservés.",
  },
  ar: {
    title: "STAFF TECH",
    tagline: "شريكك الموثوق في إصلاح أجهزة الكمبيوتر وقطع الغيار في تونس",
    nav: {
      services: "الخدمات",
      spareParts: "قطع الغيار",
      bookAppointment: "حجز موعد",
    },
    services: [
      {
        name: "إصلاح الكمبيوتر",
        description: "خدمات تشخيص وإصلاح شاملة لجميع أنواع أجهزة الكمبيوتر",
      },
      {
        name: "ترقية الأجهزة",
        description:
          "قم بترقية جهاز الكمبيوتر الخاص بك مع أحدث المكونات وتحسين الأداء",
      },
      {
        name: "الصيانة",
        description: "صيانة منتظمة للحفاظ على تشغيل جهاز الكمبيوتر بسلاسة",
      },
    ],
    spareParts: [
      {
        name: "RAM Memory",
        description: "ذاكرة RAM عالية الأداء لتحسين سرعة الحوسبة",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1563/innergigabyteimages/mainpage.jpg",
      },
      {
        name: "SSD Hard Drive",
        description: "محرك أقراص SSD سريع وموثوق",
        img: "https://hardwareand.co/images/actus/stockage/gigabyte/gigabyte-ai-top-ud-ssd.webp",
      },
      {
        name: "Graphic Card",
        description: "بطاقة رسومات عالية الأداء للألعاب والتصميم",
        img: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1624/innergigabyteimages/eagle/03_s.jpg",
      },
      {
        name: "Motherboard",
        description: "لوحة أم متعددة الاستخدامات لضمان التوافق والأداء الفائق",
        img: "https://media.ldlc.com/bo/images/fiches/carte-mere/Gigabyte/x670/gigabyte_x670_gaming_x_ax.jpg",
      },
      {
        name: "Processor",
        description: "معالج عالي السرعة لتعدد المهام وكفاءة الحوسبة",
        img: "https://cdn.wccftech.com/wp-content/uploads/2024/08/Intel-AMD-CPU-Market-Share-1456x918-1.png",
      },
      {
        name: "Power Supply",
        description: "مزود طاقة موثوق يوفر توزيعًا مستمرًا وفعالًا للطاقة",
        img: "https://www.vortez.net/news_file/24319_gigabyte-ud1300gm-pg5-psu-kv.jpg",
      },
    ],
    appointmentForm: {
      title: "حجز موعد",
      name: "الاسم",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      service: "اختر خدمة",
      date: "التاريخ المفضل",
      message: "رسالة إضافية",
      submit: "حجز الموعد",
    },
    contactInfo: {
      phone: "+216 51365295",
      email: "helpstafftech@gmail.com",
      location: "تونس",
    },
    footer: "© 2024 STAFF TECH. جميع الحقوق محفوظة.",
  },
};

const reviewTranslations = {
  en: {
    reviews: {
      title: "Customer Reviews",
      addReview: "Add Your Review",
      name: "Your Name",
      comment: "Your Comment",
      submit: "Submit Review",
      averageRating: "Average Rating",
      reviews: [
        {
          name: "John D.",
          rating: 5,
          comment:
            "Excellent service! Fixed my laptop quickly and professionally.",
        },
        {
          name: "Sarah M.",
          rating: 4,
          comment: "Great spare parts and helpful staff.",
        },
      ],
    },
  },
  fr: {
    reviews: {
      title: "Avis des Clients",
      addReview: "Ajouter Votre Avis",
      name: "Votre Nom",
      comment: "Votre Commentaire",
      submit: "Soumettre l'Avis",
      averageRating: "Note Moyenne",
      reviews: [
        {
          name: "Jean D.",
          rating: 5,
          comment:
            "Service excellent ! A réparé mon ordinateur portable rapidement et professionnellement.",
        },
        {
          name: "Marie S.",
          rating: 4,
          comment: "Pièces détachées de qualité et personnel serviable.",
        },
      ],
    },
  },
  ar: {
    reviews: {
      title: "تقييمات العملاء",
      addReview: "أضف تقييمك",
      name: "اسمك",
      comment: "تعليقك",
      submit: "إرسال التقييم",
      averageRating: "التقييم المتوسط",
      reviews: [
        {
          name: "جون د.",
          rating: 5,
          comment: "خدمة ممتازة! أصلح الكمبيوتر المحمول بسرعة وبشكل احترافي.",
        },
        {
          name: "سارة م.",
          rating: 4,
          comment: "قطع غيار رائعة وطاقم عمل مساعد.",
        },
      ],
    },
  },
};
// Star Rating Component
const StarRating = ({ rating, onRatingChange, interactive = false }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 cursor-pointer 
            ${interactive ? "hover:text-yellow-500" : ""}
            ${
              star <= (hoveredRating || rating)
                ? "fill-yellow-500 text-yellow-500"
                : "text-gray-300"
            }`}
          onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
          onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
          onClick={interactive ? () => onRatingChange(star) : undefined}
        />
      ))}
    </div>
  );
};

// Reviews Section Component
const ReviewsSection = ({ language }) => {
  const t = { ...translations[language], ...reviewTranslations[language] };

  // New state for reviews and form
  const [reviews, setReviews] = useState(t.reviews.reviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0";

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle rating change
  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({
      ...prev,
      rating,
    }));
  };

  // Submit review
  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newReview.name || !newReview.rating || !newReview.comment) {
      alert("Please fill in all fields and select a rating");
      return;
    }

    // Add new review
    setReviews([...reviews, newReview]);

    // Reset form
    setNewReview({
      name: "",
      rating: 0,
      comment: "",
    });

    // Optional: You might want to send this to a backend in a real application
    alert("Thank you for your review!");
  };

  return (
    <section id="reviews" className="container mx-auto py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        {t.reviews.title}
      </h2>

      {/* Average Rating */}
      <div className="text-center mb-8">
        <p className="text-xl mb-2">{t.reviews.averageRating}</p>
        <div className="flex justify-center items-center">
          <StarRating rating={parseFloat(averageRating)} />
          <span className="ml-2 text-lg font-bold">{averageRating} / 5</span>
        </div>
      </div>

      {/* Existing Reviews */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{review.name}</h3>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-center mb-6">
          {t.reviews.addReview}
        </h3>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <label className="block mb-2">{t.reviews.name}</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              value={newReview.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Rating</label>
            <StarRating
              rating={newReview.rating}
              onRatingChange={handleRatingChange}
              interactive={true}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">{t.reviews.comment}</label>
            <textarea
              name="comment"
              className="w-full p-2 border rounded"
              rows={4}
              value={newReview.comment}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            {t.reviews.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

// SVG Icons
const ComputerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2463eb"
    strokeWidth="2"
    className="w-12 h-12"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ToolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2463eb"
    strokeWidth="2"
    className="w-12 h-12"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const StaffTechWebsite = () => {
  // Language state
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  // Appointment form state
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appointmentForm);
    emailjs
      .send(
        "service_vwu952u", // Replace with your EmailJS Service ID
        "template_6qk6rcg", // Replace with your EmailJS Template ID
        appointmentForm,
        "OhJcVjNMkMUAa_BYh" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Appointment request submitted! We will contact you soon.");
          setAppointmentForm({
            name: "",
            phone: "",
            email: "",
            service: "",
            date: "",
            message: "",
          }); // Clear the form
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error,"dddddddddddd")
        }
      );
  };

  // Language Selector Component
  const LanguageSelector = () => (
    <div
      className={`flex items-center ${
        language === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`p-2 border rounded bg-white text-black 
          ${language === "ar" ? "ml-4" : "mr-4"}`}
        dir={language === "ar" ? "rtl" : "ltr"}
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
      className={`bg-gray-50 min-h-screen ${language === "ar" ? "rtl" : "ltr"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Language Selector */}
      {/* <LanguageSelector /> */}
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-8">{t.title}</h1>
            <div className="space-x-4">
              <a href="#services" className="hover:text-blue-200">
                {t.nav.services}
              </a>
              <a href="#spare-parts" className="hover:text-blue-200">
                {t.nav.spareParts}
              </a>
              <a href="#appointment" className="hover:text-blue-200">
                {t.nav.bookAppointment}
              </a>
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
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.nav.services}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <ToolIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spare Parts Section */}
      <section id="spare-parts" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.nav.spareParts}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.spareParts.map((part, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={part.img}
                  alt={part.name}
                  className="w-full h-48 object-fill"
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
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.appointmentForm.title}
        </h2>
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
      <section id="spare-parts" className="bg-gray-100 py-16 px-4">
        <ReviewsSection language={language} />
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
