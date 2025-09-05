import { Game } from "../models/Game";

export class Search {
  private games: Game[];
  private maxResults: number;

  constructor(games: Game[], maxResults: number = 5) {
    this.games = games;
    this.maxResults = maxResults;
  }

  // Cambiar cuántos resultados mostrar
  setMaxResults(n: number) {
    this.maxResults = n;
  }

  // Buscar juegos que contengan el string
  searchByName(query: string): Game[] {
    const lowerQuery = query.toLowerCase();
    return this.games
      .filter(game => game.title.toLowerCase().includes(lowerQuery))
      .slice(0, this.maxResults);
  }

  // Renderizar autocompletado en un contenedor
  renderAutocomplete(containerId: string, query: string) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const results = this.searchByName(query);

    container.innerHTML = results
      .map(
        game => `
        <div class="autocomplete-item">
          <img src="${game.image}" alt="${game.title}" class="autocomplete-img">
          <span>${game.title}</span>
        </div>
      `
      )
      .join("");
  }
}
