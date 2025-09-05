import { Game } from "../models/Game";

export function sortByTitle(games: Game[]): Game[] {
  return [...games].sort((a, b) => a.title.localeCompare(b.title));
}
