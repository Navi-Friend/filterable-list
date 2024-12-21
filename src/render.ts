import { gotPosts } from "./api";
import { NOT_FOUND_ERROR_IMG, SERVER_ERROR_IMG } from "./consts";

export function debounce(logicalFn: Function): void {
    const inputEL: HTMLInputElement | null = document.querySelector("input");
    let timerId: number;

    inputEL!.addEventListener("input", (e: Event) => {
        clearTimeout(timerId);
        const params: string = (e.target as HTMLInputElement).value;

        timerId = setTimeout(logicalFn(params), 500);
    });
}

export function renderTable(data: Array<gotPosts>): void {
    const tableWrapperEl: HTMLElement | null =
        document.querySelector(".tableWrapper");
    tableWrapperEl!.innerHTML = "";
    const tableEl: HTMLElement = document.createElement("table");

    const theadEl: HTMLElement = document.createElement("thead");
    Object.keys(data[0]).forEach((key) => {
        const thEl: HTMLElement = document.createElement("th");
        thEl.innerText = key;
        theadEl.appendChild(thEl);
    });
    tableEl.appendChild(theadEl);

    const tbodyEl: HTMLElement = document.createElement("tbody");
    data.forEach((post) => {
        const rowEl: HTMLElement = document.createElement("tr");
        Object.values(post).forEach((value) => {
            const cellEl: HTMLElement = document.createElement("td");
            cellEl.innerText = value;
            rowEl.appendChild(cellEl);
        });
        tbodyEl.appendChild(rowEl);
    });
    tableEl.appendChild(tbodyEl);

    tableWrapperEl!.appendChild(tableEl);
}

export function renderServerError(): void {
    const containerEl: HTMLElement | null =
        document.querySelector(".tableWrapper");
    containerEl!.innerHTML = "";

    const errHeader: HTMLElement = document.createElement("h1");
    errHeader.classList.add("err-header");
    errHeader.innerText = "Sory, something went wrong with server :(";

    const errImg: HTMLImageElement = document.createElement("img");
    errImg.src = SERVER_ERROR_IMG;
    errImg.classList.add("err-img");

    containerEl!.appendChild(errHeader);
    containerEl!.appendChild(errImg);
}

export function renderNotFoundError(): void {
    const containerEl: HTMLElement | null =
        document.querySelector(".tableWrapper");
    containerEl!.innerHTML = "";

    const errHeader: HTMLElement = document.createElement("h1");
    errHeader.classList.add("err-header");
    errHeader.innerText = "Sory, your request is not foud :(";

    const errImg: HTMLImageElement = document.createElement("img");
    errImg.src = NOT_FOUND_ERROR_IMG;
    errImg.classList.add("err-img");

    containerEl!.appendChild(errHeader);
    containerEl!.appendChild(errImg);
}
