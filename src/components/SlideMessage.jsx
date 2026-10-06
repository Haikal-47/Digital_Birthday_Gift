import NextButton from './NextButton';

export default function SlideMessage({ onNext, isExiting }) {
  return (
    <div className={`slide slide-message ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <div className="message-layout">
        <div className="message-photo-side">
          <div className="polaroid">
            <div className="polaroid-clip" />
            <img src="/WhatsApp Image 2026-10-06 at 15.24.23.jpeg" alt="Our moment together" />
          </div>
        </div>

        <div className="message-card-side">
          <div className="message-card">
            <h3 className="message-card-header">Happy Birthday</h3>
            <div className="message-card-text">
              <p>Selamat ulang tahun, Sayang!! 🎂🎉</p>
              <br />
              <p>
                Di hari yang luar biasa ini, aku cuma mau bilang terima kasih banyak 
                karena kamu sudah lahir ke dunia dan menjadi bagian paling indah dalam 
                hidupku. Terima kasih sudah memilihku untuk berjalan di sampingmu, 
                melewati hari-hari yang menyenangkan maupun yang menantang.
              </p>
              <br />
              <p>
                Bersamamu, aku belajar banyak hal tentang arti sabar, tulus, dan berjuang. 
                Aku berharap di usiamu yang baru ini, kamu selalu diberikan kesehatan, 
                kekuatan untuk mengejar semua impianmu, dan kebahagiaan yang nggak pernah 
                putus. Ingat ya, apa pun yang terjadi di depan nanti, kamu nggak pernah 
                sendirian. Aku akan selalu ada di sini, di barisan paling depan untuk 
                mendukung dan mendoakanmu.
              </p>
              <br />
              <p>Happy birthday, my love. I love you more than words can say. 💕</p>
            </div>
            <div className="message-card-signature">— With all my love ❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
}
