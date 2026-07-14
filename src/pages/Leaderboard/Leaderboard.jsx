import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScores } from '../../utils/leaderboardStorage';
import { ROUTES } from '../../utils/constants';
import Button from '../../components/Button/Button';
import './Leaderboard.css';

const MAX_ROWS = 10;

function Leaderboard() {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(getScores());
  }, []);

  const handleGoBack = () => {
    navigate(ROUTES.END_GAME);
  };

  const emptyRowsCount = MAX_ROWS - scores.length;

  return (
    <div className="leaderboard">
      <p className="leaderboard__message">Top 10 mejores puntajes</p>
      <table className="leaderboard__table">
        <thead>
          <tr>
            <th className="leaderboard__header">JUGADOR</th>
            <th className="leaderboard__header">PUNTAJE</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((entry, index) => (
            <tr key={index}>
              <td className="leaderboard__cell">{entry.playerName}</td>
              <td className="leaderboard__cell">{entry.score}</td>
            </tr>
          ))}
          {Array.from({ length: emptyRowsCount }).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td className="leaderboard__cell">&nbsp;</td>
              <td className="leaderboard__cell">&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button text="VOLVER" onClick={handleGoBack} />
    </div>
  );
}

export default Leaderboard;