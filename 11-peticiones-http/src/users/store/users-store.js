

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    throw new Error('Not implemeted');
}

const loadPreviousPage = async () => {

}

//TODO: implementar
const onUserChanged = () => {

}

const reloadPAge = async () => {

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPAge,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}