import { request } from './APIUtils'

const userActions = {
    GET: '/user',
    LIST: '/users',
    POST: '/register',
    LOGIN: '/login',
    UPDATE: '/user',
    DELETE: '/user'
}

const registerUser = async data => {
    return await request.POST(userActions, data)
}

const sessionStart = async data => {
    return await request.POST(userActions.LOGIN, data)
}

const getUser = async userId => {
    return await request.GET(`${userActions.GET}?id=${userId}`)
}

export { registerUser, sessionStart, getUser }