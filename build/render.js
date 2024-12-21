import { NOT_FOUND_ERROR_IMG, SERVER_ERROR_IMG } from "./consts.js";
export function debounce(logicalFn) {
    const inputEL = document.querySelector("input");
    let timerId;
    inputEL.addEventListener("input", (e) => {
        clearTimeout(timerId);
        const params = e.target.value;
        timerId = setTimeout(logicalFn(params), 500);
    });
}
export function renderTable(data) {
    const tableWrapperEl = document.querySelector(".tableWrapper");
    tableWrapperEl.innerHTML = "";
    const tableEl = document.createElement("table");
    const theadEl = document.createElement("thead");
    Object.keys(data[0]).forEach((key) => {
        const thEl = document.createElement("th");
        thEl.innerText = key;
        theadEl.appendChild(thEl);
    });
    tableEl.appendChild(theadEl);
    const tbodyEl = document.createElement("tbody");
    data.forEach((post) => {
        const rowEl = document.createElement("tr");
        Object.values(post).forEach((value) => {
            const cellEl = document.createElement("td");
            cellEl.innerText = value;
            rowEl.appendChild(cellEl);
        });
        tbodyEl.appendChild(rowEl);
    });
    tableEl.appendChild(tbodyEl);
    tableWrapperEl.appendChild(tableEl);
}
export function renderServerError() {
    const containerEl = document.querySelector(".tableWrapper");
    containerEl.innerHTML = "";
    const errHeader = document.createElement("h1");
    errHeader.classList.add("err-header");
    errHeader.innerText = "Sory, something went wrong with server :(";
    const errImg = document.createElement("img");
    errImg.src = SERVER_ERROR_IMG;
    errImg.classList.add("err-img");
    containerEl.appendChild(errHeader);
    containerEl.appendChild(errImg);
}
export function renderNotFoundError() {
    const containerEl = document.querySelector(".tableWrapper");
    containerEl.innerHTML = "";
    const errHeader = document.createElement("h1");
    errHeader.classList.add("err-header");
    errHeader.innerText = "Sory, your request is not foud :(";
    const errImg = document.createElement("img");
    errImg.src = NOT_FOUND_ERROR_IMG;
    errImg.classList.add("err-img");
    containerEl.appendChild(errHeader);
    containerEl.appendChild(errImg);
}
