// Filtrar por categoría
export function filterByCategory(games, category) {
    return category ? games.filter(game => game.categories.includes(category)) : games;
}
// Filtrar por número de jugadores
export function filterByPlayers(games, players) {
    return players ? games.filter(game => game.players === players) : games;
}
// Filtrar por duración
export function filterByDuration(games, duration) {
    return duration ? games.filter(game => game.duration === duration) : games;
}
// Filtrar por edad mínima
export function filterByAge(games, minAge) {
    return games.filter(game => game.age !== undefined && game.age >= minAge);
}
