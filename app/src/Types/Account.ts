export interface AccountInterface {
    username: string | undefined;
}

export default class Account implements AccountInterface {
    username: string | undefined;

    constructor(username?: string) {
        this.username = username;
    }
}

export const emptyAccount: AccountInterface = {
    username: undefined,
}
