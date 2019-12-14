import { reduxConstant } from '../constant';

export const login = (data) => {
    return dispatch => {
        dispatch({ data: data, type: reduxConstant.REQUEST_LOGIN });
    }
}

export const signup = (data) => {
    return dispatch => {
        dispatch({ data: data, type: reduxConstant.REQUEST_SIGNUP });
    }
}