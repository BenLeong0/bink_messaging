import { Socket } from "socket.io-client";
import store from "../../app/store";

export default class MessageService {

    API_URL: string;

    constructor() {
        this.API_URL = process.env.NODE_ENV === "production" ? "127.0.0.1:5000" : "localhost:5000";
    }

    getSocket(): Socket | null {
        return store.getState().socket;
    }

    sendMessage(message: string): void {
        const socket = this.getSocket();

        if (socket === null) {
            console.log("Not connected!");
            return;
        }

        socket.send(message);
    }

}
