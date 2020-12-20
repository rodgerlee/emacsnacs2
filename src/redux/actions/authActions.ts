import axios from "axios";
import { Dispatch } from "react";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { createSwitchNavigator } from "react-navigation";
import { SERVER } from "../../utils";

import authErrorReducers from '../reducers/authErrorReducers';

var qs = require('qs');

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

export type loginAction = registerAction | loginErrors | setUser

export const registerUser = (userData:registerData, this_class:any) => {
    let userInfo = {
        'email': userData.email,
        'password': userData.password,
        'password2': userData.password2
    }

    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: { 'Content-type': 'application/json'}
    }

    fetch(`${ SERVER }/register`, requestOptions)
      .then(response => response.json())
      .then(result => {
          if (result.date) {
              this_class.props.navigation.navigate('login');
          }
      })
      .catch(error => console.log('error', error));
}

export const loginUser = (userData:loginData, this_class:any) => {

    let userInfo = {
        'email': userData.email,
        'password': userData.password
    }
    
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: { 'Content-type': 'application/json' }
    }

    fetch(`${ SERVER }/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
          if (result.success) {
              setAuthToken(true);
              this_class.props.navigation.navigate('homeStack');
          }
          else {
              if (result.email) {
                authErrorReducers({
                    type: "GET_ERRORS",
                    payload: result.email
                });
              }
              else if (result.password) {
                  authErrorReducers({
                      type: "GET_ERRORS",
                      payload: result.password
                  })
              }        
          }
        })
      .catch(error => console.log('error', error));
}

export const logoutUser = () => (dispatch: Dispatch<loginAction>) => {
    setAuthToken(false);
    dispatch({
        type: 'SET_USER',
        payload: {}
    });
};