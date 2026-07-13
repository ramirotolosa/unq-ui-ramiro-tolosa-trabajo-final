const STORAGE_KEY = 'palabras-encadenadas-leaderboard';
const MAX_ENTRIES = 10;

export function getScores() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveScore(playerName, score) {
  const scores = getScores();
  const updatedScores = [...scores, { playerName, score }]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ENTRIES);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScores));
}