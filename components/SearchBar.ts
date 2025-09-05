import { Game } from "../models/Game";

export class SearchBar {
  constructor(
    private games: Game[],
    private onSelect: (game: Game) => void,
    private maxResults: number = 5
  ) {}

  render(): HTMLElement {
    const container = document.createElement("div");
    container.className = "search-bar";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Buscar juego...";
    input.className = "search-input";

    const results = document.createElement("div");
    results.className = "autocomplete-results";

    input.addEventListener("input", () => {
      const value = input.value.toLowerCase();
      results.innerHTML = "";
      if (value.length === 0) return;
      const filtered = this.games
        .filter(g => g.name.toLowerCase().includes(value))
        .slice(0, this.maxResults);
      filtered.forEach(game => {
        const item = document.createElement("div");
        item.className = "autocomplete-item";
        item.innerHTML = `
          <img src="${game.mainImage}" class="autocomplete-thumb">
          <span>${game.name}</span>
        `;
        item.onclick = () => this.onSelect(game);
        results.appendChild(item);
      });
    });

    container.appendChild(input);
    container.appendChild(results);
    return container;
  }
}