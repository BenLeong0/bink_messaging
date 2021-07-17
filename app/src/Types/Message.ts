export default interface Message {
    sender: string;
    message: string;
    timestamp: string;
}

export const emptyMessage: Message = {
    sender: "",
    message: "",
    timestamp: "",
};


export const exampleMessage1: Message = {
    sender: "Ben",
    message: "Wooo",
    timestamp: "16/07/21",
};

export const exampleMessage2: Message = {
    sender: "Sam",
    message: "Yoooooo",
    timestamp: "15/07/21",
};
