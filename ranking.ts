import { games } from "./data/games";
import { Ranking } from "./components/Ranking";
import { Game } from "./models/Game";

function renderRanking() {
  const container = document.getElementById("ranking");
  if (!container) return;

  // Filtro de categoría
  const categories = Array.from(new Set(games.flatMap((g: Game) => g.categories)));
  const select = document.createElement("select");
  select.innerHTML = `<option value="">Todas las categorías</option>` +
    categories.map(c => `<option value="${c}">${c}</option>`).join("");
  select.onchange = () => {
    container.innerHTML = "";
    container.appendChild(select);
    container.appendChild(new Ranking(games).render(select.value || undefined));
  };

  container.appendChild(select);
  container.appendChild(new Ranking(games).render());
}

document.addEventListener("DOMContentLoaded", renderRanking);