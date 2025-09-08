import { games } from "./data/games.js";
import { GameCard } from "./components/GameCard.js";
import { SearchBar } from "./components/SearchBar.js";
import { Filters, FilterOptions } from "./components/Filters.js";
import { Pagination } from "./components/Pagination.js";
import { filterGames } from "./utils/filter.js";
import { sortGames, SortOrder } from "./utils/sort.js";
import { paginateGames } from "./utils/pagination.js";

const AUTOCOMPLETE_RESULTS = 5;

let currentPage = 1;
let itemsPerPage: number | "all";
let currentFilters: Record<string, string> = {};
let currentSort: SortOrder = "newest";
let filteredGames = games;

function isMobile() {
  return window.innerWidth <= 600;
}

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
    const defaultPageSize = isMobile() ? "6" : "12";
    pageSizeContainer.innerHTML = `
      <label for="page-size-select">Mostrar:</label>
      <select id="page-size-select" class="items-per-page-select">
        <option value="6">6 juegos por página</option>
        <option value="12">12 juegos por página</option>
        <option value="24">24 juegos por página</option>
        <option value="48">48 juegos por página</option>
        <option value="all">Todos los juegos</option>
      </select>
    `;
    const pageSizeSelect = document.getElementById("page-size-select") as HTMLSelectElement;
    pageSizeSelect.value = defaultPageSize;
itemsPerPage = parseInt(defaultPageSize, 10);
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
      }
    );
    filtersContainer.appendChild(filters.render());
  }

  // Sort
  const sortContainer = document.getElementById("sort-bar");
  if (sortContainer) {
    sortContainer.innerHTML = `
      <label for="sort-select">Ordenar por:</label>
      <select id="sort-select" class="items-per-page-select">
        <option value="newest" selected>Más nuevo</option>
        <option value="oldest">Más viejo</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
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