import {  SessionStorage } from 'quasar'

export function setUser(state, user){
    SessionStorage.set('user', user)
    state.user = user
}

export function setToken(state, token){
    SessionStorage.set('token', token)
    state.token = token
}


export function logout(state){
    SessionStorage.set('token', false)
    state.user = null
    state.token = null
}
