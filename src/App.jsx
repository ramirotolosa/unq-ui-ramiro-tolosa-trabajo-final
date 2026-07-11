import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import { GameProvider } from './context/GameContext';
import Welcome from './pages/Welcome/Welcome';
import Game from './pages/Game/Game';
import EndGame from './pages/EndGame/EndGame';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import './App.css';

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.WELCOME} element={<Welcome />} />
          <Route path={ROUTES.GAME} element={<Game />} />
          <Route path={ROUTES.END_GAME} element={<EndGame />} />
          <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>  
  );
}

export default App;