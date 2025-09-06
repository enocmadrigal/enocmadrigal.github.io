export class Pagination {
  constructor(
    private totalItems: number,
    private itemsPerPage: number,
    private onPageChange: (page: number, perPage: number) => void
  ) {}

  render(currentPage: number): HTMLElement {
    const container = document.createElement("div");
    container.className = "pagination";

    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

    // Botones de página
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const button = document.createElement("button");
      button.textContent = pageNumber.toString();
      // Agrega la clase 'active' al botón de la página actual
      button.classList.toggle('active', pageNumber === currentPage);
      button.onclick = () => this.onPageChange(pageNumber, this.itemsPerPage);
      container.appendChild(button);
    }

    // Select para items por página
    const select = document.createElement("select");
    [5, 10, 20, 50].forEach(num => {
      const option = document.createElement("option");
      option.value = num.toString();
      option.textContent = `${num} por página`;
      if (num === this.itemsPerPage) option.selected = true;
      select.appendChild(option);
    });
    select.onchange = () => {
      this.onPageChange(1, parseInt(select.value, 10));
    };
    container.appendChild(select);

    return container;
  }
}