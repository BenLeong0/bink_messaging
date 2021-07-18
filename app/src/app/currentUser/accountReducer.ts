import Account from "../../Types/Account";

import * as ACCOUNT_ACTIONS from "./accountActionTypes"

interface AccountAction {
    type: string;
    payload: Account;
}

export default function accountReducer(state: Account=new Account(), action: AccountAction) {
    switch (action.type) {
        case (ACCOUNT_ACTIONS.LOGIN):
            return action.payload;
        case (ACCOUNT_ACTIONS.LOGOUT):
            return new Account();
        default:
            return new Account();
    }
}
