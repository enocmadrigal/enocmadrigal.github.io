import { Game } from "../models/Game.js";

export function filterGames(games: Game[], filters: Record<string, string>): Game[] {
  return games.filter(game => {
    for (const key in filters) {
      if (!filters[key]) continue;
      if (key === "categories" && !game.categories.includes(filters[key])) return false;
      if (key === "players" && game.players !== filters[key]) return false;
      if (key === "duration" && game.duration !== filters[key]) return false;
      if (key === "mode" && game.mode !== filters[key]) return false;
      if (key === "publisher" && game.publisher !== filters[key]) return false;
    }
    return true;
  });
}