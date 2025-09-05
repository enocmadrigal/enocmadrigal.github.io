export class GameCard {
    constructor(game) {
        this.game = game;
    }
    render() {
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
