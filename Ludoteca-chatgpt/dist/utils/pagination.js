export function paginate(games, page, pageSize) {
    const start = (page - 1) * pageSize;
    return games.slice(start, start + pageSize);
}
