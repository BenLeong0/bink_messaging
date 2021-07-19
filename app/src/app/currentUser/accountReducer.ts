import Account from "../../Types/Account";

import { AccountAction } from "./accountActionCreators";
import * as ACCOUNT_ACTIONS from "./accountActionTypes";


export default function accountReducer(
    state: Account | null = null,
    action: AccountAction
): Account | null {
    switch (action.type) {
    case (ACCOUNT_ACTIONS.LOGIN):
        return action.payload;
    case (ACCOUNT_ACTIONS.LOGOUT):
        return null;
    default:
        return state;
    }
}
