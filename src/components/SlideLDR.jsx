import NextButton from './NextButton';

export default function SlideLDR({ onNext, isExiting }) {
  return (
    <div className={`slide slide-ldr ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <div className="ldr-content">
        <div className="ldr-route-header">
          <div className="ldr-city">
            <img src="/Asep.jpeg" alt="Bogor" className="ldr-city-photo" />
            <span className="ldr-city-name">Bogor</span>
          </div>

          <div className="ldr-route-line">
            <div className="ldr-route-dashes">
              <span className="ldr-dash" />
              <span className="ldr-dash" />
              <span className="ldr-dash" />
              <span className="ldr-dash" />
            </div>
            <span className="ldr-plane">✈️</span>
            <div className="ldr-route-dashes">
              <span className="ldr-dash" />
              <span className="ldr-dash" />
              <span className="ldr-dash" />
              <span className="ldr-dash" />
            </div>
          </div>

          <div className="ldr-city">
            <img src="/3.jpeg" alt="Medan" className="ldr-city-photo" />
            <span className="ldr-city-name">Medan</span>
          </div>
        </div>

        <h3 className="ldr-header">Jarak Memisahkan, Cinta Menyatukan 💕</h3>

        <div className="ldr-card">
          <p className="ldr-card-text">
            Meskipun jarak dan perbedaan zona waktu sering kali membatasi kita untuk
            merayakan hari spesial ini secara langsung, rasa sayang dan doaku selalu
            sampai untukmu tanpa berkurang sedikit pun.
          </p>
          <br />
          <p className="ldr-card-text">
            Selamat ulang tahun; terima kasih sudah terus bertahan, saling percaya,
            dan membuktikan bahwa ruang yang membentang di antara kita tidak pernah
            cukup jauh untuk menandingi eratnya hubungan kita. 💖
          </p>
        </div>
      </div>
    </div>
  );
}
