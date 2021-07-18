import Account from "../../Types/Account"
import * as ACCOUNT_ACTIONS from "./accountActionTypes"

export function login(username: string) {
    return {
        type: ACCOUNT_ACTIONS.LOGIN,
        payload: new Account(username)
    }
}

export function logout() {
    return {
        type: ACCOUNT_ACTIONS.LOGOUT,
        payload: new Account()
    }
}
