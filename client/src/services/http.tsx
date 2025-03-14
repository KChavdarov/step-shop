type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type options = {
    method: method,
    headers: {
        'Content-Type'?: string,
        'X-Authorization'?: string,
    },
    body?: string,
};


export const host = 'http://localhost:3030';

async function request(url: string, options: options) {

    const response = await fetch(url, options);

    if (response.ok == false) {
        const error = await response.json();
        throw error;
    }

    if (response.headers.get('content-type') == 'application/json') {
        return await response.json();
    } else {
        return response;
    }
}

function createOptions(method: method = 'GET', token?: string, data?: object) {
    const options: options = {
        method,
        headers: {},
    };
    if (token) {
        options.headers['X-Authorization'] = token;
    }
    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

export async function get(url: string, token?: string) {
    return await request(url, createOptions('GET', token));
}

export async function post(url: string, data: object, token?: string) {
    return await request(url, createOptions('POST', token, data));
}

export async function put(url: string, data: object, token?: string) {
    return await request(url, createOptions('PUT', token, data));
}

export async function path(url: string, data: object, token?: string) {
    return await request(url, createOptions('PATCH', token, data));
}

export async function del(url: string, token?: string) {
    return await request(url, createOptions('DELETE', token));
}