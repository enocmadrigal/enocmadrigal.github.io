export class Pagination {
  totalItems: number;
  itemsPerPage: number | "all";
  onPageChange: (page: number, perPage: number | "all") => void;

  constructor(totalItems: number, itemsPerPage: number | "all", onPageChange: (page: number, perPage: number | "all") => void) {
    this.totalItems = totalItems;
    this.itemsPerPage = itemsPerPage;
    this.onPageChange = onPageChange;
  }

  render(currentPage: number): HTMLElement {
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