import { ToDo } from "../components/ToDoList";

const endpoint = 'http://localhost:3030/jsonstore/toDos';

export async function getToDos() {
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
}

export async function createTodo(text: string) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, isDone: false })
    };

    const response = await fetch(endpoint, options);
    return response.json();
}

export async function deleteTodo(id: string) {
    const options = {
        method: 'DELETE',
        headers: {},
    };

    const response = await fetch(endpoint + `/${id}`, options);
    return response.json();
}

export async function toggleToDo(toDo: ToDo) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toDo)
    };

    const response = await fetch(endpoint + `/${toDo._id}`, options);
    return response.json();
}