export default function ProgressDots({ total, current, onDotClick, maxUnlocked }) {
  return (
    <div className="progress-dots">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`progress-dot ${i === current ? 'active' : ''}`}
          onClick={() => i <= maxUnlocked && onDotClick(i)}
          style={{ cursor: i <= maxUnlocked ? 'pointer' : 'default', opacity: i <= maxUnlocked ? undefined : 0.2 }}
          title={`Slide ${i + 3}`}
        />
      ))}
    </div>
  );
}
