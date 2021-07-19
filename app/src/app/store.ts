import { combineReducers, createStore } from "redux";

import accountReducer from "./currentUser/accountReducer";
import messagesReducer from "./messages/messagesReducer";
import socketReducer from "./socket/socketReducer";


const reducer = combineReducers({
    account: accountReducer,
    messages: messagesReducer,
    socket: socketReducer
});

const store = createStore(reducer);

export default store;
