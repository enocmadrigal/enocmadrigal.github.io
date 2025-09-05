export function paginateGames(games, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    return games.slice(start, start + itemsPerPage);
}
