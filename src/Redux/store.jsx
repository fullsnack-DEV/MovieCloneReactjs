import { createStore } from "redux";
import { Favreducer } from "./reducer";

const Store = createStore(Favreducer);

export default Store;
