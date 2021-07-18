import Account from "../../Types/Account";

import ACCOUNT_ACTION_TYPES from "./accountActionTypes"

interface AccountAction {
    type: string;
    payload: Account;
}

export default function accountReducer(state: Account=new Account(), action: AccountAction) {
    switch (action.type) {
        case (ACCOUNT_ACTION_TYPES.LOGIN):
            return action.payload;
        case (ACCOUNT_ACTION_TYPES.LOGOUT):
            return new Account();
        default:
            return new Account();
    }
}
