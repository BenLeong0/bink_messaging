import Message from "../../Types/Message";

import * as MESSAGES_ACTIONS from "./messagesActionTypes";


export interface MessagesAction {
    type: string;
    payload: Message[]
}


export function append(message: Message): MessagesAction {
    return {
        type: MESSAGES_ACTIONS.APPEND,
        payload: [message]
    };
}


export function fill(messages: Message[]): MessagesAction {
    return {
        type: MESSAGES_ACTIONS.FILL,
        payload: messages
    };
}
