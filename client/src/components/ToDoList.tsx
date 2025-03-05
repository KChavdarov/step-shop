import { useEffect, useState } from "react";
import { createTodo, deleteTodo, getToDos, toggleToDo } from "../services/toDoService";

export type ToDo = {
    _id: string,
    text: string,
    isDone: boolean,
}

// const initialState: ToDo[] = [
//     { _id: '1', text: 'test', isDone: false },
//     { _id: '2', text: 'test state', isDone: false },
//     { _id: '3', text: 'other item', isDone: false },
// ];

//-------------------------------------------------------

function ToDoList() {
    const [value, setValue] = useState('test');
    // const [items, setItems] = useState(initialState);
    const [items, setItems] = useState([] as ToDo[]);
    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        const toDos = await getToDos();
        console.log(toDos);
        setItems(Object.values(toDos));
    }

    async function clickHandler() {
        // const newItem = {
        //     _id: Date.now(),
        //     text: value,
        //     isDone: false,
        // };
        const newTodo = await createTodo(value);

        setItems(items => [...items, newTodo]);
        setValue('');
    }

    function onDelete(item: ToDo) {
        return async () => {
            await deleteTodo(item._id);
            setItems(items => items.filter(i => i != item));
        };
    }

    async function toggleDone(item: ToDo) {
        // setItems(items => {
        //     console.log('state updated for ' + item._id);
        //     const newItem = { ...item, isDone: !item.isDone };
        //     const index = items.indexOf(item);

        //     return [...items.slice(0, index), newItem, ...items.slice(index + 1)];
        // });

        // setItems(items => {
        //     return items.map(x => x == item ? { ...item, isDone: !item.isDone } : x);
        // });

        const updated = await toggleToDo({ ...item, isDone: !item.isDone });
        setItems(items => {
            return items.map(x => x == item ? updated : x);
        });
    }

    return (
        <>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <input type="button" value={'Add new task'} onClick={clickHandler} />
            <ul>
                {/* {items.map(item => <ListItem toggleDone={toggleDone(item)} onDelete={onDelete(item)} key={item._id}>{item.text}</ListItem>)} */}
                {items.map(item => <ListItem toggleDone={toggleDone.bind(null, item)} onDelete={onDelete(item)} isDone={item.isDone} key={item._id}>{item.text}</ListItem>)}
            </ul>
        </>
    );
}

function ListItem(props: { children: string, onDelete: () => void, toggleDone: () => void, isDone: boolean }) {
    // const { children, onDelete } = props;
    const { children, onDelete, toggleDone, isDone } = props;
    // useEffect(() => () => console.log(children + ' Unmounted'), [children]);
    // const [isDone, setIsDone] = useState(false);

    // function toggleDone() {
    //     setIsDone((isDone) => !isDone);
    // }

    // return <><li onClick={toggleDone} style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{children}</li><button className="button" onClick={onDelete}> X</button></>;
    return <div><li onClick={toggleDone} style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{children}</li><button className="button" onClick={onDelete}> X</button></div>;
}
export default ToDoList;