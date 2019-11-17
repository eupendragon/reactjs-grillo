import { request } from './APIUtils'

const userActions = {
    GET: '/user',
    LIST: '/users',
    POST: '/register',
    LOGIN: '/login',
    UPDATE: '/user',
    DELETE: '/user'
}

const registerUser = data => {
    return request.POST(userActions.POST, data)
}

const sessionStart = data => {
    return request.POST(userActions.LOGIN, data)
}

const getUser = userId => {
    return request.GET(`${userActions.GET}?id=${userId}`)
}

const loginVerify = data => {
    return request.POST(userActions.LOGIN, data)
        .then(res => res.status === 202 ? true : false)
        .catch(err => console.log(err))
}
export { registerUser, sessionStart, getUser, loginVerify }