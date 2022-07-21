import ActionTypes from '../actionTypes';
import I from 'immutable';

export interface IAction {
    type: string;
    data?: any;
}