import { Socket } from "socket.io-client";
import * as SOCKET_ACTIONS from "./socketActionTypes";

export interface SocketAction {
    type: string;
    payload: Socket | null
}

export function connect(socket: Socket): SocketAction {
    return {
        type: SOCKET_ACTIONS.CONNECT,
        payload: socket
    };
}

export function disconnect(): SocketAction {
    return {
        type: SOCKET_ACTIONS.DISCONNECT,
        payload: null
    };
}
