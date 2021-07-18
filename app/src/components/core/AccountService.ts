import store from "../../app/store";
import Account from "../../Types/Account";

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
            type: "login",
            payload: new Account(username)
        }
        store.dispatch(action)
    }
}
