import React, { useState } from 'react';

import "./MessageInput.css"

export interface MessageInputProps {
    enabled: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ enabled }) => {
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
                disabled={!enabled}
            />
            <button
                type="submit"
                disabled={!enabled}
            >
                Send
            </button>
        </form>
    );
}

export default MessageInput;
