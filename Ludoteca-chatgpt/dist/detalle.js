import { games } from "./data/games";
// Función para obtener parámetro de URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Función para renderizar los detalles de un juego
function renderGameDetails(game) {
    const title = document.getElementById("game-title");
    const image = document.getElementById("game-image");
    const publisher = document.getElementById("game-publisher");
    const categories = document.getElementById("game-categories");
    const players = document.getElementById("game-players");
    const duration = document.getElementById("game-duration");
    const mode = document.getElementById("game-mode");
    const description = document.getElementById("game-description");
    const rules = document.getElementById("game-rules");
    const video = document.getElementById("game-video");
    const secondaryImages = document.getElementById("secondary-images");
    if (!game || !title || !image || !publisher || !categories || !players || !duration || !mode || !description || !rules || !video || !secondaryImages)
        return;
    title.textContent = game.title;
    image.src = game.image;
    publisher.textContent = game.publisher;
    categories.textContent = game.categories.join(", ");
    players.textContent = game.players;
    duration.textContent = game.duration;
    mode.textContent = game.mode;
    description.textContent = game.description;
    rules.textContent = game.rules;
    video.src = game.video || "";
    secondaryImages.innerHTML = game.secondaryImages
        .map(img => `<img src="${img}" alt="${game.title}" class="secondary-img">`)
        .join("");
}
// Inicializa página detalle
document.addEventListener("DOMContentLoaded", () => {
    const idParam = getQueryParam("id");
    if (!idParam)
        return;
    const game = games.find(g => g.id.toString() === idParam);
    if (game)
        renderGameDetails(game);
});
