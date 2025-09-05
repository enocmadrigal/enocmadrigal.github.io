export class Filters {
    constructor(options, onFilter) {
        this.options = options;
        this.onFilter = onFilter;
    }
    render() {
        const container = document.createElement("div");
        container.className = "filters";
        const selects = [];
        // Traducción de nombres de filtros
        const filterLabels = {
            categories: "Categoría",
            players: "Jugadores",
            duration: "Duración",
            mode: "Modo",
            publisher: "Editorial"
        };
        // Helper para crear selects
        const createSelect = (name, values) => {
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
    getFilters(container) {
        const selects = container.querySelectorAll("select");
        const filters = {};
        selects.forEach(sel => {
            filters[sel.name] = sel.value;
        });
        return filters;
    }
}
