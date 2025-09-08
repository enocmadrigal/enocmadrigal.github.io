export class Pagination {
    constructor(totalItems, itemsPerPage, onPageChange) {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.onPageChange = onPageChange;
    }
    render(currentPage) {
        const container = document.createElement("div");
        container.className = "pagination";
        // Si es "all", no mostrar paginación
        if (this.itemsPerPage === "all" || this.totalItems <= this.itemsPerPage) {
            return container;
        }
        const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i.toString();
            btn.className = i === currentPage ? "active" : "";
            btn.onclick = () => this.onPageChange(i, this.itemsPerPage);
            container.appendChild(btn);
        }
        return container;
    }
}
