import { Game } from "../models/Game.js";

export function paginateGames(games: Game[], page: number, itemsPerPage: number): Game[] {
  const start = (page - 1) * itemsPerPage;
  return games.slice(start, start + itemsPerPage);
}