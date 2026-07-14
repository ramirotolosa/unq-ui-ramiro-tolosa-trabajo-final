import './GameStatusInfo.css';

function GameStatusInfo({ isPlaying, lastWord, nextLetter }) {
  if (!isPlaying) {
    return (
      <div className="game-status-info">
        <p className="game-status-info__message">
          ¡Ingrese una palabra para comenzar!
        </p>
      </div>
    );
  }

  return (
    <div className="game-status-info">
      <p className="game-status-info__label">Última palabra:</p>
      <p className="game-status-info__word">{lastWord}</p>
      <p className="game-status-info__label">Próxima palabra debe iniciar con:</p>
      <p className="game-status-info__letter">{nextLetter}</p>
    </div>
  );
}

export default GameStatusInfo;