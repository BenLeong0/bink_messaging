export interface Message {
    sender: string;
    message: string;
    timestamp: string;
}

export const emptyMessage: Message = {
    sender: "",
    message: "",
    timestamp: "",
};
