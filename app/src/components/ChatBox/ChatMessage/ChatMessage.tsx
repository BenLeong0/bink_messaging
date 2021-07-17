import React from 'react';

export interface ChatMessageProps {
    message: string;

}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    return (
        <div className="chatbox-message">
            {message}
        </div>
     );
}

export default ChatMessage;
