import React from 'react';

import "./ChatMessage.css"

import Message from "../../../Types/Message"

export interface ChatMessageProps {
    message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({message}) => {

    return (
        <div className="chatmessage vertical-separation-extra-small">
            <p className="chatmessage-timestamp body-text">{message.timestamp}</p>
            <p className="chatmessage-sender body-text">{message.sender}</p>
            <p className="chatmessage-text body-text">{message.message}</p>
        </div>
     );
}

export default ChatMessage;
