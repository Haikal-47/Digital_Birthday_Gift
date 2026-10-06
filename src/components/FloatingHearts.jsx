import { useMemo } from 'react';

export default function FloatingHearts() {
  // 1. Transparent floating hearts
  const hearts = useMemo(() => {
    const symbols = ['♡', '♥', '❤', '💕', '💗'];
    return Array.from({ length: 16 }, (_, i) => ({
      id: `heart-${i}`,
      left: `${Math.random() * 100}%`,
      duration: `${14 + Math.random() * 16}s`,
      delay: `${Math.random() * 12}s`,
      size: `${0.7 + Math.random() * 1.1}rem`,
      opacity: 0.12 + Math.random() * 0.18,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));
  }, []);

  // 2. Slow drifting flower petals (🌸)
  const petals = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: `petal-${i}`,
      left: `${Math.random() * 100}%`,
      duration: `${16 + Math.random() * 18}s`,
      delay: `${Math.random() * 14}s`,
      size: `${0.7 + Math.random() * 0.8}rem`,
      swayDuration: `${3 + Math.random() * 4}s`,
    }));
  }, []);

  // 3. Twinkling sparkles & glowing orbs (✨)
  const sparkles = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: `sparkle-${i}`,
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 90}%`,
      duration: `${2.5 + Math.random() * 3.5}s`,
      delay: `${Math.random() * 4}s`,
      size: `${8 + Math.random() * 14}px`,
    }));
  }, []);

  return (
    <div className="dreamy-decorations-container" aria-hidden="true">
      {/* Soft Moving Ambient Frame Glow */}
      <div className="ambient-frame-glow" />

      {/* Twinkling Soft Glow Sparkles */}
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="dreamy-sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDuration: sparkle.duration,
            animationDelay: sparkle.delay,
            width: sparkle.size,
            height: sparkle.size,
          }}
        />
      ))}

      {/* Floating Transparent Hearts */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
        >
          {heart.symbol}
        </span>
      ))}

      {/* Slow Drifting Flower Petals */}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="drifting-petal"
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            fontSize: petal.size,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
