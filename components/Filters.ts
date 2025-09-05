import { Game } from "../models/Game.js";

export interface FilterOptions {
  categories: string[];
  players: string[];
  duration: string[];
  mode: string[];
  publisher: string[];
}

export class Filters {
  constructor(
    private options: FilterOptions,
    private onFilter: (filters: Record<string, string>) => void
  ) {}

  render(): HTMLElement {
    const container = document.createElement("div");
    container.className = "filters";

    const selects: HTMLSelectElement[] = [];

    // Traducción de nombres de filtros
    const filterLabels: Record<string, string> = {
      categories: "Categoría",
      players: "Jugadores",
      duration: "Duración",
      mode: "Modo",
      publisher: "Editorial"
    };

    // Helper para crear selects
    const createSelect = (name: string, values: string[]) => {
      const select = document.createElement("select");
      select.name = name;
      select.innerHTML = `<option value="">${filterLabels[name]}</option>` +
        values.map(v => `<option value="${v}">${v}</option>`).join("");
      select.onchange = () => this.onFilter(this.getFilters(container));
      selects.push(select);
      return select;
    };

    container.appendChild(createSelect("categories", this.options.categories));
    container.appendChild(createSelect("players", this.options.players));
    container.appendChild(createSelect("duration", this.options.duration));
    container.appendChild(createSelect("mode", this.options.mode));
    container.appendChild(createSelect("publisher", this.options.publisher));

    // Botón de reinicio
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "reset-filters-btn";
    resetBtn.textContent = "Reiniciar filtros";
    resetBtn.onclick = () => {
      selects.forEach(sel => sel.value = "");
      this.onFilter(this.getFilters(container));
    };
    container.appendChild(resetBtn);

    return container;
  }

  getFilters(container: HTMLElement): Record<string, string> {
    const selects = container.querySelectorAll("select");
    const filters: Record<string, string> = {};
    selects.forEach(sel => {
      filters[sel.name] = (sel as HTMLSelectElement).value;
    });
    return filters;
  }
}