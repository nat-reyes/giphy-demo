import {stringify} from "query-string";

export function request(url, storageData, params, setLoading = () => {
}) {
    const query = {
        api_key: "vAO0jBK76N84LDQ70z2TYvxn0sqaBuvn",
        limit: 25,
        rating: 'g',
        offset: 0,
        ...params,
    }
    console.log({query})
    fetch(`${url}?${stringify(query)}`)
        .then((response) => response?.json())
        .then((data) => {
            storageData(data);
            setLoading(false);
        });
}
