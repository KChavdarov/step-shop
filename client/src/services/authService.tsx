import * as http from "./http";
import { User } from "../types/User";

const url = http.host + '/users';

export async function login(email: string, password: string): Promise<User> {
    return await http.post(url + '/login', { email, password });
}

export async function register(email: string, password: string): Promise<User> {
    return await http.post(url + '/register', { email, password });
}

export async function logout(token: string) {
    await http.get(http.host + '/logout', token);
}