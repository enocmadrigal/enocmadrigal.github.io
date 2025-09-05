import { games } from "./data/games";
import { Game } from "./models/Game";

// Configuración
let gamesPerPage = 5;
let currentPage = 1;
let filteredGames: Game[] = [...games];

// Render tarjetas
function renderGames() {
  const container = document.getElementById("games-container");
  if (!container) return;

  container.innerHTML = "";
  const start = (currentPage - 1) * gamesPerPage;
  const end = start + gamesPerPage;
  const pageGames = filteredGames.slice(start, end);

  pageGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
    `;
    card.addEventListener("click", () => {
      window.location.href = `detalle.html?id=${game.id}`;
    });
    container.appendChild(card);
  });

  renderPagination();
}

// Render paginación
function renderPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i.toString();
    btn.disabled = i === currentPage;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderGames();
    });
    pagination.appendChild(btn);
  }
}

// Buscador con autocompletado
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const autocompleteContainer = document.getElementById("autocomplete-results");

searchInput?.addEventListener("input", () => {
  if (!autocompleteContainer) return;

  const value = searchInput.value.toLowerCase();
  const matches = games.filter(g => g.title.toLowerCase().includes(value)).slice(0, 5);

  autocompleteContainer.innerHTML = matches
    .map(
      g => `<div class="autocomplete-item">
              <img src="${g.image}" alt="${g.title}">
              <span>${g.title}</span>
            </div>`
    ).join("");

  const items = autocompleteContainer.querySelectorAll(".autocomplete-item");
  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      window.location.href = `detalle.html?id=${matches[index].id}`;
    });
  });
});

// Filtros
const filterCategory = document.getElementById("filter-category") as HTMLSelectElement;
const filterPlayers = document.getElementById("filter-players") as HTMLSelectElement;
const filterDuration = document.getElementById("filter-duration") as HTMLSelectElement;
const filterAge = document.getElementById("filter-age") as HTMLSelectElement;

function applyFilters() {
  filteredGames = games.filter(game => {
    const catMatch = !filterCategory.value || game.categories.includes(filterCategory.value);
    const playersMatch = !filterPlayers.value || game.players === filterPlayers.value;
    const durationMatch = !filterDuration.value || game.duration.includes(filterDuration.value);
    const ageMatch = !filterAge.value || (game.age && game.age.toString() === filterAge.value);
    return catMatch && playersMatch && durationMatch && ageMatch;
  });
  currentPage = 1;
  renderGames();
}

[filterCategory, filterPlayers, filterDuration, filterAge].forEach(f => f?.addEventListener("change", applyFilters));

// Inicializar
document.addEventListener("DOMContentLoaded", renderGames);
