import { Game } from "../models/Game.js";

export class GameDetail {
  constructor(private game: Game) {}

  render(): HTMLElement {
    const container = document.createElement("div");
    container.className = "game-detail";
    container.innerHTML = `
      <h2>${this.game.name}</h2>
      <img src="${this.game.mainImage}" alt="${this.game.name}" class="game-detail-img">
      <p><strong>Editorial:</strong> ${this.game.publisher}</p>
      <p><strong>Categorías:</strong> ${this.game.categories.join(", ")}</p>
      <p><strong>Jugadores:</strong> ${this.game.players}</p>
      <p><strong>Duración:</strong> ${this.game.duration}</p>
      <p><strong>Modo:</strong> ${this.game.mode}</p>
      <p><strong>Descripción:</strong> ${this.game.description}</p>
      <p><strong>Reglas:</strong> ${this.game.rules}</p>
      <div class="game-detail-images">
        ${this.game.secondaryImages.map(img => `<img src="${img}" class="game-detail-secondary-img">`).join("")}
      </div>
      <div class="game-detail-video">
        <video controls src="${this.game.videoUrl}" width="100%"></video>
      </div>
    `;
    return container;
  }
}