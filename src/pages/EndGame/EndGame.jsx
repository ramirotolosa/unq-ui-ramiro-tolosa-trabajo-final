import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../hooks/useGame';
import { ROUTES } from '../../utils/constants';
import { saveScore } from '../../utils/leaderboardStorage';
import Button from '../../components/Button/Button';
import WordChain from '../Game/WordChain/WordChain';
import './EndGame.css';

function EndGame() {
  const navigate = useNavigate();
  const { playerName, score, wordChain, playAgain, resetGame } = useGame();

  useEffect(() => {
    saveScore(playerName, score);
  }, []);

  const handlePlayAgain = () => {
    playAgain();
    navigate(ROUTES.GAME);
  };

  const handleChangePlayer = () => {
    resetGame();
    navigate(ROUTES.WELCOME);
  };

  const handleGoToLeaderboard = () => {
    navigate(ROUTES.LEADERBOARD);
  };

  return (
    <div className="end-game">
      <p className="end-game__message">¡Se acabó el tiempo, {playerName}!</p>

      <div className="end-game__stats">
        <p className="end-game__stat">
          Puntaje final: <span className="end-game__stat-value">{score}</span>
        </p>
        <p className="end-game__stat">
          Total encadenadas: <span className="end-game__stat-value">{wordChain.length}</span>
        </p>
      </div>

      <WordChain wordChain={wordChain} />

      <div className="end-game__actions">
        <Button text="JUGAR OTRA VEZ" onClick={handlePlayAgain} />
        <Button text="CAMBIAR JUGADOR" onClick={handleChangePlayer} />
        <Button text="LEADERBOARD" onClick={handleGoToLeaderboard} />
      </div>
    </div>
  );
}

export default EndGame;