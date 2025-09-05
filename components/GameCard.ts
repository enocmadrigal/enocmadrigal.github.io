import { Game } from "../models/Game";

export class GameCard {
  constructor(private game: Game) {}

  render(): HTMLElement {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${this.game.mainImage}" alt="${this.game.name}" class="game-card-img">
      <div class="game-card-title">${this.game.name}</div>
    `;
    card.onclick = () => {
      window.location.href = `detalle.html?id=${this.game.id}`;
    };
    return card;
  }
}