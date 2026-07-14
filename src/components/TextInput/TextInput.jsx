import { forwardRef } from 'react';
import './TextInput.css';

const TextInput = forwardRef(function TextInput({ label, className, ...props }, ref) {
  return (
    <div className={`text-input ${className || ''}`}>
      {label && <label className="text-input__label">{label}</label>}
      <input ref={ref} className="text-input__field" {...props} />
    </div>
  );
});

export default TextInput;