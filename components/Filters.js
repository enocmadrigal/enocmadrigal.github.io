export class Filters {
    constructor(options, onFilter
    // Eliminado el callback de itemsPerPage, ya no se usa aquí
    ) {
        this.options = options;
        this.onFilter = onFilter;
    }
    render() {
        // Contenedor principal
        const wrapper = document.createElement("div");
        wrapper.className = "filters-wrapper";
        // Fila de filtros
        const filtersRow = document.createElement("div");
        filtersRow.className = "filters-row filters";
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
            select.onchange = () => this.onFilter(this.getFilters(wrapper));
            selects.push(select);
            return select;
        };
        filtersRow.appendChild(createSelect("categories", this.options.categories));
        filtersRow.appendChild(createSelect("players", this.options.players));
        filtersRow.appendChild(createSelect("duration", this.options.duration));
        filtersRow.appendChild(createSelect("mode", this.options.mode));
        filtersRow.appendChild(createSelect("publisher", this.options.publisher));
        // Fila de controles (solo botón de reinicio)
        const controlsRow = document.createElement("div");
        controlsRow.className = "filters-controls-row";
        // Botón de reinicio
        const resetBtn = document.createElement("button");
        resetBtn.type = "button";
        resetBtn.className = "reset-filters-btn";
        resetBtn.textContent = "Reiniciar filtros";
        resetBtn.onclick = () => {
            selects.forEach(sel => sel.value = "");
            this.onFilter(this.getFilters(wrapper));
        };
        controlsRow.appendChild(resetBtn);
        // Agrega ambas filas al wrapper
        wrapper.appendChild(filtersRow);
        wrapper.appendChild(controlsRow);
        return wrapper;
    }
    getFilters(container) {
        const selects = container.querySelectorAll("select");
        const filters = {};
        selects.forEach(sel => {
            if (sel.name) {
                filters[sel.name] = sel.value;
            }
        });
        return filters;
    }
}
