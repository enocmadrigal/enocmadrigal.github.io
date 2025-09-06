import { games } from "./data/games.js";
import { GameCard } from "./components/GameCard.js";
import { SearchBar } from "./components/SearchBar.js";
import { Filters } from "./components/Filters.js";
import { Pagination } from "./components/Pagination.js";
import { filterGames } from "./utils/filter.js";
import { sortGames } from "./utils/sort.js";
import { paginateGames } from "./utils/pagination.js";
const GAMES_PER_PAGE_DEFAULT = 10;
const AUTOCOMPLETE_RESULTS = 5;
let currentPage = 1;
let itemsPerPage = GAMES_PER_PAGE_DEFAULT;
let currentFilters = {};
let currentSort = "az";
let filteredGames = games;
function getFilterOptions() {
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
    if (!container)
        return;
    container.innerHTML = "";
    const paginated = paginateGames(filteredGames, currentPage, itemsPerPage);
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
    if (!container)
        return;
    container.innerHTML = "";
    const pagination = new Pagination(filteredGames.length, itemsPerPage, (page, perPage) => {
        currentPage = page;
        itemsPerPage = perPage;
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
    // Filters
    const filtersContainer = document.getElementById("filters");
    if (filtersContainer) {
        const filters = new Filters(getFilterOptions(), (filters) => {
            currentFilters = filters;
            update();
        }, (newItemsPerPage) => {
            itemsPerPage = newItemsPerPage;
            currentPage = 1;
            renderGamesList();
            renderPagination();
        });
        filtersContainer.appendChild(filters.render());
    }
    // Sort
    const sortContainer = document.getElementById("sort-bar");
    if (sortContainer) {
        sortContainer.innerHTML = `
      <select id="sort-select">
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="newest">Más nuevo</option>
        <option value="oldest">Más viejo</option>
      </select>
    `;
        const sortSelect = document.getElementById("sort-select");
        sortSelect.onchange = () => {
            currentSort = sortSelect.value;
            update();
        };
    }
    update();
}
document.addEventListener("DOMContentLoaded", setup);
