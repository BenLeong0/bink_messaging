import React, { useEffect } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';

import store from './app/store';
import { connect } from './app/socket/socketActionCreators';

import MessageService from './components/core/MessageService';
import ChatBox from './components/ChatBox/ChatBox';


const App: React.FC = () => {
    const messageService = new MessageService();

    useEffect(() => {
        const socket = socketIOClient(messageService.API_URL);
        store.dispatch(connect(socket));
        socket.on("connect", () => messageService.sendMessage("User has connected!"));
        socket.on("message", messageService.appendMessage);
    }, []);

    return (
        <div className="App">
            <ChatBox />
        </div>
    );
};

export default App;
