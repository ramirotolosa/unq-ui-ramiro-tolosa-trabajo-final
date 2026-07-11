import './TextInput.css';

function TextInput({ label, className, ...props }) {
  return (
    <div className={`text-input ${className || ''}`}>
      {label && <label className="text-input__label">{label}</label>}
      <input className="text-input__field" {...props} />
    </div>
  );
}

export default TextInput;