import React, { useEffect, useState } from 'react';

import Message, {exampleMessage1, exampleMessage2} from "../../Types/Message"

import ChatMessage from './ChatMessage/ChatMessage';
import "./ChatBox.css"
import MessageInput from '../MessageInput/MessageInput';

export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
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
        </div>
     );
}

export default ChatBox;
