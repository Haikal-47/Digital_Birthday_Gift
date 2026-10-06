import { useState, useCallback, useEffect } from 'react';

const CONFETTI_COLORS = [
  '#6B1D2A', '#F5C6D0', '#C9A961', '#8B6F4E', '#800020',
  '#E8D5A3', '#C4917B', '#FFD700', '#FF69B4', '#FFF9F2'
];

function createConfettiPieces(count = 60) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    width: `${6 + Math.random() * 10}px`,
    height: `${6 + Math.random() * 10}px`,
    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
    animationDuration: `${2 + Math.random() * 3}s`,
    animationDelay: `${Math.random() * 0.8}s`,
    rotation: `${Math.random() * 360}deg`,
  }));
}

export default function SlideWish() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  const handleBlowCandles = useCallback(() => {
    if (candlesBlown) return;
    setCandlesBlown(true);

    // Trigger confetti
    setTimeout(() => {
      setShowConfetti(true);
      setConfettiPieces(createConfettiPieces(80));
    }, 500);

    // Clear confetti after animation
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }, [candlesBlown]);

  const handleWhatsApp = useCallback(() => {
    const message = encodeURIComponent(
      'Terima kasih untuk hadiah digitalnya, Sayang! 🥰💕 Aku sangat terharu!'
    );
    window.open(`https://wa.me/6285894727971?text=${message}`, '_blank');
  }, []);

  // Sparkle effect on mouse move (desktop)
  useEffect(() => {
    if (!candlesBlown) return;

    const handleMouseMove = (e) => {
      if (Math.random() > 0.85) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
        };
        setSparkles(prev => [...prev.slice(-15), newSparkle]);
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [candlesBlown]);

  return (
    <div className="slide slide-wish">
      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="confetti-piece"
              style={{
                left: piece.left,
                backgroundColor: piece.backgroundColor,
                width: piece.width,
                height: piece.height,
                borderRadius: piece.borderRadius,
                animationDuration: piece.animationDuration,
                animationDelay: piece.animationDelay,
              }}
            />
          ))}
        </div>
      )}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{ left: sparkle.x, top: sparkle.y }}
        />
      ))}

      <div className="wish-content">
        <img
          src="/make_a_wish.jpg"
          alt="Make a Wish"
          className="wish-img"
        />

        <h2 className="wish-title">Make a Wish</h2>
        <p className="wish-subtitle">Happy Birthday, Sayangku! 🎂</p>

        {/* Animated Candles */}
        <div className="candle-container">
          {[0, 1, 2].map((i) => (
            <div key={i} className="candle">
              <div className={`candle-flame ${candlesBlown ? 'blown' : ''}`} />
              <div className="candle-stick" />
            </div>
          ))}
        </div>

        <div className="wish-actions">
          <button
            className="wish-btn wish-btn-primary"
            onClick={handleBlowCandles}
            id="btn-blow-candles"
          >
            {candlesBlown ? '🎉 Selamat Ulang Tahun!' : '🕯️ Tiup Lilin'}
          </button>

          <button
            className="wish-btn wish-btn-secondary"
            onClick={handleWhatsApp}
            id="btn-whatsapp-reply"
          >
            💬 Kirim Pesan Balasan
          </button>
        </div>

        {candlesBlown && (
          <p style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--maroon)',
            marginTop: 'var(--space-md)',
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}>
            Semoga semua mimpi dan harapanmu terwujud! ✨💕
          </p>
        )}
      </div>
    </div>
  );
}
