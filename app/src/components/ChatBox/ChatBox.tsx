import React, { useState } from 'react';

import Message from "../../Types/Message";

import store from '../../app/store';
import AccountService from '../core/AccountService';

import "./ChatBox.css";
import ChatMessage from './ChatMessage/ChatMessage';
import MessageInput from './MessageInput/MessageInput';
import Login from '../Login/Login';


const ChatBox: React.FC = () => {
    const accountService = new AccountService();

    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(accountService.checkIsLoggedIn());

    store.subscribe(() => {
        setMessages(store.getState().messages);
        setIsLoggedIn(accountService.checkIsLoggedIn());
    });

    return (
        <div className="chatbox flex-parent flex-col">
            <div className="chatbox-title subtitle-text vertical-separation-large">Chatbox!</div>
            <div className="chatmessage-container vertical-separation-medium">
                {messages.map((message, ind) => <ChatMessage message={message} key={ind} />)}
            </div>
            <MessageInput enabled={isLoggedIn}/>
            {!isLoggedIn && <Login />}
        </div>
    );
};

export default ChatBox;
