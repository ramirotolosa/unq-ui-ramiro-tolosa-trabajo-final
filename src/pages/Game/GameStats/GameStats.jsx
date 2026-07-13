import Stat from '../../../components/Stat/Stat';
import './GameStats.css';

function GameStats({ score, chainCount, timeLeft }) {
  return (
    <div className="game-stats">
      <div className="game-stats__row">
        <Stat label="PUNTOS" value={score} />
        <Stat label="CADENA" value={chainCount} />
      </div>
      <Stat label="TIEMPO" value={`${timeLeft} s`} />
    </div>
  );
}

export default GameStats;