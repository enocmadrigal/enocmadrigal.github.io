export class Ranking {
    constructor(games) {
        this.games = games;
    }
    render(category) {
        const container = document.createElement("div");
        container.className = "ranking";
        let filtered = this.games;
        if (category) {
            filtered = filtered.filter(g => g.categories.includes(category));
        }
        filtered = filtered.slice().sort((a, b) => a.rankValue - b.rankValue);
        container.innerHTML = `
      <h2>Ranking${category ? " - " + category : ""}</h2>
      <ol>
        ${filtered.map(g => `<li>${g.name} <span class="rank-value">(${g.rankValue})</span></li>`).join("")}
      </ol>
    `;
        return container;
    }
}
