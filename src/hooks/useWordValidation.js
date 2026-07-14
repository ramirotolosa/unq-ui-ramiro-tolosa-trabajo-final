import { useState } from 'react';
import { checkWordExists } from '../services/wordService';

function getChainingError(word, wordChain) {
  if (wordChain.length === 0) return null;

  const lastWord = wordChain[0];
  const requiredLetter = lastWord.at(-1).toLowerCase();
  const firstLetter = word.at(0).toLowerCase();

  if (firstLetter !== requiredLetter) return `¡La palabra ingresada no comienza con "${requiredLetter.toUpperCase()}"!`;

  return null;
}

function getRepeatedError(word, wordChain) {
  const alreadyUsed = wordChain.some(
    (usedWord) => usedWord.toLowerCase() === word.toLowerCase()
  );

  return alreadyUsed ? '¡La palabra ingresada ya fue utilizada!' : null;
}

function useWordValidation(wordChain) {
  const [isValidating, setIsValidating] = useState(false);

  const validateWord = async (word) => {
    const chainingError = getChainingError(word, wordChain);
    if (chainingError) return { isValid: false, error: chainingError };

    const repeatedError = getRepeatedError(word, wordChain);
    if (repeatedError) return { isValid: false, error: repeatedError };

    setIsValidating(true);
    const result = await checkWordExists(word);
    setIsValidating(false);

    if (!result.success) {
      return { isValid: false, error: '¡Error al validar, intente de nuevo!' };
    }

    if (!result.data.exists) {
      return { isValid: false, error: '¡La palabra ingresada no existe!' };
    }

    return { isValid: true, error: null };
  };

  return { validateWord, isValidating };
}

export default useWordValidation;