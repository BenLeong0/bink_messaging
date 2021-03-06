import React, { useState } from 'react';

import AccountService from '../core/AccountService';


const Login: React.FC = () => {
    const accountService = new AccountService();

    const [username, setUsername] = useState<string>("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        accountService.login(username);
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;
