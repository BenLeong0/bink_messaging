import store from "../../app/store";
import Account from "../../Types/Account";

import { login, logout } from "../../app/currentUser/accountActionCreators";

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
        store.dispatch(login(username));
    }


    logout(): void {
        store.dispatch(logout());
    }
}
