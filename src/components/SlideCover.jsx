import NextButton from './NextButton';

export default function SlideCover({ onNext, isExiting }) {
  return (
    <div className={`slide slide-cover ${isExiting ? 'slide-exit' : ''}`}>
      <div className="cover-content">
        <div className="cover-badge">
          ✨ A Special Gift For You ✨
        </div>

        <img
          src="/birthday_cat.jpg"
          alt="Birthday Cat"
          className="cover-cat-img"
        />

        <h1 className="cover-title">Happy Birthday</h1>

        <div className="cover-divider" />

        <h2 className="cover-name">Okta Vivi Setianingrum </h2>

        <p className="cover-quote">
          &ldquo;A little digital memory book built with love, just for you.&rdquo;
        </p>

        <div className="nav-bottom">
          <NextButton onClick={onNext} label="Open Gift" />
        </div>
      </div>
    </div>
  );
}
