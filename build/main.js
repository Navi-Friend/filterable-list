import {
    renderTable,
    renderNotFoundError,
    renderServerError,
} from "./render.js";
import { POSTS_URL } from "./consts.js";
import { getData } from "./api.js";
import { debounce } from "./render.js";

handleData(POSTS_URL);
debounce((params) => handleData(POSTS_URL, params));

function handleData(postsUrl, params = "") {
    getData(POSTS_URL, params)
        .then((data) => (data ? renderTable(data) : renderNotFoundError()))
        .catch(() => renderServerError());
}
