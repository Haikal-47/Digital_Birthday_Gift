import NextButton from './NextButton';

export default function SlideFlowers({ onNext, isExiting }) {
  return (
    <div className={`slide slide-flowers ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <h2 className="flowers-title">Beautiful Flowers</h2>

      <div className="flowers-content">
        <div className="flowers-image-side">
          <img
            src="/spring_flowers.jpg"
            alt="Spring Flowers Bouquet"
            className="flowers-img"
          />
        </div>

        <div className="flowers-card-side">
          <div className="flowers-card">
            <img 
              src="/nailong_flower.png" 
              alt="Nailong Bawa Bunga" 
              className="nailong-doll nailong-top-left" 
              style={{ animationName: 'nailongBobFlower' }}
              title="Bunga mawar spesial buat yang paling cantik! 🌹🥰"
            />
            <p className="flowers-card-text">
              Katanya bunga itu simbol ketulusan dan keindahan, makanya pas banget buat 
              mewakili perasaan aku ke kamu. 🌹
            </p>
            <br />
            <p className="flowers-card-text">
              Maaf ya cuma bisa kirim bunga dulu, belum bisa kirim diriku sendiri buat 
              langsung meluk kamu hari ini. 🤗
            </p>
            <br />
            <p className="flowers-card-text">
              Jangan lupa ditaruh di tempat yang sering kamu lihat, biar tiap kali 
              ngeliat bunga ini kamu ingat kalau ada orang di jauh sana yang sayang 
              banget sama kamu. 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
