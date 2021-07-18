import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";

import Message, { exampleMessage1, exampleMessage2 } from "../../Types/Message";

import store from '../../app/store';
import AccountService from '../core/AccountService';
import HttpService from '../core/HttpService';
import MessageService from '../core/MessageService';

import "./ChatBox.css";
import ChatMessage from './ChatMessage/ChatMessage';
import MessageInput from './MessageInput/MessageInput';
import Login from '../Login/Login';


export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
    const accountService = new AccountService();
    const httpService = new HttpService();

    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(accountService.checkIsLoggedIn());

    const appendMessage = (msg: Message): void => {
        console.log(messages);
        setMessages([...messages, msg]);
        console.log(messages);
    };

    store.subscribe(() => {
        setIsLoggedIn(accountService.checkIsLoggedIn());
    });

    useEffect(() => {
        const messageService = new MessageService(socketIOClient(httpService.API_URL));
        messageService.connectMessageListToSocket(appendMessage);
    }, []);

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
