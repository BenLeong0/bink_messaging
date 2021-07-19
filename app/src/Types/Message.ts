interface MessageInterface {
    message: string;
    sender: string;
    timestamp: string;
}

class Message implements MessageInterface {
    message: string;
    sender: string;
    timestamp: string;

    constructor(message: string, sender="ben", timestamp="16/01/21") {
        this.message = message;
        this.sender = sender;
        this.timestamp = timestamp;
    }
}

export default Message;


export const exampleMessage1 = new Message(
    "Wooo",
    "Ben",
    "16/07/21",
);

export const exampleMessage2 = new Message(
    "Yoooooo",
    "Sam",
    "15/07/21",
);
