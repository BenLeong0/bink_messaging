import { Socket } from "socket.io-client";
import store from "../../app/store";
import Message from "../../Types/Message";
import AccountService from "./AccountService";

export default class CoreService {

    accountService = new AccountService();
    socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
        this.socket.on("connect", () => this.connect());
    }

    // Later: also send chatroom id
    sendMessage(msg: string): void {
        // if (!this.accountService.checkIsLoggedIn()) {
        //     console.log("Not logged in!");
        //     return;
        // }
        this.socket.send(msg);
    }

    connect() {
        this.socket.on("connect", () => this.sendMessage('User has connected!'));
    }

    connectMessageListToSocket(appendMessage: (msg: Message) => void): void {
        this.socket.on('message', function(msg) {
            const newMessage = new Message("someone", msg, "18/07/21");
            appendMessage(newMessage);
            console.log('Received message');
        });
    }

}
