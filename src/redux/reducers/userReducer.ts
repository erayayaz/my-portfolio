// @ts-ignore
import I from 'immutable';
import actionTypes from "../actionTypes";
import { IAction} from "../actions/userActions";

export default (store: I.Map<string, any> = I.Map(), action: IAction) => {
    const data = I.fromJS(action.data);

    switch (action.type) {

        case actionTypes.IS_LOGIN:
            return store.set('isLogin', data);
        default:
            return store;
    }
};