"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const games_1 = require("./data/games");
// Función para renderizar ranking en la tabla
function renderRanking(gamesList) {
    const tbody = document.querySelector("#ranking-table tbody");
    if (!tbody)
        return;
    // Ordenar por valor para ranking ascendente (menor = 1)
    const sorted = [...gamesList].sort((a, b) => a.rankValue - b.rankValue);
    tbody.innerHTML = sorted
        .map((game, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${game.title}</td>
        <td>${game.rankValue}</td>
      </tr>
    `)
        .join("");
}
// Inicializa ranking según categoría seleccionada
document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("ranking-category");
    const applyBtn = document.getElementById("apply-ranking");
    const applyRanking = () => {
        const category = categorySelect.value;
        const filtered = category ? games_1.games.filter(g => g.categories.includes(category)) : games_1.games;
        renderRanking(filtered);
    };
    applyBtn === null || applyBtn === void 0 ? void 0 : applyBtn.addEventListener("click", applyRanking);
    // Render inicial con todas las categorías
    renderRanking(games_1.games);
});
