import React, { useState } from 'react';

import "./MessageInput.css"

export interface MessageInputProps {

}

const MessageInput: React.FC<MessageInputProps> = () => {
    const [msgText, setMsgText] = useState<string>('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form
            className="messageinput-container vertical-separation-small"
            onSubmit={handleSubmit}
        >
            <input
                className="messageinput-box"
                onChange={(e) => setMsgText(e.target.value)}
                value={msgText}
            />
            <button type="submit">
                Send
            </button>
        </form>
    );
}

export default MessageInput;
