import { useState, useRef } from 'react';
import NextButton from './NextButton';

const MEMORY_PHOTOS = [
  { src: '/2.jpeg', alt: 'Memory 1', caption: 'Senyum Manis Kesayangan 🥰' },
  { src: '/3.jpeg', alt: 'Memory 2', caption: 'Bidadari Cantikku ✨' },
  { src: '/4.jpeg', alt: 'Memory 3', caption: 'Paling Imut Sedunia 🌸' },
  { src: '/5.jpeg', alt: 'Memory 4', caption: 'Tatapan Paling Hangat 💖' },
  { src: '/8.jpeg', alt: 'Memory 5', caption: 'Gemas Banget Kamu 🎀' },
  { src: '/9.jpeg', alt: 'Memory 6', caption: 'Selalu Bikin Jatuh Cinta 🌷' },
  { src: '/10.jpeg', alt: 'Memory 7', caption: 'Cantik Natural Apa Adanya 💫' },
  { src: '/11.jpeg', alt: 'Memory 8', caption: 'Pelipur Lara Hatiku 💕' },
  { src: '/WhatsApp Image 2026-10-06 at 17.53.46.jpeg', alt: 'Memory 9', caption: 'Bidadariku yang Rajin 📚💖' },
];

export default function SlideAge({ onNext, isExiting }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % MEMORY_PHOTOS.length);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + MEMORY_PHOTOS.length) % MEMORY_PHOTOS.length);
  };

  return (
    <div className={`slide slide-age ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <div className="age-content">
        <div className="age-badge">🎉 October 29th, 2026</div>

        <h2 className="age-title">Happy Birthday My Favorite Person!</h2>

        <div className="age-centerpiece">
          <div className="age-number-container">
            <div className="age-number-glow" />
            <div className="age-number">19</div>
          </div>

          <img
            src="/birthday_cake_19.jpg"
            alt="Birthday Cake 19"
            className="age-cake-img"
          />
        </div>

        {/* Gallery Section Header & View Switcher */}
        <div className="age-gallery-header">
          <span className="age-gallery-title">✨ My Beautiful Girl ✨</span>

          <div className="age-view-toggle">
            <button
              className={`view-toggle-btn ${viewMode === 'carousel' ? 'active' : ''}`}
              onClick={() => setViewMode('carousel')}
              title="Tampilan Geser Foto Besar"
            >
              🎠 Geser
            </button>
            <button
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Tampilan Grid Semua Foto"
            >
              📸 Grid
            </button>
          </div>
        </div>

        {/* Mode 1: Large Swipeable Polaroid Carousel (Touch-friendly & Big on Mobile) */}
        {viewMode === 'carousel' ? (
          <div className="carousel-outer-wrapper">
            <button
              className="carousel-arrow-btn left"
              onClick={() => scrollSlider('left')}
              aria-label="Previous photos"
            >
              ‹
            </button>

            <div className="age-carousel-track" ref={sliderRef}>
              {MEMORY_PHOTOS.map((photo, index) => (
                <div
                  key={index}
                  className="age-polaroid-card"
                  onClick={() => setSelectedIndex(index)}
                  title="Klik untuk perbesar foto 🥰"
                >
                  <div className="polaroid-img-wrapper">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="polaroid-photo"
                      loading="lazy"
                    />
                  </div>
                  <span className="polaroid-caption">{photo.caption}</span>
                </div>
              ))}
            </div>

            <button
              className="carousel-arrow-btn right"
              onClick={() => scrollSlider('right')}
              aria-label="Next photos"
            >
              ›
            </button>
          </div>
        ) : (
          /* Mode 2: 3-Column Responsive Grid with Large Photos */
          <div className="age-grid-gallery">
            {MEMORY_PHOTOS.map((photo, index) => (
              <div
                key={index}
                className="grid-photo-card"
                onClick={() => setSelectedIndex(index)}
                title="Klik untuk perbesar foto 🥰"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="grid-photo-img"
                  loading="lazy"
                />
                <span className="grid-photo-tag">{photo.caption}</span>
              </div>
            ))}
          </div>
        )}

        <p className="age-hint-text">
          💡 <em>Ketuk foto mana saja untuk melihat ukuran penuh & pesan spesial!</em>
        </p>
      </div>

      {/* Lightbox Modal with Next/Prev Photo Navigation */}
      {selectedIndex !== null && (
        <div className="alert-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="photo-modal-large" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="modal-body">
              <button
                className="modal-nav-btn left"
                onClick={handlePrevPhoto}
                title="Foto sebelumnya"
              >
                ‹
              </button>

              <div className="modal-img-container">
                <img
                  src={MEMORY_PHOTOS[selectedIndex].src}
                  alt={MEMORY_PHOTOS[selectedIndex].alt}
                  className="photo-modal-img"
                />
              </div>

              <button
                className="modal-nav-btn right"
                onClick={handleNextPhoto}
                title="Foto selanjutnya"
              >
                ›
              </button>
            </div>

            <p className="photo-modal-caption">
              {MEMORY_PHOTOS[selectedIndex].caption}
            </p>
            <span className="photo-modal-counter">
              {selectedIndex + 1} / {MEMORY_PHOTOS.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
