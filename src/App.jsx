import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import Welcome from './pages/Welcome/Welcome';
import Game from './pages/Game/Game';
import EndGame from './pages/EndGame/EndGame';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.WELCOME} element={<Welcome />} />
        <Route path={ROUTES.GAME} element={<Game />} />
        <Route path={ROUTES.END_GAME} element={<EndGame />} />
        <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;