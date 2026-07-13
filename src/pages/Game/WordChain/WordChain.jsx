import './WordChain.css';

function WordChain({ wordChain }) {
  return (
    <div className="word-chain">
      <p className="word-chain__title">Palabras encadenadas:</p>
      <ul className="word-chain__list">
        {wordChain.map((word) => (
          <li key={word} className="word-chain__item">
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordChain;