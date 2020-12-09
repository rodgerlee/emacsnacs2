import axios from "axios";
import { Dispatch } from "react";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";


//var ConsolePanel = require('react-native-console-panel').displayWhenDev();

//import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./authTypes";

//export type authAction = typeof registerUser | typeof loginUser | typeof setCurrentUser

interface registerData {
    email: any,
    password: any,
    password2: any
}

interface loginData {
    email: string,
    password: string
}

interface setUser {
    type: "SET_USER",
    payload: any
}

interface registerAction {
    type: "REGISTER_ACTION",
    payload: any
}


interface loginErrors {
    readonly type: 'LOGIN_ERROR',
    payload: any
}
//../../../LoginBackend/routes/api/users/register

//=> (dispatch: Dispatch<loginAction>)

export type loginAction = registerAction | loginErrors | setUser

//Action to register the new user
export const registerUser = (userData:registerData) => {
    console.log("test");
    return (dispatch: Dispatch<loginAction>) => {
    axios.post('http://IP:5000/api/users/register', userData) //change the address to your IP
    .then(res => {
        console.log("got here");
        if (res.data.isValid) {
            dispatch({
                type: 'REGISTER_ACTION',
                payload: true
            })
        }
    }) //Send to login page or login
    .catch(err => {
        console.log("here are errors");
        console.log(err);
        dispatch({
        type: 'LOGIN_ERROR',
        payload: err
      })}
    );
}};

export const loginUser = (userData:loginData) => (dispatch: Dispatch<loginAction>) => {
    axios.post("http://IP:5000/api/users/login", userData) //change to the address to your IP
    .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch({
            type: 'SET_USER',
            payload: decoded
        });
    })
    .catch(err => dispatch ({
        type: 'LOGIN_ERROR',
        payload: err.response.data
      })
    );
};

/*export const setCurrentUser = decoded => {
    return {
        type: "SET_USER",
        payload: decoded
    };
};*/

/*export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};*/

export const logoutUser = () => (dispatch: Dispatch<loginAction>) => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch({
        type: 'SET_USER',
        payload: {}
    });
};