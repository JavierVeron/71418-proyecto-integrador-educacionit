import { createStore } from "redux";
import CartReducer from "./cart/CartReducer";

const store = createStore(CartReducer);

export default store;