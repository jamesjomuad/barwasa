export function someMutation (/* state */) {
}

export function setUser(state, username){
    state.user = username
}

export function setToken(state, token){
    state.token = token
}


export function LogOut(state){
    state.user = null
}
