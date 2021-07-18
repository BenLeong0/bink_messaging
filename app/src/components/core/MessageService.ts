import store from "../../app/store";
import AccountService from "./AccountService";

export default class CoreService {

    accountService = new AccountService();

    // Later: also send chatroom id
    sendMessage(msg: string): void {
        if (!this.accountService.checkIsLoggedIn()) {
            console.log("Not logged in!");
            return;
        }
        return;
    }

}
