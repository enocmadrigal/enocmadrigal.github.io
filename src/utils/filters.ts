import { Game } from "../models/Game";

// Filtrar por categoría
export function filterByCategory(games: Game[], category: string): Game[] {
    return category ? games.filter(game => game.categories.includes(category)) : games;
}

// Filtrar por número de jugadores
export function filterByPlayers(games: Game[], players: string): Game[] {
    return players ? games.filter(game => game.players === players) : games;
}

// Filtrar por duración
export function filterByDuration(games: Game[], duration: string): Game[] {
    return duration ? games.filter(game => game.duration === duration) : games;
}

// Filtrar por edad mínima
export function filterByAge(games: Game[], minAge: number): Game[] {
    return games.filter(game => game.age !== undefined && game.age >= minAge);
}

