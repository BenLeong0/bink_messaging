import store from "../../app/store";
import Account from "../../Types/Account";

import * as ACCOUNT_ACTIONS from "../../app/currentUser/accountActionTypes"

export default class AccountService {

    getAccount(): Account {
        return store.getState();
    }

    checkIsLoggedIn(): boolean {
        return !(typeof store.getState().username === "undefined");
    }

    // TODO: Require password
    login(username: string): void {
        if (username === "") return;

        const action = {
            type: ACCOUNT_ACTIONS.LOGIN,
            payload: new Account(username)
        }
        store.dispatch(action)
    }
}
