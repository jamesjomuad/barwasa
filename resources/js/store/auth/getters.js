export function someGetter (/* state */) {
}

export function isAuthenticated(state){
    return !!state.token
}

export function stateUser(state){
    return state.user
}
