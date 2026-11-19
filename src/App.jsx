import { games } from './data/games';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <h1>Couch Co-op Finder</h1>

      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h2>{game.title}</h2>
            <p>{game.screenType}</p>
            <p>Até {game.maxPlayers} jogadores</p>
          </div>
        ))}
      </div>
    </div>
  );
}