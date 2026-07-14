import { useNavigate } from 'react-router-dom';
import { useGame } from '../../hooks/useGame';
import useTimer from '../../hooks/useTimer';
import useWordValidation from '../../hooks/useWordValidation';
import { saveScore } from '../../utils/leaderboardStorage';
import { GAME_STATUS, TURN_DURATION_SECONDS, ROUTES } from '../../utils/constants';
import GameStats from './GameStats/GameStats';
import GameStatusInfo from './GameStatusInfo/GameStatusInfo';
import WordInputForm from './WordInputForm/WordInputForm';
import WordChain from './WordChain/WordChain';
import './Game.css';

function Game() {
  const navigate = useNavigate();
  const { score, wordChain, gameStatus, addWord, finishGame, playerName } = useGame();
  const isPlaying = gameStatus === GAME_STATUS.PLAYING;

  const handleExpire = () => {
    finishGame();
    saveScore(playerName, score);
    navigate(ROUTES.END_GAME);
  };

  const { timeLeft, reset } = useTimer(TURN_DURATION_SECONDS, isPlaying, handleExpire);
  const { validateWord, isValidating } = useWordValidation(wordChain);

  const lastWord = wordChain[0] || '';
  const nextLetter = lastWord ? lastWord.at(-1).toUpperCase() : '';

  const handleValidWord = (word) => {
    addWord(word);
    reset();
  };

  return (
    <div className="game-container">
      <div className="game">
        <GameStats score={score} chainCount={wordChain.length} timeLeft={timeLeft} />
        <GameStatusInfo isPlaying={isPlaying} lastWord={lastWord} nextLetter={nextLetter} />
        <WordInputForm
          onValidWord={handleValidWord}
          validateWord={validateWord}
          isValidating={isValidating}
        />
        <WordChain wordChain={wordChain} />
      </div>
    </div>
  );
}

export default Game;