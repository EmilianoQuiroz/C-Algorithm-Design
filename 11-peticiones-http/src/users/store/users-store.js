import { loadUsersByPage } from "../use-cases/load-users-by-page"


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage+1)
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