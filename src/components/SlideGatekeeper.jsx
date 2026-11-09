import { useState, useCallback } from 'react';

const KEYWORD_OPTIONS = ['10112026', '25092026', '08072026', '15092026', '080726', '15102026'];
const CORRECT_KEYWORDS = ['08072026', '080726'];

export default function SlideGatekeeper({ onSuccess, isExiting }) {
  const [showAlert, setShowAlert] = useState(false);
  const [secretInput, setSecretInput] = useState('');
  const [wrongBtn, setWrongBtn] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const isKeywordValid = (kw) => CORRECT_KEYWORDS.includes(kw);

  const handleKeywordClick = useCallback((keyword, index) => {
    if (isCorrect) return;
    
    if (isKeywordValid(keyword)) {
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
    if (isKeywordValid(cleaned) || isKeywordValid(secretInput.trim())) {
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
              className={`keyword-btn ${wrongBtn === index ? 'wrong' : ''} ${isCorrect && isKeywordValid(keyword) ? 'correct' : ''}`}
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
            placeholder="_ _ _ _ _ _ _ _"
            value={secretInput}
            onChange={(e) => setSecretInput(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={8}
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
              Coba ingat-ingat tanggal spesial kita 😉
              <br />
              <small style={{ opacity: 0.6 }}>Hint: ddmmyyyy / ddmmyy</small>
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
