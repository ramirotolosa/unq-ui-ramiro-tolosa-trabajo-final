import './Button.css';

function Button({ text, className, ...props }) {
  return (
    <button className={`button ${className || ''}`} {...props}>
      {text}
    </button>
  );
}

export default Button;