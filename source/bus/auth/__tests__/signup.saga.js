// Core
import {
    put,
    apply
} from 'redux-saga/effects';
import {
    cloneableGenerator
} from 'redux-saga/utils';

// Instruments
import {
    api
} from '../../../REST';
import {
    authActions
} from '../../auth/actions';
import {
    uiActions
} from '../../ui/actions';
import {
    signup
} from '../saga/workers';

const signupAction = authActions.signupAsync(__.userProfile);

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;

describe('signup saga', () => {
    describe('should pass until response received', () => {
        test('should dispatch "startFetching" action', () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test('should call a fetch request', () => {
            expect(saga.next().value).toEqual(apply(api, api.auth.signup, [__.userProfile]));
            clone = saga.clone();
        });
    });

    describe('should pass until response received', () => {
        test('should dispatch "startFetching" action', () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test('should call a fetch request', () => {
            expect(saga.next().value).toEqual(apply(api, api.auth.signup, [__.userProfile]));
            clone = saga.clone();
        });
    });
});