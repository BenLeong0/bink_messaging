import { createStore } from "redux";
import accountReducer from "./currentUser/accountReducer";

const store = createStore(accountReducer)

export default store
