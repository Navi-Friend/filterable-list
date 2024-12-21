import { renderTable, renderNotFoundError, renderServerError } from "./render";
import { POSTS_URL, jsonplaceholder } from "./consts";
import { getData, gotPosts } from "./api";
import { debounce } from "./render";

handleData(POSTS_URL);
debounce((params: string) => handleData(POSTS_URL, params));

function handleData(postsUrl: jsonplaceholder, params: string = ""): void {
    getData(POSTS_URL, params)
        .then((data) => (data ? renderTable(data) : renderNotFoundError()))
        .catch(() => renderServerError());
}
