import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

export function initStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}