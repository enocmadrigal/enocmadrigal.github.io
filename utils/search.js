export function searchGames(games, query, maxResults) {
    if (!query)
        return [];
    return games
        .filter(g => g.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, maxResults);
}
