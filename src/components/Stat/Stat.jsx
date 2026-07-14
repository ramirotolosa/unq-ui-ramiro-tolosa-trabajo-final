import './Stat.css';

function Stat({ label, value, className }) {
  return (
    <div className={`stat ${className || ''}`}>
      <span className="stat__label">{label}</span>
      <span className="stat__value">{value}</span>
    </div>
  );
}

export default Stat;