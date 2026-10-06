import NextButton from './NextButton';

export default function SlideLove({ onNext, isExiting }) {
  return (
    <div className={`slide slide-love ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <h2 className="love-title">I Love You</h2>

      <div className="love-content">
        {/* Hanging Polaroids with Cute Moving Clothespins / Clips */}
        <div className="love-gallery">
          <div className="love-hanging-item swing-1">
            <div className="hanger-pin">
              <span className="hanger-line" />
              <span className="hanger-clip">🎀</span>
            </div>
            <div className="love-polaroid">
              <img src="/2.jpeg" alt="Memory 1" />
            </div>
          </div>

          <div className="love-hanging-item swing-2">
            <div className="hanger-pin">
              <span className="hanger-line" />
              <span className="hanger-clip">💖</span>
            </div>
            <div className="love-polaroid">
              <img src="/4.jpeg" alt="Memory 2" />
            </div>
          </div>

          <div className="love-hanging-item swing-3">
            <div className="hanger-pin">
              <span className="hanger-line" />
              <span className="hanger-clip">✨</span>
            </div>
            <div className="love-polaroid">
              <img src="/5.jpeg" alt="Memory 3" />
            </div>
          </div>
        </div>

        {/* Romantic Letter Card with 2 Cute Nailong Dolls on Top Left & Right */}
        <div className="love-card">
          <img 
            src="/nailong_left.png" 
            alt="Nailong Imut Kiri" 
            className="nailong-doll nailong-left" 
            title="Nailong lagi dadah ke kamu! 👋🥰"
          />
          <img 
            src="/nailong_right.png" 
            alt="Nailong Imut Kanan" 
            className="nailong-doll nailong-right" 
            title="Nailong bawa cinta buat kamu! 💖"
          />

          <div className="love-card-text">
            <p>
              Hari ini bukan cuma tentang bertambahnya usiamu, tapi tentang merayakan 
              hadirnya kamu di dunia ini—orang yang membuat hari-hariku terasa jauh lebih 
              hangat dan bermakna. Terima kasih ya, sudah menjadi sosok yang sangat luar 
              biasa, yang selalu sabar, dan yang tak pernah lelah melengkapi kekuranganku.
            </p>
            <p>
              Walaupun saat ini ada jarak yang memisahkan kita, percaya deh, rasa sayang 
              dan doaku untukmu enggak pernah terhalang oleh kilometer apa pun. Setiap 
              detik yang kita lalui bersama, bahkan lewat layar ponsel sekalipun, selalu 
              jadi cerita favorit yang pengen aku ulang terus-terusan.
            </p>
            <p>
              Di usiamu yang baru ini, aku berdoa semoga kamu selalu dilimpahi kebahagiaan 
              yang tak terbatas, kesehatan yang prima, dan kemudahan dalam meraih 
              mimpi-mimpimu. Semoga kamu selalu dikelilingi hal-hal baik dan orang-orang 
              yang mencintaimu. Tetaplah jadi diri sendiri yang hangat dan mengagumkan 
              seperti yang aku kenal.
            </p>
            <p>
              Selamat ulang tahun, cintaku. Aku sangat bersyukur bisa berjalan menyusuri 
              waktu dan bertumbuh bersamamu. 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
