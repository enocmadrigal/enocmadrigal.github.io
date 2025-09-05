import { games } from "./data/games";
import { GameDetail } from "./components/GameDetail";
function getGameIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id ? parseInt(id, 10) : null;
}
function renderGameDetail() {
    const id = getGameIdFromUrl();
    const container = document.getElementById("game-detail");
    if (!container || id === null)
        return;
    const game = games.find(g => g.id === id);
    if (!game) {
        container.innerHTML = "<p>Juego no encontrado.</p>";
        return;
    }
    container.appendChild(new GameDetail(game).render());
}
document.addEventListener("DOMContentLoaded", renderGameDetail);
