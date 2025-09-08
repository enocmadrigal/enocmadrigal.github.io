export function paginateGames(games, page, itemsPerPage) {
    if (itemsPerPage === "all") {
        return games;
    }
    const start = (page - 1) * itemsPerPage;
    return games.slice(start, start + itemsPerPage);
}
