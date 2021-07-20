import { Socket } from "socket.io-client";

import Message from "../../Types/Message";
import { append } from "../../app/messages/messageActionCreators";

import CoreService from "./CoreService";

import store from "../../app/store";

export default class MessageService {

    API_URL: string;
    coreService: CoreService;

    constructor() {
        this.API_URL = process.env.NODE_ENV === "production" ? "127.0.0.1:5000" : "localhost:5000";
        this.coreService = new CoreService();
    }


    getSocket(): Socket | null {
        return store.getState().socket;
    }


    buildMessage(message: string): Message {
        const user = store.getState().account;
        const username = user === null ? '' : user.username;

        const timestamp = this.coreService.getCurrentTimestamp();

        return new Message(message, username, timestamp);
    }


    sendMessage(message: string): void {
        const socket = this.getSocket();

        if (socket === null) {
            console.log("Not connected!");
            return;
        }

        const msgObj = this.buildMessage(message);
        socket.send(JSON.stringify(msgObj));
    }


    appendMessage(message: string): void {
        const newMessage = new Message(message);
        store.dispatch(append(newMessage));
    }

}
