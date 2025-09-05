"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByCategory = filterByCategory;
exports.filterByPlayers = filterByPlayers;
exports.filterByDuration = filterByDuration;
exports.filterByAge = filterByAge;
// Filtrar por categoría
function filterByCategory(games, category) {
    return category ? games.filter(game => game.categories.includes(category)) : games;
}
// Filtrar por número de jugadores
function filterByPlayers(games, players) {
    return players ? games.filter(game => game.players === players) : games;
}
// Filtrar por duración
function filterByDuration(games, duration) {
    return duration ? games.filter(game => game.duration === duration) : games;
}
// Filtrar por edad mínima
function filterByAge(games, minAge) {
    return games.filter(game => game.age !== undefined && game.age >= minAge);
}
