import * as http from "./http";


const endpoint = http.host + '/data/shoes';

export async function getShoeById(id: string) {
    return await http.get(endpoint + `/${id}`);
}

export async function getAllShoes() {
    return await http.get(endpoint);
}