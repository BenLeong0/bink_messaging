import store from "../../app/store";
import Account from "../../Types/Account";

export default class AccountService {

    getAccount(): Account {
        return store.getState();
    }

    isLoggedIn(): boolean {
        return !(typeof this.getAccount().username === "undefined");
    }

    // TODO: Require password
    login(username: string): void {
        const action = {
            type: "login",
            payload: new Account("username")
        }
        store.dispatch(action)
    }
}
