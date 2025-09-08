import { games } from "./data/games.js";
import { GameCard } from "./components/GameCard.js";
import { SearchBar } from "./components/SearchBar.js";
import { Filters, FilterOptions } from "./components/Filters.js";
import { Pagination } from "./components/Pagination.js";
import { filterGames } from "./utils/filter.js";
import { sortGames, SortOrder } from "./utils/sort.js";
import { paginateGames } from "./utils/pagination.js";

// Cambia el valor por default a 12
const GAMES_PER_PAGE_DEFAULT = 12;
const AUTOCOMPLETE_RESULTS = 5;

let currentPage = 1;
let itemsPerPage: number | "all" = GAMES_PER_PAGE_DEFAULT; // <-- Cambiado aquí
let currentFilters: Record<string, string> = {};
let currentSort: SortOrder = "newest";
let filteredGames = games;

function getFilterOptions(): FilterOptions {
  return {
    categories: Array.from(new Set(games.flatMap((g) => g.categories))),
    players: Array.from(new Set(games.map((g) => g.players))),
    duration: Array.from(new Set(games.map((g) => g.duration))),
    mode: Array.from(new Set(games.map((g) => g.mode))),
    publisher: Array.from(new Set(games.map((g) => g.publisher))),
  };
}

function renderGamesList() {
  const container = document.getElementById("games-list");
  if (!container) return;
  container.innerHTML = "";
  const perPage = itemsPerPage === "all" ? filteredGames.length : itemsPerPage;
  const paginated = paginateGames(filteredGames, currentPage, perPage);
  paginated.forEach(game => {
    const card = new GameCard(game).render();
    container.appendChild(card);
  });
}

function update() {
  filteredGames = filterGames(games, currentFilters);
  filteredGames = sortGames(filteredGames, currentSort);
  currentPage = 1;
  renderGamesList();
  renderPagination();
}

function renderPagination() {
  const container = document.getElementById("pagination");
  if (!container) return;
  container.innerHTML = "";
  const perPage = itemsPerPage === "all" ? filteredGames.length : itemsPerPage;
  const pagination = new Pagination(filteredGames.length, perPage, (page, perPageValue: number | "all") => {
    currentPage = page;
    itemsPerPage = perPageValue;
    renderGamesList();
    renderPagination();
  });
  container.appendChild(pagination.render(currentPage));
}

function setup() {
  // Search bar
  const searchContainer = document.getElementById("search-bar");
  if (searchContainer) {
    const searchBar = new SearchBar(games, (game) => {
      window.location.href = `detalle.html?id=${game.id}`;
    }, AUTOCOMPLETE_RESULTS);
    searchContainer.appendChild(searchBar.render());
  }

  // Filtro de cantidad de juegos por página
  const pageSizeContainer = document.getElementById("page-size-container");
  if (pageSizeContainer) {
    pageSizeContainer.innerHTML = `
      <label for="page-size-select">Mostrar:</label>
      <select id="page-size-select">
        <option value="6">6</option>
        <option value="12" selected>12</option>
        <option value="24">24</option>
        <option value="48">48</option>
        <option value="all">Todos los juegos</option>
      </select>
    `;
    const pageSizeSelect = document.getElementById("page-size-select") as HTMLSelectElement;
    pageSizeSelect.onchange = () => {
      itemsPerPage = pageSizeSelect.value === "all" ? "all" : parseInt(pageSizeSelect.value, 10);
      currentPage = 1;
      renderGamesList();
      renderPagination();
    };
  }

  // Filters
  const filtersContainer = document.getElementById("filters");
  if (filtersContainer) {
    const filters = new Filters(
      getFilterOptions(),
      (filters) => {
        currentFilters = filters;
        update();
      },
      (newItemsPerPage: number | "all") => {
        itemsPerPage = newItemsPerPage;
        currentPage = 1;
        renderGamesList();
        renderPagination();
      }
    );
    filtersContainer.appendChild(filters.render());
  }

  // Sort
  const sortContainer = document.getElementById("sort-bar");
  if (sortContainer) {
    sortContainer.innerHTML = `
  <select id="sort-select">
    <option value="az">A-Z</option>
    <option value="za">Z-A</option>
    <option value="newest" selected>Más nuevo</option>
    <option value="oldest">Más viejo</option>
  </select>
`;
    const sortSelect = document.getElementById("sort-select") as HTMLSelectElement;
    sortSelect.onchange = () => {
      currentSort = sortSelect.value as SortOrder;
      update();
    };
  }

  update();
}

document.addEventListener("DOMContentLoaded", setup);