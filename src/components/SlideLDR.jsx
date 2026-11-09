import { useRef } from 'react';
import NextButton from './NextButton';

export default function SlideLDR({ onNext, isExiting }) {
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    window.dispatchEvent(new Event('pause-music'));
  };

  const handleVideoPause = () => {
    window.dispatchEvent(new Event('resume-music'));
  };

  return (
    <div className={`slide slide-ldr ${isExiting ? 'slide-exit' : ''}`}>
      <div className="nav-top-right">
        <NextButton onClick={onNext} />
      </div>

      <div className="ldr-content">
        <div className="ldr-badge">
          🎬 A Special Memory For You ✨
        </div>

        <h2 className="ldr-header">Momen Indah Bersamamu 💕</h2>
        <p className="ldr-subtitle">Untuk Andiny Angelita yang selalu istimewa</p>

        <div className="ldr-media-layout">
          {/* Video Player Card */}
          <div className="ldr-video-wrapper">
            <div className="ldr-video-frame">
              <video
                ref={videoRef}
                src="/vidio1.mp4"
                controls
                playsInline
                preload="metadata"
                className="ldr-video-player"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoPause}
              />
            </div>
            <span className="ldr-video-tag">✨ Video Kenangan Kita ✨</span>
          </div>

          {/* Romantic Text Card */}
          <div className="ldr-card">
            <img 
              src="/nailong_cheer.png" 
              alt="Nailong Bahagia" 
              className="nailong-doll nailong-top-left" 
              style={{ animationName: 'nailongBobCheer' }}
              title="Selalu bahagia bersama kamu! 💖"
            />
            <p className="ldr-card-text">
              Setiap detik yang terekam di video ini adalah bukti nyata betapa berharganya 
              dan indahnya setiap momen kebersamaan kita. Walaupun jarak dan waktu kadang 
              memisahkan, rasa sayang dan rinduku padamu selalu utuh dan semakin bertambah 
              setiap harinya.
            </p>
            <br />
            <p className="ldr-card-text">
              Video kenangan ini jadi pengingat betapa bersyukurnya aku bisa memiliki 
              wanita sehangat dan seindah kamu di hidupku. Terima kasih sudah selalu hadir, 
              tersenyum manis, dan menjadi tempat ternyaman untuk pulang dan berbagi cerita.
            </p>
            <br />
            <p className="ldr-card-text">
              Selamat ulang tahun yang ke-23, Andiny Angelita sayang! Semoga kita bisa 
              terus berjalan berdampingan dan mengukir jutaan video serta cerita indah 
              lainnya bersama selamanya. 🎬💖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
