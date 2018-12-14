// Types
import {types} from './types';

export const authActions = {
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    signupAsync: (userData) => {
        return {
            type: types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
    loginAsync: (userData) => {
        return {
            type: types.LOGIN_ASYNC,
            payload: userData,
        };
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
};