import { useState, useCallback } from 'react';

const KEYWORD_OPTIONS = ['150926', '250926', '050926', '291026', '020926', '151026'];
const CORRECT_KEYWORD = '291026';

export default function SlideGatekeeper({ onSuccess, isExiting }) {
  const [showAlert, setShowAlert] = useState(false);
  const [secretInput, setSecretInput] = useState('');
  const [wrongBtn, setWrongBtn] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleKeywordClick = useCallback((keyword, index) => {
    if (isCorrect) return;
    
    if (keyword === CORRECT_KEYWORD) {
      setIsCorrect(true);
      onSuccess();
    } else {
      setWrongBtn(index);
      setShowAlert(true);
      setTimeout(() => setWrongBtn(null), 600);
    }
  }, [isCorrect, onSuccess]);

  const handleSecretSubmit = useCallback(() => {
    if (isCorrect) return;

    const cleaned = secretInput.trim().replace(/\D/g, '');
    if (cleaned === CORRECT_KEYWORD || secretInput.trim() === CORRECT_KEYWORD) {
      setIsCorrect(true);
      onSuccess();
    } else {
      setShowAlert(true);
    }
  }, [secretInput, isCorrect, onSuccess]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSecretSubmit();
    }
  }, [handleSecretSubmit]);

  return (
    <div className={`slide slide-gatekeeper ${isExiting ? 'slide-exit' : ''}`}>
      <div className="gatekeeper-content">
        <div className="gatekeeper-icon">{isCorrect ? '🔓' : '🔐'}</div>
        
        <h2 className="gatekeeper-title">
          {isCorrect ? 'Yeay, Terbuka! 🎉' : 'Pilih Kata Kunci'}
        </h2>
        <p className="gatekeeper-subtitle">
          {isCorrect ? 'Membuka kado spesialmu... ✨' : 'untuk membuka hadiah 🎁'}
        </p>

        <div className="keyword-grid">
          {KEYWORD_OPTIONS.map((keyword, index) => (
            <button
              key={index}
              className={`keyword-btn ${wrongBtn === index ? 'wrong' : ''} ${isCorrect && keyword === CORRECT_KEYWORD ? 'correct' : ''}`}
              onClick={() => handleKeywordClick(keyword, index)}
              id={`keyword-btn-${index}`}
            >
              {keyword}
            </button>
          ))}
        </div>

        <div className="gate-divider">
          <span>atau ketik kata kunci rahasia</span>
        </div>

        <div className="secret-input-group">
          <input
            type="text"
            className="secret-input"
            placeholder="_ _ _ _ _ _"
            value={secretInput}
            onChange={(e) => setSecretInput(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={6}
            id="secret-keyword-input"
          />
          <button 
            className="secret-submit" 
            onClick={handleSecretSubmit}
            id="secret-submit-btn"
          >
            Buka 🔓
          </button>
        </div>
      </div>

      {showAlert && (
        <div className="alert-overlay" onClick={() => setShowAlert(false)}>
          <div className="alert-box" onClick={(e) => e.stopPropagation()}>
            <span className="alert-emoji">🙈</span>
            <h3 className="alert-title">Ups, kata kunci salah!</h3>
            <p className="alert-message">
              Coba ingat-ingat tanggal spesial kamu 😉
              <br />
              <small style={{ opacity: 0.6 }}>Hint: ddmmyy</small>
            </p>
            <button 
              className="alert-close-btn" 
              onClick={() => setShowAlert(false)}
              id="alert-close-btn"
            >
              Coba Lagi 💪
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
