export interface User {
     name: string;
     surname: string;
     email: string;
     password: string;
}

export interface UserState {
    data: User;
    loading: boolean;
    error: string;
}

interface LOGIN_START {
    type: "LOGIN_START"
}

interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: User;
}

interface LOGIN_ERROR {
    type: "LOGIN_ERROR"
}

export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR;