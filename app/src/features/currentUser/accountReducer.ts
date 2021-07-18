import Account from "../../Types/Account";

interface AccountAction {
    type: string;
    payload: Account | undefined;
}

export default function accountReducer(state: Account | undefined, action: AccountAction) {
    switch (action.type) {
        case ("login"):
            return action.payload;
        case ("logout"):
            return;
        default:
            return;
    }
}
