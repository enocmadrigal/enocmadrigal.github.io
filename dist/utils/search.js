"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
class Search {
    constructor(games, maxResults = 5) {
        this.games = games;
        this.maxResults = maxResults;
    }
    // Cambiar cuántos resultados mostrar
    setMaxResults(n) {
        this.maxResults = n;
    }
    // Buscar juegos que contengan el string
    searchByName(query) {
        const lowerQuery = query.toLowerCase();
        return this.games
            .filter(game => game.title.toLowerCase().includes(lowerQuery))
            .slice(0, this.maxResults);
    }
    // Renderizar autocompletado en un contenedor
    renderAutocomplete(containerId, query) {
        const container = document.getElementById(containerId);
        if (!container)
            return;
        const results = this.searchByName(query);
        container.innerHTML = results
            .map(game => `
        <div class="autocomplete-item">
          <img src="${game.image}" alt="${game.title}" class="autocomplete-img">
          <span>${game.title}</span>
        </div>
      `)
            .join("");
    }
}
exports.Search = Search;
