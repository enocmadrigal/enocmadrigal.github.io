import { Game } from "../models/Game";

export function paginate(games: Game[], page: number, pageSize: number): Game[] {
  const start = (page - 1) * pageSize;
  return games.slice(start, start + pageSize);
}
