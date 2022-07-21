import actionTypes from '../actionTypes';

export interface IAction {
    // tslint:disable-next-line:no-reserved-keywords
    type: string;
    data?: any;
}

export type TSetIsUserLogin = (status: boolean) => IAction;
export const setIsUserLogin: TSetIsUserLogin = (status) => {
    return {
        type:actionTypes.IS_LOGIN,
        data: status,
    };
};
