import {stringify} from "query-string";
import {API_KEY} from "../constants/api";

export function request(url, storageData, params, setLoading = () => {
}) {
    setLoading(true);
    const query = {
        api_key: API_KEY,
        limit: 25,
        rating: 'g',
        offset: 0,
        ...params,
    }

    fetch(`${url}?${stringify(query)}`)
        .then((response) => response?.json())
        .then((data) => {
            storageData(data);
            setLoading(false);
        });
}
