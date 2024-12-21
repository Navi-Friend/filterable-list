export async function getData(postsUrl, params = "") {
    const url = new URL(postsUrl);
    if (params) {
        url.searchParams.set("title_like", params);
    }
    const response = await fetch(url);
    const body = await response.json();
    return body;
}
