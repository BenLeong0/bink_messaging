import Account, { emptyAccount } from "../../Types/Account";

interface AccountAction {
    type: string;
    payload: Account;
}

export default function accountReducer(state: Account=new Account(), action: AccountAction) {
    switch (action.type) {
        case ("login"):
            return action.payload;
        case ("logout"):
            return emptyAccount;
        default:
            return emptyAccount;
    }
}
