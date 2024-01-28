import { Todo } from "../todos/models/todo.models"

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra'),
        new Todo('Papel'),
        new Todo('Tijera')
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

export default {
    initStore
}