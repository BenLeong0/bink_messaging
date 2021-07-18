import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";

import Message, { exampleMessage1, exampleMessage2 } from "../../Types/Message";

import store from '../../app/store';
import AccountService from '../core/AccountService';
import HttpService from '../core/HttpService';

import "./ChatBox.css";
import ChatMessage from './ChatMessage/ChatMessage';
import MessageInput from './MessageInput/MessageInput';
import Login from '../Login/Login';


export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
    const accountService = new AccountService();
    const httpService = new HttpService();

    const [messages, setMessages] = useState<Message[]>([exampleMessage1, exampleMessage2]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(accountService.checkIsLoggedIn());

    const appendMessages = (msg: Message): void => {
        console.log(messages);
        setMessages([...messages, msg]);
    };

    store.subscribe(() => {
        setIsLoggedIn(accountService.checkIsLoggedIn());
    });

    useEffect(() => {
        const socket = socketIOClient(httpService.API_URL);
        socket.on("connect", function() {
            socket.send('User has connected!');
        });
        socket.on('message', function(msg) {
            appendMessages(new Message("someone", msg, "18/07/21"));
            console.log('Received message');
        });
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
