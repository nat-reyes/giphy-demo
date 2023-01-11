import { request } from "../utils/api";

export function requestGiphy(storageData, params, setLoading) {
    return request(
        "https://api.giphy.com/v1/gifs/search",
        storageData,
        params,
        setLoading
    );
}

export function requestTrending(storageData){
    return request(
        "https://api.giphy.com/v1/gifs/trending",
        storageData,
    );
}
