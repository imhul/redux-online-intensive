// Actions
import { authActions } from '../actions';

// Types
import { types } from '../types';

discribe('auth actions', () => {
    test('authenticate',() => {
        expect(authActions.authenticate()).toEqual({
            type: types.AUTHENTICATE,
        })
    });
    test('initialize',() => {
        expect(authActions.initialize()).toEqual({
            type: types.INITIALIZE,
        })
    });
    test('logout',() => {
        expect(authActions.logout()).toEqual({
            type: types.LOGOUT,
        })
    });
    test('signupAsync',() => {
        expect(authActions.signupAsync(__.userProfile)).toEqual({
            type: types.SIGNUP_ASYNC,
            payload: __.userProfile,
        })
    });
    test('initializeAsync',() => {
        expect(authActions.initializeAsync()).toEqual({
            type: types.INITIALIZE_ASYNC,
        })
    });
    test('logoutAsync',() => {
        expect(authActions.logoutAsync()).toEqual({
            type: types.LOGOUT_ASYNC,
        })
    });
    test('loginAsync',() => {
        expect(authActions.loginAsync(__.credentials)).toEqual({
            type: types.LOGIN_ASYNC,
            payload: __.credentials,
        })
    });
    test('authenticateAsync',() => {
        expect(authActions.authenticateAsync()).toEqual({
            type: types.AUTHENTICATE_ASYNC,
        })
    });
});