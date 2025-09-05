export function sortByTitle(games) {
    return [...games].sort((a, b) => a.title.localeCompare(b.title));
}
