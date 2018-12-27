// Core
import { fromJS, List, Map } from 'immutable';

// Reducer
import { usersReducer } from '../reducer';

// Actions
import { usersActions } from '../actions';

const initialState = List();

describe('users reducer', () => {
    test('should terurn initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState)

    });

    test('should handle FILL_USERS action', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState)
    });

    test('should handle CLEAR_USERS action', () => {
        expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState.clear());
    });
});
