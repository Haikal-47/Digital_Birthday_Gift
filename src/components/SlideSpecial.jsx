import NextButton from './NextButton';

const REASONS = [
  {
    icon: '😊',
    title: 'Senyuman',
    text: 'Senyum dan ketawa kamu selalu jadi penyemangat terbaik pas aku lagi capek atau pusing seharian, karena kamu selalu cantik tiap hari.',
  },
  {
    icon: '💗',
    title: 'Penyayang',
    text: 'Cara kamu perhatian, nanyain kabar, dan selalu ada buat dengerin cerita aku itu berharga banget, bikin aku selalu sayang kamu tiap detik.',
  },
  {
    icon: '🤝',
    title: 'Dukungan',
    text: 'Kamu selalu percaya dan mendukung semua impianku. Selalu bikin aku merasa dihargai apa adanya. Love You Sayangkuu.',
  },
];

export default function SlideSpecial({ onNext, isExiting }) {
  return (
    <div className={`slide slide-special ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <div className="special-content">
        <h2 className="special-title">Kenapa Kamu Spesial Banget?</h2>

        <div className="special-grid">
          {REASONS.map((reason, index) => (
            <div 
              key={index} 
              className="special-card"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {index === 1 && (
                <img 
                  src="/nailong_right.png" 
                  alt="Nailong Penuh Cinta" 
                  className="nailong-doll nailong-top-center" 
                  title="Kamu paling penyayang di hatiku! 💗"
                />
              )}
              <span className="special-card-icon">{reason.icon}</span>
              <h3 className="special-card-title">{reason.title}</h3>
              <p className="special-card-text">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
