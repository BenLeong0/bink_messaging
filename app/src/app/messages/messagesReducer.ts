import Message from "../../Types/Message";

import { MessagesAction } from "./messageActionCreators";
import * as MESSAGES_ACTIONS from "./messagesActionTypes";


export default function messagesReducer(state: Message[]=[], action: MessagesAction): Message[] {
    switch (action.type) {
    case (MESSAGES_ACTIONS.APPEND):
        return state.concat(action.payload);
    case (MESSAGES_ACTIONS.FILL):
        return action.payload;
    default:
        return state;
    }
}
