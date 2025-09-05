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

    // Helper to create a select
    const createSelect = (name: string, values: string[]) => {
      const select = document.createElement("select");
      select.name = name;
      select.innerHTML = `<option value="">${name.charAt(0).toUpperCase() + name.slice(1)}</option>` +
        values.map(v => `<option value="${v}">${v}</option>`).join("");
      select.onchange = () => this.onFilter(this.getFilters(container));
      return select;
    };

    container.appendChild(createSelect("categories", this.options.categories));
    container.appendChild(createSelect("players", this.options.players));
    container.appendChild(createSelect("duration", this.options.duration));
    container.appendChild(createSelect("mode", this.options.mode));
    container.appendChild(createSelect("publisher", this.options.publisher));

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