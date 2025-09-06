export class Pagination {
    constructor(totalItems, itemsPerPage, onPageChange) {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.onPageChange = onPageChange;
    }
    render(currentPage) {
        const container = document.createElement("div");
        container.className = "pagination";
        // Select para items por página (antes de los botones)
        const select = document.createElement("select");
        select.className = "items-per-page-select";
        [5, 10, 20, 50].forEach(num => {
            const option = document.createElement("option");
            option.value = num.toString();
            option.textContent = `${num} juegos por página`;
            if (num === this.itemsPerPage)
                option.selected = true;
            select.appendChild(option);
        });
        select.onchange = () => {
            this.onPageChange(1, parseInt(select.value, 10));
        };
        container.appendChild(select);
        // Contenedor para los botones de página
        const pagesContainer = document.createElement("div");
        pagesContainer.className = "pagination-pages";
        const totalPages = Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage));
        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
            const button = document.createElement("button");
            button.textContent = pageNumber.toString();
            button.classList.toggle('active', pageNumber === currentPage);
            button.onclick = () => this.onPageChange(pageNumber, this.itemsPerPage);
            pagesContainer.appendChild(button);
        }
        container.appendChild(pagesContainer);
        return container;
    }
}
