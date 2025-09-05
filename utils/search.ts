import { Game } from "../models/Game";

export function searchGames(games: Game[], query: string, maxResults: number): Game[] {
  if (!query) return [];
  return games
    .filter(g => g.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, maxResults);
}