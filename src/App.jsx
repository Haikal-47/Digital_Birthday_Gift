import { useState, useCallback } from 'react';
import './index.css';
import FloatingHearts from './components/FloatingHearts';
import ProgressDots from './components/ProgressDots';
import SlideCover from './components/SlideCover';
import SlideGatekeeper from './components/SlideGatekeeper';
import SlideAge from './components/SlideAge';
import SlideMessage from './components/SlideMessage';
import SlideLDR from './components/SlideLDR';
import SlideSpecial from './components/SlideSpecial';
import SlideLove from './components/SlideLove';
import SlideFlowers from './components/SlideFlowers';
import SlideWish from './components/SlideWish';
import MusicPlayer from './components/MusicPlayer';

const TOTAL_SLIDES = 9;

const TRANSITION_EFFECTS = [
  'effect-fade-zoom',    // Fade + Zoom (lembut, romantis)
  'effect-slide-left',   // Slide halus dari kanan ke kiri (lembar album foto)
  'effect-blur-clear',   // Dari blur dreamy menjadi jernih berkilau
  'effect-ken-burns',    // Ken Burns slow cinematic zoom & pan
  'effect-soft-scale',   // Soft scale dengan sentuhan rotasi mikro elegan
  'effect-slide-right',  // Slide lembut arah sebaliknya
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [unlockedSlide, setUnlockedSlide] = useState(1); // Can navigate up to this slide
  const [activeEffect, setActiveEffect] = useState(TRANSITION_EFFECTS[0]);

  const transitionTo = useCallback((targetSlide) => {
    if (isTransitioning) return;

    // Tentukan variasi efek transisi berdasarkan arah dan slide tujuan
    const isBackward = targetSlide < currentSlide;
    const effect = isBackward
      ? 'effect-slide-right'
      : TRANSITION_EFFECTS[targetSlide % TRANSITION_EFFECTS.length];

    setActiveEffect(effect);
    setIsTransitioning(true);

    // Durasi transisi halus 850ms (keluar perlahan), lalu slide baru masuk secara sinematik
    setTimeout(() => {
      setCurrentSlide(targetSlide);
      setUnlockedSlide(prev => Math.max(prev, targetSlide));
      setIsTransitioning(false);
    }, 850);
  }, [isTransitioning, currentSlide]);

  const goToSlide = useCallback((slideIndex) => {
    if (isTransitioning || slideIndex === currentSlide) return;
    if (slideIndex <= unlockedSlide) {
      transitionTo(slideIndex);
    }
  }, [isTransitioning, currentSlide, unlockedSlide, transitionTo]);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    if (currentSlide < TOTAL_SLIDES - 1) {
      const nextSlide = currentSlide + 1;
      transitionTo(nextSlide);
    }
  }, [isTransitioning, currentSlide, transitionTo]);

  const handleGatekeeperSuccess = useCallback(() => {
    setTimeout(() => {
      transitionTo(2);
    }, 600);
  }, [transitionTo]);

  const renderSlide = () => {
    const props = {
      onNext: goNext,
      isExiting: isTransitioning,
    };

    switch (currentSlide) {
      case 0: return <SlideCover {...props} />;
      case 1: return <SlideGatekeeper {...props} onSuccess={handleGatekeeperSuccess} />;
      case 2: return <SlideAge {...props} />;
      case 3: return <SlideMessage {...props} />;
      case 4: return <SlideLDR {...props} />;
      case 5: return <SlideSpecial {...props} />;
      case 6: return <SlideLove {...props} />;
      case 7: return <SlideFlowers {...props} />;
      case 8: return <SlideWish {...props} />;
      default: return <SlideCover {...props} />;
    }
  };

  return (
    <div className="app-container">
      <FloatingHearts />
      <MusicPlayer />
      {currentSlide > 1 && (
        <ProgressDots 
          total={TOTAL_SLIDES - 2} 
          current={currentSlide - 2} 
          onDotClick={(i) => goToSlide(i + 2)}
          maxUnlocked={unlockedSlide - 2}
        />
      )}
      <div 
        className={`slide-wrapper ${activeEffect} ${isTransitioning ? 'transitioning' : ''}`} 
        key={`${currentSlide}-${activeEffect}`}
      >
        {renderSlide()}
      </div>
    </div>
  );
}

export default App;
