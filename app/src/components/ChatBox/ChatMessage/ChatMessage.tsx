import React from 'react';

import Message from "../../../Types/Message"

export interface ChatMessageProps {
    message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({message}) => {

    return (
        <div className="chatmessage">
            <div className="chatmessage-sender">{message.sender}</div>
            <div className="chatmessage-text">{message.message}</div>
            <div className="chatmessage-timestamp">{message.timestamp}</div>
        </div>
     );
}

export default ChatMessage;
