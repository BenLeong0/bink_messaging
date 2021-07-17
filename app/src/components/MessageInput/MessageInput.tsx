import React, { useState } from 'react';

import "./MessageInput.css"

export interface MessageInputProps {

}

const MessageInput: React.FC<MessageInputProps> = () => {
    const [msgText, setMsgText] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Post message
    }

    return (
        <div className="messageinput-container vertical-separation-small">
            <input
                className="messageinput-box"
                onChange={(e) => setMsgText(e.target.value)}
                value={msgText}
            />
            <button
                type="submit"

            >
                Send
            </button>
        </div>
    );
}

export default MessageInput;
