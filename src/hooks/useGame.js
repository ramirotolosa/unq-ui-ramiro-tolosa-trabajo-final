import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame debe usarse dentro de un GameProvider');
  }

  return context;
}