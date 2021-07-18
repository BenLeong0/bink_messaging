import React, { useEffect, useState } from 'react';

import Message, {exampleMessage1, exampleMessage2} from "../../Types/Message"

import AccountService from '../core/AccountService';

import ChatMessage from './ChatMessage/ChatMessage';
import "./ChatBox.css"
import MessageInput from '../MessageInput/MessageInput';

import Login from '../Login/Login';

export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
    const accountService = new AccountService();

    const [messages, setMessages] = useState<Message[]>([])

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
            {!accountService.isLoggedIn() && <Login />}
        </div>
     );
}

export default ChatBox;
