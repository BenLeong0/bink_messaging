import Account from "../../Types/Account";

import * as ACCOUNT_ACTIONS from "./accountActionTypes";


export interface AccountAction {
    type: string;
    payload: Account
}


export function login(username: string): AccountAction {
    return {
        type: ACCOUNT_ACTIONS.LOGIN,
        payload: new Account(username)
    };
}

export
function logout(): AccountAction {
    return {
        type: ACCOUNT_ACTIONS.LOGOUT,
        payload: new Account()
    };
}
