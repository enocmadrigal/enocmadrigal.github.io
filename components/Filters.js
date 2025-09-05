export class Filters {
    constructor(options, onFilter) {
        this.options = options;
        this.onFilter = onFilter;
    }
    render() {
        const container = document.createElement("div");
        container.className = "filters";
        // Helper to create a select
        const createSelect = (name, values) => {
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
    getFilters(container) {
        const selects = container.querySelectorAll("select");
        const filters = {};
        selects.forEach(sel => {
            filters[sel.name] = sel.value;
        });
        return filters;
    }
}
