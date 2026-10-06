import { useState, useEffect, useRef, useCallback } from 'react';

const YOUTUBE_VIDEO_ID = 'izEkQ7ZFUoA';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);

  // Initialize YouTube Iframe Player
  useEffect(() => {
    // Check if script already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      playerRef.current = new window.YT.Player('youtube-audio-frame', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 0,
          playsinline: 1,
          rel: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            setIsReady(true);
            try {
              event.target.playVideo();
            } catch (err) {
              console.log('Autoplay waiting for interaction:', err);
            }
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            } else if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo(); // Loop
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Browser Autoplay Policy: attempt play on first user interaction anywhere
    const handleFirstUserInteraction = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.playVideo();
        } catch (e) {
          console.error(e);
        }
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!playerRef.current || typeof playerRef.current.getPlayerState !== 'function') return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }, [isPlaying]);

  return (
    <>
      {/* Hidden YouTube Iframe for Audio */}
      <div 
        id="youtube-audio-frame" 
        style={{ 
          position: 'fixed', 
          top: -9999, 
          left: -9999, 
          width: 1, 
          height: 1, 
          opacity: 0, 
          pointerEvents: 'none' 
        }} 
      />

      {/* Floating Aesthetic Music Widget */}
      <div 
        className={`music-widget ${isPlaying ? 'playing' : 'paused'}`}
        onClick={togglePlay}
        title={isPlaying ? 'Klik untuk jeda musik' : 'Klik untuk putar musik'}
      >
        <div className={`music-disc ${isPlaying ? 'spinning' : ''}`}>
          💿
        </div>

        <div className="music-info">
          <span className="music-track-title">Merry Christmas, i miss you</span>
          <span className="music-track-artist">Alex Crichton 💕</span>
        </div>

        <div className="music-status-icon">
          {isPlaying ? (
            <div className="music-bars">
              <span className="music-bar" />
              <span className="music-bar" />
              <span className="music-bar" />
            </div>
          ) : (
            <span className="music-play-btn">▶️</span>
          )}
        </div>
      </div>
    </>
  );
}
