export class Pagination {
    constructor(totalItems, itemsPerPage, onPageChange) {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.onPageChange = onPageChange;
    }
    render(currentPage) {
        const container = document.createElement("div");
        container.className = "pagination";
        // Selector de juegos por página
        const select = document.createElement("select");
        [5, 10, 20, 50].forEach(num => {
            const option = document.createElement("option");
            option.value = num.toString();
            option.textContent = `${num} por página`;
            select.appendChild(option);
        });
        select.value = this.itemsPerPage.toString();
        select.onchange = () => {
            this.onPageChange(1, parseInt(select.value));
        };
        container.appendChild(select);
        // Botones de paginación
        const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i.toString();
            btn.disabled = i === currentPage;
            btn.onclick = () => this.onPageChange(i, this.itemsPerPage);
            container.appendChild(btn);
        }
        return container;
    }
}
