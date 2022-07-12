import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import {UserState} from "../types/user";

interface AppState {
    user: UserState;
}

export const rootReducer = combineReducers<AppState>({
    user : userReducer,
});

export default rootReducer;