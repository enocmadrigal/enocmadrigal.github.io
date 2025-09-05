export function sortGames(games, order) {
    const sorted = [...games];
    switch (order) {
        case "az":
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "za":
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "newest":
            sorted.sort((a, b) => b.purchaseOrder - a.purchaseOrder);
            break;
        case "oldest":
            sorted.sort((a, b) => a.purchaseOrder - b.purchaseOrder);
            break;
    }
    return sorted;
}
