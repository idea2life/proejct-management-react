import { reduxConstant } from '../constant';

const initialState = {
    
}

export default (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case reduxConstant.REQUEST_LOGIN: 
            return {...state,data: action.data};
        case reduxConstant.REQUEST_SIGNUP: 
            return {...state,data: action.data};
    default:
        return initialState;
    }
}
