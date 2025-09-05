import { games } from "./data/games";
import { Game } from "./models/Game";

// Función para renderizar ranking en la tabla
function renderRanking(gamesList: Game[]): void {
  const tbody = document.querySelector("#ranking-table tbody");
  if (!tbody) return;

  // Ordenar por valor para ranking ascendente (menor = 1)
  const sorted = [...gamesList].sort((a, b) => a.rankValue - b.rankValue);

  tbody.innerHTML = sorted
    .map(
      (game, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${game.title}</td>
        <td>${game.rankValue}</td>
      </tr>
    `
    )
    .join("");
}

// Inicializa ranking según categoría seleccionada
document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("ranking-category") as HTMLSelectElement;
  const applyBtn = document.getElementById("apply-ranking");

  const applyRanking = () => {
    const category = categorySelect.value;
    const filtered = category ? games.filter(g => g.categories.includes(category)) : games;
    renderRanking(filtered);
  };

  applyBtn?.addEventListener("click", applyRanking);

  // Render inicial con todas las categorías
  renderRanking(games);
});
