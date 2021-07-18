import React, { useEffect, useState } from 'react';

import Message, {exampleMessage1, exampleMessage2} from "../../Types/Message"

import store from '../../app/store';
import AccountService from '../core/AccountService';

import "./ChatBox.css"
import ChatMessage from './ChatMessage/ChatMessage';
import MessageInput from '../MessageInput/MessageInput';
import Login from '../Login/Login';


export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
    const accountService = new AccountService();

    const [messages, setMessages] = useState<Message[]>([])
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(accountService.checkIsLoggedIn())

    store.subscribe(() => {
        setIsLoggedIn(accountService.checkIsLoggedIn())
    })

    useEffect(() => {
        setMessages([exampleMessage1, exampleMessage2])
    }, []);

    return (
        <div className="chatbox flex-parent flex-col">
            <div className="chatbox-title subtitle-text vertical-separation-large">Chatbox!</div>
            <div className="chatmessage-container vertical-separation-medium">
                {messages.map(message => <ChatMessage message={message} />)}
            </div>
            <MessageInput />
            {!isLoggedIn && <Login />}
        </div>
     );
}

export default ChatBox;
