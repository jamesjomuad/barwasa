import {  SessionStorage } from 'quasar'

export function isAuthenticated(state){
    state.token = SessionStorage.getItem('token')
    return !!state.token
}

export function token(state){
    state.token = SessionStorage.getItem('token')
    return state.token
}

export function user(state){
    return state.user
}

