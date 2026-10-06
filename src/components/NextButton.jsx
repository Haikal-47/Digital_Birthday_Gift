export default function NextButton({ onClick, label = 'Next', className = '' }) {
  return (
    <button className={`next-btn ${className}`} onClick={onClick} id="btn-next">
      {label} <span className="arrow">→</span>
    </button>
  );
}
