import { Game } from "../models/Game";

export function filterByAge(games: Game[], minAge: number): Game[] {
  return games.filter(game => parseInt(game.age) >= minAge);
}
