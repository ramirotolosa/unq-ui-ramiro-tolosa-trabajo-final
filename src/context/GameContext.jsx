import { createContext, useState } from 'react';
import { GAME_STATUS } from '../utils/constants';

export const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const [wordChain, setWordChain] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IDLE);

  const updateScoreAndWordChain = (word) => {
    setWordChain((prev) => [word, ...prev]);
    setScore((prev) => prev + word.length);
  };

  const addWord = (word) => {
    if (gameStatus === GAME_STATUS.IDLE) {
      setGameStatus(GAME_STATUS.PLAYING);
    }
    updateScoreAndWordChain(word);
  };

  const finishGame = () => {
    setGameStatus(GAME_STATUS.FINISHED);
  };

  const resetMarkers = () => {
    setScore(0);
    setWordChain([]);
  };

  const resetPlayerName = () => {
    setPlayerName('');
  };

  const playAgain = () => {
    resetMarkers();
    setGameStatus(GAME_STATUS.IDLE);
  };

  const resetGame = () => {
    resetPlayerName();
    resetMarkers();
    setGameStatus(GAME_STATUS.IDLE);
  };

  const value = {
    playerName,
    setPlayerName,
    score,
    wordChain,
    gameStatus,
    addWord,
    finishGame,
    resetGame,
    playAgain,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}