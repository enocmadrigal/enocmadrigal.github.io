"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByTitle = sortByTitle;
function sortByTitle(games) {
    return [...games].sort((a, b) => a.title.localeCompare(b.title));
}
