import { jsonplaceholder } from "./consts";
export interface gotPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function getData(
    postsUrl: jsonplaceholder,
    params: string = ""
): Promise<Array<gotPosts>> {
    const url = new URL(postsUrl);
    if (params) {
        url.searchParams.set("title_like", params);
    }
    const response = await fetch(url);
    const body = await response.json();
    return body;
}
