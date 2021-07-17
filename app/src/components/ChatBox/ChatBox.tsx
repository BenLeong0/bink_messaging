import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage/ChatMessage';

export interface ChatBoxProps {

}

const ChatBox: React.FC<ChatBoxProps> = () => {
    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        setMessages(['yoo', 'wowww'])
    }, []);

    return (
        <div className="chatbox">
            <div className="chatbox-title">Chatbox!</div>
            {messages.map(message => <ChatMessage message={message} />)}
        </div>
     );
}

export default ChatBox;
