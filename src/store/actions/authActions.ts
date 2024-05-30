/* eslint-disable prettier/prettier */
import { Action, ThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { getToken, removeToken, saveToken } from '../../utils/token';
import { RootState } from '../reducers';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface AuthErrorAction {
  type: typeof AUTH_ERROR;
  payload: string;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LogoutAction
  | AuthErrorAction;

export const login = (
    credentials: { username: string; password: string }
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: credentials.username,
        password: credentials.password
      }, {
        headers: {'Content-Type': 'application/json'}
      });
      const { token } = response.data.access_token;
      saveToken(jwtDecode(token));
      dispatch({ type: LOGIN_SUCCESS, payload: jwtDecode(token) });
    } catch (error: any) {
      dispatch({ type: AUTH_ERROR, payload: error.message });
    }
};

export const logout = (): ThunkAction<void, RTCIceConnectionState, unknown, Action<string>> => (dispatch) => {
    removeToken();
    dispatch({type: LOGOUT});
}

export const loadUser = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  const token = getToken();
  if (token) {
    const decodedToken = jwtDecode<{ exp: number }>(token);
    if (decodedToken.exp * 1000 * 60 * 24 < Date.now()) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    }
  } else {
    dispatch({ type: LOGOUT });
  }
};
