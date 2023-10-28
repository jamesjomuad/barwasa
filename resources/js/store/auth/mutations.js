import {  SessionStorage, LocalStorage } from 'quasar'

export function setUser(state, user){
    LocalStorage.set('user', user)
    state.user = user
}

export function setToken(state, token){
    LocalStorage.set('token', token)
    state.token = token
}


export function logout(state){
    LocalStorage.set('token', false)
    state.user = null
    state.token = null
}
