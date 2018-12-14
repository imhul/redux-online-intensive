// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signup, login, authenticate, initialize, logout } from './workers';

function* watchInitialize() {
    yield takeEvery( types.INITIALIZE_ASYNC, initialize )
};

function* watchSignup() {
    yield takeEvery( types.SIGNUP_ASYNC, signup )
};

function* watchLogin() {
    yield takeEvery( types.LOGIN_ASYNC, login )
};

function* watchAuthenticate() {
    yield takeEvery( types.AUTHENTICATE_ASYNC, authenticate )
};

function* watchLogout() {
    yield takeEvery( types.LOGOUT_ASYNC, logout )
};

export function* watchAuth() {
    yield all([
        call( watchInitialize ), 
        call( watchSignup ), 
        call( watchLogin ), 
        call( watchAuthenticate ),
        call( watchLogout ),
    ]);
};