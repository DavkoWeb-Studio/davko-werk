import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Importuj WSZYSTKIE obrazy projektów
// Project 1
import project1_1 from '/project1/1.jpg';
import project1_2 from '/project1/2.jpg';
import project1_3 from '/project1/3.jpg';
import project1_4 from '/project1/4.jpg';
import project1_5 from '/project1/5.jpg';
import project1_6 from '/project1/6.jpg';

// Project 2
import project2_1 from '/project2/1.jpg';
import project2_2 from '/project2/2.jpg';
import project2_3 from '/project2/3.jpg';
import project2_4 from '/project2/4.jpg';
import project2_5 from '/project2/5.jpg';
import project2_6 from '/project2/6.jpg';
import project2_7 from '/project2/7.jpg';
import project2_8 from '/project2/8.jpg';

// Project 3
import project3_1 from '/project3/1.jpg';
import project3_2 from '/project3/2.jpg';
import project3_3 from '/project3/3.jpg';

// Project 4
import project4_1 from '/project4/1.jpg';
import project4_2 from '/project4/2.jpg';
import project4_3 from '/project4/3.jpg';
import project4_4 from '/project4/4.jpg';
import project4_5 from '/project4/5.jpg';
import project4_6 from '/project4/6.jpg';

const GalleryCarousel = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Projekty z tłumaczeniami - ZMIENIONE: użyj zaimportowanych zmiennych
  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      date: '25.11.2025',
      duration: '2 × 45 min',
      specs: t('projects.project1.specs'),
      images: [
        { id: 1, src: project1_1, alt: t('projects.project1.images.0') },
        { id: 2, src: project1_2, alt: t('projects.project1.images.1') },
        { id: 3, src: project1_3, alt: t('projects.project1.images.2') },
        { id: 4, src: project1_4, alt: t('projects.project1.images.3') },
        { id: 5, src: project1_5, alt: t('projects.project1.images.4') },
        { id: 6, src: project1_6, alt: t('projects.project1.images.5') },
      ]
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      date: '19.11.2025',
      duration: '2 dni',
      specs: t('projects.project2.specs'),
      images: [
        { id: 1, src: project2_1, alt: t('projects.project2.images.0') },
        { id: 2, src: project2_2, alt: t('projects.project2.images.1') },
        { id: 3, src: project2_3, alt: t('projects.project2.images.2') },
        { id: 4, src: project2_4, alt: t('projects.project2.images.3') },
        { id: 5, src: project2_5, alt: t('projects.project2.images.4') },
        { id: 6, src: project2_6, alt: t('projects.project2.images.5') },
        { id: 7, src: project2_7, alt: t('projects.project2.images.6') },
        { id: 8, src: project2_8, alt: t('projects.project2.images.7') },
      ]
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      date: '22.11.2025',
      duration: '3 godziny',
      specs: t('projects.project3.specs'),
      images: [
        { id: 1, src: project3_1, alt: t('projects.project3.images.0') },
        { id: 2, src: project3_2, alt: t('projects.project3.images.1') },
        { id: 3, src: project3_3, alt: t('projects.project3.images.2') },
      ]
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      date: '27.11.2025',
      duration: '1 dzień',
      specs: t('projects.project4.specs'),
      images: [
        { id: 1, src: project4_1, alt: t('projects.project4.images.0') },
        { id: 2, src: project4_2, alt: t('projects.project4.images.1') },
        { id: 3, src: project4_3, alt: t('projects.project4.images.2') },
        { id: 4, src: project4_4, alt: t('projects.project4.images.3') },
        { id: 5, src: project4_5, alt: t('projects.project4.images.4') },
        { id: 6, src: project4_6, alt: t('projects.project4.images.5') },
      ]
    }
  ];

  // PROSTE funkcje nawigacji
  const nextSlide = () => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      return next >= projects.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => {
      const prevSlide = prev - 1;
      return prevSlide < 0 ? projects.length - 1 : prevSlide;
    });
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < projects.length) {
      setCurrentSlide(index);
    }
  };

  const openModal = (image, index) => {
    setSelectedImage(image);
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentProject = projects[currentSlide];
    setModalImageIndex(prev => {
      const next = prev + 1;
      return next >= currentProject.images.length ? 0 : next;
    });
  };

  const prevImage = () => {
    const currentProject = projects[currentSlide];
    setModalImageIndex(prev => {
      const prevImg = prev - 1;
      return prevImg < 0 ? currentProject.images.length - 1 : prevImg;
    });
  };

  // Zamknij modal przy ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Zabezpieczenie przed nieistniejącym projektem
  if (!projects[currentSlide]) {
    console.error('Błąd: Nie znaleziono projektu dla slajdu:', currentSlide);
    setCurrentSlide(0);
    return null;
  }

  const currentProject = projects[currentSlide];

  // Funkcja do określania klasy gridu na podstawie liczby zdjęć
  const getGridClass = (imageCount) => {
    if (imageCount === 3) return "grid-cols-1 md:grid-cols-3 gap-4";
    if (imageCount === 6) return "grid-cols-2 md:grid-cols-3 gap-4";
    return "grid-cols-2 md:grid-cols-4 gap-4";
  };

  // Funkcja do tłumaczenia licznika zdjęć w modal
  const getImageCounterText = () => {
    const current = modalImageIndex + 1;
    const total = currentProject.images.length;
    
    return `${current} ${t('projects.of')} ${total}`;
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-gradient-davko">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-davkoYellow max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Karuzela */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Przyciski nawigacji */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-davkoBlue hover:bg-[#005a8c] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-davkoBlue hover:bg-[#005a8c] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Zawartość slajdu */}
            <div className="p-8">
              {/* Nagłówek projektu */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-davkoDark mb-3">
                  {currentProject.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1 bg-davkoBlue text-white px-3 py-1 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {currentProject.date}
                  </span>
                  <span className="flex items-center gap-1 bg-davkoYellow text-davkoDark px-3 py-1 rounded-full font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {currentProject.duration}
                  </span>
                </div>
                {currentProject.specs && (
                  <div className="bg-gray-100 rounded-lg p-3 inline-block border border-gray-300">
                    <span className="text-sm font-medium text-davkoDark">
                      {currentProject.specs}
                    </span>
                  </div>
                )}
              </div>

              {/* Galeria zdjęć - dynamiczny grid Z FILTRAMI */}
              <div className={`grid ${getGridClass(currentProject.images.length)} mb-12`}>
                {currentProject.images.map((image, index) => (
                  <div 
                    key={image.id} 
                    className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-gray-200 cursor-pointer"
                    onClick={() => openModal(image, index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105 saturate-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-davkoBlue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                      <span className="text-white text-sm font-medium text-center">
                        {image.alt}
                      </span>
                      <div className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2">
                        <svg className="w-5 h-5 text-davkoBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opis projektu */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-300">
                <h4 className="text-xl font-semibold text-davkoDark mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-davkoBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('projects.details')}
                </h4>
                <p className="text-davkoDark leading-relaxed text-lg">
                  {currentProject.description}
                </p>
              </div>
            </div>

            {/* Wskaźniki slajdów */}
            <div className="flex justify-center space-x-3 pb-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-davkoBlue scale-125 border-2 border-white' 
                      : 'bg-gray-300 hover:bg-davkoYellow border-2 border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Licznik */}
          <div className="text-center mt-6 text-davkoYellow text-lg font-medium bg-white/20 rounded-full py-2 px-6 inline-block">
            {t('projects.projectCounter', { 
              current: currentSlide + 1, 
              total: projects.length 
            })}
          </div>
        </div>
      </section>

      {/* Modal do powiększania zdjęć Z FILTRAMI */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-[90vh] w-full mx-4">
            {/* Przyciski nawigacji w modal */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-davkoBlue hover:bg-[#005a8c] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-davkoBlue hover:bg-[#005a8c] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Przycisk zamknięcia */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Zdjęcie w modal Z FILTRAMI */}
            <div className="flex flex-col items-center">
              <img
                src={currentProject.images[modalImageIndex].src}
                alt={currentProject.images[modalImageIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl filter brightness-95 contrast-105 saturate-110"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-medium">
                  {currentProject.images[modalImageIndex].alt}
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  {getImageCounterText()}
                </p>
              </div>
            </div>

            {/* Miniaturki na dole */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-4">
              {currentProject.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setModalImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === modalImageIndex 
                      ? 'border-davkoYellow scale-110' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover filter brightness-95 contrast-105 saturate-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCarousel;