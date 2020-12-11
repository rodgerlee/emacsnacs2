import { loginAction } from "../actions/authActions";

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};


//Reducer for logging in user
export default function(state = initialState, action: loginAction) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuthenticated: action.payload == {} ? false : true,                   //!isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}