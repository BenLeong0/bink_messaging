import React, { useEffect, useState } from 'react';

import Message, {exampleMessage1, exampleMessage2} from "../../Types/Message"

import ChatMessage from './ChatMessage/ChatMessage';
import "./ChatBox.css"

export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        setMessages([exampleMessage1, exampleMessage2])
    }, []);

    return (
        <div className="chatbox">
            <div className="chatbox-title">Chatbox!</div>
            {messages.map(message => <ChatMessage message={message} />)}
        </div>
     );
}

export default ChatBox;
