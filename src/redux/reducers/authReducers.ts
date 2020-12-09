//import { SET_CURRENT_USER, USER_LOADING } from "../actions/authTypes";
import { loginAction } from "../actions/authActions";

//const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

export default function(state = initialState, action: loginAction) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuthenticated: action.payload == {} ? false : true,                   //!isEmpty(action.payload),
                user: action.payload
            };
        /*case 'USER_LOADING':
            return {
                ...state,
                isAuthenticated: action.payload == {} ? false : true,                   //!isEmpty(action.payload),
                user: action.payload
            };*/
        default:
            return state;
    }
}