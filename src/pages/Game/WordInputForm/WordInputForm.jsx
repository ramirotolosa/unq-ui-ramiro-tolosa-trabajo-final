import { useState, useRef } from 'react';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import './WordInputForm.css';

function WordInputForm({ onValidWord, validateWord, isValidating }) {
  const [word, setWord] = useState('');
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!word.trim() || isValidating) return;

    const result = await validateWord(word.trim());

    if (result.isValid) {
      onValidWord(word.trim());
      setWord('');
      setError(null);
    } else {
      setError(result.error);
    }
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <form className="word-input-form" onSubmit={handleSubmit}>
      <ErrorMessage message={error} />
      <TextInput
        ref={inputRef}
        placeholder="Ingrese aquí su palabra"
        value={word}
        onChange={handleChange}
        disabled={isValidating}
      />
      <Button text={isValidating ? 'VERIFICANDO...' : 'VERIFICAR'} type="submit" disabled={isValidating || !word.trim()} />
    </form>
  );
}

export default WordInputForm;