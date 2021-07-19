export default class MessageService {

    API_URL: string;

    constructor() {
        this.API_URL = process.env.NODE_ENV === "production" ? "127.0.0.1:5000" : "localhost:5000";
    }

}
