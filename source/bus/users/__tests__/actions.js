// Actions
import { usersActions } from '../actions';

// Types
import { types } from '../types';

discribe('auth actions', () => {
    test('initialize', () => {
        expect(usersActions.fillUsers()).toEqual({
            type: types.FILL_USERS,
        })
    });

    test('logout', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        })
    });
    
    test('signupAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        })
    });
});