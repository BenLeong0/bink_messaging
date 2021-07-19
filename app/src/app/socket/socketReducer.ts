import { SocketAction } from "./socketActionCreators";
import { Socket } from "socket.io-client";

import * as SOCKET_ACTIONS from "./socketActionTypes";

export default function socketReducer(
    state: Socket | null=null,
    action: SocketAction
): Socket | null {
    switch (action.type) {
    case (SOCKET_ACTIONS.CONNECT):
        return action.payload;
    case (SOCKET_ACTIONS.DISCONNECT):
        return null;
    default:
        return state;
    }
}
