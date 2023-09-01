import ActionTypes from '../actionTypes';
import I from 'immutable';
import actionTypes from "../actionTypes";

export interface IAction {
    type: string;
    data?: any;
}

export type TSetIsLoading = (status: boolean) => IAction;
export const setIsLoading: TSetIsLoading = (status) => {
    return {
        type:actionTypes.IS_LOADING,
        data: status,
    };
};