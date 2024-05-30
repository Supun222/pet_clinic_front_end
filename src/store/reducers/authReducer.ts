/* eslint-disable prettier/prettier */
import { getToken } from '../../utils/token';
import {
  AUTH_ERROR,
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/authActions';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: getToken(),
  isAuthenticated: !!getToken(),
  error: null,
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
