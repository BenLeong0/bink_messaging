interface MessageInterface {
    sender: string;
    message: string;
    timestamp: string;
}

class Message implements MessageInterface {
    sender: string;
    message: string;
    timestamp: string;

    constructor(sender: string, message: string, timestamp: string) {
        this.sender = sender;
        this.message = message;
        this.timestamp = timestamp;
    }
}

export default Message;


export const exampleMessage1 = new Message(
    "Ben",
    "Wooo",
    "16/07/21",
);

export const exampleMessage2 = new Message(
    "Sam",
    "Yoooooo",
    "15/07/21",
);
