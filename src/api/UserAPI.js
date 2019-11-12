import { request } from './APIUtils'

const userActions = {
    GET: "/user",
    LIST: "/users",
    POST: "/register",
    LOGIN: "/login",
    UPDATE: "/user",
    DELETE: "/user"
}

const registerUser = data => request.POST(userActions.POST, data)

const sessionStart = data => request.POST(userActions.LOGIN, data)

const getUser = userId => request.GET(`${userActions.GET}?id=${userId}`)

export { registerUser, sessionStart, getUser }